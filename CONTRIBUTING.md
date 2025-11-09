## Contributing

Thanks for your interest in improving this project. This guide describes how we work, branch, and handle assets.

### Branching & Workflow
- Create a feature branch from `main`: `feat/<short-name>` or `fix/<short-name>`
- Keep PRs focused and small; include a brief description and screenshots for UI changes
- Reference related issues in the PR description

### Commit Messages
- Use clear, imperative messages: `Add Card component`, `Refactor Work tiles`, `Remove unused public images`

### Code Style
- React + Vite + Tailwind
- Prefer reusable components over one-off styling
- Use the shared design tokens (CSS variables: `--color-surface`, `--color-card`, `--color-border`, `--color-muted`)
- Ensure accessibility: meaningful `alt`, focus states, color contrast

### Images & Assets
- Prefer `src/assets/` for images imported by React (enables hashing and tree-shaking)
- Keep `public/` only for root-level assets (e.g., `favicon`, `sitemap.xml`, `robots.txt`)
- Prefer WebP for photos/illustrations; SVG for icons/line-art
- Remove unused assets after changes. Use the image audit:
  - `node scripts/image-audit.mjs`
  - See reports in `docs/image-audit-report.*`

### Tests
- Add unit tests for critical components (React Testing Library)
- Add or update snapshots when UI changes meaningfully

### Accessibility & SEO
- Provide descriptive `alt` text; ensure focus outlines are present
- Add/update per-route titles and meta when adding pages

### Releases & Deployment
- This app is SPA-hosted behind S3 + CloudFront
- Ensure SPA fallback remains configured (see `SPA-ROUTING-SETUP.md`)


