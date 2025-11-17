# Portfolio Website - Ted Dickey II

A modern, responsive single-page application (SPA) showcasing professional portfolio, certifications, publications, and projects across data science, AI/ML, business intelligence, and web development domains.

## Technology Stack

- **Frontend:** React 19.2.0 with Vite 7.2.2
- **Routing:** React Router v7.6.3
- **Animations:** Framer Motion 12.23.24 (page transitions)
- **Styling:** Tailwind CSS 3.4.3
- **Build Tool:** Vite (HMR, code splitting, optimized builds)
- **Deployment:** Static hosting (AWS S3 + CloudFront)

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
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
- **Portfolio Showcase:** Tabbed navigation for different project categories
- **Interactive Cards:** Hover effects, focus indicators, line clamping
- **Lazy Loading:** Route-level code splitting for performance
- **Modern Typography:** Inter + Source Serif Pro font pairing
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

Comprehensive documentation is available in the `docs/` directory:

- **Getting Started:** `docs/getting-started.md`
- **Architecture:** `docs/architecture.md`
- **Context & Handover:** `docs/context.md` ⭐ (For new developers/LLMs)
- **Styling & Theming:** `docs/styling-and-theming.md`
- **Pages & Components:** `docs/pages-and-components.md`
- **Work Catalog:** `docs/work-catalog.md`
- **Assets:** `docs/assets.md`
- **Deployment:** `docs/deployment.md`
- **Scripts:** `docs/scripts.md`

See `docs/README.md` for the full documentation index.

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

## Development

### Adding a New Project

1. Prepare poster image (screenshot or SVG)
2. Save to `src/assets/[category]/[name]-poster.png`
3. Add project object to appropriate array in `src/pages/Work.jsx`
4. Include all required fields (title, problem, approach, result, img, link, skills)

See `docs/work-catalog.md` for the complete card schema.

### Capturing Screenshots

Use the screenshot utility:

```bash
node scripts/capture-screenshot.mjs <url> <output-path>
```

See `docs/scripts.md` for usage details.

### Clearing Cache

**Vite Cache:**
```bash
rm -rf node_modules/.vite
```

**Browser Cache:**
- Hard refresh: `Cmd + Shift + R` (Mac) or `Ctrl + Shift + R` (Windows)

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
