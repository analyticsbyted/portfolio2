import { describe, it, expect } from 'vitest';
import { contactFormSchema } from '../src/lib/validators';

describe('Contact Form Validation Schema', () => {
  describe('Name validation', () => {
    it('should accept valid name', () => {
      const result = contactFormSchema.safeParse({
        name: 'John Doe',
        email: 'john@example.com',
        message: 'This is a test message with enough characters.',
        honey: '',
      });
      expect(result.success).toBe(true);
    });

    it('should reject empty name', () => {
      const result = contactFormSchema.safeParse({
        name: '',
        email: 'john@example.com',
        message: 'This is a test message with enough characters.',
        honey: '',
      });
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.issues[0].message).toBe('Name is required.');
      }
    });

    it('should reject name with only whitespace', () => {
      const result = contactFormSchema.safeParse({
        name: '   ',
        email: 'john@example.com',
        message: 'This is a test message with enough characters.',
        honey: '',
      });
      expect(result.success).toBe(false);
    });

    it('should trim whitespace from name', () => {
      const result = contactFormSchema.safeParse({
        name: '  John Doe  ',
        email: 'john@example.com',
        message: 'This is a test message with enough characters.',
        honey: '',
      });
      expect(result.success).toBe(true);
      if (result.success) {
        expect(result.data.name).toBe('John Doe');
      }
    });
  });

  describe('Email validation', () => {
    it('should accept valid email', () => {
      const result = contactFormSchema.safeParse({
        name: 'John Doe',
        email: 'john@example.com',
        message: 'This is a test message with enough characters.',
        honey: '',
      });
      expect(result.success).toBe(true);
    });

    it('should reject invalid email format', () => {
      const result = contactFormSchema.safeParse({
        name: 'John Doe',
        email: 'not-an-email',
        message: 'This is a test message with enough characters.',
        honey: '',
      });
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.issues[0].message).toBe('Please enter a valid email address.');
      }
    });

    it('should reject empty email', () => {
      const result = contactFormSchema.safeParse({
        name: 'John Doe',
        email: '',
        message: 'This is a test message with enough characters.',
        honey: '',
      });
      expect(result.success).toBe(false);
    });

    it('should reject email without @ symbol', () => {
      const result = contactFormSchema.safeParse({
        name: 'John Doe',
        email: 'johnexample.com',
        message: 'This is a test message with enough characters.',
        honey: '',
      });
      expect(result.success).toBe(false);
    });

    it('should trim whitespace from email', () => {
      const result = contactFormSchema.safeParse({
        name: 'John Doe',
        email: '  john@example.com  ',
        message: 'This is a test message with enough characters.',
        honey: '',
      });
      expect(result.success).toBe(true);
      if (result.success) {
        expect(result.data.email).toBe('john@example.com');
      }
    });
  });

  describe('Message validation', () => {
    it('should accept message with at least 10 characters', () => {
      const result = contactFormSchema.safeParse({
        name: 'John Doe',
        email: 'john@example.com',
        message: 'This is a test message with enough characters.',
        honey: '',
      });
      expect(result.success).toBe(true);
    });

    it('should reject message shorter than 10 characters', () => {
      const result = contactFormSchema.safeParse({
        name: 'John Doe',
        email: 'john@example.com',
        message: 'Short',
        honey: '',
      });
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.issues[0].message).toBe('Message must be at least 10 characters long.');
      }
    });

    it('should reject empty message', () => {
      const result = contactFormSchema.safeParse({
        name: 'John Doe',
        email: 'john@example.com',
        message: '',
        honey: '',
      });
      expect(result.success).toBe(false);
    });

    it('should reject message with only whitespace', () => {
      const result = contactFormSchema.safeParse({
        name: 'John Doe',
        email: 'john@example.com',
        message: '     ',
        honey: '',
      });
      expect(result.success).toBe(false);
    });

    it('should trim whitespace from message', () => {
      const result = contactFormSchema.safeParse({
        name: 'John Doe',
        email: 'john@example.com',
        message: '  This is a test message.  ',
        honey: '',
      });
      expect(result.success).toBe(true);
      if (result.success) {
        expect(result.data.message).toBe('This is a test message.');
      }
    });
  });

  describe('Honeypot validation (spam protection)', () => {
    it('should accept empty honeypot field', () => {
      const result = contactFormSchema.safeParse({
        name: 'John Doe',
        email: 'john@example.com',
        message: 'This is a test message with enough characters.',
        honey: '',
      });
      expect(result.success).toBe(true);
    });

    it('should accept undefined honeypot field', () => {
      const result = contactFormSchema.safeParse({
        name: 'John Doe',
        email: 'john@example.com',
        message: 'This is a test message with enough characters.',
      });
      expect(result.success).toBe(true);
    });

    it('should reject honeypot field with content (spam detected)', () => {
      const result = contactFormSchema.safeParse({
        name: 'John Doe',
        email: 'john@example.com',
        message: 'This is a test message with enough characters.',
        honey: 'spam',
      });
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.issues[0].message).toBe('Spam detected.');
      }
    });
  });

  describe('Complete form validation', () => {
    it('should accept valid complete form', () => {
      const result = contactFormSchema.safeParse({
        name: 'John Doe',
        email: 'john@example.com',
        message: 'This is a test message with enough characters to pass validation.',
        honey: '',
      });
      expect(result.success).toBe(true);
    });

    it('should reject form with multiple errors', () => {
      const result = contactFormSchema.safeParse({
        name: '',
        email: 'invalid-email',
        message: 'Short',
        honey: 'spam',
      });
      expect(result.success).toBe(false);
      if (!result.success) {
        // Should have multiple error issues
        expect(result.error.issues.length).toBeGreaterThan(1);
      }
    });
  });
});

