import { motion } from 'framer-motion';

function Card({ as = 'div', className = '', children, ...rest }) {
  const Component = motion[as] || motion.div;

  const base =
    'bg-card border-2 border-border rounded-2xl overflow-hidden';
  // Removed hover:-translate-y-2 as we handle it with motion
  const hover =
    'hover:shadow-2xl hover:border-brand-primary/30 dark:hover:border-brand-primary/30';
  const focus =
    'focus:outline-none focus-visible:ring-4 focus-visible:ring-brand-primary/60';

  return (
    <Component
      className={`${base} ${hover} ${focus} ${className}`}
      whileHover={{ y: -5 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      {...rest}
    >
      {children}
    </Component>
  );
}

export default Card;


