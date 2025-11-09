# Project Plan: Movie Explorer

A practical, step-by-step plan aligned with the TV Joy blueprint.

## 1) Scaffolding & Configuration
- Vite + React + TS template
- Install deps from package.json
- Configure: `vite.config.ts`, `tailwind.config.js`, `postcss.config.cjs`
- Setup aliases: `@` → `src` (Vite + `tsconfig.app.json`)

## 2) Service Layer (TMDB)
- Axios instance (read token; v3 endpoints)
- Functions:
  - `getTrendingMovies()` → `/trending/movie/day`
  - `getPopularMovies()` → `/movie/popular`
  - `discoverMovies(genre?, sortBy?)` → `/discover/movie`
  - `searchMovies(query)` → `/search/movie`
  - `getMovieDetails(id)` → `/movie/{id}?append_to_response=credits,watch/providers`
  - `getSimilarMovies(id)` → `/movie/{id}/similar`
  - `getMovieGenres()` → `/genre/movie/list`

## 3) Types
- `Movie`, `MovieDetails`, `CastMember`, `WatchProviders`

## 4) Components
- `MovieCard` (poster, title, rating; `variant: default | grid`)
- `MovieCarousel` (horizontal row, snap, arrows, skeletons)
- Common: `Header`, `Footer`, `Layout`, `Tabs`, `SkeletonCard`

## 5) Pages
- `HomePage`: Trending (10), Popular (10), Discover (filtered to avoid dupes)
- `MovieDetailsPage`: overview, cast, watch, similar tabs
- `DiscoverPage`: filters by genre/sort; grid results
- `SearchResultsPage`: grid results for query

## 6) Routing
- `/`, `/movie/:id`, `/discover`, `/search`

## 7) Styling
- Tailwind dark shell via `Layout`
- Custom utilities: `.scrollbar-hide`, `.aspect-2-3`

## 8) Testing (future)
- Component tests with RTL + Vitest
- Service mocks with MSW

## 9) Deployment (future)
- Static hosting (e.g., Netlify/Vercel)

## 10) Enrichment (optional)
- Wikipedia bios for top cast via Wikipedia REST summaries
- Soundtrack tab via iTunes Search (albums)
- Cache with TanStack Query; label sources in UI

