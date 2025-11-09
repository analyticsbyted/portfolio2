# Types Overview

Key interfaces in `src/types/tmdb.ts`:

- `Movie`: id, title, original_title, overview, poster_path, release_date, vote_average
- `MovieDetails` extends `Movie`:
  - runtime, budget, revenue, genres
  - `credits.cast: CastMember[]`
  - `"watch/providers".results: WatchProviders`
- `CastMember`: id, name, character, profile_path
- `WatchProviders`: country code → `flatrate[] | rent[] | buy[]`

Notes:
- Aligns to TMDB responses used by the app; not exhaustive of the API.

