import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const baseClass =
  "inline-block rounded-lg shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-primary/60 disabled:opacity-60 disabled:cursor-not-allowed font-headline";

const MotionLink = motion.create(Link);

const Button = ({
  children,
  onClick,
  type = "button",
  className = "",
  ariaLabel,
  href,
  ...props
}) => {
  // Default styles when no custom className is provided
  // Includes hover lift effect and active state
  // Uses brand tokens for consistent theming
  const defaultStyles = className === ""
    ? "px-8 py-3 bg-brand-primary text-white hover:bg-brand-accent hover:shadow-xl active:shadow-md active:bg-brand-accent text-button"
    : "";
  const buttonClassName = `${baseClass} ${defaultStyles} ${className}`.trim();

  // Physics-based animation props
  const animationProps = {
    whileHover: { y: -2, scale: 1.02 },
    whileTap: { scale: 0.95 },
    transition: { type: "spring", stiffness: 400, damping: 17 }
  };

  if (href) {
    // Use React Router Link for internal routes (starting with /)
    if (href.startsWith('/')) {
      return (
        <MotionLink
          to={href}
          className={buttonClassName}
          aria-label={ariaLabel}
          {...animationProps}
          {...props}
        >
          {children}
        </MotionLink>
      );
    }
    // Use regular anchor tag for external links
    return (
      <motion.a
        href={href}
        className={buttonClassName}
        aria-label={ariaLabel}
        {...animationProps}
        {...props}
      >
        {children}
      </motion.a>
    );
  }
  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={buttonClassName}
      aria-label={ariaLabel}
      {...animationProps}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;