import React from "react";
import { Link } from "react-router-dom";

const baseClass =
"inline-block rounded-lg shadow-lg transition focus:outline-none focus:ring-2 focus:ring-blue-400 disabled:opacity-60 font-headline";

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
  const defaultStyles = className === "" ? "px-8 py-3 bg-blue-600 text-white hover:bg-blue-700 font-semibold text-lg dark:bg-blue-700 dark:hover:bg-blue-800" : "";
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