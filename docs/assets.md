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


