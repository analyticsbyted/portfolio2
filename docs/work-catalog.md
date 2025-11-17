## Work Page Catalog

This document describes how the Work page is organized and how to add or update projects.

### File
- Source: `src/pages/Work.jsx`

### Tabs
Tabs are defined in `tabs`:
- `ds`: Predictive Modeling & ML
- `da`: Data Analysis / Operations
- `bi`: Business Intelligence / Dashboards
- `nlp`: NLP & Text Analytics
- `web`: Web Development
- `research`: Research

A per-tab subtitle is rendered from `tabSubtitles` under the tab bar.

### Card Components
- All tabs except `web` use the standard project card with:
  - `Card` container
  - Poster in a fixed-height frame (`h-48`) using `ImageWithSkeleton` and `object-contain`
  - Skills badges
  - Sections: Challenge (problem), Solution (approach), Impact (result)
  - Primary CTA (repo/project link) and optional secondary CTA (`demoLink`)
- The `web` tab uses an app-focused card:
  - Fields: `title`, `tagline`, `features[]`, `stack[]`, `img`, `alt`, `link`, `linkLabel`

### Data Shapes
Predictive Modeling & ML (and similar tabs):
```js
{
  title: string,
  problem: string,
  approach: string,
  result?: string,
  img: string, // import path
  link: string,
  linkLabel: string,
  demoLink?: string,
  demoLabel?: string,
  details?: string, // visible when expanded
  skills?: string[], // badges
  imageHeight?: string, // optional override, e.g., 'h-64'
  imagePadding?: string // optional override, e.g., 'p-2'
}
```

Web Development:
```js
{
  title: string,
  tagline: string,
  features: string[],
  stack: string[],
  img: string, // import path
  alt: string,
  link: string,
  linkLabel: string,
  repoLink?: string,   // optional second CTA to GitHub repo
  repoLabel?: string,  // defaults to 'View Repo'
  imageHeight?: string // optional
}
```

### Adding a Project
1. Place the poster in `src/assets/...` (see Assets guide for sizing).
2. Import the poster at the top of `Work.jsx`.
3. Append a new object to the appropriate array (`dataScienceProjects`, `dataAnalysisProjects`, `biProjects`, `nlpProjects`, `webDevProjects`, or `researchProjects`).
4. For live demos, include `demoLink`/`demoLabel` (standard tabs) or `link`/`repoLink` for Web apps to render dual CTAs.

### Posters
See `docs/assets.md` for sizing. In brief:
- Web apps: 16:9 at 1280×720
- Research/BI/Data: 4:3 at 1200×900
- For fixed-height frames (`h-48`), small thumbnails at ~360–400 px long edge work well.

### Card UX Details
- Subtle hover lift and focus-visible ring for accessibility.
- Thin gradient bar at the top of poster frames for hierarchy.
- Multi-line clamp (3 lines) on Challenge/Solution/Impact when collapsed; full content on expand.
- Keyboard support: Enter/Space toggles expand; Tab cycles CTAs.


