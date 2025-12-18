import React from "react";
import { Link } from "react-router-dom";

const baseClass =
  "inline-block rounded-lg shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-primary/60 disabled:opacity-60 disabled:cursor-not-allowed font-headline";

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
    ? "px-8 py-3 bg-brand-primary text-white hover:bg-brand-accent hover:-translate-y-1 hover:shadow-xl active:translate-y-0 active:shadow-md active:bg-brand-accent text-button"
    : "";
  const buttonClassName = `${baseClass} ${defaultStyles} ${className}`.trim();
  if (href) {
    // Use React Router Link for internal routes (starting with /)
    if (href.startsWith('/')) {
      return (
        <Link
          to={href}
          className={buttonClassName}
          aria-label={ariaLabel}
          {...props}
        >
          {children}
        </Link>
      );
    }
    // Use regular anchor tag for external links
    return (
      <a
        href={href}
        className={buttonClassName}
        aria-label={ariaLabel}
        {...props}
      >
        {children}
      </a>
    );
  }
  return (
    <button
      type={type}
      onClick={onClick}
      className={buttonClassName}
      aria-label={ariaLabel}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;