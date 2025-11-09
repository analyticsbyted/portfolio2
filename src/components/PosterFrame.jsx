import React, { useMemo, useState } from 'react';
import ImageWithSkeleton from './ImageWithSkeleton';

/**
 * PosterFrame renders an image inside a responsive aspect-ratio box.
 * If preferredAspect is provided, it uses that ratio initially and, on load,
 * snaps to the nearest ratio among a small set of common options to better
 * match the source image (for more natural fit without extreme letterboxing or clipping).
 */
function PosterFrame({
  src,
  alt,
  preferredAspect = '4/3', // default suits many BI/research screenshots
  aspectCandidates = ['16/9', '4/3', '1/1', '3/4'],
  className = '',
  imgClassName = '',
}) {
  const ratioMap = useMemo(
    () => ({
      '16/9': 16 / 9,
      '4/3': 4 / 3,
      '1/1': 1,
      '3/4': 3 / 4,
    }),
    []
  );

  const [aspect, setAspect] = useState(preferredAspect);

  function handleLoaded(imgEl) {
    if (!imgEl || !imgEl.naturalWidth || !imgEl.naturalHeight) return;
    const r = imgEl.naturalWidth / imgEl.naturalHeight;
    // choose nearest candidate ratio
    let best = preferredAspect;
    let bestDiff = Number.POSITIVE_INFINITY;
    for (const key of aspectCandidates) {
      const val = ratioMap[key] ?? 1;
      const diff = Math.abs(val - r);
      if (diff < bestDiff) {
        best = key;
        bestDiff = diff;
      }
    }
    setAspect(best);
  }

  const aspectStyle = useMemo(() => {
    const [w, h] = (aspect || '4/3').split('/');
    return { aspectRatio: `${w} / ${h}` };
  }, [aspect]);

  return (
    <div className={`relative w-full bg-muted/40 overflow-hidden rounded-t-2xl ${className}`} style={aspectStyle}>
      <div className="absolute inset-0 p-4 flex items-center justify-center">
        <ImageWithScriptedOnLoad
          src={src}
          alt={alt}
          className={`w-full h-full object-contain ${imgClassName}`}
          onElementLoaded={handleLoaded}
        />
      </div>
    </div>
  );
}

/**
 * Small adapter to reuse ImageWithSkeleton while also exposing the actual <img> element on load.
 */
function ImageWithScriptedOnLoad({ onElementLoaded, ...rest }) {
  const [imgEl, setImgEl] = useState(null);
  return (
    <ImageWithSkeleton
      {...rest}
      onLoad={(e) => {
        setImgEl(e.currentTarget);
        if (onElementLoaded) onElementLoaded(e.currentTarget);
      }}
    />
  );
}

export default PosterFrame;


