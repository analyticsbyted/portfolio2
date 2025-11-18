import React, { useState } from 'react';

/**
 * Enhanced image component with lazy loading, responsive images, and WebP fallback support.
 * 
 * @param {string} src - Primary image source (required, used as fallback)
 * @param {string} alt - Alt text for accessibility (required)
 * @param {string} className - Additional CSS classes
 * @param {string} webpSrc - Optional WebP version of the image (enables <picture> element)
 * @param {string} srcset - Optional srcset attribute for responsive images
 * @param {string} sizes - Optional sizes attribute for responsive images
 * @param {string|boolean} loading - Loading strategy: 'lazy' (default), 'eager', or false
 * @param {function} onLoad - Callback when image loads
 * @param {object} ...rest - Additional img attributes
 */
function ImageWithSkeleton({ 
  src, 
  alt, 
  className = '', 
  webpSrc = null,
  srcset = null,
  sizes = null,
  loading = 'lazy',
  onLoad,
  ...rest 
}) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  const handleLoad = (e) => {
    setLoaded(true);
    if (typeof onLoad === 'function') {
      onLoad(e);
    }
  };

  const handleError = () => {
    setError(true);
    setLoaded(true); // Stop skeleton on error
  };

  // Common image attributes
  // Extract loading from rest if present, otherwise use default
  const { loading: restLoading, ...restWithoutLoading } = rest;
  const finalLoading = restLoading !== undefined ? restLoading : loading;
  
  const imgProps = {
    alt,
    className: `${className} ${loaded ? '' : 'opacity-0'}`,
    onLoad: handleLoad,
    onError: handleError,
    ...restWithoutLoading,
    // Set loading after ...rest to ensure default 'lazy' is preserved unless explicitly overridden
    loading: finalLoading === false ? undefined : finalLoading
  };

  // Add srcset and sizes if provided
  if (srcset) {
    imgProps.srcset = srcset;
  }
  if (sizes) {
    imgProps.sizes = sizes;
  }

  return (
    <div className="relative">
      {!loaded && !error && (
        <div className="absolute inset-0 bg-muted/60 animate-pulse rounded-lg" />
      )}
      {error && (
        <div className="absolute inset-0 bg-muted/40 flex items-center justify-center rounded-lg">
          <span className="text-muted-foreground text-sm">Image unavailable</span>
        </div>
      )}
      
      {/* Use <picture> element if WebP version is provided */}
      {webpSrc ? (
        <picture>
          <source srcSet={webpSrc} type="image/webp" />
          <img
            src={src}
            {...imgProps}
          />
        </picture>
      ) : (
        <img
          src={src}
          {...imgProps}
        />
      )}
    </div>
  );
}

export default ImageWithSkeleton;


