# LLM Implementation Prompt — Emulate this App with Placeholders

Use this prompt with an LLM to scaffold and implement a new app that emulates Movie Explorer. Provide the Variables section first, then give the Instructions. The model should follow the Steps and Deliverables exactly.

## Variables (provide before running)
- ProjectName: "Movie Explorer" (or your new project name)
- EntitySingular: "Movie" (replace with your entity)
- EntityPlural: "Movies" (replace with your plural)
- EntityRouteSegment: "movie" (lowercase route segment; replace with your entity)
- ApiBaseUrl: "https://api.themoviedb.org/3" (replace with your API)
- ReadTokenEnvVar: "VITE_TMDB_API_READ_ACCESS_TOKEN" (replace with your env var)
- ServiceFileName: "api" (or "tmdb", "books", etc.)
- TaxonomyPlural: "Genres" (replace with Categories/Tags/etc.)
- ContributorType: "CastMember" (replace with Author/Creator/etc.)
- ProviderType: "WatchProviders" (replace with Storefronts/Distributors/etc.)
- Routes:
  - Home: "/"
  - Details: "/{EntityRouteSegment}/:id"
  - Discover: "/discover"
  - Search: "/search?query="
- Endpoints:
  - Trending: "GET /trending/{EntityRouteSegment}/day"
  - Popular: "GET /{EntityRouteSegment}/popular"
  - Discover: "GET /discover/{EntityRouteSegment}?with_genres=&sort_by="
  - Search: "GET /search/{EntityRouteSegment}?query="
  - Details: "GET /{EntityRouteSegment}/{id}?append_to_response=credits,watch/providers"
  - Similar: "GET /{EntityRouteSegment}/{id}/similar"
  - Taxonomy: "GET /genre/{EntityRouteSegment}/list"
- Branding:
  - AppTitle: "Movie Explorer"
  - PrimaryCTA: "Discover"
  - SecondaryCTA: "Search"
- Styling:
  - Container: "max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8"
  - Shell: "bg-gray-900 text-white"
  - CarouselCardWidths: "w-40 md:w-48 lg:w-56"

## Instructions
You are building a React + Vite + TypeScript app that emulates the Movie Explorer architecture and UX. Follow the steps precisely. Do not omit files. Use the Variables. Unless told otherwise, keep library versions current and compatible.

IMPORTANT: Replace every placeholder wrapped in braces (e.g., {EntitySingular}) with your domain’s actual value before generating code and file names.

## Steps
1) Scaffolding & Config
- Initialize Vite + React + TypeScript project named {ProjectName}.
- Configure alias `@` → `src` (Vite config + `tsconfig.app.json`).
- Add Tailwind CSS (PostCSS + autoprefixer).
- Add dependencies: React Router, TanStack Query, Axios, Framer Motion.

2) Environment
- Create `.env.local` with `{ReadTokenEnvVar}=...`.
- Note: Use the platform’s read token (JWT or opaque) as a Bearer header for your API.

3) Services (Axios)
- Create `src/services/{ServiceFileName}.ts`:
  - Axios instance: `{ baseURL: {ApiBaseUrl}, headers: { Authorization: 'Bearer ' + import.meta.env.{ReadTokenEnvVar}, 'Content-Type': 'application/json' } }`.
  - Implement functions: trending, popular, discover(genre?, sortBy?), search(query), details(id with appended subresources), similar(id), genres().

4) Types
- Create `src/types/{EntityRouteSegment}.ts` with:
  - Base `{EntitySingular}` type fields used by UI (id, title/name, original_title?, overview/description, poster/cover path, backdrop/hero path, release/publish date, vote_average/score).
  - `{EntitySingular}Details` extending base with domain specifics (e.g., runtime/pages, budget/cost, revenue/sales, {TaxonomyPlural}, `credits.cast: {ContributorType}[]`, `{ProviderType}`).
  - `{ContributorType}`, `{ProviderType}`.

5) Utilities
- `src/utils/image.ts`: `getTmdbImageUrl(path, { size })`.
- `src/index.css`: Tailwind directives + utilities:
  - `.scrollbar-hide`
  - `.aspect-2-3` (2:3 posters)

6) Components
- `components/common/Header.tsx`: sticky, translucent, backdrop-blur; brand link to `/` and Discover link to `/discover`.
- `components/common/Footer.tsx`: attribution and year; TMDb credit if applicable.
- `components/common/Layout.tsx`: dark shell + header/footer + back-to-top button.
- `components/common/Tabs.tsx`: simple tab switcher.
- `components/common/SkeletonCard.tsx`: loading placeholder card.
- `components/{EntitySingular}Card.tsx`: enforces 2:3 poster, title truncate, year + rating, `variant: 'default' | 'grid'`.
- `components/{EntitySingular}Carousel.tsx`: horizontal snap scroller, edge fades, animated arrows, framer-motion staggered entrance, skeletons and friendly error states.
- `components/SearchBar.tsx`: navigates to `/search?query=...`.

7) Pages
- `pages/HomePage.tsx`: hero with dynamic backdrop (first trending item), blurred content panel; CTAs to Discover and Search. Carousels for Trending (10), Popular (10), and Discover (deduped).
- `pages/{EntitySingular}DetailsPage.tsx`: hero backdrop + poster/detail panel; tabs: Overview (facts), Contributors (grid), Providers (if applicable), Similar (carousel).
- `pages/DiscoverPage.tsx`: genre + sort filters; grid of cards (`variant="grid"`); top search bar.
- `pages/SearchResultsPage.tsx`: grid results for `?query=...`.

8) Routing & App Shell
- `App.tsx`: React Router routes for Home, Details, Discover, Search; wrap with `Layout`.
- Provide container class `{Styling.Container}` around routed pages.
- Wrap app in `QueryClientProvider`.

9) UX States & Quality
- Loading: skeletons in rows; simple text acceptable elsewhere.
- Errors: friendly copy with optional retry; compact red alert box.
- Performance: slice carousels to 10; size images appropriately.
- Accessibility: buttons with labels; adequate contrast.

10) Scripts
- `npm run dev`, `build`, `preview`, `lint`, `format`, `test` (optional).

## Deliverables
- Fully working app mirroring Movie Explorer behavior with the provided Variables.
- All files and directories listed above.
- A `README.md` summarizing setup, environment, stack, and links to internal docs.
- Optional `docs/` folder with Architecture, Project Plan, API, Types, Components, Services, Routing, UI Guidelines.

## Validation Checklist (LLM must self-verify)
- [ ] Alias `@` configured and used across imports.
- [ ] Axios instance uses `{ReadTokenEnvVar}` in Bearer header.
- [ ] Service functions implemented and used by pages.
- [ ] Types match UI fields; `{EntitySingular}Details` extends base and includes subresources.
- [ ] Pages render hero, carousels, grids, and tabs per spec.
- [ ] `{EntitySingular}Card` enforces 2:3 posters; shows year + rating; grid/default variants.
- [ ] `{EntitySingular}Carousel` has snap scrolling, fades, animated arrows, skeletons, error states.
- [ ] `.scrollbar-hide` and `.aspect-2-3` utilities present.
- [ ] Routing: `/`, `/{EntityRouteSegment}/:id`, `/discover`, `/search?query=`.
- [ ] Environment variable wired; app loads data when token is present.

## Adaptation Notes
- To generalize beyond movies, replace entities, endpoints, and types per your domain, keeping layout and interaction patterns unchanged.


