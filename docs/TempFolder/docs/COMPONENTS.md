# Components

## Common
- `Header`: sticky, translucent top navigation (brand + Discover link), backdrop-blur
- `Footer`: attribution and year (no social icons)
- `Layout`: dark shell + header/footer + back-to-top
- `Tabs`: simple tab switcher
- `SkeletonCard`: loading placeholder for lists

## Movies
- `MovieCard`
  - Props: `{ movie: Movie, variant?: 'default' | 'grid' }`
  - Enforces 2:3 poster, truncates title, shows year and rating
- `MovieCarousel`
  - Props: `{ title: string, movies: Movie[], isLoading?: boolean, isError?: boolean, errorMessage?: string }`
  - Horizontal scroll with snap, edge gradient fades, animated arrows, framer-motion staggered entrance
  - Shows a friendly error message when `isError` is true

Notes:
- Use `variant="grid"` for grid pages (Discover/Search) to let the grid manage widths.

