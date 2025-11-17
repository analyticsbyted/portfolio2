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
- `/` → `Home`
- `/work` → `Work` (lazy loaded)
- `/about` → `About`
- `/education` → `Education`
- `/certifications` → `Certifications`
- `/publications` → `Publications`
- `/newsletter` → `Newsletter`
- `/contact` → `Contact`
- `*` → `NotFound`

### Lazy Loading
- `Work` page is loaded via `React.lazy` for faster initial load:
  - Suspense fallback shows a spinner until the chunk is ready

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


