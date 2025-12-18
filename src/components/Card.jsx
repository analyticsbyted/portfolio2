import React from 'react';

// eslint-disable-next-line no-unused-vars
function Card({ as: Component = 'div', className = '', children, ...rest }) {
  const base =
    'bg-card border-2 border-border rounded-2xl overflow-hidden transition-all duration-300';
  const hover =
    'hover:shadow-2xl hover:-translate-y-2 hover:border-brand-primary/30 dark:hover:border-brand-primary/30';
  const focus =
    'focus:outline-none focus-visible:ring-4 focus-visible:ring-brand-primary/60';

  return (
    <Component className={`${base} ${hover} ${focus} ${className}`} {...rest}>
      {children}
    </Component>
  );
}

export default Card;


