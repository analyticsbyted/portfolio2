import { z } from 'zod';

/**
 * Schema for contact form validation.
 * Includes:
 * - name: Required, string.
 * - email: Required, must be a valid email format.
 * - message: Required, string, with a minimum length of 10 characters.
 * - honey: The honeypot field, must be empty.
 */
export const contactFormSchema = z.object({
  name: z.string().trim().min(1, { message: 'Name is required.' }),
  email: z.string().trim().email({ message: 'Please enter a valid email address.' }),
  message: z.string().trim().min(10, { message: 'Message must be at least 10 characters long.' }),
  honey: z.string().max(0, { message: 'Spam detected.' }).optional().or(z.literal('')), // Better honeypot handling
});
