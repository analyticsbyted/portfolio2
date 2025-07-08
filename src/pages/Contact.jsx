import { useState } from 'react';
import PageTitle from '../components/PageTitle';
import PageSubtitle from '../components/PageSubtitle';

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '', honey: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [error, setError] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
  };

  const validate = () => {
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError('All fields are required.');
      return false;
    }
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) {
      setError('Please enter a valid email address.');
      return false;
    }
    if (form.honey) {
      setError('Spam detected.');
      return false;
    }
    setError('');
    return true;
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (!validate()) return;
    setStatus('sending');
    try {
      // TODO: Replace with your API endpoint
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: form.name, email: form.email, message: form.message })
      });
      if (res.ok) {
        setStatus('success');
        setForm({ name: '', email: '', message: '', honey: '' });
      } else {
        setStatus('error');
        setError('Failed to send message. Please try again later.');
      }
    } catch {
      setStatus('error');
      setError('Failed to send message. Please try again later.');
    }
  };

  return (
    <section className="max-w-2xl mx-auto text-center">
      <PageTitle>Contact</PageTitle>
      <PageSubtitle>Feel free to reach out for collaboration or opportunities!</PageSubtitle>
      <form onSubmit={handleSubmit} className="bg-[#F8F7F4] dark:bg-gray-900 rounded-xl shadow p-8 border border-gray-200 dark:border-gray-800 text-left">
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-700"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-700"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">Message</label>
          <textarea
            id="message"
            name="message"
            value={form.message}
            onChange={handleChange}
            rows={5}
            className="w-full px-4 py-2 rounded border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-700"
            required
          />
        </div>
        {/* Honeypot field for spam prevention */}
        <div style={{ display: 'none' }}>
          <label htmlFor="honey">Do not fill this out</label>
          <input
            type="text"
            id="honey"
            name="honey"
            value={form.honey}
            onChange={handleChange}
            autoComplete="off"
            tabIndex="-1"
          />
        </div>
        {error && <div className="mb-4 text-red-600 text-sm">{error}</div>}
        {status === 'success' && <div className="mb-4 text-green-600 text-sm">Thank you! Your message has been sent.</div>}
        <button
          type="submit"
          className="w-full py-2 px-4 rounded bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition dark:bg-blue-700 dark:hover:bg-blue-800 disabled:opacity-60"
          disabled={status === 'sending'}
        >
          {status === 'sending' ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </section>
  );
}

export default Contact;