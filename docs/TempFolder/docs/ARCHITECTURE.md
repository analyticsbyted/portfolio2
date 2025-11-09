# Architecture

Movie Explorer follows the TV Joy blueprint with movie-specific adaptations.

## Overview
- App shell: `components/common/Layout` wraps pages with `Header` and `Footer`.
- Routing: React Router defines top-level pages (`HomePage`, `MovieDetailsPage`, `DiscoverPage`, `SearchResultsPage`).
- Data: `services/tmdb.ts` (Axios) + TanStack Query for caching/fetching.
- Styling: Tailwind CSS with a few custom utilities in `src/index.css`.
- Aliases: `@` → `src` (Vite + tsconfig).

## Directory structure
```
src/
  components/
    MovieCard.tsx
    MovieCarousel.tsx
    common/
      Header.tsx
      Footer.tsx
      Layout.tsx
      Tabs.tsx
      SkeletonCard.tsx
  pages/
    HomePage.tsx
    MovieDetailsPage.tsx
    DiscoverPage.tsx
    SearchResultsPage.tsx
  services/
    tmdb.ts
  types/
    tmdb.ts
  utils/
    image.ts
```

## UI composition
- Lists: `MovieCarousel` (horizontal, snap scroll, edge gradient fades, animated arrows, skeletons, framer-motion staggered entrance).
- Cards: `MovieCard` (`variant` = `default | grid`) with enforced 2:3 posters and year + rating.
- Tabs: `components/common/Tabs` used on `MovieDetailsPage`:
  - Overview, Cast (with Wikipedia bios for top cast), Watch, Similar, Soundtrack (iTunes)
- Header: sticky, translucent with backdrop-blur.
- Hero: dynamic backdrop on Home (from trending) with blurred content panel and CTAs.

## Styling fundamentals
- Dark theme shell: `bg-gray-900 text-white` in `Layout`.
- Utilities in `src/index.css`:
  - `.scrollbar-hide` for horizontal rows.
  - `.aspect-2-3` for poster aspect ratio.
  - Error UI: compact red bordered box above content on failures.

## Data layer
- Axios instance in `services/tmdb.ts` with `VITE_TMDB_API_READ_ACCESS_TOKEN`.
- External read-only services in `services/external.ts`:
  - Wikipedia REST summaries
  - iTunes Search soundtracks
- Query keys per view (e.g., `["trendingMovies"]`, `["movieDetails", id]`).
- Avoids prop drilling by colocating queries in pages.

## Build/tooling
- Vite + `@vitejs/plugin-react`.
- Tailwind via PostCSS (`tailwindcss`, `autoprefixer`).
- TypeScript strict mode.
- GitHub Actions CI: lint, test, build on push/PR to main.

## Notable differences from TV Joy
- Endpoints and types adapted to movies (see `docs/API.md`, `docs/TYPES.md`).
- `MovieCard`/`MovieCarousel` equivalents for shows.

