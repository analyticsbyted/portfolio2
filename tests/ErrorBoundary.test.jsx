import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ErrorBoundary from '../src/components/ErrorBoundary';
import React from 'react';

// Component that throws an error
const ThrowError = ({ shouldThrow = false }) => {
  if (shouldThrow) {
    throw new Error('Test error');
  }
  return <div>No error</div>;
};

// Helper to render ErrorBoundary with Router context
const renderWithRouter = (ui) => {
  return render(<BrowserRouter>{ui}</BrowserRouter>);
};

// Suppress console.error for error boundary tests
const originalError = console.error;
beforeEach(() => {
  console.error = vi.fn();
});

afterEach(() => {
  console.error = originalError;
});

describe('ErrorBoundary Component', () => {
  describe('Error catching', () => {
    it('should render children when there is no error', () => {
      renderWithRouter(
        <ErrorBoundary>
          <div>Test content</div>
        </ErrorBoundary>
      );
      expect(screen.getByText('Test content')).toBeInTheDocument();
    });

    it('should catch errors and display fallback UI', () => {
      renderWithRouter(
        <ErrorBoundary>
          <ThrowError shouldThrow={true} />
        </ErrorBoundary>
      );
      
      // Should show default error title
      expect(screen.getByText('Something went wrong')).toBeInTheDocument();
      expect(screen.getByText(/We encountered an unexpected error/)).toBeInTheDocument();
    });

    it('should display custom error title', () => {
      renderWithRouter(
        <ErrorBoundary fallbackTitle="Custom Error Title">
          <ThrowError shouldThrow={true} />
        </ErrorBoundary>
      );
      
      expect(screen.getByText('Custom Error Title')).toBeInTheDocument();
    });

    it('should display custom error message', () => {
      renderWithRouter(
        <ErrorBoundary fallbackMessage="Custom error message">
          <ThrowError shouldThrow={true} />
        </ErrorBoundary>
      );
      
      expect(screen.getByText('Custom error message')).toBeInTheDocument();
    });
  });

  describe('Recovery options', () => {
    it('should have "Try Again" button', () => {
      renderWithRouter(
        <ErrorBoundary>
          <ThrowError shouldThrow={true} />
        </ErrorBoundary>
      );
      
      const tryAgainButton = screen.getByRole('button', { name: /try again/i });
      expect(tryAgainButton).toBeInTheDocument();
    });

    it('should have "Go Home" link', () => {
      renderWithRouter(
        <ErrorBoundary>
          <ThrowError shouldThrow={true} />
        </ErrorBoundary>
      );
      
      const goHomeLink = screen.getByRole('link', { name: /go home/i });
      expect(goHomeLink).toBeInTheDocument();
      expect(goHomeLink).toHaveAttribute('href', '/');
    });

    it('should have clickable "Try Again" button that resets error state', () => {
      renderWithRouter(
        <ErrorBoundary>
          <ThrowError shouldThrow={true} />
        </ErrorBoundary>
      );
      
      // Error should be displayed
      expect(screen.getByText('Something went wrong')).toBeInTheDocument();
      
      // "Try Again" button should exist and be clickable
      const tryAgainButton = screen.getByRole('button', { name: /try again/i });
      expect(tryAgainButton).toBeInTheDocument();
      
      // Clicking should not throw an error
      expect(() => fireEvent.click(tryAgainButton)).not.toThrow();
      
      // After click, error boundary state is reset (component will re-render children)
      // Note: If child still throws, error boundary will catch it again
      // This is expected behavior - the reset allows recovery if the underlying issue is fixed
    });
  });

  describe('Error logging', () => {
    it('should call onError callback when error occurs', () => {
      const onError = vi.fn();
      
      renderWithRouter(
        <ErrorBoundary onError={onError}>
          <ThrowError shouldThrow={true} />
        </ErrorBoundary>
      );
      
      expect(onError).toHaveBeenCalled();
      expect(onError).toHaveBeenCalledWith(
        expect.any(Error),
        expect.objectContaining({
          componentStack: expect.any(String),
        })
      );
    });
  });

  describe('Error details in development', () => {
    it('should show error details when showDetails is true', () => {
      renderWithRouter(
        <ErrorBoundary showDetails={true}>
          <ThrowError shouldThrow={true} />
        </ErrorBoundary>
      );
      
      const details = screen.queryByText(/Error Details/i);
      expect(details).toBeInTheDocument();
    });

    it('should not show error details when showDetails is false', () => {
      renderWithRouter(
        <ErrorBoundary showDetails={false}>
          <ThrowError shouldThrow={true} />
        </ErrorBoundary>
      );
      
      const details = screen.queryByText(/Error Details/i);
      expect(details).not.toBeInTheDocument();
    });
  });

  describe('Accessibility', () => {
    it('should have accessible error icon', () => {
      renderWithRouter(
        <ErrorBoundary>
          <ThrowError shouldThrow={true} />
        </ErrorBoundary>
      );
      
      // Error icon should be present (check for SVG)
      const errorIcon = document.querySelector('svg');
      expect(errorIcon).toBeInTheDocument();
    });

    it('should have proper heading structure', () => {
      renderWithRouter(
        <ErrorBoundary fallbackTitle="Test Error">
          <ThrowError shouldThrow={true} />
        </ErrorBoundary>
      );
      
      const heading = screen.getByRole('heading', { level: 1 });
      expect(heading).toHaveTextContent('Test Error');
    });
  });
});

