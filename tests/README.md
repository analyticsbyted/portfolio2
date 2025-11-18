# Tests

This directory contains unit and component tests for the portfolio application.

## Test Framework

- **Vitest**: Fast, Vite-native test runner
- **React Testing Library**: Component testing utilities
- **@testing-library/jest-dom**: Custom matchers for DOM assertions
- **jsdom**: DOM environment for testing

## Running Tests

```bash
# Run tests in watch mode (default)
npm test

# Run tests once
npm test -- --run

# Run tests with UI
npm test:ui

# Run tests in CI mode
npm test:run
```

## Test Structure

### `validators.test.js`
Tests for form validation schemas (`src/lib/validators.js`):
- Name validation (required, trimming)
- Email validation (format, required)
- Message validation (minimum length, trimming)
- Honeypot validation (spam protection)
- Complete form validation

**Coverage:** 19 tests covering all validation scenarios

### `ErrorBoundary.test.jsx`
Tests for error boundary component (`src/components/ErrorBoundary.jsx`):
- Error catching and fallback UI display
- Custom error titles and messages
- Recovery options ("Try Again", "Go Home")
- Error logging callbacks
- Error details display (development mode)
- Accessibility features

**Coverage:** 12 tests covering error handling scenarios

### `Button.test.jsx`
Tests for button component (`src/components/Button.jsx`):
- Button element rendering
- Link rendering (internal routes)
- Anchor element rendering (external links)
- Accessibility (aria-label)
- Styling and className handling
- Disabled state
- Props forwarding

**Coverage:** 22 tests covering all button variants and behaviors

## Test Setup

Tests are configured in:
- `vite.config.js` - Vitest configuration
- `tests/setup.js` - Test environment setup (mocks, globals)

## Writing New Tests

### Component Test Example
```jsx
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import MyComponent from '../src/components/MyComponent';

describe('MyComponent', () => {
  it('should render correctly', () => {
    render(<MyComponent />);
    expect(screen.getByText('Expected text')).toBeInTheDocument();
  });
});
```

### Utility Function Test Example
```javascript
import { describe, it, expect } from 'vitest';
import { myFunction } from '../src/lib/myUtils';

describe('myFunction', () => {
  it('should return expected value', () => {
    expect(myFunction('input')).toBe('expected output');
  });
});
```

## Test Coverage

Current test coverage focuses on:
1. **Form validation** - Critical for data integrity
2. **Error boundaries** - Critical for error handling
3. **Button component** - Most widely used component

## Best Practices

1. **Test behavior, not implementation** - Focus on what users see/interact with
2. **Use React Testing Library queries** - Prefer `getByRole`, `getByLabelText` over `getByTestId`
3. **Keep tests simple** - One assertion per test when possible
4. **Test edge cases** - Empty inputs, invalid data, error states
5. **Mock external dependencies** - API calls, localStorage, etc.

## Future Test Additions

Potential areas for additional testing:
- ImageWithSkeleton component (lazy loading, WebP fallback)
- HeadMetadata component (meta tag updates)
- PageSkeleton component (loading states)
- Contact form integration (form submission)
- Error logger utility (logging behavior)

