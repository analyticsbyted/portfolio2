# Brand Guidelines

This document defines the visual identity, color palette, typography, and component patterns for the portfolio website.

## Brand Identity

**Mission**: Professional portfolio showcasing expertise in Web Apps, AI/Agents, and Data Platforms.

**Tone**: Modern, trustworthy, data-driven, and approachable.

## Color Palette

### Primary Brand Colors

The portfolio uses a **blue-to-purple gradient** as the primary brand identity:

- **Primary Start (Blue)**: `#2563EB` (blue-600)
- **Primary End (Purple)**: `#9333EA` (purple-600)
- **Accent Dark (Blue)**: `#1D4ED8` (blue-700) - for hover states
- **Accent Dark (Purple)**: `#7E22CE` (purple-700) - for hover states

**Usage**:
- Primary CTAs and buttons: `bg-gradient-to-r from-blue-600 to-purple-600`
- Hover states: `hover:from-blue-700 hover:to-purple-700`
- Text gradients: `bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600`
- Badges and highlights: Gradient backgrounds

### Neutral Palette (Slate)

We use **Slate** instead of Gray for a warmer, more modern appearance:

#### Light Mode
- **Surface**: `#F8F7F4` (off-white, avoiding pure white `#FFFFFF`)
- **Card**: `#FAF9F7` (slightly lighter off-white)
- **Border**: `#E5E7EB` (slate-200 equivalent)
- **Muted**: `#F3F4F6` (slate-100) - for skeletons, subtle surfaces
- **Text Primary**: `#111827` (slate-900)
- **Text Secondary**: `#4B5563` (slate-600)
- **Text Muted**: `#9CA3AF` (slate-400)

#### Dark Mode
- **Surface**: `#0F172A` (slate-900)
- **Card**: `#1E293B` (slate-800)
- **Border**: `#334155` (slate-700)
- **Muted**: `#1E293B` (slate-800) - for skeletons
- **Text Body**: `#CBD5E1` (slate-300) - highly readable body text
- **Text Headline**: `#F1F5F9` (slate-100) - bright off-white for emphasis
- **Text Muted**: `#94A3B8` (slate-400)

**Design Token Usage**:
```css
/* CSS Variables */
--color-white: 248 247 244; /* #F8F7F4 */
--color-surface: 248 247 244; /* light mode */
--color-card: 250 249 247;
--color-border: 229 231 235;
--color-muted: 243 244 246;

/* Tailwind Tokens */
bg-surface, bg-card, border-border, bg-muted
```

### Tailwind Brand Tokens

Use these semantic tokens in Tailwind:

```js
// Tailwind config tokens
brand: {
  primary: '#2563EB',    // blue-600
  secondary: '#9333EA',  // purple-600
  accent: '#1D4ED8',     // blue-700 (hover)
  accentAlt: '#7E22CE',  // purple-700 (hover)
}

// Usage
bg-brand-primary, text-brand-secondary, border-brand-accent
```

## Typography

### Font Pairing

**Headlines & CTAs**: Inter (700–800 weight)
- Applied via `font-headline` utility class
- Used for: Page titles, section headers, CTA buttons, navigation labels

**Body Text**: Source Serif Pro (400–500 weight)
- Applied globally via `font-body` on app wrapper
- Used for: Paragraphs, descriptions, card content, testimonials

### Typography Scale

| Element | Size (Mobile) | Size (Desktop) | Weight | Font |
|---------|--------------|----------------|--------|------|
| Hero Title | `text-5xl` | `text-6xl lg:text-7xl` | 800 | Inter |
| Page Title | `text-4xl` | `text-5xl md:text-6xl` | 800 | Inter |
| Section Title | `text-3xl` | `text-4xl` | 700 | Inter |
| Card Title | `text-xl` | `text-xl` | 700 | Inter |
| Subtitle | `text-lg` | `text-xl md:text-2xl` | 600 | Inter |
| Body | `text-base` | `text-lg` | 400 | Source Serif Pro |
| Small | `text-sm` | `text-base` | 400 | Source Serif Pro |

### Google Fonts

Loaded in `index.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&family=Source+Serif+Pro:wght@400;500;600&display=swap" rel="stylesheet">
```

## Logo

### Logo Specifications

- **File**: `src/assets/logo-td.svg`
- **Style**: Blue-to-purple gradient background with white "TD" serif letters in a bordered frame
- **Dimensions**: 48x48px (default), scalable via viewBox
- **Usage**: Navbar (40x40px), Footer (32x40px mobile, 40x40px desktop)

### Favicon

- **File**: `public/favicon-td.svg`
- **Style**: Matches logo design (gradient background, white TD letters)
- **Dimensions**: 32x32px
- **Format**: SVG for crisp rendering at all sizes

### Logo Usage Rules

1. **Minimum Size**: Never smaller than 24x24px
2. **Background**: Works on light and dark backgrounds
3. **Spacing**: Minimum 8px padding around logo
4. **Alternatives**: Use simplified version for favicon/app icons

## Spacing Scale

Consistent spacing using Tailwind's default scale:

- **xs**: `0.25rem` (4px) - tight spacing
- **sm**: `0.5rem` (8px) - compact spacing
- **md**: `1rem` (16px) - default spacing
- **lg**: `1.5rem` (24px) - comfortable spacing
- **xl**: `2rem` (32px) - generous spacing
- **2xl**: `3rem` (48px) - section spacing
- **3xl**: `4rem` (64px) - large section spacing

**Common Patterns**:
- Card padding: `p-6` or `p-8`
- Section margins: `mb-12`, `mb-20`
- Grid gaps: `gap-6`, `gap-8`
- Button padding: `px-6 py-3` or `px-8 py-4`

## Component Patterns

### Buttons

**Primary CTA**:
```jsx
className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl font-headline"
```

**Secondary Button**:
```jsx
className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-2 border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-xl font-semibold font-headline"
```

### Cards

**Standard Card**:
```jsx
className="bg-card border border-border rounded-2xl shadow-lg hover:shadow-xl transition-all"
```

**Gradient Border Card** (for special emphasis):
```jsx
className="rounded-2xl p-[1px] bg-gradient-to-r from-blue-600/20 to-purple-600/20 hover:from-blue-600/40 hover:to-purple-600/40 transition"
  // Inner: rounded-2xl bg-card border border-border
```

### Gradients

**Primary Gradient Background**:
```jsx
className="bg-gradient-to-r from-blue-600 to-purple-600"
```

**Subtle Background Gradient** (light mode):
```jsx
className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20"
```

**Text Gradient**:
```jsx
className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"
```

### Badges

**Status Badge**:
```jsx
className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-gradient-to-r from-blue-600 to-purple-600 text-white"
```

### Borders

- **Standard**: `border border-border`
- **Hover**: `hover:border-blue-400 dark:hover:border-blue-600`
- **Gradient Top Bar** (on cards): `bg-gradient-to-r from-blue-600/30 to-purple-600/30 h-1`

## Dark Mode

### Implementation

- **Strategy**: Class-based (`darkMode: 'class'` in Tailwind)
- **Toggle**: Navbar theme toggle (sun/moon icon)
- **Persistence**: Stored in `localStorage` as `theme-preference`
- **System Preference**: Supported via auto-detection

### Dark Mode Colors

Use Slate palette for warmer tones:
- Backgrounds: Slate-900 (surface), Slate-800 (cards)
- Borders: Slate-700
- Text: Slate-300 (body), Slate-100 (headlines)

## Accessibility

### Contrast Ratios

- **Text on Light**: Minimum 4.5:1 (WCAG AA)
- **Text on Dark**: Minimum 4.5:1 (WCAG AA)
- **Large Text**: Minimum 3:1 (WCAG AA)
- **Interactive Elements**: Clear focus states (`focus:ring-2 focus:ring-blue-400`)

### Motion

- **Page Transitions**: Respects `prefers-reduced-motion`
  - Full motion: Subtle slide + fade (300ms)
  - Reduced motion: Fade only (150ms)

## Brand Consistency Checklist

When adding new components or pages:

- [ ] Uses brand gradient for primary CTAs
- [ ] Follows typography scale (Inter for headlines, Serif for body)
- [ ] Uses Slate colors instead of Gray
- [ ] Includes proper dark mode variants
- [ ] Meets WCAG AA contrast requirements
- [ ] Uses consistent spacing scale
- [ ] Includes hover/focus states
- [ ] Respects `prefers-reduced-motion`

## Resources

- **Logo Files**: `src/assets/logo-td.svg`
- **Favicon**: `public/favicon-td.svg`
- **Tailwind Config**: `tailwind.config.js`
- **CSS Variables**: `src/index.css`
- **Typography**: `index.html` (Google Fonts), `tailwind.config.js`

---

**Last Updated**: 2025-01-XX
**Version**: 1.0

