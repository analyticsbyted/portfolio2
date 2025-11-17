# SEO & Metadata Guide

This guide documents how the site manages titles, meta tags, structured data, and the sitemap.

## HeadMetadata Component

- Location: `src/components/HeadMetadata.jsx`
- Responsibilities: sets `<title>`, meta description, keywords, Open Graph/Twitter tags, canonical URL, and optional JSON-LD schema.
- Usage:

```jsx
<HeadMetadata
  title="Page Name"
  description="Short, action-oriented summary."
  canonical="/page-slug"
  keywords="comma-separated, topic-specific, keywords"
  schema={personSchema} // or an array of schemas
/>
```

### Adding Keywords
- Keep them page-specific (e.g., flagship projects on `Work`, certifications on `Certifications`).
- Aim for 5–8 phrases that mirror the visible content.

### Structured Data
- Import reusable schemas from `src/seo/` (e.g., `personSchema`, `websiteSchema`) or define a page-specific object.
- Pass a single schema object or an array to the `schema` prop. The component will inject/replace the `<script type="application/ld+json">`.
- Recommended schema types:
  - `Person` (already global)
  - `WebSite` (already on Home)
  - `SoftwareApplication` or `CreativeWork` for specific project pages
  - `Article` for long-form content

## Sitemap Automation

- Script: `scripts/generate-sitemap.mjs`
- Command: `npm run generate:sitemap`
- Output: `public/sitemap.xml` with current date in `<lastmod>`.
- Update the `routes` array inside the script whenever you add/remove top-level routes.

## robots.txt

- Located at `public/robots.txt`
- Only contains the `Sitemap: https://teddickey.com/sitemap.xml` directive (the modern approach).

## Checklist for New Pages

1. Add the route to `src/App.jsx`.
2. Wrap the page in `<HeadMetadata>` with unique title/description/keywords.
3. Add any schema objects needed for rich snippets.
4. Update `scripts/generate-sitemap.mjs` routes if it's a new top-level path.
5. Run `npm run generate:sitemap`.

