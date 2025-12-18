import { BrowserRouter as Router, Link, useRoutes, useLocation } from 'react-router-dom';
import { useEffect, useState, Suspense, lazy, cloneElement } from 'react';
// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from 'framer-motion';
import Footer from './components/Footer';
import logo from './assets/logo-td.svg';
import AnimatedPage from './components/AnimatedPage';
import PageSkeleton from './components/PageSkeleton';
import ErrorBoundary from './components/ErrorBoundary';

// Keep Home eagerly loaded (critical path - first page users see)
import Home from './pages/Home';

// Lazy load all other routes for code splitting
const Work = lazy(() => import('./pages/Work'));
const About = lazy(() => import('./pages/About'));
const Education = lazy(() => import('./pages/Education'));
const Contact = lazy(() => import('./pages/Contact'));
const Newsletter = lazy(() => import('./pages/Newsletter'));
const Certifications = lazy(() => import('./pages/Certifications'));
const Publications = lazy(() => import('./pages/Publications'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Simple SVG icons
const SunIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="5" /><path d="M12 1v2m0 18v2m11-11h-2M3 12H1m16.95 7.07l-1.41-1.41M6.34 6.34L4.93 4.93m12.02 0l-1.41 1.41M6.34 17.66l-1.41 1.41" /></svg>
);
const MoonIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" /></svg>
);
const AutoIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.07 7.07l-1.41-1.41M6.34 6.34L4.93 4.93m12.02 0l-1.41 1.41M6.34 17.66l-1.41 1.41" /><circle cx="12" cy="12" r="5" /></svg>
);

const THEME_KEY = 'theme-preference';
const themeOptions = [
  { value: 'light', icon: <SunIcon />, label: 'Light' },
  { value: 'dark', icon: <MoonIcon />, label: 'Dark' },
];

function setHtmlTheme(theme) {
  const html = document.documentElement;
  if (theme === 'dark') {
    html.classList.add('dark');
  } else if (theme === 'light') {
    html.classList.remove('dark');
  } else {
    // auto: follow system
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
  }
}

function AppContent() {
  const location = useLocation();
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem(THEME_KEY);
    if (saved) return saved;
    // Default to system preference if no saved preference
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });
  const [shouldReduceMotion, setShouldReduceMotion] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setShouldReduceMotion(mediaQuery.matches);

    const handleChange = (e) => setShouldReduceMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  // Error logging function (uses centralized logger)
  const logError = (error, errorInfo) => {
    // Error logging is handled by ErrorBoundary component using logError from lib/errorLogger
    // This callback can be used for route-specific error handling if needed
  };

  const routes = [
    {
      path: '/',
      element: (
        <ErrorBoundary
          fallbackTitle="Home Page Error"
          fallbackMessage="We encountered an error loading the home page. Please try refreshing or navigating to another page."
          onError={logError}
        >
          <AnimatedPage>
            <Home />
          </AnimatedPage>
        </ErrorBoundary>
      ),
    },
    {
      path: '/work',
      element: (
        <ErrorBoundary
          fallbackTitle="Portfolio Page Error"
          fallbackMessage="We encountered an error loading the portfolio. Some projects may not be displaying correctly."
          onError={logError}
        >
          <AnimatedPage>
            <Suspense fallback={<PageSkeleton variant="work" />}>
              <Work />
            </Suspense>
          </AnimatedPage>
        </ErrorBoundary>
      ),
    },
    {
      path: '/publications',
      element: (
        <ErrorBoundary
          fallbackTitle="Publications Page Error"
          fallbackMessage="We encountered an error loading publications. Please try again later."
          onError={logError}
        >
          <AnimatedPage>
            <Suspense fallback={<PageSkeleton variant="publications" />}>
              <Publications />
            </Suspense>
          </AnimatedPage>
        </ErrorBoundary>
      ),
    },
    {
      path: '/newsletter',
      element: (
        <ErrorBoundary
          fallbackTitle="Newsletter Page Error"
          fallbackMessage="We encountered an error loading the newsletter page. Please try again later."
          onError={logError}
        >
          <AnimatedPage>
            <Suspense fallback={<PageSkeleton variant="newsletter" />}>
              <Newsletter />
            </Suspense>
          </AnimatedPage>
        </ErrorBoundary>
      ),
    },
    {
      path: '/certifications',
      element: (
        <ErrorBoundary
          fallbackTitle="Certifications Page Error"
          fallbackMessage="We encountered an error loading certifications. Some badges may not be displaying correctly."
          onError={logError}
        >
          <AnimatedPage>
            <Suspense fallback={<PageSkeleton variant="certifications" />}>
              <Certifications />
            </Suspense>
          </AnimatedPage>
        </ErrorBoundary>
      ),
    },
    {
      path: '/about',
      element: (
        <ErrorBoundary
          fallbackTitle="About Page Error"
          fallbackMessage="We encountered an error loading the about page. Please try again later."
          onError={logError}
        >
          <AnimatedPage>
            <Suspense fallback={<PageSkeleton variant="about" />}>
              <About />
            </Suspense>
          </AnimatedPage>
        </ErrorBoundary>
      ),
    },
    {
      path: '/education',
      element: (
        <ErrorBoundary
          fallbackTitle="Education Page Error"
          fallbackMessage="We encountered an error loading education information. Please try again later."
          onError={logError}
        >
          <AnimatedPage>
            <Suspense fallback={<PageSkeleton variant="education" />}>
              <Education />
            </Suspense>
          </AnimatedPage>
        </ErrorBoundary>
      ),
    },
    {
      path: '/contact',
      element: (
        <ErrorBoundary
          fallbackTitle="Contact Page Error"
          fallbackMessage="We encountered an error loading the contact form. Please try refreshing the page or use the email link below."
          onError={logError}
        >
          <AnimatedPage>
            <Suspense fallback={<PageSkeleton variant="contact" />}>
              <Contact />
            </Suspense>
          </AnimatedPage>
        </ErrorBoundary>
      ),
    },
    {
      path: '*',
      element: (
        <ErrorBoundary
          fallbackTitle="Page Not Found"
          fallbackMessage="The page you're looking for doesn't exist or encountered an error."
          onError={logError}
        >
          <AnimatedPage>
            <Suspense fallback={<PageSkeleton variant="notfound" />}>
              <NotFound />
            </Suspense>
          </AnimatedPage>
        </ErrorBoundary>
      ),
    },
  ];

  const element = useRoutes(routes);

  // Apply theme on mount and when theme changes
  useEffect(() => {
    setHtmlTheme(theme);
  }, [theme]);

  // Persist theme
  useEffect(() => {
    localStorage.setItem(THEME_KEY, theme);
  }, [theme]);

  // Toggle between light and dark
  const handleThemeToggle = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
  const currentTheme = themeOptions.find(opt => opt.value === theme) || themeOptions[0];

  return (
    <div className="min-h-screen bg-surface dark:bg-surface-dark text-gray-900 dark:text-gray-100 font-body">
      <nav className="sticky top-0 z-50 backdrop-blur-lg bg-surface/80 dark:bg-surface-dark/80 border-b border-border/50 dark:border-border/50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white hover:text-brand-primary dark:hover:text-brand-primary transition-colors" aria-label="Home">
              <img src={logo} alt="Ted Dickey logo" width={40} height={40} className="mr-3" />
              <span className="text-xl md:text-2xl">Ted Dickey</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <Link to="/about" className="text-gray-700 dark:text-gray-300 hover:text-brand-primary dark:hover:text-brand-accent transition-colors font-medium" onClick={() => setMobileOpen(false)}>About</Link>
              <Link to="/work" className="text-gray-700 dark:text-gray-300 hover:text-brand-primary dark:hover:text-brand-accent transition-colors font-medium" onClick={() => setMobileOpen(false)}>Portfolio</Link>
              <Link to="/education" className="text-gray-700 dark:text-gray-300 hover:text-brand-primary dark:hover:text-brand-accent transition-colors font-medium" onClick={() => setMobileOpen(false)}>Education</Link>
              <Link to="/certifications" className="text-gray-700 dark:text-gray-300 hover:text-brand-primary dark:hover:text-brand-accent transition-colors font-medium" onClick={() => setMobileOpen(false)}>Certifications</Link>
              <Link to="/publications" className="text-gray-700 dark:text-gray-300 hover:text-brand-primary dark:hover:text-brand-accent transition-colors font-medium" onClick={() => setMobileOpen(false)}>Publications</Link>
              <Link to="/newsletter" className="text-gray-700 dark:text-gray-300 hover:text-brand-primary dark:hover:text-brand-accent transition-colors font-medium" onClick={() => setMobileOpen(false)}>Newsletter</Link>
              <Link to="/contact" className="text-gray-700 dark:text-gray-300 hover:text-brand-primary dark:hover:text-brand-accent transition-colors font-medium" onClick={() => setMobileOpen(false)}>Contact</Link>

              {/* Theme toggle */}
              <button
                className="p-3 rounded-xl bg-muted dark:bg-muted hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-brand-primary transition-all duration-300 border border-border dark:border-gray-700"
                aria-label={`Theme: ${currentTheme.label}`}
                title={`Theme: ${currentTheme.label}`}
                onClick={handleThemeToggle}
              >
                {currentTheme.icon}
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setMobileOpen(v => !v)}
                className="p-2 rounded-xl text-gray-600 dark:text-gray-300 hover:text-brand-primary dark:hover:text-brand-accent hover:bg-muted dark:hover:bg-muted focus:outline-none focus:ring-2 focus:ring-brand-primary transition-all duration-300"
                aria-label="Toggle navigation menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d={mobileOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Navigation with Animation */}
          <AnimatePresence>
            {mobileOpen && (
              <>
                {/* Backdrop Overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
                  onClick={() => setMobileOpen(false)}
                  aria-hidden="true"
                />

                {/* Mobile Menu */}
                <motion.div
                  initial={{ x: '100%' }}
                  animate={{ x: 0 }}
                  exit={{ x: '100%' }}
                  transition={{ type: "spring", damping: 25, stiffness: 200 }}
                  className="fixed top-0 right-0 bottom-0 w-64 bg-surface dark:bg-surface-dark shadow-2xl z-50 lg:hidden overflow-y-auto"
                >
                  {/* Close button */}
                  <div className="flex justify-end p-4 border-b border-border dark:border-gray-700">
                    <button
                      onClick={() => setMobileOpen(false)}
                      className="p-2 rounded-xl text-gray-600 dark:text-gray-300 hover:text-brand-primary dark:hover:text-brand-accent hover:bg-muted dark:hover:bg-muted focus:outline-none focus:ring-2 focus:ring-brand-primary transition-all duration-300"
                      aria-label="Close navigation menu"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>

                  <div className="flex flex-col p-4 space-y-2">
                    {[
                      { to: '/about', label: 'About' },
                      { to: '/work', label: 'Portfolio' },
                      { to: '/education', label: 'Education' },
                      { to: '/certifications', label: 'Certifications' },
                      { to: '/publications', label: 'Publications' },
                      { to: '/newsletter', label: 'Newsletter' },
                      { to: '/contact', label: 'Contact' },
                    ].map((item) => (
                      <Link
                        key={item.to}
                        to={item.to}
                        className="block text-gray-700 dark:text-gray-300 hover:text-brand-primary dark:hover:text-brand-primary transition-colors font-medium py-3 px-4 rounded-lg hover:bg-muted dark:hover:bg-muted/50"
                        onClick={() => setMobileOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}

                    <button
                      className="flex items-center gap-3 w-full text-left text-gray-700 dark:text-gray-300 hover:text-brand-primary dark:hover:text-brand-accent transition-colors font-medium py-3 px-4 rounded-lg hover:bg-muted dark:hover:bg-muted/50 mt-4 border-t border-border dark:border-gray-700 pt-4"
                      onClick={handleThemeToggle}
                    >
                      {currentTheme.icon}
                      <span>Theme: {currentTheme.label}</span>
                    </button>
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>
      </nav>
      <main className="max-w-7xl mx-auto px-4 md:px-8 py-10">
        <AnimatePresence mode="wait" initial={false}>
          {element && cloneElement(element, { key: location.pathname })}
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;