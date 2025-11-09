# Environment

Create `.env.local` with your TMDB token:

```
VITE_TMDB_API_READ_ACCESS_TOKEN=your_token_here
```

Notes:
- Use the TMDB v4 “API Read Access Token” (JWT, starts with `ey...`) in the Bearer header for v3 endpoints.
- Do not use the old v3 API key param for this project’s auth flow.
- Vite exposes variables prefixed with `VITE_` at build time.

