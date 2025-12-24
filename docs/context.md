# Project Context & Handover Guide

This document provides comprehensive context for developers or LLM models taking over this portfolio project. It covers architecture, conventions, key decisions, and workflows.

## Project Overview

**Portfolio Website for Ted Dickey II**  
A modern, responsive single-page application (SPA) showcasing professional portfolio, certifications, publications, and projects across data science, AI/ML, business intelligence, and web development domains.

### Technology Stack

- **Frontend Framework:** React 19.2.0 with Vite 7.2.2
- **Routing:** React Router v7.6.3 (client-side routing)
- **Animations:** Framer Motion 12.23.24 (page transitions, mobile navigation, component animations)
- **Styling:** Tailwind CSS 3.4.3 with PostCSS
- **Language:** JavaScript (ESM modules)
- **Build Tool:** Vite (HMR, code splitting, optimized production builds)
- **Icons:** Heroicons React v2.2.0
- **Fonts:** Inter (headlines/CTAs) + Source Serif Pro (body) via Google Fonts
- **Deployment:** Static hosting (AWS S3 + CloudFront)

## Project Structure

```
portfolio2/
├── src/
│   ├── App.jsx                 # Main router, nav, theme toggle, layout shell (uses useRoutes)
│   ├── main.jsx                # React entry point, StrictMode wrapper
│   ├── index.css               # Global CSS, CSS variables, Tailwind directives
│   ├── pages/                  # Route-level page components
│   │   ├── Home.jsx            # Landing page: hero, KPIs, featured project, services
│   │   ├── Work.jsx            # Portfolio/work page (lazy-loaded): tabs, project cards
│   │   ├── About.jsx           # About page
│   │   ├── Education.jsx       # Education background
│   │   ├── Certifications.jsx  # Certifications grid
│   │   ├── Publications.jsx    # Publications list
│   │   ├── Contact.jsx         # Contact form page
│   │   ├── Newsletter.jsx      # Newsletter signup
│   │   ├── NotFound.jsx        # 404 page
│   │   └── [Other topic pages] # ClassificationPage, ForecastPage, etc.
│   ├── components/             # Reusable UI components
│   │   ├── AnimatedPage.jsx    # Page transition wrapper (Framer Motion)
│   │   ├── Button.jsx          # Link-styled button component
│   │   ├── Card.jsx            # Reusable card shell (hover, focus, gradient bar)
│   │   ├── ErrorBoundary.jsx  # Error boundary component (catches errors, fallback UI)
│   │   ├── HeadMetadata.jsx   # Dynamic meta tags and JSON-LD schema component
│   │   ├── ImageWithSkeleton.jsx # Image loader with lazy loading, WebP fallback
│   │   ├── PageSkeleton.jsx   # Route-specific loading skeletons
│   │   ├── PageSubtitle.jsx    # Page subtitle component
│   │   ├── CTASection.jsx      # Call-to-action block
│   │   ├── Footer.jsx          # Global footer
│   │   └── sections/           # Feature sections used by pages
│   ├── lib/
│   │   ├── validators.js       # Zod validation schemas (contact form)
│   │   └── errorLogger.js      # Centralized error logging utility
│   ├── seo/
│   │   ├── personSchema.js     # JSON-LD Person schema
│   │   └── websiteSchema.js    # JSON-LD WebSite schema
│   ├── assets/                 # Images, SVGs, posters
│   │   ├── webapps/            # Web app screenshots (16:9 posters)
│   │   ├── research/           # Research project SVGs (4:3 posters)
│   │   ├── bi/                 # BI dashboard SVGs (4:3 posters)
│   │   ├── nlp/                # NLP project SVGs (4:3 posters)
│   │   └── certifications/     # Certification badges (WebP/PNG)
│   └── data/
│       └── publicationHelper.js # Publications data helper
├── public/                     # Static assets (copied as-is to build root)
│   ├── robots.txt
│   ├── sitemap.xml
│   └── favicon-td.svg
├── scripts/                    # Utility scripts
│   ├── capture-screenshot.mjs  # Puppeteer script for capturing app screenshots
│   ├── image-audit.mjs         # Image optimization audit tool
│   └── generate-sitemap.mjs    # Dynamic sitemap generation script
├── tests/                      # Test files
│   ├── setup.js                # Test environment setup (mocks, globals)
│   ├── validators.test.js      # Form validation tests (19 tests)
│   ├── ErrorBoundary.test.jsx  # Error boundary tests (12 tests)
│   ├── Button.test.jsx         # Button component tests (22 tests)
│   └── README.md               # Testing documentation
├── docs/                       # Project documentation
├── dist/                       # Production build output (gitignored)
├── index.html                  # Root HTML shell
├── vite.config.js              # Vite configuration (includes Vitest config)
├── tailwind.config.js          # Tailwind CSS configuration
├── package.json                # Dependencies and scripts
└── cloudfront-spa-function.js  # CloudFront Function for SPA routing
```

## Key Architectural Decisions

### 1. ESM Modules Only
- **Decision:** All code uses ES Module syntax (`import`/`export`)
- **Rationale:** Vite requires ESM, modern standard, better tree-shaking
- **Impact:** Cannot use CommonJS `require()` in source files
- **Common Pitfall:** Old code might use `require()` for assets → must convert to ESM imports

### 2. Client-Side Routing (SPA)
- **Decision:** React Router handles all navigation client-side
- **Rationale:** Fast navigation, no page reloads, better UX
- **Deployment Requirement:** Server/CDN must serve `index.html` for all routes (see `SPA-ROUTING-SETUP.md`)

### 3. Route-Based Code Splitting
- **Decision:** All routes except `Home.jsx` are lazy-loaded with `React.lazy()`
- **Rationale:** Reduces initial bundle size by ~31% (557KB → 383KB), improves Core Web Vitals (LCP, FID), faster Time to Interactive
- **Implementation:** 
  - `Home.jsx` eagerly loaded (critical path - first page users see)
  - All other routes (`Work`, `About`, `Contact`, `Education`, `Certifications`, `Publications`, `Newsletter`, `NotFound`) lazy-loaded
  - Each route wrapped in `<Suspense>` with `PageSkeleton` component providing route-specific loading states
  - `PageSkeleton` component (`src/components/PageSkeleton.jsx`) provides consistent loading skeletons for each route variant
- **Bundle Impact:** 
  - Main bundle: 383KB (121.58KB gzipped) - down from 557KB (164.93KB gzipped)
  - Route chunks: 2-92KB each (loaded on-demand)
  - **31% reduction** in initial bundle size
- **User Experience:** Faster initial page load, better mobile performance, improved SEO via Core Web Vitals

### 4. Page Transitions
- **Decision:** Framer Motion for smooth page transitions
- **Rationale:** Professional polish, improved UX, modern feel
- **Implementation:** `AnimatedPage` component wraps each route, `AnimatePresence` tracks route changes
- **Pattern:** `useRoutes` + `cloneElement` + `AnimatePresence` for React Router v6+ compatibility
- **Accessibility:** Respects `prefers-reduced-motion` (fade only for reduced motion users)
- **Bundle Impact:** ~60-80KB gzipped (acceptable tradeoff for UX improvement)

### 5. Theme System
- **Decision:** Tailwind `darkMode: 'class'` with localStorage persistence
- **Rationale:** User preference, consistent dark mode across site
- **Implementation:** `App.jsx` manages theme state, toggles `dark` class on `<html>`
- **Storage Key:** `theme-preference` in localStorage

### 6. Typography Pairing
- **Decision:** Inter for headlines/CTAs (`font-headline`), Source Serif Pro for body (`font-body`)
- **Rationale:** Marketing best practice, visual hierarchy, readability
- **Implementation:** Google Fonts loaded in `index.html`, mapped in `tailwind.config.js`
- **Line Height:** Source Serif Pro uses 1.75 line height (optimal for serif fonts) - applied globally via CSS
- **Consistency:** All body paragraphs inherit `font-body`, headlines/CTAs use `font-headline` explicitly
- **Typographic Scale:** ✅ **IMPLEMENTED** (2025-01-11) - Semantic typographic tokens replace raw Tailwind sizes
  - **Headlines**: `text-headline-1` (56px/60px/72px), `text-headline-2` (36px), `text-headline-3` (24px/30px)
  - **Body**: `text-body-large` (20px/24px), `text-body` (16px), `text-body-md` (18px), `text-body-small` (14px)
  - **Special**: `text-stat-value` (30px), `text-button` (18px), `text-badge` (14px)
  - **Benefits**: Consistency, maintainability, responsive by default, semantic clarity
  - **Migration Status**: Key pages migrated (Home, Work, About, Contact, Button, PageSubtitle)
  - **Documentation**: See `docs/brand-guidelines.md` for complete typographic scale

### 7. Brand Identity System
- **Decision:** Blue-to-purple gradient as primary brand identity with semantic color tokens
- **Rationale:** Professional, modern, data-driven visual identity
- **Implementation History:**
  1. **Initial (2025-01-11):** Brand tokens added as nested structure (`brand.primary`, `brand.secondary`)
  2. **Problem:** Tailwind gradient utilities (`from-brand-primary to-brand-secondary`) didn't work with nested structure
  3. **Restructuring (2025-01-11):** Flattened to `'brand-primary'` structure to enable gradient support
  4. **Migration (2025-01-11):** Systematically migrated all brand gradients (26 instances across 10 files)
- **Current Implementation:** 
  - Brand tokens in `tailwind.config.js`: Flattened structure (`'brand-primary'`, `'brand-secondary'`) for gradient support
  - Nested aliases maintained for backward compatibility
  - Logo and favicon aligned (gradient background)
  - Footer uses primary brand gradient pattern
  - **Migration Status:** ✅ COMPLETE (2025-01-11) - All brand gradients migrated to semantic tokens
- **Color Palette:** Slate neutrals (not Gray) for warmer, modern appearance
- **Documentation:** Comprehensive brand guidelines in `docs/brand-guidelines.md`
- **Usage:** See `docs/color-migration-guide.md` for real-world examples and migration details

### 8. Button Interactivity
- **Decision:** Consistent hover lift effects and active states across all buttons
- **Rationale:** Improved perceived quality, clear interaction feedback, professional polish
- **Implementation:**
  - Hover: `hover:-translate-y-1` (2px lift) + `hover:shadow-xl`
  - Active: `active:translate-y-0` (return) + `active:shadow-md` + darker background
  - Applied to all button types (primary, secondary, gradient)
- **Components:** `Button.jsx` defaults include interactions, inline buttons updated consistently

### 9. Color System
- **Decision:** CSS custom properties for theme-aware colors, off-white substitute for pure white
- **Rationale:** Consistent theming, avoids pure white (#ffffff) per user preference
- **Implementation:** 
  - `--color-white: 248 247 244` (#F8F7F4), mapped to Tailwind via `rgb()` with alpha support
  - Dark mode uses Slate palette (slate-900, slate-800, slate-700) instead of Gray
  - Text color variables: `--color-text-body` (slate-300), `--color-text-headline` (slate-100)

### 10. Image Optimization & Lazy Loading
- **Decision:** Enhanced `ImageWithSkeleton` component with native lazy loading, WebP fallback, and responsive images
- **Rationale:** Improved Core Web Vitals (LCP, CLS), reduced bandwidth usage, better mobile performance
- **Implementation:**
  - Native browser lazy loading enabled by default (`loading="lazy"`)
  - WebP fallback via `<picture>` element (optional, falls back to PNG/JPG)
  - Responsive images via `srcset` and `sizes` attributes (optional)
  - Loading skeletons for better perceived performance
  - Error handling with graceful degradation
- **Fallback Strategy:** 
  - No changes to existing images required—all optimizations are optional
  - WebP versions can be added incrementally without breaking existing images
  - Browser automatically falls back to original format if WebP not supported
- **Performance Impact:**
  - Below-the-fold images load only when about to enter viewport
  - WebP provides ~25-35% file size reduction (when available)
  - Reduced initial page load time and bandwidth usage

### 11. Error Boundaries
- **Decision:** Three-layer error boundary protection (global, route-level, component-level)
- **Rationale:** Prevents full app crashes, provides graceful degradation, improves user experience, enables production resilience
- **Implementation:**
  - **Global Boundary:** Wraps entire app in `main.jsx` as last resort safety net
  - **Route-Level Boundaries:** Each route wrapped with custom error boundary in `App.jsx`
    - Custom error messages per page type
    - Isolated error handling - one page failure doesn't affect others
  - **Error Logging:** Centralized `logError` utility in `lib/errorLogger.js`
    - Development: Full error details in console
    - Production: Ready for external services (Sentry, LogRocket)
  - **Fallback UI:** Branded error messages with recovery options ("Try Again", "Go Home")
- **Benefits:**
  - Prevents single component errors from crashing entire application
  - Better UX with helpful error messages instead of blank screens
  - Production resilience for unexpected data, network failures, edge cases
  - Debugging support with centralized error logging
  - Professional polish demonstrating production-ready error handling

### 12. Testing Infrastructure
- **Decision:** Vitest + React Testing Library for automated testing
- **Rationale:** Fast, Vite-native test runner, component testing best practices, CI/CD ready
- **Implementation:**
  - **Test Framework:** Vitest configured in `vite.config.js` with jsdom environment
  - **Test Setup:** `tests/setup.js` with mocks for `matchMedia`, `localStorage`, cleanup
  - **Test Coverage:** 53 tests covering critical functionality
    - Form validation (19 tests) - Contact form validation schemas
    - Error boundaries (12 tests) - Error handling and fallback UI
    - Button component (22 tests) - All button variants and behaviors
  - **Test Scripts:** `npm test` (watch), `npm test -- --run` (once), `npm test:ui` (UI), `npm test:run` (CI)
- **Benefits:**
  - Confidence in form validation preventing bad data
  - Verification of error handling working correctly
  - Protection against regressions in core components
  - Fast feedback during development
  - Ready for CI/CD integration

### 13. Image Standards
- **Poster Images:**
  - Web apps: 16:9 screenshots (PNG, ~1200x675 or 1200x600)
  - Research/BI/NLP: 4:3 vector SVGs
- **Naming:** `[project-name]-poster.png` or `[category]-[name].svg`
- **Location:** `src/assets/webapps/`, `src/assets/research/`, etc.
- **Display:** `object-contain` within fixed-height frames to prevent cropping
- **Optimization:** All images use `ImageWithSkeleton` component with lazy loading enabled

## Core Components

### App.jsx
**Purpose:** Root component, handles routing, navigation, theme, layout shell

**Key Responsibilities:**
- Defines all routes using `useRoutes` hook with routes array
- Provides navigation bar (desktop + mobile responsive)
- **Mobile Navigation:** Animated slide-in menu with Framer Motion
  - Slide-in from right with backdrop overlay
  - Staggered menu item animations (50ms delay between items)
  - Respects `prefers-reduced-motion` (fade-only when enabled)
  - Body scroll lock when menu is open
  - Close button and backdrop click to dismiss
- Manages theme state (light/dark) with localStorage
- Implements page transitions via Framer Motion's `AnimatePresence`
- Wraps all pages in main layout container (`max-w-7xl mx-auto`)
- **Error Boundaries:** All routes wrapped with route-specific error boundaries
  - Custom error messages per page type
  - Isolated error handling - one page failure doesn't affect others
  - Error logging integration
- **Route-Based Code Splitting:** All routes except Home lazy-loaded with Suspense fallbacks

**Important Patterns:**
- Routing: `useRoutes` hook with routes array (instead of `<Routes>` component)
- Page transitions: `AnimatePresence` + `cloneElement` pattern for route tracking
- Theme toggle: `handleThemeToggle()` updates state and `<html>` class
- Mobile menu: `mobileOpen` state controls visibility with animated slide-in
- Motion preference: `shouldReduceMotion` state detects user's accessibility preference
- Route lazy loading: `const Work = lazy(() => import('./pages/Work'))`

**Routing Implementation:**
```javascript
// Routes array with AnimatedPage wrappers
const routes = [
  { path: '/', element: <AnimatedPage><Home /></AnimatedPage> },
  { path: '/work', element: <AnimatedPage><Work /></AnimatedPage> },
  // ...
];

// useRoutes returns matched element
const element = useRoutes(routes);

// AnimatePresence tracks route changes via key
<AnimatePresence mode="wait" initial={false}>
  {element && cloneElement(element, { key: location.pathname })}
</AnimatePresence>
```

### Work.jsx
**Purpose:** Portfolio/work showcase with tabbed navigation

**Structure:**
- 4 consolidated tabs: Products, Web Engineering, Data & Analytics, Research & Operations
- Per-tab subtitle displayed via `PageSubtitle` component
- Project cards in each tab using `Card` component
- Dual CTAs: "View Repo" + "Live Demo" for some projects

**Card Schema:**
```javascript
{
  title: string,
  problem: string,      // Challenge
  approach: string,     // Solution
  result: string,       // Impact
  img: importedAsset,
  link: string,         // Primary CTA (repo or live app)
  linkLabel: string,
  demoLink?: string,    // Optional secondary CTA
  demoLabel?: string,
  repoLink?: string,    // Optional repo link for web apps
  repoLabel?: string,
  skills: string[]      // Badge array
}
```

**Key Features:**
- Line clamping: Challenge/Solution/Impact paragraphs use `.line-clamp-3` when collapsed
- Gradient bar: Thin gradient bar at top of poster frame
- Hover effects: `hover:shadow-xl transition-shadow` on cards
- Focus visible: `focus-visible:ring-2 focus-visible:ring-blue-400/60` for accessibility

### Home.jsx
**Purpose:** Landing page with hero, KPIs, featured project, services, testimonials

**Sections:**
1. Hero: Headline, subtitle, gradient badge, CTAs
2. KPI Stats Grid: 4 cards (Years Experience, Projects, Certifications, Industries)
3. Featured Project Strip: Highlights a web app (Economic KPI Pulse or Movie Explorer)
4. "What I Do" 3-Pillars: Web Apps, AI/Agents, Data Platforms (links to Work tabs)
5. "How I Deliver Results" 2x2 Grid: Outcome-focused proof cards
6. Testimonials: Rotating carousel
7. Technologies: Badge list
8. CTA Section: Final call-to-action

**Typography:**
- Headlines use `font-headline` (Inter)
- Body text uses `font-body` (Source Serif Pro)

### Button.jsx
**Purpose:** Link-styled button component with enhanced interactivity

**Props:**
- `children`: Button content
- `href`: Link destination (internal or external)
- `className`: Additional CSS classes
- `ariaLabel`: Accessibility label
- `onClick`: Click handler (optional)
- `type`: Button type (default: "button")

**Features:**
- **Hover Effects:** Lift effect (`hover:-translate-y-1`) with enhanced shadow (`hover:shadow-xl`)
- **Active States:** Click feedback (`active:translate-y-0`, `active:shadow-md`, darker background)
- **Transitions:** Smooth animations with `transition-all duration-200`
- **Accessibility:** Focus rings, disabled states with `disabled:cursor-not-allowed`
- **Link Support:** Handles both internal routes (`/route`) and external URLs
- **Default Styles:** Brand gradient button when no custom className provided

**Usage:**
```jsx
<Button href="/contact" className="bg-gradient-to-r from-blue-600 to-purple-600 ...">
  Start Your Project
</Button>
```

### Card.jsx
**Purpose:** Reusable card shell for project/work cards

**Props:**
- `children`: Card content
- `className`: Additional CSS classes
- Standard card styling: `bg-card`, `border-2 border-border`, `rounded-2xl`

**Features:**
- Hover lift: `hover:shadow-xl transition-shadow`
- Focus ring: `focus-visible:ring-2 focus-visible:ring-blue-400/60`
- Gradient bar: Optional thin gradient bar at top of image frame

### ImageWithSkeleton.jsx
**Purpose:** Enhanced image loader with lazy loading, responsive images, WebP fallback, and skeleton placeholder

**Props:**
- `src`: Image source (imported asset or URL) - **required**
- `alt`: Alt text - **required**
- `className`: Additional classes (typically `h-full w-full object-contain`)
- `webpSrc`: Optional WebP version (enables `<picture>` element with automatic fallback)
- `srcset`: Optional srcset attribute for responsive images
- `sizes`: Optional sizes attribute for responsive images
- `loading`: Loading strategy - `'lazy'` (default), `'eager'`, or `false`
- `onLoad`: Callback function when image loads

**Behavior:**
- **Lazy Loading:** Native browser lazy loading enabled by default (`loading="lazy"`)
  - Images below the fold load only when about to enter viewport
  - Reduces initial page load time and bandwidth usage
- **WebP Fallback:** Automatic `<picture>` element when `webpSrc` is provided
  - Falls back to original format (PNG/JPG) if WebP not supported
  - No changes to existing images required—WebP versions are optional
- **Responsive Images:** Supports `srcset` and `sizes` for responsive image loading
  - Browser selects appropriate image size based on viewport and device pixel ratio
- **Loading States:** Shows skeleton placeholder (`bg-muted/60 animate-pulse`) while loading
- **Error Handling:** Displays fallback message if image fails to load
- **Smooth Transitions:** Fades in image when loaded (`opacity-0` → visible)

**See Also:** [Image Optimization Documentation](./image-optimization.md) for detailed optimization strategy and migration guide.

### AnimatedPage.jsx
**Purpose:** Page transition wrapper using Framer Motion

**Props:**
- `children`: Page component to wrap and animate

**Features:**
- **Accessibility:** Respects `prefers-reduced-motion` preference
  - Reduced motion: Simple fade only (no slide)
  - Full motion: Slide (20px) + fade transition
- **Animation Details:**
  - Enter: `opacity: 0, x: 20` → `opacity: 1, x: 0`
  - Exit: `opacity: 1, x: 0` → `opacity: 0, x: -20`
  - Duration: 300ms (full motion) or 150ms (reduced motion)
  - Easing: Custom cubic-bezier `[0.22, 1, 0.36, 1]`
- **Implementation:** Detects motion preference on mount, listens for changes

**Usage:**
- Wraps each route element in the routes array
- Used with `AnimatePresence` in `App.jsx` for page transitions
- See `docs/pages-and-components.md` for detailed API

### Contact Form (Contact.jsx)
**Purpose:** Contact form page with react-hook-form + zod validation

**Implementation:**
- Uses `useForm` hook from react-hook-form
- Zod schema validation via `zodResolver`
- Field-level error messages
- Honeypot spam protection (handled by zod schema)

**Validation Schema:** `src/lib/validators.js`
- `contactFormSchema`: Zod schema defining validation rules
- All fields trimmed before validation
- Email format validation
- Minimum message length (10 characters)
- Honeypot field validation

**Form State:**
- Uses react-hook-form's `formState` for errors and submission status
- `isSubmitting`: Loading state from react-hook-form
- `errors`: Field-level and root-level errors
- `reset()`: Resets form on successful submission

**Environment Variable:**
- `VITE_AWS_HTTPAPI_URL`: Endpoint for form submission (POST JSON)

**Payload:**
```json
{
  "name": "string (trimmed)",
  "email": "string (trimmed)",
  "message": "string (trimmed)",
  "timestamp": "ISO string",
  "source": "portfolio-contact-form-rhf"
}
```

**See:** `docs/contact-form.md` for detailed documentation

## Styling & Theming

### Tailwind Configuration
**File:** `tailwind.config.js`

**Custom Fonts:**
- `font-headline`: Inter (for titles, CTAs)
- `font-body`: Source Serif Pro (for body text)
- `font-sans`: Inter (default sans-serif)

**Custom Colors (CSS Variables):**
- `white`: Off-white (#F8F7F4) - substitute for pure white
- `surface`: Page background
- `card`: Card surface
- `border`: Border color
- `muted`: Subtle surfaces, skeletons

**Brand Color Tokens (Flattened for Gradient Support):**
- `brand-primary`: #2563EB (blue-600) - start of gradient
- `brand-secondary`: #9333EA (purple-600) - end of gradient
- `brand-accent`: #1D4ED8 (blue-700) - hover/darker variants
- `brand-accent-alt`: #7E22CE (purple-700) - hover/darker variants
- **Structure:** Flattened with prefix (e.g., `'brand-primary'`) for gradient support
  - **Why Flattened?** Tailwind gradient utilities (`from-*`, `to-*`) require flat color keys. Nested structure (`brand.primary`) doesn't work with gradients.
  - **History:** Initially implemented as nested, restructured to flattened on 2025-01-11 to enable gradient support
  - **Backward Compatibility:** Nested aliases maintained (`brand.primary`, `brand.secondary`) for solid color usage
- **Gradients:** `from-brand-primary to-brand-secondary` ✅ **WORKS!**
- **Solid Colors:** `bg-brand-primary`, `text-brand-secondary` (works with nested aliases)
- **Migration Status:** ✅ **COMPLETE** (2025-01-11) - All brand gradients migrated (26 instances across 10 files)
- **Usage:** See `docs/color-migration-guide.md` for real-world examples

**Dark Mode:**
- Toggle: `darkMode: 'class'`
- Activate: Add `dark` class to `<html>`
- Implementation: `App.jsx` manages theme state

### Global CSS
**File:** `src/index.css`

**CSS Variables:**
- Defined in `:root` for light theme
- Overridden in `.dark` for dark theme
- RGB values (space-separated) for alpha support: `rgb(var(--color-white) / <alpha-value>)`

**Utilities:**
- `.line-clamp-2`, `.line-clamp-3`: Text truncation with ellipsis
- `.no-scrollbar`: Hide scrollbar utility

**Typography:**
- Automatic line height (1.75) for Source Serif Pro body text via `.font-body p` selector
- Headlines use tighter line height (1.2) for better visual hierarchy
- Custom line height utilities: `leading-serif` (1.75), `leading-serif-tight` (1.65)

### Design Tokens
**Container Width:** `max-w-7xl` (1280px) - consistent across all pages
**Padding:** `px-4 md:px-8` (mobile) → `px-8` (desktop)
**Border Radius:** `rounded-2xl` (cards), `rounded-xl` (buttons)
**Shadows:** `shadow-lg` (default), `hover:shadow-xl` (interactive)

## Asset Management

### Image Types & Standards
1. **Web App Posters:** PNG screenshots, 16:9 aspect ratio, ~1200x675 or 1200x600
   - Location: `src/assets/webapps/`
   - Naming: `[project-name]-poster.png`
   - Example: `movie-explorer-poster.png`

2. **Research/BI/NLP Posters:** SVG vector images, 4:3 aspect ratio
   - Location: `src/assets/research/`, `src/assets/bi/`, `src/assets/nlp/`
   - Naming: `[category]-[name].svg`
   - Example: `research-doctoral-v2.svg`

3. **Certification Badges:** WebP or PNG, various sizes
   - Location: `src/assets/certifications/`
   - Format: Prefer WebP for smaller file sizes

### Screenshot Workflow
**Script:** `scripts/capture-screenshot.mjs`

**Usage:**
```bash
node scripts/capture-screenshot.mjs <url> <output-path>
```

**Features:**
- Puppeteer-based browser automation
- Waits for network idle (20s delay)
- Captures at specified dimensions (default 1200x600)
- Saves to specified path

**Example:**
```bash
node scripts/capture-screenshot.mjs http://localhost:3000 src/assets/webapps/movie-explorer-poster.png
```

### Image Resizing (Mac)
**Preview App:**
1. Open image
2. Tools → Adjust Size
3. Set width/height (maintain aspect ratio)
4. Save

**CLI (sips):**
```bash
sips -z 600 800 image.png --out resized.png
```

**CLI (ImageMagick - if installed):**
```bash
convert image.png -resize 1200x600! output.png
```

### Caching Issues
**Vite Cache:**
- Location: `node_modules/.vite/`
- Clear: `rm -rf node_modules/.vite`
- When: Asset changes not reflecting after rebuild

**Browser Cache:**
- Hard refresh: `Cmd + Shift + R` (Mac) or `Ctrl + Shift + R` (Windows)
- When: New assets not loading

**Bypass Cache (Development):**
- Use unique filenames: `poster-v2.png` instead of `poster.png`
- Clear Vite cache before rebuild

## Development Workflow

### Local Development
```bash
# Install dependencies
npm install

# Start dev server (HMR enabled)
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

### Environment Setup
1. Create `.env` file at project root:
```env
VITE_AWS_HTTPAPI_URL=https://your-api.example.com/contact
```

2. Restart dev server after changes

### Adding a New Project to Portfolio

1. **Prepare Poster Image:**
   - Capture screenshot or create SVG
   - Resize to standard dimensions (16:9 for web apps, 4:3 for others)
   - Save to appropriate `src/assets/` subdirectory

2. **Add to Work.jsx:**
   - Import poster image: `import projectPoster from '../assets/[category]/[name]-poster.png'`
   - Add project object to appropriate array (`webDevProjects`, `dataScienceProjects`, etc.)
   - Include all required fields: `title`, `problem`, `approach`, `result`, `img`, `link`, `linkLabel`, `skills`
   - Optional: Add `demoLink`/`demoLabel` or `repoLink`/`repoLabel` for dual CTAs

3. **Update Home.jsx (if featured):**
   - Import poster: `import featuredPoster from '../assets/[category]/[name]-poster.png'`
   - Update "Featured Project Strip" section

### Code Style & Conventions

**ESLint Configuration:**
- File: `eslint.config.js`
- Rules: React Hooks, React Refresh
- Run: `npm run lint`

**File Naming:**
- Components: PascalCase (`Card.jsx`, `PageSubtitle.jsx`)
- Hooks: camelCase with `use` prefix (e.g., `useTheme.js`)
- Validators: camelCase (e.g., `validators.js`)
- Assets: kebab-case (`movie-explorer-poster.png`)

**Import Order:**
1. External libraries
2. Internal components
3. Hooks
4. Assets
5. Utilities/helpers

**Component Structure:**
```javascript
import { useState } from 'react';
import Component from '../components/Component';

function MyComponent() {
  // Hooks
  const [state, setState] = useState();
  
  // Handlers
  const handleClick = () => {};
  
  // Render
  return <div>...</div>;
}

export default MyComponent;
```

## Deployment

### Build Process
1. Set environment variables in build environment
2. Run `npm run build`
3. Output in `dist/` directory (gitignored)

### AWS S3 + CloudFront
**Files:**
- `cloudfront-spa-function.js`: CloudFront Function for SPA routing
- `SPA-ROUTING-SETUP.md`: Detailed setup instructions

**Key Steps:**
1. Upload `dist/` contents to S3 bucket
2. Configure CloudFront distribution
3. Associate CloudFront Function (viewer-request) for SPA routing
4. Invalidate `index.html` on deployments

**Alternative:** Any static host with SPA history fallback (Netlify, Vercel, etc.)

### Environment Variables (Production)
- Set `VITE_AWS_HTTPAPI_URL` in build environment
- Vite injects these at build time (not runtime)
- Must rebuild after changing environment variables

## Common Issues & Solutions

### Blank White Screen
**Causes:**
- React version mismatch (`react` vs `react-dom`)
- ESM import error (using `require()` instead of `import`)
- Missing asset import
- JavaScript error in console

**Solutions:**
- Check `package.json` for matching versions: `react: ^19.2.0`, `react-dom: ^19.2.0`
- Verify all imports use ESM syntax
- Check browser console for errors
- Clear Vite cache: `rm -rf node_modules/.vite`

### Images Not Loading
**Causes:**
- Incorrect import path
- Asset not in correct directory
- Browser cache
- Vite cache

**Solutions:**
- Verify import path matches file location
- Check file exists in `src/assets/`
- Hard refresh browser (`Cmd + Shift + R`)
- Clear Vite cache: `rm -rf node_modules/.vite`

### Theme Not Persisting
**Causes:**
- localStorage cleared
- Theme state not initialized correctly

**Solutions:**
- Check `App.jsx` theme initialization: `useState(() => localStorage.getItem(THEME_KEY) || 'light')`
- Verify `setHtmlTheme()` is called in `useEffect`

### SPA Routing 404s in Production
**Causes:**
- Server/CDN not configured for SPA fallback
- CloudFront Function not associated

**Solutions:**
- See `SPA-ROUTING-SETUP.md`
- Configure CloudFront Function or custom error pages
- Ensure `index.html` is served for all routes

### Contact Form Not Submitting
**Causes:**
- Missing `VITE_AWS_HTTPAPI_URL` environment variable
- API endpoint CORS not configured
- Network error

**Solutions:**
- Verify `.env` file exists with `VITE_AWS_HTTPAPI_URL`
- Check API endpoint CORS settings
- Check browser Network tab for request details

## Testing & Quality Assurance

### Automated Testing

**Test Framework:** Vitest + React Testing Library

**Test Coverage:** 53 tests covering critical functionality
- **Form Validation** (`tests/validators.test.js`): 19 tests
  - Name, email, message validation
  - Honeypot spam protection
  - Complete form scenarios
- **Error Boundaries** (`tests/ErrorBoundary.test.jsx`): 12 tests
  - Error catching and fallback UI
  - Recovery options
  - Error logging
  - Accessibility
- **Button Component** (`tests/Button.test.jsx`): 22 tests
  - Button, Link, and anchor rendering
  - Accessibility
  - Styling and props forwarding

**Running Tests:**
```bash
npm test              # Watch mode
npm test -- --run     # Run once
npm test:ui           # UI mode
npm test:run          # CI mode
```

**Test Setup:**
- `tests/setup.js`: Mocks for `matchMedia`, `localStorage`, cleanup
- Vitest configured in `vite.config.js` with jsdom environment
- See `tests/README.md` for detailed testing documentation

### Manual Testing Checklist
- [ ] All pages load without errors
- [ ] Navigation works (desktop + mobile)
- [ ] Theme toggle works (light/dark)
- [ ] Theme persists after page refresh
- [ ] All images load correctly
- [ ] Contact form submits successfully
- [ ] Responsive design works on mobile/tablet/desktop
- [ ] SPA routing works (no 404s on refresh)
- [ ] External links open in new tabs
- [ ] Accessibility: Keyboard navigation, focus indicators
- [ ] Run automated tests: `npm test -- --run`

### Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- No IE11 support (uses modern JavaScript)

## Performance Considerations

### Code Splitting
- **Route-Based Code Splitting:** All routes except `Home.jsx` lazy-loaded with `React.lazy()`
- **Bundle Size Reduction:** 31% reduction (557KB → 383KB main bundle)
- **Loading States:** `PageSkeleton` component provides route-specific loading skeletons
- **Impact:** Faster initial page load, improved Core Web Vitals (LCP, FID)

### Image Optimization
- **Lazy Loading:** Native browser lazy loading enabled by default (`loading="lazy"`)
- **WebP Fallback:** Optional WebP versions with automatic fallback to PNG/JPG
- **Responsive Images:** Optional `srcset` and `sizes` support
- **Image Standards:** Web apps (16:9 PNG), Research/BI/NLP (4:3 SVG)
- **Performance Impact:** Reduced initial load time, improved LCP, better mobile performance

### Tailwind JIT
- Only used classes are included in build
- Configured via `content` globs in `tailwind.config.js`

### Build Output
- Assets are hashed for cache-busting
- Production build optimized and minified by Vite

## SEO & Metadata

### Dynamic Metadata Management
- `HeadMetadata` component centralizes `<title>`, meta tags, Open Graph, Twitter Cards, and canonical URLs
- Each top-level page (Home, Work, About, Contact, Education, Certifications, Publications, Newsletter) passes page-specific titles, descriptions, and keyword sets
- Keywords now reflect actual page content (e.g., Work lists flagship projects, Publications references Magnetic Leadership)

### Structured Data
- `schema` prop on `HeadMetadata` injects JSON-LD scripts
- `personSchema` (Person) applied globally so every major page explicitly references Ted Dickey II with consistent `sameAs` links
- Home page also provides a `websiteSchema` (WebSite) with a `SearchAction` target to unlock sitelinks search box support
- See `docs/seo-and-metadata.md` for step-by-step instructions on adding keywords, schemas, and regenerating the sitemap

### Robots & Sitemap
- `robots.txt` trimmed to the modern `Sitemap` directive pointing at `https://teddickey.com/sitemap.xml`
- `sitemap.xml` refreshed with `<lastmod>` timestamps to highlight recent updates across all public routes

## Analytics & User Tracking

### Google Analytics 4 (GA4)
- **Purpose:** Comprehensive web analytics for tracking user behavior, conversions, and performance
- **Setup:** Requires Measurement ID (`G-XXXXXXXXXX`) from Google Analytics dashboard
- **Integration:** `react-ga4` library for React integration
- **Features:**
  - Page view tracking
  - Custom event tracking (form submissions, button clicks, project views)
  - User flow analysis
  - Audience insights
  - Real-time data
- **Implementation:** Initialize in `main.jsx`, track route changes in `App.jsx`
- **See:** `docs/analytics.md` for complete setup and usage instructions

### Microsoft Clarity
- **Purpose:** Free user behavior analytics with session recordings and heatmaps
- **Setup:** Requires Project ID from Microsoft Clarity dashboard
- **Integration:** Script injection (no npm package needed)
- **Features:**
  - Session recordings (watch user interactions)
  - Heatmaps (click, scroll, move patterns)
  - Dead clicks and rage clicks detection
  - JavaScript error tracking
  - UX insights
- **Implementation:** Initialize in `main.jsx` via `initClarity()` utility
- **See:** `docs/analytics.md` for complete setup and usage instructions

### Privacy Considerations
- **GDPR Compliance:** Cookie consent required before initializing analytics
- **IP Anonymization:** GA4 anonymizes IPs by default
- **Opt-out:** Provide users with opt-out mechanism
- **Privacy Policy:** Update privacy policy with analytics usage disclosure

## Future Enhancements & TODOs

### Potential Improvements
- [x] Add unit tests (Vitest, React Testing Library) - **COMPLETE** (53 tests)
- [ ] Add E2E tests (Playwright, Cypress)
- [ ] Expand test coverage (ImageWithSkeleton, HeadMetadata, PageSkeleton, Contact form integration)
- [ ] Add TypeScript migration
- [ ] Add Storybook for component documentation
- [ ] Optimize images further (WebP conversion for all images)
- [ ] Add PWA support (service worker, manifest)
- [ ] **Add analytics tracking** (Google Analytics, Microsoft Clarity) - **DOCUMENTED** (see `docs/analytics.md`)
- [ ] Add i18n support for multiple languages
- [ ] Integrate external error tracking (Sentry, LogRocket)

### Known Limitations
- No server-side rendering (SSR) - pure SPA
- No authentication/user accounts
- Static content only (no CMS)
- Contact form requires external API endpoint

## Resources & Links

### Documentation

**Root README.md:**
- Enhanced with welcoming introduction and quick start guide
- "5-Minute Quick Start Checklist" for rapid onboarding
- "Common Tasks" section with links to relevant documentation
- Categorized documentation links with emojis for better navigation
- Acts as a gateway to deeper documentation in `docs/` folder

**Visual Diagrams:**
- **Component Hierarchy**: Mermaid flowchart in `docs/architecture.md` showing component relationships
- **Routing Flow**: Sequence diagram illustrating page navigation and transitions
- **Theme System Flow**: Flowchart showing theme toggle and persistence logic
- **Mobile Navigation Flow**: Sequence diagram for mobile menu interactions in `docs/page-transitions.md`

**Key Documentation Files:**
- `docs/README.md`: Documentation index
- `docs/architecture.md`: Architecture overview
- `docs/getting-started.md`: Setup guide
- `docs/development-workflow.md`: Development workflow and best practices
- `docs/deployment.md`: Deployment guide
- `docs/styling-and-theming.md`: Styling guidelines
- `docs/work-catalog.md`: Work page structure
- `docs/assets.md`: Asset management guide
- `docs/contact-form.md`: Contact form implementation (react-hook-form + zod)
- `docs/error-boundaries.md`: Error boundary implementation
- `docs/image-optimization.md`: Image optimization and lazy loading
- `docs/seo-and-metadata.md`: SEO and metadata management
- `docs/analytics.md`: Google Analytics and Microsoft Clarity setup and usage ⭐
- `tests/README.md`: Testing documentation and guidelines

### External Resources
- [Vite Documentation](https://vite.dev/)
- [React Router Documentation](https://reactrouter.com/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Documentation](https://react.dev/)

### Project-Specific
- `SPA-ROUTING-SETUP.md`: CloudFront SPA routing setup
- `scripts/capture-screenshot.mjs`: Screenshot capture utility
- `cloudfront-spa-function.js`: CloudFront Function code

---

**Last Updated:** 2025-01-11  
**Maintained By:** Ted Dickey II  
**Version:** 1.5

**Recent Updates:**
- **Analytics Documentation (2025-01-11):**
  - Created comprehensive analytics documentation (`docs/analytics.md`)
  - Documented Google Analytics 4 (GA4) integration with react-ga4
  - Documented Microsoft Clarity integration with script injection
  - Included setup instructions, usage examples, and best practices
  - Added privacy compliance guidance (GDPR, cookie consent)
  - Ready for implementation when analytics accounts are created
- **Testing Infrastructure (2025-01-11):**
  - Implemented Vitest + React Testing Library for automated testing
  - Created 53 tests covering form validation, error boundaries, and Button component
  - Added test scripts and comprehensive testing documentation
  - Ready for CI/CD integration
- **Error Boundaries Implementation (2025-01-11):**
  - Three-layer error boundary protection (global, route-level, component-level)
  - Centralized error logging utility (`lib/errorLogger.js`)
  - Branded fallback UI with recovery options
  - All routes protected with custom error messages
- **Image Optimization & Lazy Loading (2025-01-11):**
  - Enhanced `ImageWithSkeleton` component with native lazy loading
  - WebP fallback support with automatic fallback
  - Responsive images support (srcset/sizes)
  - All images use lazy loading by default
- **SEO & Structured Data Enhancements (2025-11-17):**
  - Extended `HeadMetadata` to support JSON-LD and reusable `schema` props
  - Added global `personSchema` and homepage `websiteSchema` for rich search results
  - Refined per-page keywords so each route highlights its specific content focus
  - Updated `robots.txt` and `sitemap.xml` (with `<lastmod>`) to match production domain
- **Documentation Enhancements (2025-01-11):**
  - Enhanced root README.md with welcoming introduction and quick start guide
  - Added "5-Minute Quick Start Checklist" for rapid onboarding
  - Added "Common Tasks" section with links to relevant documentation
  - Reorganized documentation section with categorized links and emojis
  - Added visual Mermaid diagrams to architecture documentation:
    - Component hierarchy flowchart
    - Routing flow sequence diagram
    - Theme system flowchart
    - Mobile navigation interaction diagram
  - **Result:** More accessible documentation with visual aids for faster comprehension
- **Mobile Navigation Animation (2025-01-11):**
  - Implemented animated mobile navigation menu using Framer Motion
  - Slide-in from right with backdrop overlay (300ms animation)
  - Staggered menu item animations (50ms delay between items)
  - Respects `prefers-reduced-motion` (fade-only when enabled)
  - Body scroll lock when menu is open
  - Close button and backdrop click to dismiss
  - **Result:** Modern, polished mobile navigation experience
- **Typographic Scale Implementation (2025-01-11):**
  - Implemented semantic typographic tokens in `tailwind.config.js`
  - Replaced raw Tailwind sizes with semantic tokens (`text-headline-1`, `text-body-large`, etc.)
  - Migrated 30+ typographic instances across key pages (Home, Work, About, Contact)
  - Includes responsive variants and proper line heights/font weights
  - **Result:** Consistent, maintainable typography system
- **Brand Token Restructuring & Migration (2025-01-11):**
  - Restructured brand tokens from nested (`brand.primary`) to flattened (`'brand-primary'`) structure
  - **Reason:** Tailwind gradient utilities (`from-*`, `to-*`) require flat color keys - nested structure didn't work
  - Migrated all brand gradients to semantic tokens (26 instances across 10 files)
  - Migration pattern: `from-blue-600 to-purple-600` → `from-brand-primary to-brand-secondary`
  - Files migrated: Button.jsx, Home.jsx, Work.jsx, Contact.jsx, Certifications.jsx, Education.jsx, Publications.jsx, Newsletter.jsx, CTASection.jsx, Footer.jsx
  - Maintained nested aliases for backward compatibility
  - **Result:** All brand gradients now use semantic tokens for maintainable theming
- Brand identity system (color tokens, logo/favicon consistency)
- Typography improvements (line height optimization, font consistency)
- Button interactivity enhancements (hover lift, active states)
- Slate color palette migration for dark mode
- Comprehensive brand guidelines documentation

**Brand Token Evolution:**
1. **Initial Implementation:** Brand tokens added as nested structure (`brand.primary`, `brand.secondary`)
2. **Problem Identified:** Gradient utilities (`from-brand-primary`) didn't work with nested structure
3. **Restructuring (2025-01-11):** Flattened to `'brand-primary'` structure for gradient support
4. **Migration (2025-01-11):** Systematically migrated all 26 brand gradient instances across 10 files
5. **Status:** ✅ COMPLETE - All brand gradients now use semantic tokens

For detailed changelog, see `CHANGELOG.md` in project root.

