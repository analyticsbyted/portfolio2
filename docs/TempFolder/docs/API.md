# TMDB API Usage

Base URL: `https://api.themoviedb.org/3`
Auth: Bearer `VITE_TMDB_API_READ_ACCESS_TOKEN` (TMDB v4 “API Read Access Token”)

## Endpoints used
- Trending: `GET /trending/movie/day`
- Popular: `GET /movie/popular`
- Discover: `GET /discover/movie` (params: `with_genres`, `sort_by`)
- Search: `GET /search/movie` (params: `query`)
- Details: `GET /movie/{id}` (params: `append_to_response=credits,watch/providers`)
- Similar: `GET /movie/{id}/similar`
- Genres: `GET /genre/movie/list`

## Notes
- Use Axios instance with default headers (Authorization + JSON).
- Prefer TanStack Query for caching/staleness.

---

## External APIs (enrichment)

### Wikipedia REST (Summaries)
- Base: `https://en.wikipedia.org/api/rest_v1/page/summary/{Title_Underscored}`
- Usage: cast bios in details page (top 3 cast)
- Auth: none
- Example: `/page/summary/Keanu_Reeves`

### iTunes Search (Soundtracks)
- Base: `https://itunes.apple.com/search`
- Params: `term={title}+soundtrack&entity=album&limit=6`
- Usage: Soundtrack tab with album covers and links
- Auth: none

