#!/usr/bin/env node
/**
 * Capture a viewport screenshot of a URL.
 * Usage:
 *   node scripts/capture-screenshot.mjs "<url>" "<outputPath>" [width] [height]
 * Defaults to 1280x720 if width/height not provided.
 */
import fs from 'node:fs';
import path from 'node:path';
import puppeteer from 'puppeteer';

const [,, url, outputPath, widthArg, heightArg] = process.argv;
if (!url || !outputPath) {
  console.error('Usage: node scripts/capture-screenshot.mjs "<url>" "<outputPath>" [width] [height]');
  process.exit(1);
}

const width = Number(widthArg) || 1280;
const height = Number(heightArg) || 720;

async function ensureDir(filePath) {
  const dir = path.dirname(filePath);
  await fs.promises.mkdir(dir, { recursive: true });
}

async function run() {
  await ensureDir(outputPath);
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
    defaultViewport: { width, height, deviceScaleFactor: 2 }
  });
  try {
    const page = await browser.newPage();
    page.setDefaultNavigationTimeout(60000); // 60 seconds timeout
    await page.goto(url, { waitUntil: 'networkidle2' }); // wait for network to be mostly idle
    await new Promise((res) => setTimeout(res, 20000)); // allow client app to render and data to load (20 seconds)
    await page.screenshot({
      path: outputPath,
      fullPage: false,
      type: outputPath.toLowerCase().endsWith('.jpg') || outputPath.toLowerCase().endsWith('.jpeg') ? 'jpeg' : 'png',
      quality: outputPath.toLowerCase().endsWith('.jpg') || outputPath.toLowerCase().endsWith('.jpeg') ? 90 : undefined,
      captureBeyondViewport: false
    });
    console.log(`Saved screenshot → ${outputPath} (${width}x${height})`);
  } finally {
    await browser.close();
  }
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});


