# Styling Guide

**Version:** 1.0  
**Last Updated:** December 2024  
**Status:** Active - All developers must follow this guide

---

## 🎨 Color System

### Primary & Secondary Colors

**PRIMARY COLOR: Blue (`#2563EB` / `blue-600`)**
- **Purpose**: Main brand color, primary CTAs, key highlights
- **Token**: `brand-primary`
- **Usage**: Primary buttons, active states, key UI elements
- **Hover Variant**: `brand-accent` (`#1D4ED8` / `blue-700`)

**SECONDARY COLOR: Purple (`#9333EA` / `purple-600`)**
- **Purpose**: Secondary brand color, used in gradients with primary
- **Token**: `brand-secondary`
- **Usage**: Always paired with primary in gradients, never standalone
- **Hover Variant**: `brand-accent-alt` (`#7E22CE` / `purple-700`)

**IMPORTANT**: The brand identity is a **blue-to-purple gradient**, not individual colors. Always use gradients for brand elements.

---

### Brand Color Tokens

#### ✅ CORRECT Usage

```jsx
// Primary gradient (most common)
className="bg-gradient-to-r from-brand-primary to-brand-secondary"

// Text gradient
className="bg-clip-text text-transparent bg-gradient-to-r from-brand-primary to-brand-secondary"

// Hover states
className="hover:from-brand-accent hover:to-brand-accent-alt"

// Solid primary (when gradient not needed)
className="bg-brand-primary text-white"

// Opacity variants for subtle effects
className="from-brand-primary/20 to-brand-secondary/20"  // Subtle backgrounds
className="from-brand-primary/30 to-brand-secondary/30"  // Card borders
className="border-brand-primary/50"                       // Borders
```

#### ❌ INCORRECT Usage

```jsx
// DON'T use hardcoded colors
className="bg-blue-600"                    // ❌ Use bg-brand-primary
className="bg-purple-600"                  // ❌ Use bg-brand-secondary
className="from-blue-600 to-purple-600"    // ❌ Use brand tokens
className="text-blue-600"                  // ❌ Use text-brand-primary

// DON'T use secondary alone (always pair with primary in gradients)
className="bg-brand-secondary"             // ❌ Secondary is gradient-only
className="text-brand-secondary"           // ❌ Use in gradient with primary
```

---

### Neutral Colors (Semantic Tokens)

**Use semantic tokens, NOT hardcoded gray/slate values.**

#### Light Mode

| Purpose | Token | Value | Usage |
|---------|-------|-------|-------|
| Page Background | `bg-surface` | `#F8F7F4` (off-white) | Main page background |
| Card Background | `bg-card` | `#FAF9F7` (lighter off-white) | Card components |
| Border | `border-border` | `#E5E7EB` (gray-200) | Standard borders |
| Muted Background | `bg-muted` | `#F3F4F6` (gray-100) | Skeletons, subtle surfaces |
| Text Primary | `text-gray-900` | `#111827` | Headlines, important text |
| Text Secondary | `text-gray-600` | `#4B5563` | Body text, descriptions |
| Text Muted | `text-gray-400` | `#9CA3AF` | Captions, metadata |

#### Dark Mode

| Purpose | Token | Value | Usage |
|---------|-------|-------|-------|
| Page Background | `bg-surface dark:bg-gray-900` | `#0F172A` (slate-900) | Main page background |
| Card Background | `bg-card dark:bg-gray-800` | `#1E293B` (slate-800) | Card components |
| Border | `border-border dark:border-gray-700` | `#334155` (slate-700) | Standard borders |
| Muted Background | `bg-muted dark:bg-gray-800` | `#1E293B` (slate-800) | Skeletons |
| Text Body | `text-gray-600 dark:text-gray-300` | `#CBD5E1` (slate-300) | Body text |
| Text Headline | `text-gray-900 dark:text-white` | `#F1F5F9` (slate-100) | Headlines |
| Text Muted | `text-gray-400 dark:text-gray-400` | `#94A3B8` (slate-400) | Captions |

#### ✅ CORRECT Usage

```jsx
// Backgrounds
className="bg-surface dark:bg-gray-900"           // Page background
className="bg-card dark:bg-gray-800"              // Card background
className="bg-muted dark:bg-gray-800"             // Subtle backgrounds

// Borders
className="border-border dark:border-gray-700"    // Standard borders

// Text
className="text-gray-900 dark:text-white"         // Headlines
className="text-gray-600 dark:text-gray-300"     // Body text
className="text-gray-400 dark:text-gray-400"     // Muted text
```

#### ❌ INCORRECT Usage

```jsx
// DON'T use hardcoded values
className="bg-white"                    // ❌ Use bg-surface or bg-card
className="bg-gray-50"                  // ❌ Use bg-muted
className="border-gray-200"             // ❌ Use border-border
className="text-slate-900"              // ❌ Use text-gray-900 (we use gray, not slate in class names)
```

**Note**: CSS variables use slate internally, but Tailwind class names use `gray-*` for consistency.

---

## 🎯 Color Usage Rules

### Rule 1: Brand Colors = Gradients Only

**Primary and secondary colors should ALWAYS be used together in gradients for brand elements.**

```jsx
// ✅ CORRECT
<button className="bg-gradient-to-r from-brand-primary to-brand-secondary">
  Click Me
</button>

// ❌ INCORRECT
<button className="bg-brand-primary">Click Me</button>  // Missing gradient
<button className="bg-brand-secondary">Click Me</button>  // Secondary alone
```

**Exception**: Solid `bg-brand-primary` is acceptable for:
- Small icons or badges where gradient is too subtle
- Focus rings: `focus:ring-brand-primary`
- Border accents: `border-brand-primary`

### Rule 2: Use Semantic Tokens for Neutrals

**Always use semantic tokens (`surface`, `card`, `border`, `muted`) instead of hardcoded colors.**

```jsx
// ✅ CORRECT
<div className="bg-card border border-border">
  <p className="text-gray-900 dark:text-white">Content</p>
</div>

// ❌ INCORRECT
<div className="bg-white border border-gray-200">
  <p className="text-black dark:text-white">Content</p>
</div>
```

### Rule 3: Consistent Dark Mode Patterns

**Always provide dark mode variants for colors.**

```jsx
// ✅ CORRECT
className="bg-surface dark:bg-gray-900 text-gray-900 dark:text-white"

// ❌ INCORRECT
className="bg-surface text-gray-900"  // Missing dark mode
```

---

## 📐 Typography

### Font Families

**Headlines & CTAs**: `font-headline` (Inter)
- Use for: Page titles, section headers, buttons, navigation

**Body Text**: `font-body` (Source Serif Pro)
- Use for: Paragraphs, descriptions, card content

### Typographic Scale

**Use semantic tokens, NOT raw Tailwind sizes.**

```jsx
// ✅ CORRECT
<h1 className="text-headline-1 md:text-headline-1-md lg:text-headline-1-lg font-headline">
  Hero Title
</h1>
<p className="text-body-large md:text-body-large-md font-body">
  Description text
</p>

// ❌ INCORRECT
<h1 className="text-5xl md:text-6xl lg:text-7xl">Hero Title</h1>
<p className="text-xl md:text-2xl">Description text</p>
```

### Typography Tokens

| Token | Size (Mobile) | Size (Desktop) | Usage |
|-------|---------------|----------------|-------|
| `text-headline-1` | 56px | 72px | Hero headlines |
| `text-headline-2` | 36px | 36px | Section headings |
| `text-headline-3` | 24px | 30px | Subsection headings |
| `text-body-large` | 20px | 24px | Hero subtitles, intro text |
| `text-body` | 16px | 16px | Standard paragraphs |
| `text-body-md` | 18px | 18px | Medium body text |
| `text-body-small` | 14px | 14px | Captions, metadata |
| `text-button` | 18px | 18px | Button text |
| `text-badge` | 14px | 14px | Badge text |

---

## 🧩 Component Patterns

### Buttons

#### Primary Button (Brand Gradient)

```jsx
// ✅ CORRECT
<button className="bg-gradient-to-r from-brand-primary to-brand-secondary text-white rounded-xl font-semibold hover:from-brand-accent hover:to-brand-accent-alt hover:-translate-y-1 hover:shadow-xl active:translate-y-0 active:shadow-md transition-all duration-300 shadow-lg font-headline text-button">
  Click Me
</button>
```

**Required Classes:**
- `bg-gradient-to-r from-brand-primary to-brand-secondary` - Brand gradient
- `hover:from-brand-accent hover:to-brand-accent-alt` - Hover state
- `hover:-translate-y-1 hover:shadow-xl` - Lift effect
- `active:translate-y-0 active:shadow-md` - Click feedback
- `text-button font-headline` - Typography

#### Secondary Button

```jsx
// ✅ CORRECT
<button className="bg-surface dark:bg-gray-800 text-gray-900 dark:text-white border-2 border-border dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 hover:-translate-y-1 hover:shadow-xl active:translate-y-0 active:shadow-md transition-all duration-300 rounded-xl font-headline text-button">
  Secondary Action
</button>
```

### Cards

#### Standard Card

```jsx
// ✅ CORRECT
<div className="bg-card dark:bg-gray-800 border border-border dark:border-gray-700 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6">
  <h3 className="text-headline-3 md:text-headline-3-md text-gray-900 dark:text-white font-headline">
    Card Title
  </h3>
  <p className="text-body text-gray-600 dark:text-gray-300 font-body">
    Card content
  </p>
</div>
```

#### Card with Gradient Border

```jsx
// ✅ CORRECT
<div className="rounded-2xl p-[1px] bg-gradient-to-r from-brand-primary/20 to-brand-secondary/20 hover:from-brand-primary/40 hover:to-brand-secondary/40 transition">
  <div className="rounded-2xl bg-card dark:bg-gray-800 p-6">
    {/* Card content */}
  </div>
</div>
```

### Badges

```jsx
// ✅ CORRECT - Brand gradient badge
<span className="inline-flex items-center px-3 py-1 rounded-full text-badge font-semibold bg-gradient-to-r from-brand-primary to-brand-secondary text-white">
  Featured
</span>

// ✅ CORRECT - Subtle badge
<span className="inline-flex items-center px-3 py-1 rounded-full text-badge font-medium bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
  New
</span>
```

---

## 🎨 Background Patterns

### Hero Section Background

```jsx
// ✅ CORRECT
<section className="relative overflow-hidden">
  {/* Animated gradient background */}
  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/30 to-transparent dark:from-blue-900/10 dark:via-purple-900/10 -z-10" />
  
  {/* Floating shapes */}
  <div className="absolute top-20 right-20 w-72 h-72 bg-blue-200/20 dark:bg-blue-800/10 rounded-full blur-3xl animate-pulse -z-10" />
  
  {/* Content */}
  <div className="relative z-10">
    {/* Hero content */}
  </div>
</section>
```

### Subtle Background Gradients

```jsx
// ✅ CORRECT - Testimonials, featured sections
<div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8">
  {/* Content */}
</div>
```

---

## 🚫 Common Mistakes to Avoid

### 1. Hardcoded Colors

```jsx
// ❌ DON'T
className="bg-blue-600"
className="text-purple-600"
className="border-gray-200"

// ✅ DO
className="bg-brand-primary"
className="text-brand-primary"  // or use gradient
className="border-border"
```

### 2. Missing Dark Mode

```jsx
// ❌ DON'T
className="bg-white text-gray-900"

// ✅ DO
className="bg-surface dark:bg-gray-900 text-gray-900 dark:text-white"
```

### 3. Using Secondary Alone

```jsx
// ❌ DON'T
className="bg-brand-secondary"

// ✅ DO
className="bg-gradient-to-r from-brand-primary to-brand-secondary"
```

### 4. Inconsistent Typography

```jsx
// ❌ DON'T
<h1 className="text-5xl">Title</h1>

// ✅ DO
<h1 className="text-headline-1 font-headline">Title</h1>
```

### 5. Missing Hover States

```jsx
// ❌ DON'T
<button className="bg-brand-primary">Click</button>

// ✅ DO
<button className="bg-gradient-to-r from-brand-primary to-brand-secondary hover:from-brand-accent hover:to-brand-accent-alt transition-all">
  Click
</button>
```

---

## 📋 Quick Reference

### Brand Colors

| Token | Value | Usage |
|-------|-------|-------|
| `brand-primary` | `#2563EB` (blue-600) | Primary brand color |
| `brand-secondary` | `#9333EA` (purple-600) | Secondary (gradient only) |
| `brand-accent` | `#1D4ED8` (blue-700) | Primary hover |
| `brand-accent-alt` | `#7E22CE` (purple-700) | Secondary hover |

### Semantic Tokens

| Token | Light | Dark | Usage |
|-------|-------|------|-------|
| `surface` | `#F8F7F4` | `#0F172A` | Page background |
| `card` | `#FAF9F7` | `#1E293B` | Card background |
| `border` | `#E5E7EB` | `#334155` | Borders |
| `muted` | `#F3F4F6` | `#1E293B` | Subtle backgrounds |

### Common Patterns

```jsx
// Primary CTA Button
className="bg-gradient-to-r from-brand-primary to-brand-secondary text-white rounded-xl font-headline text-button hover:from-brand-accent hover:to-brand-accent-alt hover:-translate-y-1 hover:shadow-xl transition-all"

// Card
className="bg-card dark:bg-gray-800 border border-border dark:border-gray-700 rounded-2xl shadow-lg hover:shadow-xl transition-all"

// Text Gradient
className="bg-clip-text text-transparent bg-gradient-to-r from-brand-primary to-brand-secondary"

// Subtle Gradient Background
className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20"
```

---

## ✅ Checklist for New Components

When creating a new component, ensure:

- [ ] Uses `brand-primary`/`brand-secondary` tokens (not hardcoded colors)
- [ ] Brand colors used in gradients (not standalone)
- [ ] Semantic tokens for neutrals (`surface`, `card`, `border`, `muted`)
- [ ] Dark mode variants provided
- [ ] Typography uses semantic tokens (`text-headline-*`, `text-body-*`)
- [ ] Hover states use `brand-accent`/`brand-accent-alt`
- [ ] Consistent spacing (Tailwind scale)
- [ ] Proper focus states for accessibility
- [ ] Respects `prefers-reduced-motion`

---

## 🔧 Migration Guide

If you find hardcoded colors in existing code:

1. **Brand Colors**: Replace `blue-600` → `brand-primary`, `purple-600` → `brand-secondary`
2. **Neutrals**: Replace `white` → `surface` or `card`, `gray-200` → `border`
3. **Text**: Ensure dark mode variants exist
4. **Gradients**: Convert single colors to brand gradients where appropriate

---

**Questions?** Refer to `docs/brand-guidelines.md` for more details or ask the team lead.

**Last Updated**: December 2024  
**Maintained By**: Development Team


