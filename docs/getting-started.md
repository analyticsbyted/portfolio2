## Getting Started

### Prerequisites
- Node.js 18+ (recommended) and npm
- macOS, Linux, or Windows

### Installation
1. Install dependencies:
   - `npm install`
2. Start the dev server:
   - `npm run dev`
3. Build for production:
   - `npm run build`
4. Preview the production build:
   - `npm run preview`

### Environment Variables
Create a `.env` at the repository root (same level as `package.json`) for local development. Example:
```
VITE_AWS_HTTPAPI_URL=https://your-api.example.com/contact
```
See `docs/environment.md` for details.

### Project Layout (high-level)
- App entry: `src/main.jsx`
- Root shell: `index.html`
- SPA router and layout: `src/App.jsx`
- Pages: `src/pages/*`
- Shared components: `src/components/*`
- Sections used by pages: `src/components/sections/*`
- Styling (Tailwind): `src/index.css`, `tailwind.config.js`
- Contact form hook: `src/hooks/useContactForm.js`
- Vite config: `vite.config.js`

### Common Commands
- `npm run dev`: Run local dev server with HMR
- `npm run build`: Build production bundle into `dist/`
- `npm run preview`: Serve production build locally
- `npm run lint`: Run ESLint

### Troubleshooting
- Port in use: either stop the process using the port or set `VITE` env to change the dev server port.
- Blank page on deep link refresh (in production hosting): ensure SPA routing is configured. See `docs/deployment.md` and `SPA-ROUTING-SETUP.md`.


