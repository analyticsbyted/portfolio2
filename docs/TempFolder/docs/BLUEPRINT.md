# Movie Explorer Blueprint (Reusable)

A concise, implementation-ready blueprint to emulate the Movie Explorer app in new domains or projects. Keep the stack, patterns, and UX consistent; swap the domain specifics via the Adaptation Guide.

## Placeholders (replace in your project)
- {EntitySingular}: Domain entity (e.g., Movie, Book, Product)
- {EntityPlural}: Plural of the entity (e.g., Movies, Books, Products)
- {EntityRouteSegment}: Lowercase route segment (e.g., movie, book, product)
- {ServiceFileName}: Service filename without extension (default: api)
- {ReadTokenEnvVar}: Environment variable for auth (e.g., VITE_API_READ_ACCESS_TOKEN)
- {TaxonomyPlural}: Domain taxonomy (e.g., Genres, Categories, Tags)
- {ContributorType}: People/entities credited (e.g., CastMember, Author)
- {ProviderType}: Providers/distributors/storefronts (e.g., WatchProviders)

## Goals
- Deliver a modern, fast SPA for discovery and details browsing of an entity catalog.
- Ship a clean architecture with a thin service layer, typed models, cached data-fetching, and reusable UI primitives.

## Non-Goals
- Full TMDB API surface coverage.
- Complex global state management beyond TanStack Query.

## Tech Stack
- React 19 + Vite 4 + TypeScript 5
- React Router 7
- TanStack Query 5
- Axios
- Tailwind CSS 3 (+ custom utilities)
- Framer Motion (micro-animations)

## Directory Layout
```
src/
  components/
    {EntitySingular}Card.tsx
    {EntitySingular}Carousel.tsx
    common/
      Header.tsx
      Footer.tsx
      Layout.tsx
      Tabs.tsx
      SkeletonCard.tsx
    SearchBar.tsx
  pages/
    HomePage.tsx
    {EntitySingular}DetailsPage.tsx
    DiscoverPage.tsx
    SearchResultsPage.tsx
  services/
    {ServiceFileName}.ts
  types/
    {EntityRouteSegment}.ts
  utils/
    image.ts
  assets/
index.css
App.tsx
main.tsx
```

## Naming & Conventions
- Alias: `@` → `src` (Vite + `tsconfig.app.json`).
- TypeScript strict, descriptive names, small focused components.
- Query keys: stable, specific, per-view (e.g., `["trendingMovies"]`, `["movieDetails", id]`).

## Data & Services
- Axios instance at `services/{ServiceFileName}.ts`:
  - Base URL: domain API base (e.g., TMDB v3 for movies).
  - Headers: Bearer token from `import.meta.env.{ReadTokenEnvVar}`.
- Stateless service functions:
  - Trending, Popular, Discover(with filters), Search(query), Details(id with appended subresources), Similar(id), {TaxonomyPlural}().
- Pages use TanStack Query to fetch/cache; services remain free of UI concerns.

## Types
- `{EntitySingular}` (id, title/name, original_title?, overview/description, poster/cover path, backdrop/hero path, release/publish date, vote_average/score).
- `{EntitySingular}Details` extends `{EntitySingular}` with domain specifics (e.g., runtime/pages, budget/cost, revenue/sales, genres/tags, `credits.cast` as `{ContributorType}[]`, `{ProviderType}`).
- `{ContributorType}`, `{ProviderType}`.
- Rule: Model types mirror API responses used by UI; add only what UI needs.

## Pages & UI Composition
- HomePage
  - Hero: dynamic backdrop from first trending item; blurred panel with CTAs (Discover, Search).
  - Carousels: Trending (10), Popular (10), Discover (deduped).
  - Optional in-hero search reveal.
- {EntitySingular}DetailsPage
  - Hero backdrop; poster + details panel.
  - Tabs: Overview (key facts), Contributors (grid), Providers (if applicable), Similar (carousel).
- DiscoverPage
  - Filters: {TaxonomyPlural} and sort; grid results with `{EntitySingular}Card variant="grid"`.
  - Top search bar for quick access.
- SearchResultsPage
  - Grid results for `?query=...`.

## Components
- `{EntitySingular}Card`
  - Props: `{ entity: {EntitySingular}, variant?: 'default' | 'grid' }`.
  - Enforce 2:3 poster, truncate title, show year + rating.
- `{EntitySingular}Carousel`
  - Props: `{ title, items: {EntitySingular}[], isLoading?, isError?, errorMessage? }`.
  - Horizontal snap scroller, edge gradient fades, animated arrows, staggered entrance (framer-motion).
  - Skeletons on loading; friendly error box on failure.
- Common:
  - `Header`: sticky, translucent with backdrop-blur; brand link and Discover link.
  - `Layout`: dark shell + header/footer + back-to-top button.
  - `Tabs`: simple tab switcher.
  - `SkeletonCard`: loading placeholder.
  - `SearchBar`: navigates to `/search?query=...`.

## Styling & Utilities
- Dark shell: `bg-gray-900 text-white`.
- Container sizing: `max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8`.
- Utilities in `index.css`:
  - `.scrollbar-hide` to hide row scrollbars.
  - `.aspect-2-3` for posters (2:3).
- Carousel card widths: `w-40 md:w-48 lg:w-56`.
- Consistent headings: page `text-3xl font-bold`, section `text-2xl font-bold`.

## Environment
- `.env.local`:
```
{ReadTokenEnvVar}=your_token_here
```
- Use your platform’s read access token as Bearer (JWT or opaque) for API endpoints. Replace the variable name to match your domain.

## Setup & Scripts
- `npm install`
- `npm run dev` / `npm run build` / `npm run preview`
- `npm run lint` / `npm run format`

## Quality & UX
- Error UI: concise, friendly message with optional retry.
- Loading: skeletons in lists, simple loaders elsewhere.
- Accessibility: buttons have labels/titles; reasonable color contrast.
- Performance: limit items in carousels (e.g., 10), image sizing (`w500`, `w780`), memoize where needed.

## Deployment
- Static hosting (Netlify/Vercel). SPA fallback/redirect. Environment variable configured in hosting panel.

---

## Adaptation Guide (Generalize Beyond Movies)
Use these patterns to adapt to a new entity domain.

### Replace Domain Nouns
- Replace placeholders `{EntitySingular}`, `{EntityPlural}`, `{EntityRouteSegment}` across files.
- Update component/page file names accordingly.

### Endpoints Mapping
- Provide equivalents for:
  - Trending
  - Popular
  - Discover (with filters)
  - Search (query)
  - Details (id, with appended subresources if needed)
  - Similar (id)
  - {TaxonomyPlural} (taxonomy)

### Types Mapping
- Define base entity type with fields used in UI (id, title/name, overview/description, poster/cover, backdrop/hero, release/publish date, rating/score).
- Details type extends base with domain specifics (duration/pages, budget/cost, revenue/sales, {TaxonomyPlural}, contributors/authors, providers/storefronts).

### Pages & Components
- Keep page flow and UI patterns identical; only adjust labels, icons, and data fields.
- Preserve carousel interaction and grid layout sizes where feasible.

### Env & Config
- Rename `{ReadTokenEnvVar}` as needed (still `VITE_*`) and update Axios headers accordingly.

### Acceptance Checklist
- [ ] Directory structure matches blueprint.
- [ ] Alias `@` → `src` configured; imports use it.
- [ ] Service functions match the required surface for the domain.
- [ ] Types reflect the domain API and UI needs.
- [ ] Pages render expected sections and states (loading, error, empty).
- [ ] UI components enforce 2:3 (or domain-appropriate) aspect ratio and titles/rating.
- [ ] Routing matches: `/`, `/{EntityRouteSegment}/:id`, `/discover`, `/search?query=`.
- [ ] Styling and utilities present (`.scrollbar-hide`, `.aspect-2-3`).
- [ ] Environment variable wired to Axios Authorization.


