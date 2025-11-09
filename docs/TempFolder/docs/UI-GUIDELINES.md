# UI Guidelines

## Containers
- Use `max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8` on main sections.
 - Header: sticky with `bg-gray-900/70` + `backdrop-blur` and safe height (`h-14`).

## Posters
- Wrap images in `.aspect-2-3` to enforce 2:3 ratio.
- In carousels, card widths: `w-40 md:w-48 lg:w-56`.

## Scrollers
- Horizontal rows: `flex overflow-x-scroll snap-x snap-mandatory scrollbar-hide`.
- Show arrow buttons on hover; scroll by card width.
- Edge gradient fades to hint scrollability.

## Headings
- Page: `text-3xl font-bold`
- Section: `text-2xl font-bold`

## Hero
- Use a dynamic backdrop with a gradient overlay and `backdrop-blur` for text panels.
- Provide clear CTAs (Discover, Search).

## States
- Loading: use `SkeletonCard` in rows; simple text acceptable elsewhere.
- Empty: concise message; layout remains stable.
- Error: friendly copy with retry when relevant.

## Image fallbacks
- Cast images: if a profile is missing, render a 2:3 placeholder with the person’s initials centered on a muted background. Do not collapse layout or show broken images.

