#!/usr/bin/env node
/**
 * Image Audit Script
 * - Scans images in `public/` and `src/assets/`
 * - Scans source/html files for references
 * - Reports unused images, duplicates (by content hash), and files present in both trees
 * - Outputs JSON and Markdown reports in `docs/`
 */
import { promises as fs } from 'fs';
import path from 'path';
import crypto from 'crypto';
import url from 'url';

const ROOT = path.resolve(path.dirname(url.fileURLToPath(import.meta.url)), '..');

const IMAGE_DIRS = [path.join(ROOT, 'public'), path.join(ROOT, 'src', 'assets')];

const CODE_GLOBS = [path.join(ROOT, 'src'), path.join(ROOT, 'index.html'), path.join(ROOT, 'pages')];

const OUTPUT_JSON = path.join(ROOT, 'docs', 'image-audit-report.json');
const OUTPUT_MD = path.join(ROOT, 'docs', 'image-audit-report.md');

const IMAGE_EXTS = new Set(['.png', '.jpg', '.jpeg', '.webp', '.gif', '.svg', '.jfif']);
const CODE_EXTS = new Set(['.js', '.jsx', '.ts', '.tsx', '.css', '.html', '.md']);

function isImageFile(filePath) {
  return IMAGE_EXTS.has(path.extname(filePath).toLowerCase());
}
function isCodeFile(filePath) {
  return CODE_EXTS.has(path.extname(filePath).toLowerCase());
}

async function walk(dir, filter = () => true) {
  let results = [];
  async function inner(current) {
    let entries = [];
    try {
      entries = await fs.readdir(current, { withFileTypes: true });
    } catch (e) {
      return;
    }
    for (const entry of entries) {
      const fullPath = path.join(current, entry.name);
      if (entry.isDirectory()) {
        if (entry.name === 'node_modules' || entry.name === 'dist' || entry.name.startsWith('.')) continue;
        await inner(fullPath);
      } else {
        if (filter(fullPath)) {
          results.push(fullPath);
        }
      }
    }
  }
  await inner(dir);
  return results;
}

async function hashFile(filePath) {
  const buf = await fs.readFile(filePath);
  return crypto.createHash('md5').update(buf).digest('hex');
}

function relToRoot(p) {
  return path.relative(ROOT, p).split(path.sep).join('/');
}

async function collectImages() {
  const images = [];
  for (const dir of IMAGE_DIRS) {
    const files = await walk(dir, isImageFile);
    for (const f of files) {
      const stat = await fs.stat(f);
      images.push({
        abs: f,
        rel: relToRoot(f),
        base: path.basename(f),
        ext: path.extname(f).toLowerCase(),
        size: stat.size,
        root: f.includes('/public/') ? 'public' : 'src/assets',
      });
    }
  }
  // compute content hash
  for (const img of images) {
    img.hash = await hashFile(img.abs);
  }
  return images;
}

async function collectCodeFiles() {
  const codeFiles = [];
  for (const target of CODE_GLOBS) {
    try {
      const stat = await fs.stat(target);
      if (stat.isDirectory()) {
        const files = await walk(target, isCodeFile);
        codeFiles.push(...files);
      } else if (stat.isFile() && isCodeFile(target)) {
        codeFiles.push(target);
      }
    } catch {
      // ignore missing paths
    }
  }
  return codeFiles;
}

async function indexCodeContents(codeFiles) {
  const index = new Map();
  for (const file of codeFiles) {
    try {
      const content = await fs.readFile(file, 'utf8');
      index.set(file, content);
    } catch {
      // skip unreadable
    }
  }
  return index;
}

function buildSearchTokens(img) {
  // Generate reference tokens to search for
  // For public: expect '/<rel-path-from-public>' or basename
  // For src/assets: expect 'assets/...', '/assets/...', or basename (less reliable)
  const tokens = new Set();
  tokens.add(img.base);

  if (img.root === 'public') {
    const relFromPublic = img.rel.replace(/^public\//, '');
    tokens.add('/' + relFromPublic);         // typical usage in React for public
    tokens.add(relFromPublic);
  } else {
    const relFromSrc = img.rel.replace(/^src\//, '');
    tokens.add(relFromSrc);
    tokens.add('/' + relFromSrc);
    // Also consider paths without leading src/ (common import form)
    if (relFromSrc.startsWith('assets/')) {
      tokens.add(relFromSrc.replace(/^assets\//, ''));
    }
  }
  return Array.from(tokens);
}

function findReferences(img, codeIndex) {
  const tokens = buildSearchTokens(img);
  const matches = [];
  for (const [file, content] of codeIndex.entries()) {
    for (const t of tokens) {
      if (t && content.includes(t)) {
        matches.push({ file: relToRoot(file), token: t });
        break; // one token match per file is enough
      }
    }
  }
  return matches;
}

function groupBy(items, keyFn) {
  const map = new Map();
  for (const item of items) {
    const key = keyFn(item);
    if (!map.has(key)) map.set(key, []);
    map.get(key).push(item);
  }
  return map;
}

function formatBytes(bytes) {
  const units = ['B', 'KB', 'MB', 'GB'];
  let size = bytes;
  let i = 0;
  while (size >= 1024 && i < units.length - 1) {
    size /= 1024;
    i++;
  }
  return `${size.toFixed(1)} ${units[i]}`;
}

async function main() {
  await fs.mkdir(path.join(ROOT, 'docs'), { recursive: true });

  const images = await collectImages();
  const totals = {
    count: images.length,
    byRoot: { public: images.filter(i => i.root === 'public').length, assets: images.filter(i => i.root !== 'public').length },
    byExt: Object.fromEntries([...groupBy(images, i => i.ext)].map(([k, v]) => [k, v.length])),
    sizeTotal: images.reduce((a, b) => a + b.size, 0),
  };

  const codeFiles = await collectCodeFiles();
  const codeIndex = await indexCodeContents(codeFiles);

  // references
  for (const img of images) {
    img.references = findReferences(img, codeIndex);
    img.isReferenced = img.references.length > 0;
  }

  const unused = images.filter(i => !i.isReferenced);

  // duplicates by content hash
  const byHash = groupBy(images, i => i.hash);
  const duplicatesByHash = [...byHash.values()].filter(g => g.length > 1);

  // present in both public and assets (by hash)
  const crossRootDuplicates = duplicatesByHash
    .map(group => {
      const roots = new Set(group.map(i => i.root));
      return roots.size > 1 ? group : null;
    })
    .filter(Boolean);

  // same basename in both roots (even if different content)
  const byBase = groupBy(images, i => i.base.toLowerCase());
  const bothPlacesByName = [...byBase.values()].filter(g => {
    const roots = new Set(g.map(i => i.root));
    return roots.size > 1;
  });

  const report = {
    generatedAt: new Date().toISOString(),
    totals: {
      ...totals,
      sizeTotalHuman: formatBytes(totals.sizeTotal),
    },
    unused: unused.map(i => ({
      path: i.rel,
      root: i.root,
      size: i.size,
      sizeHuman: formatBytes(i.size),
    })),
    duplicatesByHash: duplicatesByHash.map(group => ({
      hash: group[0].hash,
      files: group.map(i => ({ path: i.rel, root: i.root, size: i.size, sizeHuman: formatBytes(i.size) })),
    })),
    crossRootDuplicates: crossRootDuplicates.map(group => ({
      hash: group[0].hash,
      files: group.map(i => ({ path: i.rel, root: i.root })),
    })),
    bothPlacesByName: bothPlacesByName.map(group => ({
      base: group[0].base,
      files: group.map(i => ({ path: i.rel, root: i.root })),
    })),
  };

  // Write JSON
  await fs.writeFile(OUTPUT_JSON, JSON.stringify(report, null, 2), 'utf8');

  // Write Markdown summary
  const md = [];
  md.push(`# Image Audit Report`);
  md.push(`Generated: ${report.generatedAt}`);
  md.push(``);
  md.push(`## Totals`);
  md.push(`- Images: ${report.totals.count}`);
  md.push(`- By root: public=${report.totals.byRoot.public}, assets=${report.totals.byRoot.assets}`);
  md.push(`- Total size: ${report.totals.sizeTotalHuman}`);
  md.push(`- By extension: ${Object.entries(report.totals.byExt).map(([k,v]) => `${k}:${v}`).join(', ')}`);
  md.push(``);
  md.push(`## Unused Images (${report.unused.length})`);
  if (report.unused.length) {
    for (const u of report.unused) {
      md.push(`- ${u.path} (${u.sizeHuman}) [${u.root}]`);
    }
  } else {
    md.push(`- None`);
  }
  md.push(``);
  md.push(`## Duplicates by Content Hash (${report.duplicatesByHash.length} groups)`);
  if (report.duplicatesByHash.length) {
    for (const g of report.duplicatesByHash) {
      md.push(`- Hash: ${g.hash}`);
      for (const f of g.files) {
        md.push(`  - ${f.path} (${f.sizeHuman}) [${f.root}]`);
      }
    }
  } else {
    md.push(`- None`);
  }
  md.push(``);
  md.push(`## Cross-root Duplicates (same content in public and assets) (${report.crossRootDuplicates.length} groups)`);
  if (report.crossRootDuplicates.length) {
    for (const g of report.crossRootDuplicates) {
      md.push(`- Hash: ${g.hash}`);
      for (const f of g.files) {
        md.push(`  - ${f.path} [${f.root}]`);
      }
    }
  } else {
    md.push(`- None`);
  }
  md.push(``);
  md.push(`## Same Basename in Both Trees (${report.bothPlacesByName.length} groups)`);
  if (report.bothPlacesByName.length) {
    for (const g of report.bothPlacesByName) {
      md.push(`- ${g.base}`);
      for (const f of g.files) {
        md.push(`  - ${f.path} [${f.root}]`);
      }
    }
  } else {
    md.push(`- None`);
  }
  md.push(``);
  md.push(`> Note: Reference detection is heuristic. Manually verify before deletion or moves.`);

  await fs.writeFile(OUTPUT_MD, md.join('\n'), 'utf8');

  console.log(`Image audit complete.`);
  console.log(`- JSON: ${relToRoot(OUTPUT_JSON)}`);
  console.log(`- Markdown: ${relToRoot(OUTPUT_MD)}`);
}

main().catch(err => {
  console.error('Image audit failed:', err);
  process.exit(1);
});


