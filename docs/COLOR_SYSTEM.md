# Color System Definition

**Version:** 1.0  
**Status:** Official - All code must follow this system

---

## 🎨 Primary & Secondary Colors

### PRIMARY COLOR: Blue

**Value**: `#2563EB` (Tailwind `blue-600`)  
**Token**: `brand-primary`  
**Purpose**: Main brand color, primary CTAs, key highlights

**Usage Rules:**
- ✅ Use in gradients with secondary: `from-brand-primary to-brand-secondary`
- ✅ Use solid for small elements (icons, badges): `bg-brand-primary`
- ✅ Use for focus rings: `focus:ring-brand-primary`
- ✅ Use for border accents: `border-brand-primary`
- ❌ **NEVER** use standalone for large elements (always pair with secondary in gradients)

**Hover Variant**: `brand-accent` (`#1D4ED8` / `blue-700`)

---

### SECONDARY COLOR: Purple

**Value**: `#9333EA` (Tailwind `purple-600`)  
**Token**: `brand-secondary`  
**Purpose**: Secondary brand color, used exclusively in gradients with primary

**Usage Rules:**
- ✅ **ONLY** use in gradients with primary: `from-brand-primary to-brand-secondary`
- ✅ Use in text gradients: `bg-gradient-to-r from-brand-primary to-brand-secondary`
- ❌ **NEVER** use standalone: `bg-brand-secondary` is incorrect
- ❌ **NEVER** use for text: `text-brand-secondary` is incorrect

**Hover Variant**: `brand-accent-alt` (`#7E22CE` / `purple-700`)

---

## 🎯 Brand Identity

**The brand identity is a blue-to-purple gradient, not individual colors.**

All brand elements should use the gradient pattern:
```
from-brand-primary → to-brand-secondary
```

---

## 📐 Color Hierarchy

### 1. Brand Colors (Primary Use)
- **Primary**: `brand-primary` (Blue `#2563EB`)
- **Secondary**: `brand-secondary` (Purple `#9333EA`)
- **Always paired in gradients for brand elements**

### 2. Semantic Tokens (Neutrals)
- **Surface**: Page backgrounds (`bg-surface`)
- **Card**: Card backgrounds (`bg-card`)
- **Border**: Borders (`border-border`)
- **Muted**: Subtle backgrounds (`bg-muted`)

### 3. Text Colors
- **Headlines**: `text-gray-900 dark:text-white`
- **Body**: `text-gray-600 dark:text-gray-300`
- **Muted**: `text-gray-400 dark:text-gray-400`

---

## ✅ Correct Usage Examples

### Brand Gradients

```jsx
// Primary CTA Button
className="bg-gradient-to-r from-brand-primary to-brand-secondary"

// Text Gradient
className="bg-clip-text text-transparent bg-gradient-to-r from-brand-primary to-brand-secondary"

// Hover States
className="hover:from-brand-accent hover:to-brand-accent-alt"

// Subtle Backgrounds
className="from-brand-primary/20 to-brand-secondary/20"
```

### Solid Primary (Limited Use)

```jsx
// Small icons/badges
className="bg-brand-primary text-white"

// Focus rings
className="focus:ring-brand-primary"

// Border accents
className="border-brand-primary"
```

---

## ❌ Incorrect Usage

```jsx
// DON'T: Use hardcoded colors
className="bg-blue-600"                    // ❌
className="bg-purple-600"                  // ❌

// DON'T: Use secondary standalone
className="bg-brand-secondary"             // ❌
className="text-brand-secondary"           // ❌

// DON'T: Use hardcoded gradients
className="from-blue-600 to-purple-600"    // ❌
```

---

## 🔄 Migration Status

**Current State**: Mixed usage
- ✅ Brand tokens used in most places
- ⚠️ Some hardcoded `blue-*` and `purple-*` still exist
- ⚠️ Some `gray-*` instead of semantic tokens

**Target State**: 100% token usage
- All brand colors use `brand-primary`/`brand-secondary`
- All neutrals use semantic tokens (`surface`, `card`, `border`, `muted`)
- No hardcoded color values

---

## 📚 Related Documentation

- **Styling Guide**: `docs/STYLING_GUIDE.md` - Complete usage guide
- **Brand Guidelines**: `docs/brand-guidelines.md` - Full brand documentation
- **Tailwind Config**: `tailwind.config.js` - Token definitions

---

**Last Updated**: December 2024  
**Authority**: This document defines the official color system


