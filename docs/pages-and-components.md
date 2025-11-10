## Pages & Components

### Pages (`src/pages`)
- `Home.jsx`: Landing hero, stats, services, testimonials, technologies, and CTA
- `Work.jsx`: Portfolio/work (lazy loaded in router)
-    - Tabs: Predictive Modeling & ML, Data Analysis / Operations, BI / Dashboards, NLP, Web Development, Research
-    - Per-tab subtitle via `PageSubtitle` under the tab bar
-    - Uses `Card`, `ImageWithSkeleton`, badges, and dual-CTA (Repo + Live Demo when provided)
- `About.jsx`: About section
- `Education.jsx`: Education background
- `Certifications.jsx`: Certifications overview
- `Publications.jsx`: Publications list
- `Newsletter.jsx`: Newsletter signup/CTA
- `Contact.jsx`: Contact form page (uses `useContactForm`)
- `ClassificationPage.jsx`, `ForecastPage.jsx`, `IntroPage.jsx`, `MLPage.jsx`, `SentimentPage.jsx`, `SupplyPage.jsx`, `VizzesPage.jsx`: Topic-specific pages
- `NotFound.jsx`: 404 page

### Shared Components (`src/components`)
- Layout & Shell:
  - `Layout.jsx`: Wrapper including `Background` and `Footer`
  - `Background.jsx`: Visual background layer
  - `Footer.jsx`: Global footer
  - `Header.jsx`, `Main.jsx`, `PageLayout.jsx`, `PageTitle.jsx`, `PageSubtitle.jsx`: Page layout primitives
- UI:
  - `Button.jsx`: Link-styled button component
  - `CTASection.jsx`: Call-to-action block used on pages (e.g., Home)
  - `LogoComparison*.jsx`: Logo comparison variants
  - `Card.jsx`: Reusable card shell used across Work and Certifications
  - `ImageWithSkeleton.jsx`: Image with loading skeleton; use `object-contain` within fixed-height frames for posters

### Section Components (`src/components/sections`)
- `IntroSection.jsx`, `MLSection.jsx`, `ClassificationSection.jsx`, `ForecastSection.jsx`, `SentimentSection.jsx`, `SupplySection.jsx`, `VizzesSection.jsx`, `ContactSection.jsx`
- These encapsulate reusable content sections that can be composed within pages

### Hooks
- `src/hooks/useContactForm.js`: Encapsulates contact form state, validation, honeypot, submission, and error/status handling


