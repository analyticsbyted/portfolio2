## Architecture Overview

### High-Level
- React 19 SPA powered by Vite 7
- Client-side routing with React Router v7
- Styling via Tailwind CSS (`darkMode: 'class'`)
- Static hosting friendly (e.g., S3 + CloudFront)

### Key Entry Points
- `index.html`: Root HTML shell with the `#root` mount and analytics
- `src/main.jsx`: Bootstraps React and global CSS
- `src/App.jsx`: Router, page layout (navigation + footer), theme toggle

### Directory Structure (selected)
- `src/pages/*`: Page-level components for each route
- `src/components/*`: Reusable UI components
- `src/components/sections/*`: Feature sections used by pages
- `src/hooks/useContactForm.js`: Contact form state, validation, and submission
- `src/assets/*`: Project images and SVGs (including certifications)
- `public/*`: Public assets copied as-is to the root of the build

### Routing Flow
1. Browser navigates to `/some-path`
2. In production: CloudFront/S3 serves `index.html` for unknown paths (see deployment docs)
3. React Router matches the route and renders the corresponding page
4. For lazy routes (e.g., `Work`), a fallback loading UI displays until the chunk is loaded

### Theming
- Tailwind uses the `dark` class on `<html>` to activate dark mode variants
- `src/App.jsx` toggles the theme and stores user preference in `localStorage`
- See `docs/styling-and-theming.md` for recommended design tokens and color guidance

### Data and Side Effects
- Contact form is the primary side-effect: it posts JSON to an external HTTP API
- The API URL is injected via `VITE_AWS_HTTPAPI_URL` at build time
- See `docs/contact-form.md` for details

### Build & Output
- Vite builds into `dist/`
- Static assets are hashed for cache-busting
- Preview locally with `npm run preview`

### Performance Considerations
- Route-level code split for `Work` page using `React.lazy`
- Tailwind JIT trimming via `content` globs in `tailwind.config.js`
- Use `.webp`/SVG where appropriate for images (see `docs/assets.md`)


