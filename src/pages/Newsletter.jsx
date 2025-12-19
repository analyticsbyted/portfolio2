import { useState } from 'react';
import { motion } from 'framer-motion';
import { CalendarIcon, UsersIcon, ChartBarIcon, BookOpenIcon, EnvelopeIcon } from '@heroicons/react/24/outline';
import Button from '../components/Button';
import CTASection from '../components/CTASection';
import HeadMetadata from '../components/HeadMetadata';
import personSchema from '../seo/personSchema';

const newsletterStats = [
  { label: 'Weekly Articles', value: '3+', icon: '📰' },
  { label: 'Subscribers', value: '500+', icon: '👥' },
  { label: 'Topics Covered', value: '25+', icon: '📚' },
  { label: 'Success Rate', value: '94%', icon: '📈' }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

function Newsletter() {
  const [email, setEmail] = useState('');
  const [subscriptionStatus, setSubscriptionStatus] = useState('idle'); // idle | submitting | success | error

  // Placeholder articles with enhanced content
  const articles = [
    {
      id: 1,
      title: 'How Data Science is Transforming Business in 2024',
      date: '2024-07-01',
      category: 'Data Science',
      preview: 'A comprehensive look at real-world examples of data-driven decision making in modern organizations, featuring case studies from Fortune 500 companies.',
      readTime: '8 min read',
      tags: ['Business Intelligence', 'Analytics', 'Strategy']
    },
    {
      id: 2,
      title: 'Top 10 Python Libraries Every Data Analyst Should Master',
      date: '2024-06-24',
      category: 'Programming',
      preview: 'Discover the essential Python libraries that will elevate your data analysis capabilities, from pandas fundamentals to advanced machine learning tools.',
      readTime: '12 min read',
      tags: ['Python', 'Data Analysis', 'Tools']
    },
    {
      id: 3,
      title: 'Machine Learning Ethics: Responsible AI in Practice',
      date: '2024-06-17',
      category: 'AI Ethics',
      preview: 'Bridging the gap between ML concepts and ethical implementation, exploring frameworks for responsible AI development in enterprise environments.',
      readTime: '15 min read',
      tags: ['AI Ethics', 'Machine Learning', 'Best Practices']
    },
    {
      id: 4,
      title: 'Leadership in the Age of Analytics: Data-Driven Decision Making',
      date: '2024-06-10',
      category: 'Leadership',
      preview: 'How modern leaders can leverage analytics to make strategic decisions, build high-performing teams, and drive organizational transformation.',
      readTime: '10 min read',
      tags: ['Leadership', 'Analytics', 'Strategy']
    }
  ];

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email) return;

    setSubscriptionStatus('submitting');

    // Simulate API call
    setTimeout(() => {
      setSubscriptionStatus('success');
      setEmail('');
    }, 1500);
  };

  return (
    <>
      <HeadMetadata
        title="Newsletter"
        description="Subscribe to Ted Dickey's weekly newsletter for actionable insights on data science, AI, analytics leadership, and product strategy."
        canonical="/newsletter"
        keywords="data science newsletter, AI leadership insights, analytics trends, premium content, Ted Dickey weekly updates"
        schema={personSchema}
      />
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight font-headline">
            Data Science
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary pb-2">
              Newsletter
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Weekly insights on data science, analytics, AI, and leadership. Join hundreds of professionals staying ahead of the curve.
          </p>
        </section>

        {/* Stats Grid */}
        <section className="mb-16">
          <motion.div
            className="grid grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {newsletterStats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center p-6 bg-card dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="text-4xl mb-3">{stat.icon}</div>
                <div className="text-3xl font-bold text-brand-primary dark:text-brand-accent mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Newsletter Subscription */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-brand-primary to-brand-secondary text-white p-12 rounded-2xl text-center">
            <EnvelopeIcon className="w-16 h-16 mx-auto mb-6 opacity-90" />
            <h2 className="text-4xl font-bold mb-6">Join Our Premium Community</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Get exclusive weekly insights, in-depth analysis, and premium content delivered to your inbox. Join hundreds of data professionals advancing their careers.
            </p>

            {subscriptionStatus === 'success' ? (
              <div className="max-w-md mx-auto">
                <div className="bg-white/20 backdrop-blur rounded-xl p-6 border border-white/30">
                  <div className="flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Welcome aboard!</h3>
                  <p className="opacity-90">Check your email for confirmation and your first newsletter.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="flex-1 px-6 py-4 rounded-xl border-2 border-white/30 bg-white/10 backdrop-blur text-white placeholder-white/70 focus:outline-none focus:ring-4 focus:ring-white/20 focus:border-white/50 transition-all duration-300"
                    required
                  />
                  <button
                    type="submit"
                    disabled={subscriptionStatus === 'submitting'}
                    className="px-8 py-4 bg-surface text-brand-primary hover:bg-gray-100 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {subscriptionStatus === 'submitting' ? 'Processing...' : 'Start Membership'}
                  </button>
                </div>
              </form>
            )}

            {/* Pricing Info */}
            <div className="mt-8 text-center">
              <p className="text-white/80 text-sm">
                Premium membership includes full article access, exclusive resources, and community features.
              </p>
              <p className="text-white/60 text-xs mt-2">
                Already a member? <button className="underline hover:text-white">Sign in here</button>
              </p>
            </div>
          </div>
        </section>

        {/* Recent Articles */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">Recent Articles</h2>

          <motion.div
            className="grid gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {articles.map((article) => (
              <motion.div
                key={article.id}
                variants={itemVariants}
                className="bg-card dark:bg-card rounded-2xl shadow-xl border-2 border-border dark:border-gray-700 overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                    <div className="flex-1">
                      {/* Article Header */}
                      <div className="flex items-center gap-4 mb-4">
                        <div className="flex items-center gap-2">
                          <CalendarIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                          <span className="text-sm text-gray-500 dark:text-gray-400">{article.date}</span>
                        </div>
                        <span className="px-3 py-1 bg-brand-primary/10 dark:bg-brand-primary/20 text-brand-primary dark:text-blue-200 rounded-full text-sm font-medium">
                          {article.category}
                        </span>
                        <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 rounded-full text-sm font-medium flex items-center gap-1">
                          🔒 Premium
                        </span>
                        <div className="flex items-center gap-2">
                          <BookOpenIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                          <span className="text-sm text-gray-500 dark:text-gray-400">{article.readTime}</span>
                        </div>
                      </div>

                      {/* Article Content */}
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-brand-primary dark:group-hover:text-brand-accent transition-colors">
                        {article.title}
                      </h3>

                      <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                        {article.preview}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {article.tags.map((tag, i) => (
                          <span key={i} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-full text-sm">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex-shrink-0 flex flex-col gap-2">
                      <button className="px-6 py-3 bg-gradient-to-r from-brand-primary to-brand-secondary text-white rounded-xl font-semibold hover:from-brand-accent hover:to-brand-accent-alt transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 group-hover:scale-105">
                        Subscribe to Read
                      </button>
                      <button className="px-6 py-3 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-xl font-medium hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300 text-sm">
                        Member Login
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Newsletter Benefits */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">Why Subscribe?</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-card dark:bg-card rounded-2xl shadow-lg border border-border dark:border-gray-700 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-brand-primary to-brand-accent rounded-2xl mx-auto mb-6 flex items-center justify-center">
                <ChartBarIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Stay Current</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Get the latest trends, tools, and techniques in data science and analytics delivered weekly.
              </p>
            </div>

            <div className="text-center p-8 bg-card dark:bg-card rounded-2xl shadow-lg border border-border dark:border-gray-700 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-700 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                <BookOpenIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Practical Insights</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Real-world case studies, tutorials, and actionable advice you can apply immediately.
              </p>
            </div>

            <div className="text-center p-8 bg-card dark:bg-card rounded-2xl shadow-lg border border-border dark:border-gray-700 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-brand-secondary to-purple-700 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                <UsersIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Join Community</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Connect with like-minded professionals and access exclusive resources and discussions.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CTASection
          title="Ready to Level Up?"
          description="Join hundreds of data professionals who rely on our weekly insights to stay ahead in their careers."
          primaryButton={{
            href: "/work",
            text: "See My Work",
            ariaLabel: "View portfolio projects"
          }}
          secondaryButton={{
            href: "/contact",
            text: "Get In Touch",
            ariaLabel: "Get in touch"
          }}
        />
      </div>
    </>
  );
}

export default Newsletter;