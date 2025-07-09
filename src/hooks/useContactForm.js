import { useState, useCallback } from 'react';

// Get API URL from environment variables
const API_URL = import.meta.env.VITE_AWS_HTTPAPI_URL;

export function useContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '', honey: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [error, setError] = useState('');

  const handleChange = useCallback(e => {
    const { name, value } = e.target;
    setForm(currentForm => ({ ...currentForm, [name]: value }));
  }, []);

  const handleSubmit = useCallback(async e => {
    e.preventDefault();
    setStatus('sending');
    setError('');

    // --- Validation ---
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError('All fields are required.');
      setStatus('error');
      return;
    }
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) {
      setError('Please enter a valid email address.');
      setStatus('error');
      return;
    }
    if (form.honey) { // Honeypot check
      console.log('Spam detected.');
      setStatus('success'); // Fail silently and gracefully
      return;
    }
    // --- End Validation ---

    try {
      if (!API_URL) {
        throw new Error('The API URL is not configured.');
      }

      const payload = {
        name: form.name.trim(),
        email: form.email.trim(),
        message: form.message.trim(),
        timestamp: new Date().toISOString(),
        source: 'portfolio-contact-form'
      };

      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(payload)
      });

      if (response.ok) {
        setStatus('success');
        setForm({ name: '', email: '', message: '', honey: '' }); // Reset form
      } else {
        const responseData = await response.json().catch(() => ({})); // Gracefully handle non-json error responses
        const errorMessage = responseData.message || 'Failed to send message. Please try again.';
        throw new Error(errorMessage);
      }
    } catch (err) {
      console.error('Form submission error:', err);
      setError(err.message || 'An unexpected error occurred. Please try again.');
      setStatus('error');
    }
  }, [form]);

  return { form, status, error, handleChange, handleSubmit };
}