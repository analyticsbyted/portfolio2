# Error Boundaries

This document describes the error boundary implementation in the portfolio application, which provides robust error handling and graceful degradation.

## Overview

Error boundaries are React components that catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI instead of crashing the entire application. This implementation provides multiple layers of error protection.

## Architecture

### Three-Layer Protection

1. **Global Error Boundary** (`src/main.jsx`)
   - Top-level safety net wrapping the entire application
   - Catches any errors that escape route-level boundaries
   - Last resort fallback for critical application errors

2. **Route-Level Error Boundaries** (`src/App.jsx`)
   - Each route wrapped with its own error boundary
   - Isolates page failures - if one page crashes, others remain accessible
   - Custom error messages for each page type

3. **Component-Level Boundaries** (Optional)
   - Can be added around specific components for granular error isolation
   - Useful for data-heavy components (project cards, certification grids)

## Implementation

### ErrorBoundary Component

**Location:** `src/components/ErrorBoundary.jsx`

**Features:**
- Catches JavaScript errors in child components
- Displays branded fallback UI matching site design
- Provides "Try Again" and "Go Home" recovery options
- Shows error details in development mode
- Integrates with centralized error logging

**Props:**
- `children` - Child components to wrap
- `fallbackTitle` - Custom title for error message (default: "Something went wrong")
- `fallbackMessage` - Custom message for the error
- `onError` - Optional callback when error occurs (for custom logging)
- `showDetails` - Whether to show error details (default: development mode only)

**Usage:**
```jsx
<ErrorBoundary
  fallbackTitle="Portfolio Page Error"
  fallbackMessage="We encountered an error loading the portfolio."
  onError={customErrorHandler}
>
  <YourComponent />
</ErrorBoundary>
```

### Error Logging

**Location:** `src/lib/errorLogger.js`

Centralized error logging utility that can be extended to integrate with external error tracking services.

**Functions:**
- `logError(error, errorInfo, context)` - Logs errors with full context
- `logWarning(message, context)` - Logs warnings (development only)
- `logInfo(message, context)` - Logs info messages (development only)

**Development Mode:**
- Full error details logged to console with grouping
- Stack traces and component stacks visible
- Context information included

**Production Mode:**
- Errors logged to console (can be extended to external services)
- Ready for integration with Sentry, LogRocket, etc.
- Example code provided in comments

**Example Integration:**
```javascript
// In errorLogger.js, uncomment and configure:
if (typeof Sentry !== 'undefined') {
  Sentry.captureException(error, {
    contexts: {
      react: errorInfo,
      custom: context,
    },
  });
}
```

## Current Implementation

### Global Boundary
- Wraps entire app in `src/main.jsx`
- Catches critical application errors
- Provides last-resort fallback UI

### Route-Level Boundaries
All routes in `src/App.jsx` are wrapped with error boundaries:
- `/` - Home page
- `/work` - Portfolio page
- `/publications` - Publications page
- `/newsletter` - Newsletter page
- `/certifications` - Certifications page
- `/about` - About page
- `/education` - Education page
- `/contact` - Contact page
- `*` - 404/NotFound page

Each route has:
- Custom error title and message
- Error logging callback
- Isolated error handling

## Fallback UI Design

The error boundary fallback UI:
- Matches brand design (gradient backgrounds, brand colors)
- Responsive and accessible
- Provides clear error messaging
- Offers recovery options ("Try Again", "Go Home")
- Shows error details in development mode only
- Uses brand typography (Inter for headlines, Source Serif Pro for body)

## Benefits

1. **Prevents Full App Crashes**
   - Single component errors don't crash entire application
   - Users can navigate to other pages even if one fails

2. **Better User Experience**
   - Helpful error messages instead of blank screens
   - Recovery options (retry, navigate away)
   - Professional error handling

3. **Production Resilience**
   - Handles unexpected data, network failures, edge cases
   - Prevents one bad project card from breaking Work page
   - Prevents one badge image failure from breaking Certifications page

4. **Debugging & Monitoring**
   - Centralized error logging
   - Ready for external error tracking services
   - Development mode shows full error details

5. **Professional Polish**
   - Demonstrates production-ready error handling
   - Shows attention to robustness and user experience

## Error Scenarios Handled

### Component Errors
- Missing props or undefined values
- Rendering errors (e.g., accessing properties of undefined)
- Component lifecycle errors

### Data Errors
- Missing or malformed data
- API failures
- Image loading failures (handled separately by ImageWithSkeleton)

### Runtime Errors
- JavaScript exceptions
- Type errors
- Reference errors

## What Error Boundaries DON'T Catch

Error boundaries do **NOT** catch errors in:
- Event handlers (use try/catch)
- Asynchronous code (setTimeout, promises - use try/catch)
- Server-side rendering
- Errors thrown in the error boundary itself

For these cases, use traditional try/catch blocks or promise error handling.

## Testing Error Boundaries

To test error boundaries in development:

1. **Simulate Component Error:**
```jsx
// Add to any component temporarily
throw new Error('Test error boundary');
```

2. **Simulate Data Error:**
```jsx
// Access undefined property
const data = null;
const value = data.property; // Will trigger error boundary
```

3. **Check Console:**
- Development mode shows full error details
- Error logging should appear in console

## Future Enhancements

Potential improvements:
1. **External Error Tracking**
   - Integrate Sentry or LogRocket
   - Track error frequency and patterns
   - Set up alerts for critical errors

2. **Error Analytics**
   - Track which pages/components fail most
   - Monitor error rates over time
   - Identify common error patterns

3. **Recovery Strategies**
   - Automatic retry for transient errors
   - Cache fallbacks for data errors
   - Offline mode detection

4. **User Feedback**
   - "Report Error" button in fallback UI
   - Collect user context when errors occur
   - Feedback form integration

## Related Documentation

- [Component Documentation](./pages-and-components.md#errorboundaryjsx) - ErrorBoundary component details
- [Architecture](./architecture.md) - Overall application architecture
- [Development Workflow](./development-workflow.md) - Development practices
- [Troubleshooting](./troubleshooting.md) - Common issues and solutions

