# Image Optimization & Lazy Loading

This document describes the image optimization strategy implemented in the portfolio, including lazy loading, responsive images, and WebP fallback support.

## Overview

The portfolio uses an enhanced `ImageWithSkeleton` component that provides:
- **Native lazy loading** for below-the-fold images
- **Responsive images** via `srcset` and `sizes` attributes
- **WebP fallback** using the `<picture>` element
- **Loading skeletons** for better perceived performance
- **Error handling** with graceful degradation

## Component: `ImageWithSkeleton`

Located at `src/components/ImageWithSkeleton.jsx`, this component wraps the native `<img>` tag with enhanced features.

### Features

1. **Lazy Loading** (default: `'lazy'`)
   - Images below the fold load only when they're about to enter the viewport
   - Reduces initial page load time and bandwidth usage
   - Can be overridden with `loading="eager"` for above-the-fold images

2. **WebP Fallback**
   - Automatically uses `<picture>` element when `webpSrc` prop is provided
   - Falls back to original format (PNG/JPG) if WebP is not supported
   - No changes to existing images required—WebP versions are optional

3. **Responsive Images**
   - Supports `srcset` and `sizes` attributes for responsive image loading
   - Browser selects appropriate image size based on viewport and device pixel ratio
   - Existing images remain unchanged—responsive versions are optional

4. **Loading States**
   - Shows skeleton placeholder while image loads
   - Smooth fade-in transition when image is ready
   - Error state with fallback message if image fails to load

### Usage

#### Basic Usage (Lazy Loading Only)

```jsx
import ImageWithSkeleton from '../components/ImageWithSkeleton';

<ImageWithSkeleton
  src={posterImage}
  alt="Project poster"
  className="h-full w-full object-contain"
/>
```

#### With WebP Fallback

```jsx
import posterPng from '../assets/webapps/project-poster.png';
import posterWebp from '../assets/webapps/project-poster.webp';

<ImageWithSkeleton
  src={posterPng}
  webpSrc={posterWebp}
  alt="Project poster"
  className="h-full w-full object-contain"
/>
```

#### With Responsive Images

```jsx
<ImageWithSkeleton
  src={posterImage}
  srcset="poster-400w.png 400w, poster-800w.png 800w, poster-1200w.png 1200w"
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
  alt="Project poster"
  className="h-full w-full object-contain"
/>
```

#### Eager Loading (Above the Fold)

```jsx
<ImageWithSkeleton
  src={heroImage}
  alt="Hero image"
  loading="eager"
  className="w-full"
/>
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `src` | `string` | **required** | Primary image source (used as fallback) |
| `alt` | `string` | **required** | Alt text for accessibility |
| `className` | `string` | `''` | Additional CSS classes |
| `webpSrc` | `string` | `null` | Optional WebP version (enables `<picture>` element) |
| `srcset` | `string` | `null` | Optional srcset attribute for responsive images |
| `sizes` | `string` | `null` | Optional sizes attribute for responsive images |
| `loading` | `'lazy' \| 'eager' \| false` | `'lazy'` | Loading strategy |
| `onLoad` | `function` | `undefined` | Callback when image loads |
| `...rest` | `object` | - | Additional img attributes |

## Current Implementation

### Work Page (`src/pages/Work.jsx`)

All project cards use `ImageWithSkeleton` with lazy loading enabled by default:

```jsx
<ImageWithSkeleton
  src={proj.img}
  alt={proj.title}
  className="h-full w-full object-contain"
/>
```

### Home Page (`src/pages/Home.jsx`)

Featured project image uses `ImageWithSkeleton` with lazy loading:

```jsx
<ImageWithSkeleton 
  src={economicPulsePoster} 
  alt="Economic KPI Pulse dashboard poster" 
  className="h-full w-full object-contain"
  loading="lazy"
/>
```

### PosterFrame Component (`src/components/PosterFrame.jsx`)

Uses `ImageWithSkeleton` internally, inheriting all optimization features.

## Fallback Strategy

### No WebP Version Available

If `webpSrc` is not provided, the component renders a standard `<img>` tag with the original image. **No changes to existing images are required.**

### WebP Not Supported

If `webpSrc` is provided but the browser doesn't support WebP, the `<picture>` element automatically falls back to the original format specified in `src`.

### Image Load Failure

If an image fails to load, the component displays a fallback message: "Image unavailable" with a muted background.

## Performance Benefits

1. **Reduced Initial Load Time**
   - Lazy loading defers below-the-fold images until needed
   - Smaller initial bundle size

2. **Bandwidth Savings**
   - Images only load when visible
   - WebP format provides ~25-35% file size reduction (when available)

3. **Better Core Web Vitals**
   - Improved Largest Contentful Paint (LCP)
   - Reduced Cumulative Layout Shift (CLS) with proper sizing

4. **Improved User Experience**
   - Loading skeletons provide visual feedback
   - Smooth transitions prevent jarring layout shifts

## Migration Path

### Phase 1: Lazy Loading (✅ Complete)

All images now use lazy loading by default. No changes to existing images required.

### Phase 2: WebP Conversion (Optional)

To add WebP support:

1. Generate WebP versions of images:
   ```bash
   # Using ImageMagick
   convert image.png image.webp
   
   # Using cwebp (Google's WebP encoder)
   cwebp -q 80 image.png -o image.webp
   ```

2. Import both versions:
   ```jsx
   import posterPng from '../assets/webapps/project-poster.png';
   import posterWebp from '../assets/webapps/project-poster.webp';
   ```

3. Pass both to component:
   ```jsx
   <ImageWithSkeleton
     src={posterPng}
     webpSrc={posterWebp}
     alt="Project poster"
   />
   ```

### Phase 3: Responsive Images (Optional)

To add responsive image support:

1. Generate multiple sizes:
   ```bash
   # Generate sizes: 400w, 800w, 1200w
   convert image.png -resize 400x image-400w.png
   convert image.png -resize 800x image-800w.png
   convert image.png -resize 1200x image-1200w.png
   ```

2. Use srcset and sizes:
   ```jsx
   <ImageWithSkeleton
     src={posterImage}
     srcset="poster-400w.png 400w, poster-800w.png 800w, poster-1200w.png 1200w"
     sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
     alt="Project poster"
   />
   ```

## Best Practices

1. **Always provide alt text** for accessibility
2. **Use lazy loading** for below-the-fold images (default)
3. **Use eager loading** only for above-the-fold hero images
4. **Preserve aspect ratios** with `object-contain` or `object-cover`
5. **Test fallbacks** by disabling JavaScript or using older browsers
6. **Monitor Core Web Vitals** to measure performance improvements

## Browser Support

- **Lazy Loading**: Supported in all modern browsers (Chrome 76+, Firefox 75+, Safari 15.4+)
- **WebP**: Supported in all modern browsers (Chrome 23+, Firefox 65+, Safari 14+)
- **Picture Element**: Supported in all modern browsers (IE11+)
- **Srcset/Sizes**: Supported in all modern browsers (IE11+)

## Troubleshooting

### Images Not Loading

- Check that image paths are correct
- Verify images exist in the `src/assets` directory
- Check browser console for 404 errors

### Lazy Loading Not Working

- Ensure `loading="lazy"` is set (or use default)
- Check browser support (older browsers may not support native lazy loading)
- Verify images are actually below the fold

### WebP Not Displaying

- Verify WebP file exists and path is correct
- Check browser support (older browsers fall back to PNG/JPG automatically)
- Test by temporarily disabling WebP support in browser

## Related Documentation

- [Asset Management](./assets.md) - Image naming conventions and organization
- [Performance Considerations](../docs/context.md#performance-considerations) - Overall performance strategy
- [Component Documentation](./pages-and-components.md#imagewithskeleton) - Component details

