## Styling & Theming

### Tailwind CSS
- Tailwind is enabled via `@tailwind base; @tailwind components; @tailwind utilities;` in `src/index.css`
- Purge/JIT is configured by `content` globs in `tailwind.config.js`

### Dark Mode Strategy
- Tailwind `darkMode: 'class'`
- `src/App.jsx` adds/removes the `dark` class on `<html>` and persists with `localStorage`
- Toggle renders a sun/moon icon in the navbar

### Design Tokens (Recommended)
To improve consistency and enable quick theme changes, define CSS variables and use them across components.

Suggested variables (example):
```css
:root {
  --color-bg: #F8F7F4;    /* preferred off-white background */
  --color-fg: #111827;    /* primary text (gray-900) */
  --color-card: #ffffff;  /* avoid pure white in UI, consider off-white */
  --color-brand-1: #2563EB; /* blue-600 */
  --color-brand-2: #7C3AED; /* purple-600 */
}
.dark {
  --color-bg: #111827;     /* gray-900 */
  --color-fg: #F3F4F6;     /* gray-100/200 */
  --color-card: #1F2937;   /* gray-800 */
}
```

Usage examples with Tailwind:
- Prefer Tailwind classes, but where custom colors are needed, use `style={{ backgroundColor: 'var(--color-bg)' }}` or define small utility classes once in CSS.

### Color Guidance
- Avoid pure white `#ffffff` in UI surfaces where possible; prefer a soft off-white (the app already uses `#F8F7F4` for page background) [[preferred]].
- Ensure sufficient contrast for accessibility (WCAG AA).

### Migration Approach
1. Add variables to `src/index.css` (root and `.dark`)
2. Replace hard-coded hex values with `var(--color-*)` where appropriate
3. Keep leveraging Tailwind tokens for most layout/spacing/typography

### Fonts
- `src/index.css` defines the base font stack (`Inter`, system UI fallbacks)


