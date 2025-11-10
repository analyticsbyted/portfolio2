## Project Scripts

### Image Audit
- Script: `scripts/image-audit.mjs`
- Purpose: Audit images for duplicates, large sizes, and unused assets.
- Usage:
```bash
node scripts/image-audit.mjs
```
- Output:
  - Markdown report: `docs/image-audit-report.md`
  - JSON report: `docs/image-audit-report.json`

### Screenshot Capture
- Script: `scripts/capture-screenshot.mjs`
- Purpose: Capture consistent posters from live web apps (e.g., 1280×720).
- Install dependency:
```bash
npm i -D puppeteer
```
- Usage:
```bash
node scripts/capture-screenshot.mjs "<url>" "src/assets/webapps/<slug>-poster.png" 1280 720
```
- Notes:
  - Waits briefly for client render and captures the viewport (not full page).
  - Use with Work → Web Development posters for consistent aspect ratio (16:9).


