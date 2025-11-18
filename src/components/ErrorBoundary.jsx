import React from 'react';
import { Link } from 'react-router-dom';
import { logError } from '../lib/errorLogger';

/**
 * ErrorBoundary Component
 * 
 * Catches JavaScript errors anywhere in the child component tree,
 * logs those errors, and displays a fallback UI instead of crashing.
 * 
 * @param {React.ReactNode} children - Child components to wrap
 * @param {string} fallbackTitle - Custom title for the error message
 * @param {string} fallbackMessage - Custom message for the error
 * @param {function} onError - Optional callback when error occurs (for logging)
 * @param {boolean} showDetails - Whether to show error details in development
 */
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Store error details in state for display
    this.setState({
      error,
      errorInfo,
    });

    // Log error using centralized logger
    logError(error, errorInfo, {
      errorBoundary: true,
      fallbackTitle: this.props.fallbackTitle,
    });

    // Call optional onError callback for additional custom logging
    if (this.props.onError && typeof this.props.onError === 'function') {
      this.props.onError(error, errorInfo);
    }
  }

  handleReset = () => {
    // Reset error state to allow retry
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
    });
  };

  render() {
    if (this.state.hasError) {
      const { 
        fallbackTitle = 'Something went wrong',
        fallbackMessage = 'We encountered an unexpected error. Please try again or navigate to another page.',
        showDetails = process.env.NODE_ENV === 'development',
      } = this.props;

      return (
        <div className="min-h-screen flex items-center justify-center px-4 py-16 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900">
          <div className="max-w-2xl w-full bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border-2 border-red-200 dark:border-red-800 p-8 md:p-12">
            {/* Error Icon */}
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center">
                <svg 
                  className="w-10 h-10 text-red-600 dark:text-red-400" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" 
                  />
                </svg>
              </div>
            </div>

            {/* Error Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-4 font-headline">
              {fallbackTitle}
            </h1>

            {/* Error Message */}
            <p className="text-lg text-center text-gray-600 dark:text-gray-300 mb-8 font-body">
              {fallbackMessage}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <button
                onClick={this.handleReset}
                className="px-6 py-3 bg-gradient-to-r from-brand-primary to-brand-secondary text-white rounded-xl font-semibold hover:from-brand-accent hover:to-brand-accent-alt hover:-translate-y-1 hover:shadow-xl active:translate-y-0 active:shadow-md transition-all duration-200 font-headline"
              >
                Try Again
              </button>
              <Link
                to="/"
                className="px-6 py-3 bg-white dark:bg-gray-700 text-gray-900 dark:text-white border-2 border-gray-300 dark:border-gray-600 rounded-xl font-semibold hover:bg-gray-50 dark:hover:bg-gray-600 hover:-translate-y-1 hover:shadow-xl active:translate-y-0 active:shadow-md transition-all duration-200 text-center font-headline"
              >
                Go Home
              </Link>
            </div>

            {/* Error Details (Development Only) */}
            {showDetails && this.state.error && (
              <details className="mt-8 p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800">
                <summary className="cursor-pointer text-sm font-semibold text-red-800 dark:text-red-300 mb-2">
                  Error Details (Development)
                </summary>
                <div className="mt-2 space-y-2 text-xs font-mono text-red-700 dark:text-red-400 overflow-auto max-h-64">
                  <div>
                    <strong>Error:</strong>
                    <pre className="mt-1 p-2 bg-white dark:bg-gray-900 rounded overflow-auto">
                      {this.state.error.toString()}
                    </pre>
                  </div>
                  {this.state.errorInfo && (
                    <div>
                      <strong>Component Stack:</strong>
                      <pre className="mt-1 p-2 bg-white dark:bg-gray-900 rounded overflow-auto">
                        {this.state.errorInfo.componentStack}
                      </pre>
                    </div>
                  )}
                </div>
              </details>
            )}
          </div>
        </div>
      );
    }

    // Render children normally if no error
    return this.props.children;
  }
}

export default ErrorBoundary;

