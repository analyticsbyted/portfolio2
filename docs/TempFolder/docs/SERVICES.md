# Services

File: `src/services/tmdb.ts`

## Axios instance
- Base URL: TMDB v3
- Headers: Bearer read token + JSON

## Functions
- `getTrendingMovies`
- `getPopularMovies`
- `discoverMovies(genre?, sortBy?)`
- `searchMovies(query)`
- `getMovieDetails(id)` (includes `credits` and `watch/providers`)
- `getSimilarMovies(id)`
- `getMovieGenres()`

## Query usage
- Use TanStack Query in pages; keep services stateless.

## External services
- File: `src/services/external.ts`
- Functions:
  - `fetchWikipediaSummary(personName)` → Wikipedia REST summaries for cast bios
  - `searchITunesSoundtracks(title, limit?)` → iTunes Search API for soundtrack albums
- Notes:
  - Both calls are read-only and public; no keys required.
  - Results are cached via TanStack Query with generous `staleTime` (bios: 24h; soundtracks: 6h).

