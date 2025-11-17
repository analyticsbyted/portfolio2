## Session Notes (2025-11-10)

### Positioning and Messaging
- Updated positioning across Home, Portfolio, About, Contact to emphasize: Data, AI, and Web apps.
- Navbar label changed from “Work” to “Portfolio” (route remains `/work`).
- Home hero tightened; added KPI row under hero, Featured Project strip, and “What I Do” 3‑pillars with header.
- Contact hero value prop updated to reflect web apps, AI agents, data platforms.

### Typography
- Implemented font pairing:
  - Headlines/CTAs: Inter (`font-headline`)
  - Body copy: Source Serif Pro (`font-body`)
- Fonts loaded via Google Fonts; Tailwind configured in `tailwind.config.js`.

### Portfolio (Work) Page
- Tabs: Predictive Modeling & ML, Data Analysis / Operations, BI / Dashboards, NLP, Web Development, Research.
- Per‑tab subtitles added for context.
- Card improvements (without changing overall look):
  - Titles reduced to `text-xl`; spacing tightened.
  - Subtle hover lift and focus-visible ring.
  - Thin gradient bar at top of poster frame.
  - Multi-line clamp (3 lines) on Challenge/Solution/Impact when collapsed; full text on expand.
  - Consistent CTA sizes (text-base on mobile, sm:text-lg on larger screens).
- Dual CTAs:
  - CNN (CIFAR‑10): Repo + Live Demo (Hugging Face)
  - Web apps (Movie/TV Explorer): Live App + View Repo
- Posters/screenshots:
  - Added screenshot script: `scripts/capture-screenshot.mjs` (Puppeteer)
  - Captured and wired:
    - TV Explorer poster → `src/assets/webapps/tv-explorer-poster.png` (1280×720)
    - Movie Explorer poster → `src/assets/webapps/movie-explorer-poster.png` (1280×720)
    - Home featured strip updated to use movie poster PNG
  - CIFAR‑10 card uses `cifar10-classifier-poster.png` (from live demo earlier this session)
- Deep-linking: `/work?tab=web|ds|da|bi|nlp|research` (also supports `#tab-<key>`).

### Assets & Standards
- Posters:
  - Web apps: 16:9 at 1280×720
  - Data/BI/Research: 4:3 at 1200×900
- Docs updated with resizing guidance (ImageMagick), screenshot workflow, and naming.

### Documentation Updated
- `docs/styling-and-theming.md`: Inter + Source Serif Pro guidance, how to apply.
- `docs/work-catalog.md`: Card schemas, dual CTAs, clamp, a11y, poster standards.
- `docs/pages-and-components.md`: Home/Work structure and typography utilities.
- `docs/routing-and-navigation.md`: Work tab deep‑linking.

### Repos and Live Links (for reference)
- Movie Explorer: Live `https://moviez-explorer.netlify.app/` • Repo `https://github.com/analyticsbyted/movie-explorer`
- TV Explorer: Live `https://tvexplorer.netlify.app/` • Repo `https://github.com/analyticsbyted/tv-explorer`
- CIFAR‑10 Demo (Hugging Face): `https://huggingface.co/spaces/analyticsbyted/CIFAR10-Classifier`
- CIFAR‑10 Repo: `https://github.com/analyticsbyted/CNN-Image-Classification-CIFAR10`

### Nice-to-Do Next (Optional)
- SEO/Structured Data: Add JSON‑LD (Person sitewide; SoftwareApplication for live apps).
- Analytics: Track tab changes and CTA clicks on Portfolio (Repo/Demo/App).
- Portfolio “All” view with search/filter.
- Capture posters for RPubs/Tableau pages (1200×900) if desired.
- Per‑route meta/OG images using posters.

### How to Resume
1. Review these notes and the updated docs in `docs/`.
2. If continuing with JSON‑LD and analytics, start with:
   - Add Person JSON‑LD on Home/About.
   - Add SoftwareApplication JSON‑LD on Movie Explorer, TV Explorer, CIFAR‑10 cards.
   - Fire analytics events on Portfolio card CTA clicks and tab changes.
3. For more posters, use:
   ```bash
   node scripts/capture-screenshot.mjs "<url>" "src/assets/webapps/<slug>-poster.png" 1280 720
   ```

### Files Most Affected
- `src/pages/Home.jsx`, `src/pages/Work.jsx`, `src/pages/About.jsx`, `src/pages/Contact.jsx`
- `src/App.jsx`
- `tailwind.config.js`, `index.html`
- `src/assets/webapps/*-poster.png`
- `scripts/capture-screenshot.mjs`
- `docs/*`


