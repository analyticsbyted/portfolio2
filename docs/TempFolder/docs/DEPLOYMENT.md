# Deployment (Netlify)

## Settings
- Base directory: (leave blank)
- Build command: `npm run build`
- Publish directory: `dist`
- Environment:
  - `VITE_TMDB_API_READ_ACCESS_TOKEN` = your TMDB v4 Read Access Token (JWT)
  - `NODE_VERSION` = `20` (recommended to match CI)

## SPA Redirect
Create `public/_redirects` with:
```
/* /index.html 200
```

## Notes
- Env vars are injected at build time; re-deploy after changes.
- Verify API calls in the Network tab (401 indicates a missing/invalid token).
- Optional: add branch protections and require CI checks before merging.


