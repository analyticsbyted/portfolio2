import { useState, useEffect, useRef } from 'react';

/**
 * Custom hook for animating number counters
 * @param {number} target - Target number to count to
 * @param {number} duration - Animation duration in milliseconds
 * @param {boolean} start - Whether to start the animation
 * @returns {number} Current count value
 */
export function useCounter(target, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  const startTimeRef = useRef(null);
  const animationFrameRef = useRef(null);

  useEffect(() => {
    if (!start) return;

    const animate = (currentTime) => {
      if (!startTimeRef.current) {
        startTimeRef.current = currentTime;
      }

      const elapsed = currentTime - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function (ease-out)
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const currentCount = Math.floor(easeOut * target);

      setCount(currentCount);

      if (progress < 1) {
        animationFrameRef.current = requestAnimationFrame(animate);
      } else {
        setCount(target); // Ensure we end at exact target
      }
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [target, duration, start]);

  return count;
}
