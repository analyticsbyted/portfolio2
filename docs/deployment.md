## Deployment Guide

This project builds to static assets and is ideal for static hosting (e.g., AWS S3 + CloudFront).

### Build
- `npm run build` creates the production bundle in `dist/`
- Do not edit `dist/` manually

### Preview Locally
- `npm run preview` serves the built `dist/` for local verification

### AWS S3 + CloudFront (Recommended)
Deep links (e.g., `/work`) must serve `index.html` for SPA routing. This repo includes:
- CloudFront Function: `cloudfront-spa-function.js`
- Setup guide: `SPA-ROUTING-SETUP.md`

Follow the guide to:
1. Create and deploy the CloudFront Function
2. Associate it with the distribution (viewer-request)
3. Ensure S3 bucket hosting or CloudFront error pages are configured as described

### Caching & Invalidation
- CloudFront should cache static assets aggressively (hashed filenames)
- Invalidate `index.html` on new deployments to ensure users receive the latest app shell

### Environment Variables
- Set `VITE_AWS_HTTPAPI_URL` in your deployment environment (build time)
- See `docs/environment.md`

### Alternative Hosts
- Any static host supporting SPA history fallback can serve this app (e.g., Netlify, Vercel, GitHub Pages with SPA fallback)


