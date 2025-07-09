import { useState } from 'react';
import CTASection from '../components/CTASection';

const contactMethods = [
  {
    title: 'Email',
    description: 'Send me a message directly',
    icon: '📧',
    link: 'mailto:your.email@example.com',
    label: 'your.email@example.com'
  },
  {
    title: 'LinkedIn',
    description: 'Connect professionally',
    icon: '💼',
    link: 'https://linkedin.com/in/yourprofile',
    label: 'View LinkedIn Profile'
  },
  {
    title: 'Credly',
    description: 'View my certifications',
    icon: '🏆',
    link: 'https://www.credly.com/users/theodore-dickey-ii.8c3308d7/badges',
    label: 'View Certifications'
  }
];

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '', honey: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [error, setError] = useState('');

  // Get API URL from environment variables
  const apiUrl = import.meta.env.VITE_AWS_API_INVOKE_URL;

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
    setError('');
    
    try {
      // Check if API URL is configured
      if (!apiUrl) {
        throw new Error('API URL is not configured');
      }

      // Prepare the payload
      const payload = {
        name: form.name.trim(),
        email: form.email.trim(),
        message: form.message.trim(),
        timestamp: new Date().toISOString(),
        source: 'contact-form'
      };

      console.log('Submitting to:', apiUrl);
      console.log('Payload:', payload);

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(payload)
      });

      const responseData = await response.json();

      if (response.ok) {
        setStatus('success');
        setForm({ name: '', email: '', message: '', honey: '' });
      } else {
        // Handle specific error messages from the API
        const errorMessage = responseData.message || responseData.error || 'Failed to send message. Please try again later.';
        setError(errorMessage);
        setStatus('error');
      }
    } catch (err) {
      console.error('Form submission error:', err);
      
      // Handle different types of errors
      if (err.name === 'TypeError' && err.message.includes('fetch')) {
        setError('Unable to connect to the server. Please check your internet connection and try again.');
      } else if (err.message === 'API URL is not configured') {
        setError('Contact form is not properly configured. Please try again later.');
      } else {
        setError('An unexpected error occurred. Please try again later.');
      }
      
      setStatus('error');
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
          Let's Work
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            Together
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
          Ready to transform your data challenges into competitive advantages? I'd love to discuss how we can drive measurable results for your business.
        </p>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Contact Methods */}
        <section className="space-y-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Get In Touch</h2>
          
          <div className="space-y-6">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-6 bg-white dark:bg-gray-800 rounded-2xl border-2 border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-600 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="text-4xl mr-6">{method.icon}</div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {method.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-2">{method.description}</p>
                  <span className="text-blue-600 dark:text-blue-400 font-medium">{method.label}</span>
                </div>
                <svg className="w-6 h-6 text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            ))}
          </div>

          {/* Quick Info */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-6 border border-blue-200 dark:border-blue-800">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Quick Response</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              I typically respond to inquiries within 24 hours. For urgent matters, please mention it in your message.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">
                Consulting Available
              </span>
              <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm font-medium">
                Open to Collaboration
              </span>
              <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm font-medium">
                Speaking Opportunities
              </span>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section>
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border-2 border-gray-200 dark:border-gray-700">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Send a Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-lg font-semibold mb-3 text-gray-900 dark:text-white">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className="w-full px-6 py-4 rounded-xl border-2 border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-400/20 focus:border-blue-500 transition-all duration-300 text-lg"
                    placeholder="Your full name"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-lg font-semibold mb-3 text-gray-900 dark:text-white">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full px-6 py-4 rounded-xl border-2 border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-400/20 focus:border-blue-500 transition-all duration-300 text-lg"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-lg font-semibold mb-3 text-gray-900 dark:text-white">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-6 py-4 rounded-xl border-2 border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-400/20 focus:border-blue-500 transition-all duration-300 text-lg resize-none"
                    placeholder="Tell me about your project, goals, or how I can help..."
                    required
                  />
                </div>
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

              {/* Status Messages */}
              {error && (
                <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-red-600 dark:text-red-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-red-700 dark:text-red-300 font-medium">{error}</span>
                  </div>
                </div>
              )}

              {status === 'success' && (
                <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-green-600 dark:text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-green-700 dark:text-green-300 font-medium">
                      Thank you! Your message has been sent successfully.
                    </span>
                  </div>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full py-4 px-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg rounded-xl shadow-lg hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-4 focus:ring-blue-400/20 disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                {status === 'sending' ? (
                  <div className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending Message...
                  </div>
                ) : (
                  <div className="flex items-center justify-center">
                    Send Message
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </div>
                )}
              </button>
            </form>
          </div>
        </section>
      </div>

      {/* Final CTA Section */}
      <CTASection
        title="Ready to Get Started?"
        description="Whether you need strategic consulting, custom analytics solutions, or want to explore a partnership, I'm here to help turn your data into actionable insights."
        primaryButton={{
          href: "/work",
          text: "View My Work",
          ariaLabel: "View Ted's portfolio projects"
        }}
        secondaryButton={{
          href: "/about",
          text: "Learn More",
          ariaLabel: "Learn more about Ted"
        }}
      />
    </div>
  );
}

export default Contact;