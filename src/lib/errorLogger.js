/**
 * Error Logging Utility
 * 
 * Centralized error logging that can be extended to integrate with
 * external error tracking services (Sentry, LogRocket, etc.)
 */

/**
 * Logs an error with context information
 * 
 * @param {Error} error - The error object
 * @param {object} errorInfo - Additional error information (e.g., React errorInfo)
 * @param {object} context - Additional context (e.g., component name, user action)
 */
export const logError = (error, errorInfo = null, context = {}) => {
  const errorData = {
    message: error?.message || 'Unknown error',
    stack: error?.stack,
    name: error?.name,
    timestamp: new Date().toISOString(),
    userAgent: typeof window !== 'undefined' ? window.navigator.userAgent : 'SSR',
    url: typeof window !== 'undefined' ? window.location.href : 'SSR',
    ...context,
  };

  // Add React error info if available
  if (errorInfo) {
    errorData.componentStack = errorInfo.componentStack;
    errorData.errorBoundary = true;
  }

  // Development: Log to console with full details
  if (process.env.NODE_ENV === 'development') {
    console.group('🚨 Error Logged');
    console.error('Error:', error);
    if (errorInfo) {
      console.error('Error Info:', errorInfo);
    }
    if (Object.keys(context).length > 0) {
      console.error('Context:', context);
    }
    console.error('Full Error Data:', errorData);
    console.groupEnd();
  }

  // Production: Log to console (can be extended to send to external service)
  if (process.env.NODE_ENV === 'production') {
    console.error('Production error:', errorData);

    // Example: Send to Sentry
    // if (typeof Sentry !== 'undefined') {
    //   Sentry.captureException(error, {
    //     contexts: {
    //       react: errorInfo,
    //       custom: context,
    //     },
    //   });
    // }

    // Example: Send to LogRocket
    // if (typeof LogRocket !== 'undefined') {
    //   LogRocket.captureException(error, {
    //     tags: context,
    //   });
    // }

    // Example: Send to custom API endpoint
    // fetch('/api/errors', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(errorData),
    // }).catch(err => console.error('Failed to log error:', err));
  }

  return errorData;
};

/**
 * Logs a warning (non-critical issue)
 * 
 * @param {string} message - Warning message
 * @param {object} context - Additional context
 */
export const logWarning = (message, context = {}) => {
  if (process.env.NODE_ENV === 'development') {
    console.warn('⚠️ Warning:', message, context);
  }
  // In production, warnings are typically not logged to external services
};

/**
 * Logs an info message (for debugging)
 * 
 * @param {string} message - Info message
 * @param {object} context - Additional context
 */
export const logInfo = (message, context = {}) => {
  if (process.env.NODE_ENV === 'development') {
    console.info('ℹ️ Info:', message, context);
  }
};

