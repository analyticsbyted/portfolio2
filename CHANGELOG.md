# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Changed - 2024-12-XX

#### White to Off-White Migration
- **Color System Enhancement**: Replaced all pure white (`#FFFFFF`) backgrounds with semantic off-white tokens
  - **CSS Variables**: Off-white token already configured (`--color-white: 248 247 244` / `#F8F7F4`)
  - **Semantic Tokens**: Replaced `bg-white` with `bg-surface` (general backgrounds) or `bg-card` (card components)
  - **Maintained Contrast**: Kept `text-white` and `border-white` for high-contrast text/borders on colored backgrounds
  - **Glassmorphism Effects**: Preserved transparency effects (`bg-white/20`, `border-white/30`) which automatically use off-white
- **Files Modified**:
  - **Core Components**: `App.jsx`, `ErrorBoundary.jsx`, `CTASection.jsx`, `Header.jsx`, `LogoComparison.jsx`, `LogoComparisonNew.jsx`
  - **Pages**: `Home.jsx`, `About.jsx`, `Work.jsx`, `Certifications.jsx`, `Contact.jsx`, `Publications.jsx`, `Newsletter.jsx`
- **Documentation**: Created `docs/WHITE_TO_OFFWHITE_MIGRATION.md` with complete migration details
- **Result**: Consistent warm aesthetic throughout website, better maintainability with semantic tokens, maintained dark mode compatibility

### Enhanced - 2024-12-XX

#### UI/UX Design Enhancements
- **Enhanced Hero Section**: Added animated gradient backgrounds and floating elements
  - Animated gradient background with blue-purple gradients
  - Three floating blur circles with staggered pulse animations
  - Enhanced visual depth with layered backgrounds
  - Improved badge and button styling with shadows
- **Improved Stats Cards**: Added animated counters, icons, and micro-interactions
  - Animated number counters that count up from 0 to target value
  - Icons for each stat (📊, 🚀, 🎓, 🏢)
  - Gradient borders that appear on hover
  - Enhanced hover effects with scale and shadow transitions
  - Gradient text for numbers using brand colors
  - Scroll-triggered animations using Intersection Observer
- **Custom Hooks**: Created `useCounter` hook for smooth number animations
- **Files Created**: 
  - `src/hooks/useCounter.js` - Custom hook for animated counters
  - `docs/UI_UX_ANALYSIS.md` - Comprehensive UI/UX analysis and recommendations
- **Files Modified**: 
  - `src/pages/Home.jsx` - Enhanced hero section and stats cards
- **Status**: Phase 1 quick wins completed (hero section and stats cards)

### Added - 2025-01-11

#### Analytics Documentation
- **Comprehensive Analytics Guide**: Created `docs/analytics.md` with complete setup and usage instructions
  - **Google Analytics 4 (GA4)**: Integration guide using `react-ga4` library
    - Setup instructions with environment variables
    - Utility functions for tracking page views, events, form submissions
    - Custom event tracking examples (buttons, projects, external links)
    - Dashboard usage instructions and key reports
  - **Microsoft Clarity**: Integration guide with script injection
    - Setup instructions with environment variables
    - Session recordings and heatmaps usage
    - Dead clicks and rage clicks detection
    - UX insights and troubleshooting
  - **Privacy & Compliance**: GDPR compliance guidance, cookie consent implementation
  - **Best Practices**: Performance optimization, event naming conventions, error handling
  - **Troubleshooting**: Common issues and solutions
  - **Files Created**: `docs/analytics.md`
  - **Files Modified**: `docs/context.md`, `docs/README.md`, `README.md`
  - **Status**: Ready for implementation when analytics accounts are created

### Added - 2025-01-XX

#### Testing Infrastructure & Test Suite
- **Test Framework Setup**: Implemented Vitest + React Testing Library for automated testing
  - **Vitest Configuration**: Added test configuration to `vite.config.js` with jsdom environment
  - **Test Setup**: Created `tests/setup.js` with mocks for `matchMedia`, `localStorage`, and cleanup
  - **Test Scripts**: Added `test`, `test:ui`, and `test:run` scripts to `package.json`
  - **Dependencies**: Installed `vitest`, `@testing-library/react`, `@testing-library/jest-dom`, `@testing-library/user-event`, `jsdom`, `@vitest/ui`
- **Test Coverage**:
  - **Form Validation Tests** (`tests/validators.test.js`): 19 tests covering contact form validation
    - Name validation (required, trimming, whitespace handling)
    - Email validation (format, required, trimming)
    - Message validation (minimum length, trimming)
    - Honeypot validation (spam protection)
    - Complete form validation scenarios
  - **ErrorBoundary Tests** (`tests/ErrorBoundary.test.jsx`): 12 tests covering error handling
    - Error catching and fallback UI display
    - Custom error titles and messages
    - Recovery options ("Try Again", "Go Home")
    - Error logging callbacks
    - Error details display
    - Accessibility features
  - **Button Component Tests** (`tests/Button.test.jsx`): 22 tests covering all button variants
    - Button element rendering
    - Link rendering (internal routes)
    - Anchor element rendering (external links)
    - Accessibility (aria-label)
    - Styling and className handling
    - Disabled state
    - Props forwarding
- **Documentation**: Created `tests/README.md` with test setup, running instructions, and writing guidelines
- **Files Created**: `tests/setup.js`, `tests/validators.test.js`, `tests/ErrorBoundary.test.jsx`, `tests/Button.test.jsx`, `tests/README.md`
- **Files Modified**: `vite.config.js`, `package.json`, `docs/development-workflow.md`, `docs/README.md`
- **Result**: 53 passing tests providing confidence in form validation, error handling, and core components

### Added - 2025-01-XX

#### Error Boundaries Implementation
- **Robust Error Handling**: Implemented comprehensive error boundary system with three-layer protection
  - **Global Error Boundary**: Top-level safety net in `main.jsx` wrapping entire application
  - **Route-Level Boundaries**: Each route wrapped with custom error boundary in `App.jsx`
    - Custom error messages per page type
    - Isolated error handling - one page failure doesn't affect others
    - All routes protected: Home, Work, Publications, Newsletter, Certifications, About, Education, Contact, NotFound
  - **Error Logging**: Centralized error logging utility (`lib/errorLogger.js`)
    - Development: Full error details in console with grouping
    - Production: Ready for external services (Sentry, LogRocket) with example code
    - Includes context (component name, route, user action)
  - **Fallback UI**: Branded error messages matching site design
    - Gradient backgrounds using brand colors
    - Recovery options ("Try Again", "Go Home")
    - Error details shown in development mode only
    - Responsive and accessible design
  - **Benefits**:
    - Prevents single component errors from crashing entire application
    - Better UX with helpful error messages instead of blank screens
    - Production resilience for unexpected data, network failures, edge cases
    - Debugging support with centralized error logging
    - Professional polish demonstrating production-ready error handling
  - **Files Created**: `src/components/ErrorBoundary.jsx`, `src/lib/errorLogger.js`, `docs/error-boundaries.md`
  - **Files Modified**: `src/App.jsx`, `src/main.jsx`, `docs/pages-and-components.md`, `docs/context.md`, `docs/README.md`
  - **Result**: Production-ready error handling with graceful degradation and user-friendly fallbacks

### Changed - 2025-01-XX

#### Image Optimization & Lazy Loading
- **Performance Enhancement**: Enhanced `ImageWithSkeleton` component with native lazy loading, WebP fallback, and responsive images
  - **Lazy Loading**: Native browser lazy loading enabled by default (`loading="lazy"`) for all below-the-fold images
    - Images load only when about to enter viewport
    - Reduces initial page load time and bandwidth usage
    - Can be overridden with `loading="eager"` for above-the-fold images
  - **WebP Fallback**: Automatic `<picture>` element when `webpSrc` prop is provided
    - Falls back to original format (PNG/JPG) if WebP not supported
    - No changes to existing images required—WebP versions are optional
  - **Responsive Images**: Supports `srcset` and `sizes` attributes for responsive image loading
    - Browser selects appropriate image size based on viewport and device pixel ratio
    - Existing images remain unchanged—responsive versions are optional
  - **Error Handling**: Graceful degradation with fallback message if image fails to load
  - **Performance Impact**: 
    - Improved Core Web Vitals (LCP, CLS)
    - Reduced bandwidth usage
    - Better mobile performance
    - WebP provides ~25-35% file size reduction (when available)
  - **Fallback Strategy**: All optimizations are optional—existing images work without modification
  - **Files Modified**: `src/components/ImageWithSkeleton.jsx`, `src/pages/Home.jsx`
  - **Documentation**: Created `docs/image-optimization.md`, updated `docs/pages-and-components.md`, `docs/context.md`, `docs/README.md`
  - **Result**: Improved performance with zero breaking changes—all optimizations are backward compatible

### Changed - 2025-01-XX

#### Route-Based Code Splitting Implementation
- **Performance Optimization**: Implemented route-based code splitting for all routes except Home page
  - **Bundle Size Reduction**: Main bundle reduced from 557KB (164.93KB gzipped) to 383KB (121.58KB gzipped)
  - **31% reduction** in initial bundle size (174KB uncompressed, 43KB gzipped)
  - **Impact**: Faster initial page load, improved Core Web Vitals (LCP, FID), better mobile performance
  - **Implementation**:
    - All routes except `Home.jsx` now lazy-loaded with `React.lazy()`
    - Created `PageSkeleton` component with route-specific loading skeletons
    - Each route wrapped in `<Suspense>` with appropriate skeleton variant
    - Route chunks loaded on-demand (2-92KB each)
  - **Routes Lazy-Loaded**: Work, About, Contact, Education, Certifications, Publications, Newsletter, NotFound
  - **Files Modified**: `src/App.jsx`, created `src/components/PageSkeleton.jsx`
  - **Documentation**: Updated `docs/context.md`, `docs/development-workflow.md`, `docs/pages-and-components.md`
  - **Result**: Significant performance improvement with minimal user-visible delay (~50-200ms per route)

### Changed - 2025-01-XX

#### Contact Form Refactor
- **Migration to react-hook-form + zod**: Refactored contact form from custom hook to react-hook-form with zod validation
  - **Benefits**: Better performance (minimal re-renders), field-level error messages, type-safe validation, cleaner code
  - **Implementation**:
    - Replaced custom `useContactForm` hook with `useForm` from react-hook-form
    - Added zod validation schema in `src/lib/validators.js`
    - Integrated `zodResolver` for seamless validation
    - Field-level error messages displayed below each input
    - Server errors handled via `setError('root', ...)` and displayed via `errors.root.message`
  - **Validation**: All fields trimmed before validation, email format validation, minimum message length (10 chars), honeypot spam protection handled by zod schema
  - **Dependencies Added**: `react-hook-form` (^7.66.1), `zod` (^3.25.76), `@hookform/resolvers` (^5.2.2)
  - **Files Modified**: `src/pages/Contact.jsx`, `src/lib/validators.js` (new), removed `src/hooks/useContactForm.js`
  - **Documentation**: Updated `docs/contact-form.md`, `docs/context.md`, `docs/pages-and-components.md`, `docs/architecture.md`, `docs/development-workflow.md` to reflect new implementation
  - **Payload Source**: Changed from `portfolio-contact-form` to `portfolio-contact-form-rhf` for tracking

### Added - 2025-11-17

#### SEO & Structured Data
- **HeadMetadata Enhancements**: Added `schema` prop support to inject JSON-LD `<script type="application/ld+json">`.
- **Structured Data**:
  - `personSchema` applied across all top-level pages (Home, Work, About, Contact, Education, Certifications, Publications, Newsletter).
  - `websiteSchema` added to Home page to enable Google sitelinks search box eligibility.
- **Keywords & Metadata**: Refined per-page keyword lists so each route highlights its specific content focus (e.g., flagship projects on Work, Magnetic Leadership on Publications).
- **Robots & Sitemap**:
  - `robots.txt` simplified to the modern `Sitemap` directive pointing at `https://teddickey.com/sitemap.xml`.
  - `sitemap.xml` updated with `<lastmod>` timestamps for every entry to highlight recent activity.
- **Sitemap Automation**: Added `scripts/generate-sitemap.mjs` plus `npm run generate:sitemap` to regenerate the sitemap programmatically.
- **Documentation**: Created `docs/seo-and-metadata.md` and expanded `docs/context.md`/`docs/README.md` with SEO instructions.
- **Files Modified**: `src/components/HeadMetadata.jsx`, `src/seo/personSchema.js`, `src/seo/websiteSchema.js`, page files, `scripts/generate-sitemap.mjs`, `public/robots.txt`, `public/sitemap.xml`, documentation, `package.json`.

### Added - 2025-01-11

#### Documentation Enhancements
- **Enhanced Root README.md**: Improved onboarding experience with:
  - Welcome message directing new users to `docs/context.md`
  - "First Time Setup" section with step-by-step instructions
  - "5-Minute Quick Start Checklist" for rapid onboarding
  - "Common Tasks" section with links to relevant documentation:
    - Adding new projects to portfolio
    - Adding new pages
    - Modifying typography and brand colors
    - Troubleshooting common issues
  - Reorganized "Documentation" section with categorized links and emojis
  - Better organization and navigation flow
- **Visual Diagrams in Architecture Documentation**:
  - **Component Hierarchy Diagram**: Mermaid flowchart showing component relationships
  - **Routing Flow Diagram**: Sequence diagram illustrating page navigation flow
  - **Theme System Flow Diagram**: Flowchart showing theme toggle and persistence logic
  - **Mobile Navigation Flow Diagram**: Sequence diagram for mobile menu interactions
- **Files Modified**:
  - `README.md` - Enhanced with quick start, common tasks, and better organization
  - `docs/architecture.md` - Added 3 Mermaid diagrams (component hierarchy, routing, theme)
  - `docs/page-transitions.md` - Added mobile navigation interaction diagram
- **Result**: More accessible documentation with visual aids for faster comprehension

### Added - 2025-01-11

#### Mobile Navigation Animation
- **Animated Mobile Menu**: Implemented smooth slide-in navigation using Framer Motion
  - Slide-in animation from right (300ms) with custom easing
  - Backdrop overlay with fade animation (200ms)
  - Staggered menu item animations (50ms delay between items)
  - Close button at top of menu
  - Body scroll lock when menu is open
  - Click backdrop to dismiss menu
- **Accessibility**: Respects `prefers-reduced-motion` preference
  - Full motion: Slide + fade with stagger
  - Reduced motion: Fade only (150ms, no stagger)
- **Implementation**: Uses `AnimatePresence` and `motion.div` from Framer Motion
- **Files Modified**: `src/App.jsx`
- **Result**: Modern, polished mobile navigation experience

### Changed - 2025-01-11

#### Typographic Scale Implementation (COMPLETED)
- **Semantic Typographic Tokens**: Implemented semantic typographic scale in `tailwind.config.js`
  - Replaced raw Tailwind sizes (`text-5xl`) with semantic tokens (`text-headline-1`)
  - **Headlines**: `headline-1` (56px/60px/72px), `headline-2` (36px), `headline-3` (24px/30px)
  - **Body Text**: `body-large` (20px/24px), `body` (16px), `body-md` (18px), `body-small` (14px)
  - **Special**: `stat-value` (30px), `button` (18px), `badge` (14px)
  - Includes responsive variants (mobile → tablet → desktop)
  - Proper line heights and font weights included in token definitions
- **Component Migration**: Migrated typography across key pages and components
  - **Home.jsx**: Hero headlines, section headings, body text, buttons, stats (15+ instances)
  - **Work.jsx**: Hero headline, card titles, buttons, badges (10+ instances)
  - **About.jsx**: Hero headline, body text
  - **Contact.jsx**: Hero headline, body text
  - **Button.jsx**: Default button text size
  - **PageSubtitle.jsx**: Subtitle text size
  - **Total**: 30+ typographic instances migrated to semantic tokens
- **Migration Pattern**:
  - `text-5xl md:text-6xl lg:text-7xl` → `text-headline-1 md:text-headline-1-md lg:text-headline-1-lg`
  - `text-4xl` → `text-headline-2`
  - `text-2xl md:text-3xl` → `text-headline-3 md:text-headline-3-md`
  - `text-xl md:text-2xl` → `text-body-large md:text-body-large-md`
  - `text-lg` → `text-button` (buttons) or `text-body-md` (body)
  - `text-sm` → `text-badge` (badges) or `text-body-small` (captions)
- **Benefits**: Consistency, maintainability, semantic clarity, responsive by default

#### Brand Token Migration (COMPLETED)
- **Restructured Brand Tokens**: Flattened brand color tokens for gradient support
  - Changed from nested `brand.primary` to flat `'brand-primary'` structure
  - Enables gradient utilities: `from-brand-primary to-brand-secondary` (now works!)
  - Maintained nested aliases for backward compatibility
  - **Migration Status**: ✅ **COMPLETE** - All brand gradients migrated to semantic tokens
- **Component Migration**: Migrated all brand gradients across the codebase
  - **Button.jsx**: Default button styles now use `bg-brand-primary`
  - **Home.jsx**: Hero badge, headline gradient, buttons, 3-pillars borders, featured project (8 instances)
  - **Work.jsx**: Headline gradient, tab buttons, card gradient bars, project buttons (6 instances)
  - **Contact.jsx**: Headline gradient, submit button (2 instances)
  - **Certifications.jsx**: Headline gradient, verify button (2 instances)
  - **Education.jsx**: Headline gradient, tab button (2 instances)
  - **Publications.jsx**: Headline gradient (1 instance)
  - **Newsletter.jsx**: Headline gradient, section background, subscribe button (3 instances)
  - **CTASection.jsx**: Section background gradient (1 instance)
  - **Footer.jsx**: Footer gradient (1 instance)
  - **Total**: 26 brand gradient instances migrated to semantic tokens
- **Migration Pattern**: 
  - `from-blue-600 to-purple-600` → `from-brand-primary to-brand-secondary`
  - `hover:from-blue-700 hover:to-purple-700` → `hover:from-brand-accent hover:to-brand-accent-alt`
  - `from-blue-600/20 to-purple-600/20` → `from-brand-primary/20 to-brand-secondary/20`
  - `bg-blue-600` → `bg-brand-primary`
  - `border-blue-600` → `border-brand-primary`

### Added - 2025-01-11

#### Brand Identity & Visual System
- **Brand Color Tokens**: Added semantic brand color tokens to `tailwind.config.js`
  - `brand-primary` (#2563EB - blue-600)
  - `brand-secondary` (#9333EA - purple-600)
  - `brand-accent` (#1D4ED8 - blue-700)
  - `brand-accentAlt` (#7E22CE - purple-700)
  - Enables future migration: `bg-brand-primary`, `text-brand-secondary`, etc.
- **Logo & Favicon Consistency**: Updated `public/favicon-td.svg` to match logo style
  - Changed from black-on-white to blue-to-purple gradient background
  - Maintains TD monogram with white serif letters
  - Ensures brand consistency across all touchpoints
- **Footer Gradient Alignment**: Updated footer to use primary brand gradient pattern
  - Changed from `gray-900 via-blue-900` to `blue-600 via-purple-600`
  - Dark mode uses `blue-700 via-purple-700` for deeper variants
  - Aligns with brand identity across all pages
- **Brand Guidelines Document**: Created comprehensive `docs/brand-guidelines.md`
  - Color palette specifications (primary gradient, Slate neutrals)
  - Typography scale and font pairing rules
  - Logo usage rules and specifications
  - Component patterns (buttons, cards, gradients)
  - Dark mode guidelines
  - Accessibility checklist

#### Typography Improvements
- **Line Height Optimization**: Enhanced Source Serif Pro body text readability
  - Added custom line height utilities to `tailwind.config.js`:
    - `leading-serif`: 1.75 (optimal for serif fonts)
    - `leading-serif-tight`: 1.65 (for shorter paragraphs)
  - Updated global CSS (`src/index.css`) with automatic line height for `font-body`
  - Applies 1.75 line height to all body paragraphs (up from 1.625)
  - Improves readability across all pages
- **Font Consistency Fix**: Standardized typography across all pages
  - Removed `font-headline` (Inter) from body paragraphs
  - All body text now inherits `font-body` (Source Serif Pro) from app wrapper
  - Headlines and CTAs correctly use `font-headline` (Inter)
  - Ensures proper typography pairing (Inter for emphasis, Serif for body)

#### Button Interactivity Enhancement
- **Hover Effects**: Added consistent lift effects to all buttons
  - Primary gradient buttons: `hover:-translate-y-1` with `hover:shadow-xl`
  - Secondary buttons: Same lift effect for consistency
  - Enhanced visual feedback on interaction
- **Active States**: Implemented click feedback on all buttons
  - `active:translate-y-0` (returns to original position)
  - `active:shadow-md` (reduced shadow)
  - `active:bg-blue-800` (darker background for solid buttons)
  - Immediate feedback on click/tap
- **Button Component Updates**: Enhanced `src/components/Button.jsx`
  - Updated base class with `transition-all duration-200`
  - Added `disabled:cursor-not-allowed` for better UX
  - Default styles include hover lift and active states
- **Inline Buttons**: Updated all inline buttons across pages
  - Home page: Hero CTAs, featured project links, "See outcomes" button
  - Work page: Project card buttons, web app CTAs
  - Contact page: Submit button
  - CTA Section component: Primary and secondary buttons

#### Color System Improvements
- **Slate Palette Migration**: Updated dark mode to use Slate colors instead of Gray
  - `--color-surface`: Changed from gray-900 to slate-900 (warmer tone)
  - `--color-card`: Changed from gray-800 to slate-800
  - `--color-border`: Changed from gray-700 to slate-700
  - `--color-muted`: Changed from gray-800 to slate-800
- **Text Color Variables**: Added Slate text colors for dark mode
  - `--color-text-body`: slate-300 (#CBD5E1) - highly readable body text
  - `--color-text-headline`: slate-100 (#F1F5F9) - bright off-white for headlines
  - Enables future migration from hardcoded `gray-*` to semantic tokens

### Changed - 2025-01-11

- **Tailwind Config**: Extended with brand tokens and custom line heights
- **Global CSS**: Added automatic line height rules for Source Serif Pro
- **Button Interactions**: Standardized hover and active states across all buttons
- **Footer**: Updated gradient to match primary brand pattern

### Documentation - 2025-01-11

- **Brand Guidelines**: Created `docs/brand-guidelines.md` with comprehensive brand specifications
- **Context Guide**: Updated `docs/context.md` with recent changes (branding, typography, interactions)
- **Documentation Index**: Updated `docs/README.md` to include brand guidelines
- **CHANGELOG**: Created this file to track all project changes

## [Previous Sessions]

### Page Transitions (Framer Motion)
- Implemented Framer Motion page transitions
- Created `AnimatedPage` component with accessibility support
- Added `prefers-reduced-motion` detection for inclusive animations
- Refactored `App.jsx` to use `useRoutes` + `cloneElement` pattern

### Typography Pairing
- Implemented Inter (headlines/CTAs) + Source Serif Pro (body) pairing
- Added Google Fonts links in `index.html`
- Configured Tailwind font families: `font-headline` and `font-body`

### Project Additions
- Added "Equity Screener" project to Web Development tab
- Added "Economic KPI Pulse" project
- Added "Movie Explorer" and "TV Explorer" projects with screenshots
- Updated featured projects on homepage

### Portfolio Improvements
- Updated navbar label from "Work" to "Portfolio"
- Added subtitles to Portfolio tabs for better context
- Implemented line clamping for card content (Challenge/Solution/Impact)
- Added gradient bar at top of poster frames
- Standardized card image heights and padding

### Font & Styling Consistency
- Applied Inter globally for headlines and CTAs
- Applied Source Serif Pro for body text
- Standardized font sizes across Portfolio cards
- Tightened vertical spacing on Portfolio page

---

## Future Considerations

### High Priority
- [ ] Migrate hardcoded `blue-600`/`purple-600` colors to brand tokens
- [ ] Apply Slate text color variables to replace `gray-*` in dark mode
- [ ] Standardize spacing scale across all components

### Medium Priority
- [ ] Add Open Graph/Twitter card meta tags with brand colors
- [ ] Create alternate logo variations (light/dark, monochrome)
- [ ] Add unit tests for components
- [ ] Optimize images further (WebP conversion)

### Low Priority
- [ ] Add Storybook for component documentation
- [ ] Add PWA support (service worker, manifest)
- [ ] Add i18n support for multiple languages

---

**Note**: This changelog documents significant changes. For detailed implementation notes, see `docs/context.md` and `docs/brand-guidelines.md`.

