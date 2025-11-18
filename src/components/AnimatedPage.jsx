// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const AnimatedPage = ({ children }) => {
  const [shouldReduceMotion, setShouldReduceMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setShouldReduceMotion(mediaQuery.matches);

    const handleChange = (e) => setShouldReduceMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Reduced motion: simple fade only
  const reducedMotionAnimations = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };

  // Full motion: subtle slide + fade
  const fullMotionAnimations = {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 },
  };

  const animations = shouldReduceMotion ? reducedMotionAnimations : fullMotionAnimations;

  return (
    <motion.div
      variants={animations}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ 
        duration: shouldReduceMotion ? 0.15 : 0.3,
        ease: [0.22, 1, 0.36, 1] // Custom easing for smoother feel
      }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedPage;
