## Routing & Navigation

### Router Setup
- The app uses `BrowserRouter` (HTML5 history API)
- Routes are declared in `src/App.jsx` using `useRoutes` hook with routes array
- Each route element is wrapped in `<AnimatedPage>` for page transitions
- A `NotFound` page handles unmatched paths

### Page Transitions
- **Library:** Framer Motion 12.23.24
- **Pattern:** `useRoutes` + `cloneElement` + `AnimatePresence`
- **Animation:** Subtle slide (20px) + fade (opacity) transitions
- **Duration:** 300ms (0.15s for reduced motion users)
- **Accessibility:** Respects `prefers-reduced-motion` (fade only)
- **Mode:** `mode="wait"` ensures exit animation completes before enter

**Implementation:**
- `AnimatedPage` component wraps each route element
- `AnimatePresence` wraps the result of `useRoutes`
- `cloneElement` adds `key` prop based on `location.pathname` for tracking
- See `docs/pages-and-components.md` for AnimatedPage details

### Route Map (current)
- `/` → `Home` (eagerly loaded - critical path)
- `/work` → `Work` (lazy loaded)
- `/about` → `About` (lazy loaded)
- `/education` → `Education` (lazy loaded)
- `/certifications` → `Certifications` (lazy loaded)
- `/publications` → `Publications` (lazy loaded)
- `/newsletter` → `Newsletter` (lazy loaded)
- `/contact` → `Contact` (lazy loaded)
- `*` → `NotFound` (lazy loaded)

### Route-Based Code Splitting
- **Strategy:** All routes except `Home.jsx` are lazy-loaded with `React.lazy()`
- **Rationale:** Reduces initial bundle size by 31% (557KB → 383KB), improves Core Web Vitals
- **Implementation:**
  - Each lazy route wrapped in `<Suspense>` boundary
  - `PageSkeleton` component provides route-specific loading skeletons
  - Skeletons match page layouts for better UX
- **Bundle Impact:**
  - Main bundle: 383KB (121.58KB gzipped)
  - Route chunks: 2-92KB each (loaded on-demand)
  - **31% reduction** in initial bundle size
- **Performance Benefits:**
  - Faster initial page load
  - Better mobile performance
  - Improved Core Web Vitals (LCP, FID)
  - Better SEO scores

### Navigation
- Top navigation bar in `src/App.jsx` with links to routes
- Responsive mobile menu toggles via local state
- Footer rendered globally under the `<main>` content

### SPA Hosting and Deep Links
For static hosting (e.g., S3 + CloudFront), refreshing a deep link like `/work` must still return `index.html`.

Two resources in the repo explain and implement this:
- Guide: `SPA-ROUTING-SETUP.md`
- CloudFront Function: `cloudfront-spa-function.js`

In summary, the edge function rewrites non-file requests to `/index.html`, allowing React Router to handle the route client-side.

### Work Tab Deep-Linking
- The `Work` page supports selecting a tab via query or hash:
  - `?tab=web|ds|da|bi|nlp|research`
  - `#tab-<key>` (e.g., `#tab-web`)
- On initial load, the page reads the parameter/hash and activates the corresponding tab.
- Example: `/work?tab=web` opens the Web Development tab directly.


