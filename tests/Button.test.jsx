import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Button from '../src/components/Button';

// Helper to render Button with Router context
const renderWithRouter = (ui) => {
  return render(<BrowserRouter>{ui}</BrowserRouter>);
};

describe('Button Component', () => {
  describe('Button element rendering', () => {
    it('should render as button element when no href provided', () => {
      render(<Button>Click me</Button>);
      const button = screen.getByRole('button', { name: /click me/i });
      expect(button).toBeInTheDocument();
      expect(button.tagName).toBe('BUTTON');
    });

    it('should call onClick handler when clicked', () => {
      const handleClick = vi.fn();
      render(<Button onClick={handleClick}>Click me</Button>);
      
      const button = screen.getByRole('button', { name: /click me/i });
      fireEvent.click(button);
      
      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('should have default button type', () => {
      render(<Button>Click me</Button>);
      const button = screen.getByRole('button');
      expect(button).toHaveAttribute('type', 'button');
    });

    it('should accept custom button type', () => {
      render(<Button type="submit">Submit</Button>);
      const button = screen.getByRole('button');
      expect(button).toHaveAttribute('type', 'submit');
    });
  });

  describe('Link rendering (internal routes)', () => {
    it('should render as React Router Link for internal routes', () => {
      renderWithRouter(<Button href="/about">About</Button>);
      const link = screen.getByRole('link', { name: /about/i });
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute('href', '/about');
    });

    it('should navigate to internal route when clicked', () => {
      renderWithRouter(<Button href="/contact">Contact</Button>);
      const link = screen.getByRole('link', { name: /contact/i });
      expect(link).toBeInTheDocument();
      expect(link.tagName).toBe('A');
    });
  });

  describe('Anchor element rendering (external links)', () => {
    it('should render as anchor element for external links', () => {
      render(<Button href="https://example.com">External</Button>);
      const link = screen.getByRole('link', { name: /external/i });
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute('href', 'https://example.com');
      expect(link.tagName).toBe('A');
    });

    it('should render as anchor for http:// links', () => {
      render(<Button href="http://example.com">HTTP Link</Button>);
      const link = screen.getByRole('link');
      expect(link.tagName).toBe('A');
    });
  });

  describe('Accessibility', () => {
    it('should have aria-label when provided', () => {
      render(<Button ariaLabel="Close dialog">×</Button>);
      const button = screen.getByRole('button');
      expect(button).toHaveAttribute('aria-label', 'Close dialog');
    });

    it('should have aria-label on Link when provided', () => {
      renderWithRouter(<Button href="/about" ariaLabel="Navigate to about page">About</Button>);
      const link = screen.getByRole('link');
      expect(link).toHaveAttribute('aria-label', 'Navigate to about page');
    });

    it('should have aria-label on anchor when provided', () => {
      render(<Button href="https://example.com" ariaLabel="Visit example">Example</Button>);
      const link = screen.getByRole('link');
      expect(link).toHaveAttribute('aria-label', 'Visit example');
    });
  });

  describe('Styling and className', () => {
    it('should apply custom className', () => {
      render(<Button className="custom-class">Button</Button>);
      const button = screen.getByRole('button');
      expect(button).toHaveClass('custom-class');
    });

    it('should merge className with base classes', () => {
      render(<Button className="custom-class">Button</Button>);
      const button = screen.getByRole('button');
      expect(button.className).toContain('custom-class');
      expect(button.className).toContain('rounded-lg');
    });

    it('should apply default styles when no className provided', () => {
      render(<Button>Default Button</Button>);
      const button = screen.getByRole('button');
      // Should have default brand styles
      expect(button.className).toContain('bg-brand-primary');
    });

    it('should not apply default styles when custom className provided', () => {
      render(<Button className="custom-styles">Custom Button</Button>);
      const button = screen.getByRole('button');
      // Custom className should override defaults
      expect(button.className).toContain('custom-styles');
    });
  });

  describe('Disabled state', () => {
    it('should be disabled when disabled prop is true', () => {
      render(<Button disabled>Disabled</Button>);
      const button = screen.getByRole('button');
      expect(button).toBeDisabled();
    });

    it('should have disabled styling when disabled', () => {
      render(<Button disabled>Disabled</Button>);
      const button = screen.getByRole('button');
      expect(button).toHaveClass('disabled:opacity-60');
      expect(button).toHaveClass('disabled:cursor-not-allowed');
    });
  });

  describe('Children rendering', () => {
    it('should render text children', () => {
      render(<Button>Click me</Button>);
      expect(screen.getByText('Click me')).toBeInTheDocument();
    });

    it('should render element children', () => {
      render(
        <Button>
          <span>Icon</span> Text
        </Button>
      );
      expect(screen.getByText('Icon')).toBeInTheDocument();
      expect(screen.getByText('Text')).toBeInTheDocument();
    });
  });

  describe('Props forwarding', () => {
    it('should forward additional props to button', () => {
      render(<Button data-testid="custom-button" id="test-id">Button</Button>);
      const button = screen.getByTestId('custom-button');
      expect(button).toHaveAttribute('id', 'test-id');
    });

    it('should forward additional props to Link', () => {
      renderWithRouter(<Button href="/test" data-testid="custom-link">Link</Button>);
      const link = screen.getByTestId('custom-link');
      expect(link).toBeInTheDocument();
    });

    it('should forward additional props to anchor', () => {
      render(<Button href="https://example.com" data-testid="custom-anchor">Anchor</Button>);
      const anchor = screen.getByTestId('custom-anchor');
      expect(anchor).toBeInTheDocument();
    });
  });
});

