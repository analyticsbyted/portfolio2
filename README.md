# Portfolio Website - Ted Dickey II

A modern, responsive single-page application (SPA) showcasing professional portfolio, certifications, publications, and projects across data science, AI/ML, business intelligence, and web development domains.

> **New to this project?** Start with [`docs/context.md`](docs/context.md) for comprehensive project context and handover information. This README provides a quick overview—see the [Documentation](#documentation) section for detailed guides.

## Technology Stack

- **Frontend:** React 19.2.0 with Vite 7.2.2
- **Routing:** React Router v7.6.3
- **Animations:** Framer Motion 12.23.24 (page transitions)
- **Styling:** Tailwind CSS 3.4.3
- **Build Tool:** Vite (HMR, code splitting, optimized builds)
- **Deployment:** Static hosting (AWS S3 + CloudFront)

## Quick Start

### First Time Setup

```bash
# 1. Install dependencies
npm install

# 2. Create environment file (optional, for contact form)
echo "VITE_AWS_HTTPAPI_URL=https://your-api.example.com/contact" > .env

# 3. Start development server
npm run dev
```

The app will be available at `http://localhost:5173` (or next available port).

### 5-Minute Quick Start Checklist

- [ ] Run `npm install`
- [ ] Start dev server with `npm run dev`
- [ ] Open `http://localhost:5173` in browser
- [ ] Read [`docs/context.md`](docs/context.md) for project overview
- [ ] Review [`docs/getting-started.md`](docs/getting-started.md) for detailed setup

### Development Commands

```bash
# Start development server (with HMR)
npm run dev

# Run tests (watch mode)
npm test

# Run tests once
npm test -- --run

# Run tests with UI
npm test:ui

# Build for production
npm run build

# Preview production build locally
npm run preview

# Lint code
npm run lint

# Generate sitemap
npm run generate:sitemap
```

## Project Structure

```
portfolio2/
├── src/
│   ├── App.jsx                 # Main router, navigation, theme
│   ├── main.jsx                # React entry point
│   ├── pages/                  # Page components (Home, Work, About, etc.)
│   ├── components/             # Reusable UI components
│   ├── hooks/                  # Custom React hooks
│   └── assets/                 # Images, SVGs, posters
├── public/                     # Static assets
├── docs/                       # Project documentation
├── scripts/                    # Utility scripts
└── dist/                       # Production build (gitignored)
```

## Features

- **Responsive Design:** Mobile-first, works on all screen sizes
- **Dark Mode:** Theme toggle with localStorage persistence
- **Page Transitions:** Smooth page transitions with Framer Motion (respects reduced motion)
- **Mobile Navigation:** Animated slide-in menu with backdrop overlay and staggered items
- **Portfolio Showcase:** Tabbed navigation for different project categories
- **Interactive Cards:** Hover effects, focus indicators, line clamping
- **Route-Based Code Splitting:** All routes except Home lazy-loaded for 31% bundle reduction (557KB → 383KB)
- **Image Optimization:** Lazy loading, WebP fallback, responsive images
- **Error Boundaries:** Three-layer error handling (global, route-level, component-level)
- **Automated Testing:** 53 tests covering form validation, error boundaries, and core components
- **Modern Typography:** Inter + Source Serif Pro font pairing with optimized line heights
- **Brand Identity System:** Semantic color tokens for maintainable theming (brand-primary, brand-secondary)
- **Enhanced Button Interactions:** Consistent hover lift effects and active states
- **Accessibility:** Keyboard navigation, focus indicators, semantic HTML, motion preferences

## Pages

- **Home:** Landing page with hero, KPIs, featured project, services
- **Portfolio:** Tabbed showcase of projects (Data Science, BI, NLP, Web Dev, Research)
- **About:** Professional background and expertise
- **Education:** Academic credentials
- **Certifications:** Professional certifications grid
- **Publications:** Research publications and articles
- **Contact:** Contact form with validation and submission
- **Newsletter:** Newsletter signup

## Environment Variables

Create a `.env` file at the project root:

```env
VITE_AWS_HTTPAPI_URL=https://your-api.example.com/contact
```

See `docs/environment.md` for details.

## Documentation

### 🚀 Getting Started

- **[Context & Handover](docs/context.md)** ⭐ **START HERE** - Comprehensive project context for new developers/LLMs
- **[Getting Started Guide](docs/getting-started.md)** - Detailed setup instructions
- **[Architecture Overview](docs/architecture.md)** - High-level architecture and design decisions

### 📚 Core Documentation

**Design System:**
- **[Brand Guidelines](docs/brand-guidelines.md)** ⭐ - Color palette, typography, component patterns
- **[Color Migration Guide](docs/color-migration-guide.md)** ⭐ - Brand token usage and real-world examples
- **[Styling & Theming](docs/styling-and-theming.md)** - Design tokens, responsive design, dark mode

**Components & Pages:**
- **[Pages & Components](docs/pages-and-components.md)** - Detailed component documentation
- **[Page Transitions](docs/page-transitions.md)** ⭐ - Framer Motion implementation guide
- **[Work Catalog](docs/work-catalog.md)** - Portfolio page structure and card schemas

**Development:**
- **[Development Workflow](docs/development-workflow.md)** - Best practices and common tasks
- **[Testing](tests/README.md)** ⭐ - Test setup, running tests, writing tests
- **[Troubleshooting](docs/troubleshooting.md)** - Solutions to common issues
- **[Scripts](docs/scripts.md)** - Utility scripts and tools

**Deployment & Operations:**
- **[Deployment Guide](docs/deployment.md)** - Production deployment instructions
- **[Assets & Media](docs/assets.md)** - Image standards and asset management
- **[Environment Variables](docs/environment.md)** - Configuration and secrets

**Features:**
- **[Contact Form](docs/contact-form.md)** - react-hook-form + zod implementation
- **[Error Boundaries](docs/error-boundaries.md)** ⭐ - Error handling and fallback UI
- **[Image Optimization](docs/image-optimization.md)** ⭐ - Lazy loading, WebP fallback
- **[SEO & Metadata](docs/seo-and-metadata.md)** - Dynamic meta tags, JSON-LD, sitemap
- **[Analytics & Tracking](docs/analytics.md)** ⭐ - Google Analytics & Microsoft Clarity setup

### 📋 Additional Resources

- **[CHANGELOG](CHANGELOG.md)** - Detailed change history
- **[Full Documentation Index](docs/README.md)** - Complete documentation catalog

> **Tip:** Bookmark [`docs/context.md`](docs/context.md) for quick reference—it's the most comprehensive guide for understanding the project.

## Deployment

This project builds to static assets and is ideal for static hosting (AWS S3 + CloudFront, Netlify, Vercel, etc.).

**Requirements:**
- SPA routing support (serve `index.html` for all routes)
- CloudFront Function for SPA routing (see `SPA-ROUTING-SETUP.md`)

**Build:**
```bash
npm run build
```

Output is in the `dist/` directory.

See `docs/deployment.md` for detailed deployment instructions.

## Common Tasks

### Adding a New Project to Portfolio

1. **Prepare poster image:**
   - Screenshot: Use `node scripts/capture-screenshot.mjs <url> <output-path>`
   - Or create SVG: Save to `src/assets/[category]/[name]-poster.svg`
   - See [`docs/assets.md`](docs/assets.md) for image standards

2. **Add project to Work.jsx:**
   - Add project object to appropriate tab array
   - Include: `title`, `problem`, `approach`, `result`, `img`, `link`, `skills`
   - See [`docs/work-catalog.md`](docs/work-catalog.md) for complete schema

### Adding a New Page

1. Create page component in `src/pages/`
2. Add route to `src/App.jsx` routes array
3. Wrap in `<AnimatedPage>` for transitions
4. Add navigation link to navbar
5. See [`docs/development-workflow.md`](docs/development-workflow.md) for details

### Modifying Typography

- Use semantic tokens: `text-headline-1`, `text-body-large`, etc.
- See [`docs/brand-guidelines.md`](docs/brand-guidelines.md) for typographic scale
- Update `tailwind.config.js` to change token values globally

### Modifying Brand Colors

- Use brand tokens: `bg-brand-primary`, `from-brand-primary to-brand-secondary`
- See [`docs/color-migration-guide.md`](docs/color-migration-guide.md) for patterns
- Update `tailwind.config.js` to change brand colors globally

### Troubleshooting

- **Blank screen?** See [`docs/troubleshooting.md`](docs/troubleshooting.md)
- **Styles not applying?** Clear Vite cache: `rm -rf node_modules/.vite`
- **Images not loading?** Check import paths and file existence
- **Page transitions not working?** Verify `AnimatePresence` and `AnimatedPage` setup

### Useful Scripts

**Capture Screenshot:**
```bash
node scripts/capture-screenshot.mjs <url> <output-path>
```

**Generate Sitemap:**
```bash
npm run generate:sitemap
```
- Regenerates `public/sitemap.xml` with current routes and `<lastmod>` date.
- Update `scripts/generate-sitemap.mjs` if you add/remove top-level pages.

**Clear Caches:**
```bash
# Vite cache
rm -rf node_modules/.vite

# Browser cache (manual)
# Hard refresh: Cmd + Shift + R (Mac) or Ctrl + Shift + R (Windows)
```

See [`docs/scripts.md`](docs/scripts.md) for more utilities.

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- No IE11 support (uses modern JavaScript)

## License

See `LICENSE.txt` for details.

## Author

**Ted Dickey II**  
Data Science Professional & PhD Candidate  
Specializing in AI/ML, Analytics, and Web Development

---

For detailed project context and handover information, see `docs/context.md`.
