# Pages & Components

This document describes all pages and reusable components in the portfolio application.

## Pages (`src/pages`)

### Home.jsx
**Purpose:** Landing page with hero, KPIs, featured project, services, testimonials

**Sections:**
1. **Hero:** Headline with gradient badge, subtitle, CTAs ("Start Your Project", "View My Work")
2. **KPI Stats Grid:** 4 cards (Years Experience, Projects Delivered, Certifications, Industries)
3. **Featured Project Strip:** Highlights a web app with poster image and dual CTAs
4. **3-Pillars ("What I Do"):** Web Apps, AI/Agents, Data Platforms (links to Work tabs)
5. **"How I Deliver Results" Grid:** 2x2 outcome-focused proof cards
6. **Testimonials:** Rotating carousel with client quotes
7. **Technologies:** Badge list of tools/technologies
8. **CTA Section:** Final call-to-action block

**Typography:**
- Headlines use `font-headline` (Inter)
- Body text uses `font-body` (Source Serif Pro)

**State:**
- `isVisible`: Controls fade-in animation on mount
- `currentTestimonial`: Rotates testimonials every 5 seconds

**Imports:**
- Poster images from `src/assets/webapps/`
- Components: `Button`, `Card`, `CTASection`

### Work.jsx
**Purpose:** Portfolio/work showcase with tabbed navigation

**Structure:**
- **Tabs:** 6 categories (Predictive Modeling & ML, Data Analysis / Operations, BI / Dashboards, NLP, Web Development, Research)
- **Per-tab Subtitles:** Displayed via `PageSubtitle` component under tab bar
- **Project Cards:** Grid layout (1 column mobile, 2 columns desktop)

**Tabs:**
```javascript
const tabs = [
  { name: 'Predictive Modeling & ML', key: 'ds' },
  { name: 'Data Analysis / Operations', key: 'da' },
  { name: 'Business Intelligence / Dashboards', key: 'bi' },
  { name: 'NLP & Text Analytics', key: 'nlp' },
  { name: 'Web Development', key: 'web' },
  { name: 'Research', key: 'research' }
];
```

**Project Arrays:**
- `dataScienceProjects`: ML/classification projects
- `dataAnalysisProjects`: ETL, forecasting, operations analysis
- `biProjects`: Tableau, Power BI dashboards
- `nlpProjects`: Text analytics, sentiment analysis
- `webDevProjects`: React/TypeScript web apps
- `researchProjects`: Academic research projects

**Card Schema:**
```javascript
{
  title: string,              // Project title
  problem: string,            // Challenge (collapsible, line-clamped)
  approach: string,           // Solution (collapsible, line-clamped)
  result: string,             // Impact (collapsible, line-clamped)
  img: importedAsset,         // Poster image
  link: string,               // Primary CTA URL
  linkLabel: string,          // Primary CTA label
  demoLink?: string,          // Optional secondary CTA (live demo)
  demoLabel?: string,         // Optional secondary CTA label
  repoLink?: string,          // Optional repo link (for web apps)
  repoLabel?: string,         // Optional repo label
  skills: string[]            // Technology badges
}
```

**Features:**
- **Line Clamping:** Challenge/Solution/Impact paragraphs use `.line-clamp-3` when collapsed
- **Expand/Collapse:** Click to expand full text
- **Gradient Bar:** Thin gradient bar at top of poster frame
- **Hover Effects:** `hover:shadow-xl transition-shadow` on cards
- **Focus Visible:** `focus-visible:ring-2 focus-visible:ring-blue-400/60` for accessibility
- **Dual CTAs:** Some projects have both "View Repo" and "Live Demo" buttons

**Image Handling:**
- Poster images imported at top of file
- Displayed via `ImageWithSkeleton` component
- Use `object-contain` within fixed-height frames to prevent cropping

**Lazy Loading:**
- Component is lazy-loaded in `App.jsx` for code splitting
- Suspense fallback shows skeleton cards during load

### About.jsx
**Purpose:** Professional background and expertise overview

**Content:**
- Headline and subtitle using `font-headline`
- Professional summary paragraph using `font-body`
- Highlights web development, AI agents, and data platforms expertise

### Education.jsx
**Purpose:** Academic credentials and educational background

**Structure:**
- Education timeline or list
- Degree information, institutions, dates

### Certifications.jsx
**Purpose:** Professional certifications grid display

**Structure:**
- Grid layout of certification cards
- Each card shows badge image, title, issuer, date
- Uses `Card` component for consistency

**Assets:**
- Certification badges in `src/assets/certifications/`
- Format: WebP or PNG (prefer WebP for smaller sizes)

### Publications.jsx
**Purpose:** Research publications and articles list

**Content:**
- List of publications with titles, authors, venues, links
- Uses `publicationHelper.js` for data structure

### Contact.jsx
**Purpose:** Contact form page with react-hook-form + zod validation

**Structure:**
- Value proposition headline/subtitle
- Contact form (name, email, message)
- Uses `useForm` hook from react-hook-form with zod validation

**Form Validation:**
- **Schema:** `src/lib/validators.js` (zod schema)
- Required fields: name, email, message (minimum 10 characters)
- Email format validation via zod
- All fields trimmed before validation
- Honeypot spam detection (handled by zod schema)

**Error Handling:**
- Field-level error messages (displayed below each field)
- Server errors displayed via `errors.root.message`
- Red border styling on invalid fields

**Submission:**
- POSTs JSON to `VITE_AWS_HTTPAPI_URL` endpoint
- Uses `isSubmitting` from react-hook-form for loading state
- Form resets automatically on success using `reset()`
- Success/error messages displayed to user

**See:** `docs/contact-form.md` for detailed form documentation

### Newsletter.jsx
**Purpose:** Newsletter signup/CTA page

**Content:**
- Newsletter signup form or CTA
- Description of newsletter content

### NotFound.jsx
**Purpose:** 404 error page

**Structure:**
- Error message and navigation links
- User-friendly 404 handling for invalid routes

### Topic-Specific Pages
**Location:** `src/pages/ClassificationPage.jsx`, `ForecastPage.jsx`, `IntroPage.jsx`, `MLPage.jsx`, `SentimentPage.jsx`, `SupplyPage.jsx`, `VizzesPage.jsx`

**Purpose:** Detailed pages for specific portfolio topics/projects

**Note:** These pages may use section components from `src/components/sections/`

## Shared Components (`src/components`)

### PageSkeleton.jsx
**Purpose:** Reusable loading skeleton component for route-based code splitting

**Variants:**
- `default`: Generic page skeleton (hero + content)
- `work`: Work page skeleton (grid of project cards)
- `certifications`: Certifications page skeleton (grid layout)
- `publications`: Publications page skeleton (list layout)
- `contact`: Contact page skeleton (form layout)
- `education`: Education page skeleton (tabs + content)
- `newsletter`: Newsletter page skeleton
- `about`: About page skeleton
- `notfound`: NotFound page skeleton (minimal)

**Usage:**
```javascript
<Suspense fallback={<PageSkeleton variant="work" />}>
  <Work />
</Suspense>
```

**Features:**
- Consistent loading states across all routes
- Route-specific skeletons matching page layouts
- Smooth animations with `animate-pulse`
- Dark mode support via Tailwind classes

## Shared Components (`src/components`)

### Layout & Shell Components

#### Layout.jsx
**Purpose:** Wrapper component including `Background` and `Footer`

**Usage:** Wraps page content with background and footer elements

#### Background.jsx
**Purpose:** Visual background layer for pages

**Structure:** Decorative background element

#### Footer.jsx
**Purpose:** Global footer component

**Content:**
- Links to social media, contact, etc.
- Copyright information
- Site navigation links

#### Header.jsx
**Purpose:** Page header component (may be used in some layouts)

**Note:** Navigation is handled in `App.jsx`, not a separate Header component

### App.jsx
**Purpose:** Root component, handles routing, navigation, theme, layout shell

**Key Features:**
- Route configuration using `useRoutes` hook
- Navigation bar (desktop + mobile responsive)
- **Mobile Navigation Animation:**
  - Slide-in from right with Framer Motion (300ms)
  - Backdrop overlay with fade animation
  - Staggered menu item animations (50ms delay)
  - Respects `prefers-reduced-motion` (fade-only when enabled)
  - Body scroll lock when menu is open
  - Close button and backdrop click to dismiss
- Theme toggle (light/dark) with localStorage persistence
- Page transitions via `AnimatePresence` and `AnimatedPage` wrapper
- Lazy loading for Work page with Suspense fallback

**State:**
- `theme`: Light/dark mode preference
- `mobileOpen`: Controls mobile menu visibility
- `shouldReduceMotion`: Detects user's motion preference for accessibility

**Implementation Details:**
- Uses `AnimatePresence` for mobile menu enter/exit animations
- Menu slides in from right (`x: '100%'` → `x: 0`)
- Menu items use stagger animation via `variants` and `staggerChildren`
- Backdrop uses fixed positioning with `z-40`, menu uses `z-50`

#### Main.jsx
**Purpose:** Main content wrapper with section rendering logic

**Features:**
- Renders different sections based on `activeSection` prop
- Modal overlay for section content
- Close button functionality

#### PageLayout.jsx
**Purpose:** Reusable page layout wrapper

**Structure:** Provides consistent page structure

#### PageTitle.jsx
**Purpose:** Reusable page title component

**Usage:** Consistent page title styling across pages

#### PageSubtitle.jsx
**Purpose:** Reusable page subtitle component

**Usage:** 
- Used in `Work.jsx` for per-tab subtitles
- Font size: `text-xl md:text-2xl`
- Typography: `font-headline` (Inter)

### UI Components

#### Button.jsx
**Purpose:** Link-styled button component

**Props:**
- `href`: Link URL
- `className`: Additional CSS classes
- `ariaLabel`: Accessibility label
- `children`: Button text/content

**Features:**
- Styled as button but renders as link (`<a>` tag)
- Typography: `font-headline` (Inter)
- Hover and focus states

#### CTASection.jsx
**Purpose:** Call-to-action block used on pages (e.g., Home)

**Structure:**
- Headline and description
- CTA button
- Optional background styling

**Usage:** Final CTA section on landing page

#### Card.jsx
**Purpose:** Reusable card shell used across Work and Certifications

**Props:**
- `children`: Card content
- `className`: Additional CSS classes

**Features:**
- Hover effects: `hover:shadow-xl transition-shadow`
- Focus visible: `focus-visible:ring-2 focus-visible:ring-blue-400/60`
- Cursor pointer: `cursor-pointer`
- Standard styling: `bg-card border-2 border-border rounded-2xl`

**Usage:**
- Project cards in `Work.jsx`
- Certification cards in `Certifications.jsx`

#### ImageWithSkeleton.jsx
**Purpose:** Enhanced image loader with lazy loading, responsive images, WebP fallback, and skeleton placeholder

**Location:** `src/components/ImageWithSkeleton.jsx`

**Props:**
- `src`: Image source (imported asset or URL) - **required**
- `alt`: Alt text for accessibility - **required**
- `className`: Additional CSS classes (typically `h-full w-full object-contain`)
- `webpSrc`: Optional WebP version (enables `<picture>` element with automatic fallback)
- `srcset`: Optional srcset attribute for responsive images
- `sizes`: Optional sizes attribute for responsive images
- `loading`: Loading strategy - `'lazy'` (default), `'eager'`, or `false`
- `onLoad`: Callback function when image loads
- `...rest`: Additional img attributes

**Features:**
- **Lazy Loading:** Native browser lazy loading enabled by default (`loading="lazy"`)
  - Images below the fold load only when about to enter viewport
  - Reduces initial page load time and bandwidth usage
  - Can be overridden with `loading="eager"` for above-the-fold images
- **WebP Fallback:** Automatic `<picture>` element when `webpSrc` is provided
  - Falls back to original format (PNG/JPG) if WebP not supported
  - No changes to existing images required—WebP versions are optional
- **Responsive Images:** Supports `srcset` and `sizes` for responsive image loading
  - Browser selects appropriate image size based on viewport and device pixel ratio
  - Existing images remain unchanged—responsive versions are optional
- **Loading States:** Shows skeleton placeholder (`bg-muted/60 animate-pulse`) while loading
- **Error Handling:** Displays fallback message if image fails to load
- **Smooth Transitions:** Fades in image when loaded (`opacity-0` → visible)

**Usage:**
```jsx
// Basic usage (lazy loading enabled by default)
<ImageWithSkeleton
  src={posterImage}
  alt="Project poster"
  className="h-full w-full object-contain"
/>

// With WebP fallback
<ImageWithSkeleton
  src={posterPng}
  webpSrc={posterWebp}
  alt="Project poster"
  className="h-full w-full object-contain"
/>

// Eager loading for above-the-fold images
<ImageWithSkeleton
  src={heroImage}
  alt="Hero image"
  loading="eager"
  className="w-full"
/>
```

**Used In:**
- All poster images in `Work.jsx` (lazy loading enabled)
- Featured project image in `Home.jsx` (lazy loading enabled)
- Certification badges in `Certifications.jsx`
- `PosterFrame.jsx` component (uses `ImageWithSkeleton` internally)

**See Also:** [Image Optimization Documentation](./image-optimization.md) for detailed optimization strategy and migration guide.

#### PosterFrame.jsx
**Purpose:** Wrapper for poster images with consistent styling

**Structure:**
- Fixed-height frame with gradient bar at top
- Contains `ImageWithSkeleton` component
- Padding and rounded corners

#### LogoComparison*.jsx
**Purpose:** Logo comparison variants (may be used in About or specific pages)

**Note:** `LogoComparison.jsx`, `LogoComparisonNew.jsx` exist but may not be actively used

#### AnimatedPage.jsx
**Purpose:** Wrapper component for page transitions using Framer Motion

**Location:** `src/components/AnimatedPage.jsx`

**Features:**
- **Accessibility:** Respects `prefers-reduced-motion` preference
  - Reduced motion: Fade only (no slide)
  - Full motion: Slide (20px) + fade
- **Animation:** Subtle slide and fade transitions
  - Enter: `opacity: 0, x: 20` → `opacity: 1, x: 0`
  - Exit: `opacity: 1, x: 0` → `opacity: 0, x: -20`
- **Duration:** 300ms (full motion) or 150ms (reduced motion)
- **Easing:** Custom cubic-bezier `[0.22, 1, 0.36, 1]` for smooth feel

**Usage:**
```javascript
// In routes array
{
  path: '/work',
  element: (
    <AnimatedPage>
      <Work />
    </AnimatedPage>
  ),
}
```

**Implementation:**
- Detects `prefers-reduced-motion` on mount
- Listens for changes to motion preference
- Switches between reduced and full motion animations
- Uses Framer Motion's `motion.div` with variants

**Props:**
- `children`: Page component to wrap

**See Also:** `docs/routing-and-navigation.md` for page transition details

#### ErrorBoundary.jsx
**Purpose:** Error boundary component that catches JavaScript errors and displays fallback UI

**Location:** `src/components/ErrorBoundary.jsx`

**Features:**
- **Error Catching:** Catches JavaScript errors in child component tree
- **Fallback UI:** Displays branded error message with recovery options
- **Error Logging:** Integrates with centralized error logger (`lib/errorLogger.js`)
- **Development Mode:** Shows full error details (stack traces, component stacks)
- **Recovery Options:** "Try Again" button and "Go Home" link
- **Customizable:** Custom error titles and messages per route

**Props:**
- `children` - Child components to wrap
- `fallbackTitle` - Custom title for error message (default: "Something went wrong")
- `fallbackMessage` - Custom message for the error
- `onError` - Optional callback when error occurs (for custom logging)
- `showDetails` - Whether to show error details (default: development mode only)

**Usage:**
```jsx
<ErrorBoundary
  fallbackTitle="Portfolio Page Error"
  fallbackMessage="We encountered an error loading the portfolio."
  onError={customErrorHandler}
>
  <YourComponent />
</ErrorBoundary>
```

**Implementation:**
- Uses React class component (required for error boundaries)
- Implements `componentDidCatch` and `static getDerivedStateFromError`
- Three-layer protection: global, route-level, and component-level
- All routes wrapped with route-specific error boundaries
- Global boundary in `main.jsx` as last resort

**Error Logging:**
- Uses `logError` from `lib/errorLogger.js`
- Development: Full error details in console
- Production: Ready for external services (Sentry, LogRocket)
- Includes context (component name, route, user action)

**See Also:** [Error Boundaries Documentation](./error-boundaries.md) for detailed implementation guide

## Section Components (`src/components/sections`)

**Purpose:** Encapsulate reusable content sections that can be composed within pages

**Components:**
- `IntroSection.jsx`: Introduction section
- `MLSection.jsx`: Machine learning section
- `ClassificationSection.jsx`: Classification project section
- `ForecastSection.jsx`: Forecasting section
- `SentimentSection.jsx`: Sentiment analysis section
- `SupplySection.jsx`: Supply chain section
- `VizzesSection.jsx`: Visualizations section
- `ContactSection.jsx`: Contact form section

**Usage:** 
- Used in topic-specific pages
- May be used in `Main.jsx` for modal sections

## Validation Schemas

### validators.js
**Location:** `src/lib/validators.js`

**Purpose:** Zod validation schemas for form validation

**Schemas:**
- `contactFormSchema`: Contact form validation schema
  - Validates name (required, trimmed, min 1 char)
  - Validates email (required, trimmed, valid email format)
  - Validates message (required, trimmed, min 10 chars)
  - Validates honeypot field (must be empty)

**Usage:**
```javascript
import { contactFormSchema } from '../lib/validators';
import { zodResolver } from '@hookform/resolvers/zod';

const { register, handleSubmit, formState: { errors } } = useForm({
  resolver: zodResolver(contactFormSchema),
});
```

**See:** `docs/contact-form.md` for detailed form documentation

## Hooks

**Note:** Custom hooks are used sparingly in this project. The contact form uses react-hook-form's `useForm` hook directly in the component. See `Contact.jsx` and `docs/contact-form.md` for details.

## Typography Utilities

**Font Families:**
- `font-headline`: Inter (for major titles, subtitles, CTAs)
- `font-body`: Source Serif Pro (app-wide body font)
- `font-sans`: Inter (default sans-serif fallback)

**Usage:**
- Headlines and CTAs should use `font-headline`
- Body text should use `font-body`
- Configured in `tailwind.config.js` and loaded via Google Fonts in `index.html`

## Component Patterns

### Import Order
1. External libraries (React, React Router, etc.)
2. Internal components
3. Hooks
4. Assets (images, SVGs)
5. Utilities/helpers

### Component Structure
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

### Asset Imports
```javascript
// Import images at top of file
import posterImage from '../assets/webapps/project-poster.png';

// Use in component
<img src={posterImage} alt="Project poster" />
```

## Accessibility

**Features:**
- Semantic HTML elements
- ARIA labels on interactive elements
- Keyboard navigation support
- Focus visible indicators (`focus-visible:ring-2`)
- Alt text on all images

**Best Practices:**
- Use semantic HTML (`<nav>`, `<main>`, `<article>`, etc.)
- Provide `ariaLabel` on buttons/links
- Ensure color contrast meets WCAG guidelines
- Test with keyboard navigation
- Test with screen readers

## Responsive Design

**Breakpoints:**
- Mobile: Default styles
- Tablet: `md:` prefix (768px+)
- Desktop: `lg:` prefix (1024px+)

**Common Patterns:**
- Grid: `grid-cols-1 lg:grid-cols-2` (1 column mobile, 2 columns desktop)
- Padding: `px-4 md:px-8` (smaller padding on mobile)
- Text: `text-xl md:text-2xl` (smaller text on mobile)
- Navigation: Hidden on mobile, visible on desktop (`hidden lg:flex`)

See `docs/styling-and-theming.md` for detailed responsive design guidelines.
