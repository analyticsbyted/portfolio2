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
  --color-surface: 248 247 244; /* Light off-white */
  --color-card: 255 255 255;    /* Base card (overridable) */
  --color-border: 229 231 235;  /* Gray-200 */
  --color-muted: 243 244 246;   /* Gray-100 */
}
.dark {
  --color-surface: 17 24 39;    /* Gray-900 */
  --color-card: 31 41 55;       /* Gray-800 */
  --color-border: 55 65 81;     /* Gray-700 */
  --color-muted: 41 49 61;      /* Gray-700 slightly darker */
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

### Responsiveness
- Use Tailwind responsive variants (`sm:`, `md:`, `lg:`, `xl:`) for layout changes. These compile to CSS `@media` rules.
- Common patterns used:
  - Grids: `grid-cols-1 sm:grid-cols-2 lg:grid-cols-2`
  - Containers: `max-w-7xl mx-auto px-6 sm:px-8`
  - Typography: `text-xl md:text-2xl` for context‑sensitive sizing


