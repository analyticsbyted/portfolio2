# Routing

Top-level routes are defined in `src/App.tsx`.

## Routes
- `/` → `HomePage`
- `/movie/:id` → `MovieDetailsPage`
- `/discover` → `DiscoverPage`
- `/search` → `SearchResultsPage` (expects `?query=`)

## Navigation
- `Header` provides brand link to `/` and Discover link to `/discover`.
- `SearchBar` navigates to `/search?query=...` on submit.

