import React from "react";
import { Link } from "react-router-dom";

const baseClass =
  "inline-block px-8 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition font-semibold text-lg dark:bg-blue-700 dark:hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-400 disabled:opacity-60";

const Button = ({
  children,
  onClick,
  type = "button",
  className = "",
  ariaLabel,
  href,
  ...props
}) => {
  if (href) {
    // Use React Router Link for internal routes (starting with /)
    if (href.startsWith('/')) {
      return (
        <Link
          to={href}
          className={`${baseClass} ${className}`}
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
        className={`${baseClass} ${className}`}
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
      className={`${baseClass} ${className}`}
      aria-label={ariaLabel}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;