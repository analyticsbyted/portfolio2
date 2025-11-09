import React, { useState } from 'react';

function ImageWithSkeleton({ src, alt, className = '', onLoad, ...rest }) {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className="relative">
      {!loaded && (
        <div className="absolute inset-0 bg-muted/60 animate-pulse rounded-lg" />
      )}
      <img
        src={src}
        alt={alt}
        className={`${className} ${loaded ? '' : 'opacity-0'}`}
        onLoad={(e) => {
          setLoaded(true);
          if (typeof onLoad === 'function') {
            onLoad(e);
          }
        }}
        {...rest}
      />
    </div>
  );
}

export default ImageWithSkeleton;


