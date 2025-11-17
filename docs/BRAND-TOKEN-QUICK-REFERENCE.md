# Brand Token Quick Reference

**Status:** ✅ Migration Complete (2025-01-11)

## Quick Usage

### Gradients (Most Common)
```jsx
// Primary gradient
className="bg-gradient-to-r from-brand-primary to-brand-secondary"

// Hover state
className="hover:from-brand-accent hover:to-brand-accent-alt"

// Text gradient
className="bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary"

// With opacity
className="from-brand-primary/20 to-brand-secondary/20"
```

### Solid Colors
```jsx
// Backgrounds
className="bg-brand-primary"
className="bg-brand-secondary"

// Text
className="text-brand-primary"
className="text-brand-secondary"

// Borders
className="border-brand-primary"
```

## Token Values

- `brand-primary`: #2563EB (blue-600)
- `brand-secondary`: #9333EA (purple-600)
- `brand-accent`: #1D4ED8 (blue-700) - hover/darker
- `brand-accent-alt`: #7E22CE (purple-700) - hover/darker

## Where to Find More

- **Full Guide:** `docs/color-migration-guide.md`
- **Brand Guidelines:** `docs/brand-guidelines.md`
- **Configuration:** `tailwind.config.js`

---

**Note:** All brand gradients have been migrated. Use brand tokens for any new brand-colored elements.

