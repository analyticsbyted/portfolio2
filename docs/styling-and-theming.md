## Styling & Theming

### Tailwind CSS
- Tailwind is enabled via `@tailwind base; @tailwind components; @tailwind utilities;` in `src/index.css`
- Purge/JIT is configured by `content` globs in `tailwind.config.js`

### Dark Mode Strategy
- Tailwind `darkMode: 'class'`
- `src/App.jsx` adds/removes the `dark` class on `<html>` and persists with `localStorage`
- Toggle renders a sun/moon icon in the navbar

### Design Tokens (CSS Variables)
We define surface tokens once in CSS and reference them via Tailwind or inline styles to ensure consistent theming.

Variables in `src/index.css`:
```css
:root {
  --color-white: 248 247 244; /* #F8F7F4 - off-white substitute */
  --color-surface: 248 247 244; /* Light off-white */
  --color-card: 250 249 247;    /* Soft card surface (off-white) */
  --color-border: 229 231 235;  /* Gray-200 */
  --color-muted: 243 244 246;   /* Gray-100/200 */
}
.dark {
  --color-surface: 15 23 42;    /* Slate-900 (warmer than gray-900) */
  --color-card: 30 41 59;       /* Slate-800 */
  --color-border: 51 65 85;     /* Slate-700 */
  --color-muted: 30 41 59;      /* Slate-800 */
  --color-text-body: 203 213 225;    /* Slate-300 for body text */
  --color-text-headline: 241 245 249; /* Slate-100 for headlines */
}
```

Usage examples with Tailwind:
- Map Tailwind colors to CSS variables in `tailwind.config.js` (e.g., `white: rgb(var(--color-white) / <alpha-value>)`) or use custom utilities (`bg-surface`, `bg-card`, `border-border`).
- Prefer Tailwind classes; where custom colors are needed, use inline styles or small CSS utilities that reference variables.

### Color Guidance
- Avoid pure white `#ffffff` for surfaces; prefer soft off-white on light theme. Cards can use `bg-card` which is aligned to theme variables.
- Ensure sufficient contrast for accessibility (WCAG AA).

### Migration Approach
1. Add variables to `src/index.css` (root and `.dark`)
2. Replace hard-coded hex values with `var(--color-*)` where appropriate
3. Keep leveraging Tailwind tokens for most layout/spacing/typography

### Fonts
- `src/index.css` defines the base font stack (`Inter`, system UI fallbacks)

### Typography Pairing (Headlines vs Body)
- Headlines and CTAs: Inter (700–800 recommended). Applied via the `font-headline` utility class.
- Body copy: Source Serif Pro (400–500). Applied globally by setting the app wrapper to `font-body` in `src/App.jsx`.
- Configuration:
  - `index.html` loads Inter and Source Serif Pro via Google Fonts.
  - `tailwind.config.js` defines:
    - `fontFamily.headline` → Inter stack
    - `fontFamily.body` → Source Serif Pro stack
- Usage:
  - Add `font-headline` on major titles, subtitles, and CTA buttons.
  - Body text inherits `font-body` by default from the app wrapper.

### Brand Color Tokens

**Structure:** Flattened with prefix for gradient support (required by Tailwind gradient utilities)

**Tokens:**
- `brand-primary`: #2563EB (blue-600) - start of gradient
- `brand-secondary`: #9333EA (purple-600) - end of gradient
- `brand-accent`: #1D4ED8 (blue-700) - hover/darker variants
- `brand-accent-alt`: #7E22CE (purple-700) - hover/darker variants

**Usage:**
```jsx
// Solid colors
className="bg-brand-primary text-white"
className="text-brand-secondary"
className="border-brand-primary"

// Gradients (REQUIRES flat structure)
className="bg-gradient-to-r from-brand-primary to-brand-secondary"
className="hover:from-brand-accent hover:to-brand-accent-alt"

// Text gradients
className="bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary"

// Opacity variants
className="from-brand-primary/20 to-brand-secondary/20"
```

**Migration Status:** ✅ COMPLETE (2025-01-11) - All brand gradients migrated to semantic tokens
- 26 instances migrated across 10 files
- See `docs/color-migration-guide.md` for details and real-world examples

**Configuration:** `tailwind.config.js` - flattened structure with nested aliases for backward compatibility

### Responsiveness
- Use Tailwind responsive variants (`sm:`, `md:`, `lg:`, `xl:`) for layout changes. These compile to CSS `@media` rules.
- Common patterns used:
  - Grids: `grid-cols-1 sm:grid-cols-2 lg:grid-cols-2`
  - Containers: `max-w-7xl mx-auto px-6 sm:px-8`
  - Typography: `text-xl md:text-2xl` for context‑sensitive sizing


