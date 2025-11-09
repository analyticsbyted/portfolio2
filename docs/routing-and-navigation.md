## Routing & Navigation

### Router Setup
- The app uses `BrowserRouter` (HTML5 history API)
- Routes are declared in `src/App.jsx` inside `<Routes>`
- A `NotFound` page handles unmatched paths

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


