## Assets & Media

### Locations
- `src/assets/`: Source-controlled images/SVGs used by components (including `assets/certifications/*`)
- `public/`: Static files copied to the root of the build without processing
- `dist/`: Build output (do not edit)

### Best Practices
- Prefer vector (`.svg`) for logos/illustrations when possible
- Use compressed raster formats (`.webp`, optimized `.png/.jpg`) for photos
- Keep image dimensions appropriate to their display size to reduce payload
- Use Tailwind utility classes to control sizing and rounding; avoid inline width/height unless necessary for layout

### Favicon & Meta
- Favicon and related metadata are declared in `index.html`
- Update those references when replacing the favicon asset

### Performance
- Use lazy loading for below-the-fold images when adding new components
- Consider responsive images (`srcset`, `sizes`) for large hero or gallery media

### Posters & Thumbnails (Standards)
- Web apps (Work → Web Development): 16:9 at 1280×720 (PNG or WebP). File path: `src/assets/webapps/<slug>-poster.(png|webp)`.
- Research/BI/Data projects: 4:3 at 1200×900 (PNG or WebP). Paths under `src/assets/research` or `src/assets/bi`.
- Small fixed-height frames (e.g., `h-48` ≈ 192px tall) display best when the source image’s long side is ~360–400px to avoid excess gutters with `object-contain`.
- Prefer off‑white canvas for padded images to match site surfaces, not pure white.

### Naming
- Kebab-case filenames. Examples: `cifar10-classifier-poster.png`, `power-bi-dashboard.svg`, `research-doctoral-v2.svg`.

### Converting / Resizing
Using ImageMagick:
```bash
# Install on macOS
brew install imagemagick

# Resize by height to 384px then pad to 4:3 (512x384) with off-white background
convert input.png -resize x384 -gravity center -background \"#F8F7F4\" -extent 512x384 output_4x3.png

# Export a 16:9 poster at 1280x720
convert input.png -resize 1280x720^ -gravity center -extent 1280x720 output_16x9.png
```

### Screenshot Capture (Automated)
Use the included script to capture consistent posters from live apps:
```bash
node scripts/capture-screenshot.mjs \"<url>\" \"src/assets/webapps/<slug>-poster.png\" 1280 720
```
Notes:
- The script uses Puppeteer and waits briefly for client rendering before capturing.
- PNG is fine; use WebP if you prefer smaller files.


