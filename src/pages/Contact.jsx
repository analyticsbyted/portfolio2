import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactFormSchema } from '../lib/validators';
import CTASection from '../components/CTASection';
import HeadMetadata from '../components/HeadMetadata';
import personSchema from '../seo/personSchema';

const API_URL = import.meta.env.VITE_AWS_HTTPAPI_URL;

const contactMethods = [
    {
    title: 'My Resume',
    description: 'Download a PDF copy of my resume',
    icon: '📄',
    link: '',
    label: 'Download Resume'
  },
    {
    title: 'LinkedIn',
    description: 'Connect professionally',
    icon: '💼',
    link: 'https://linkedin.com/in/teddickey',
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
  const [submissionStatus, setSubmissionStatus] = useState('idle'); // idle | sending | success | error

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setError, // Added setError
  } = useForm({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
      honey: '',
    }
  });

  const onSubmit = async (data) => {
    setSubmissionStatus('sending');

    try {
      if (!API_URL) {
        throw new Error('The API URL is not configured.');
      }

      const payload = {
        name: data.name.trim(),
        email: data.email.trim(),
        message: data.message.trim(),
        timestamp: new Date().toISOString(),
        source: 'portfolio-contact-form-rhf' // New source identifier
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
        setSubmissionStatus('success');
        reset(); // Reset form fields to default values
      } else {
        const responseData = await response.json().catch(() => ({}));
        const errorMessage = responseData.message || 'Failed to send message. Please try again.';
        throw new Error(errorMessage);
      }
    } catch (err) {
      console.error('Form submission error:', err);
      setError('root', { message: err.message || 'An unexpected error occurred. Please try again.' }); // Use setError for server errors
      setSubmissionStatus('error');
    }
  };

  return (
    <>
      <HeadMetadata
        title="Contact"
        description="Contact Ted Dickey II to scope modern web apps, AI agents, and analytics platforms. Typical response time within 24 hours."
        canonical="/contact"
        keywords="contact Ted Dickey, project inquiry, AI consulting, web app scoping, data platform services, response time"
        schema={personSchema}
      />
      <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight font-headline">
          Let's Work
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">
            Together
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed font-body">
          Build modern web apps, AI agents, and data platforms—let's scope your project and deliver measurable outcomes.
        </p>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Contact Methods */}
        <section className="space-y-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Get In Touch</h2>
          
          <div className="space-y-6">
            {contactMethods.map((method, index) => (
              <a key={index} href={method.link} target="_blank" rel="noopener noreferrer" className="flex items-center p-6 bg-white dark:bg-gray-800 rounded-2xl border-2 border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-600 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                <div className="text-4xl mr-6">{method.icon}</div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{method.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-2">{method.description}</p>
                  <span className="text-blue-600 dark:text-blue-400 font-medium">{method.label}</span>
                </div>
                <svg className="w-6 h-6 text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            ))}
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-6 border border-blue-200 dark:border-blue-800">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Quick Response</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">I typically respond to inquiries within 24 hours. For urgent matters, please mention it in your message.</p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">Consulting Available</span>
              <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm font-medium">Open to Collaboration</span>
              <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm font-medium">Speaking Opportunities</span>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section>
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border-2 border-gray-200 dark:border-gray-700">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Send a Message</h2>
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-lg font-semibold mb-3 text-gray-900 dark:text-white">Name *</label>
                <input
                  type="text"
                  id="name"
                  {...register('name')}
                  className={`w-full px-6 py-4 rounded-xl border-2 bg-gray-50 dark:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-400/20 focus:border-blue-500 transition-all duration-300 text-lg ${errors.name ? 'border-red-500' : 'border-gray-200 dark:border-gray-600'}`}
                  placeholder="Your full name"
                />
                {errors.name && <p className="mt-2 text-sm text-red-600 dark:text-red-400">{errors.name.message}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block text-lg font-semibold mb-3 text-gray-900 dark:text-white">Email *</label>
                <input
                  type="email"
                  id="email"
                  {...register('email')}
                  className={`w-full px-6 py-4 rounded-xl border-2 bg-gray-50 dark:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-400/20 focus:border-blue-500 transition-all duration-300 text-lg ${errors.email ? 'border-red-500' : 'border-gray-200 dark:border-gray-600'}`}
                  placeholder="your.email@example.com"
                />
                {errors.email && <p className="mt-2 text-sm text-red-600 dark:text-red-400">{errors.email.message}</p>}
              </div>

              <div>
                <label htmlFor="message" className="block text-lg font-semibold mb-3 text-gray-900 dark:text-white">Message *</label>
                <textarea
                  id="message"
                  {...register('message')}
                  rows={6}
                  className={`w-full px-6 py-4 rounded-xl border-2 bg-gray-50 dark:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-400/20 focus:border-blue-500 transition-all duration-300 text-lg resize-none ${errors.message ? 'border-red-500' : 'border-gray-200 dark:border-gray-600'}`}
                  placeholder="Tell me about your project, goals, or how I can help..."
                />
                {errors.message && <p className="mt-2 text-sm text-red-600 dark:text-red-400">{errors.message.message}</p>}
              </div>

              {/* Honeypot field for spam prevention */}
              <div className="absolute w-px h-px p-0 -m-px overflow-hidden [clip:rect(0,0,0,0)] whitespace-nowrap border-0">
                <label htmlFor="honey">Do not fill this out</label>
                <input type="text" id="honey" {...register('honey')} autoComplete="off" tabIndex="-1" />
              </div>

              {/* Status Messages */}
              {errors.root && (
                <div role="alert" aria-live="assertive" className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-red-600 dark:text-red-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <span className="text-red-700 dark:text-red-300 font-medium">{errors.root.message}</span>
                  </div>
                </div>
              )}
              {submissionStatus === 'success' && (
                <div role="alert" aria-live="polite" className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-green-600 dark:text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <span className="text-green-700 dark:text-green-300 font-medium">Thank you! Your message has been sent successfully.</span>
                  </div>
                </div>
              )}

              <button type="submit" disabled={isSubmitting} className="w-full py-4 px-8 bg-gradient-to-r from-brand-primary to-brand-secondary text-white font-bold text-lg rounded-xl shadow-lg hover:from-brand-accent hover:to-brand-accent-alt hover:-translate-y-1 hover:shadow-xl active:translate-y-0 active:shadow-md focus:outline-none focus:ring-4 focus:ring-blue-400/20 disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-300 font-headline">
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                    Sending Message...
                  </div>
                ) : (
                  <div className="flex items-center justify-center">
                    Send Message
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
                  </div>
                )}
              </button>
            </form>
          </div>
        </section>
      </div>

      <CTASection
        title="Ready to Get Started?"
        description="Whether you need strategic consulting, custom analytics solutions, or want to explore a partnership, I'm here to help turn your data into actionable insights."
        primaryButton={{ href: "/work", text: "View My Work", ariaLabel: "View Ted's portfolio projects" }}
        secondaryButton={{ href: "/about", text: "Learn More", ariaLabel: "Learn more about Ted" }}
      />
    </div>
    </>
  );
}

export default Contact;
