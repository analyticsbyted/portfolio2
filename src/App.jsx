import { BrowserRouter as Router, Link, useRoutes, useLocation } from 'react-router-dom';
import { useEffect, useState, Suspense, lazy, cloneElement } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Home from './pages/Home';
const Work = lazy(() => import('./pages/Work'));
import About from './pages/About';
import Education from './pages/Education';
import Contact from './pages/Contact';
import Newsletter from './pages/Newsletter';
import Certifications from './pages/Certifications';
import Publications from './pages/Publications';
import Footer from './components/Footer';
import logo from './assets/logo-td.svg';
import NotFound from './pages/NotFound';
import AnimatedPage from './components/AnimatedPage';

// Simple SVG icons
const SunIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="5"/><path d="M12 1v2m0 18v2m11-11h-2M3 12H1m16.95 7.07l-1.41-1.41M6.34 6.34L4.93 4.93m12.02 0l-1.41 1.41M6.34 17.66l-1.41 1.41"/></svg>
);
const MoonIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z"/></svg>
);
const AutoIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.07 7.07l-1.41-1.41M6.34 6.34L4.93 4.93m12.02 0l-1.41 1.41M6.34 17.66l-1.41 1.41"/><circle cx="12" cy="12" r="5"/></svg>
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
    return localStorage.getItem(THEME_KEY) || 'light';
  });
  const [shouldReduceMotion, setShouldReduceMotion] = useState(false);

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

  const routes = [
    {
      path: '/',
      element: (
        <AnimatedPage>
          <Home />
        </AnimatedPage>
      ),
    },
    {
      path: '/work',
      element: (
        <AnimatedPage>
          <Suspense fallback={
            <div>
              <div className="text-center mb-8">
                <div className="mx-auto h-8 w-48 bg-muted/60 rounded-lg animate-pulse" />
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {[0,1,2,3].map(i => (
                  <div key={i} className="bg-card border-2 border-border rounded-2xl overflow-hidden">
                    <div className="h-48 bg-muted/50 animate-pulse" />
                    <div className="p-6 space-y-3">
                      <div className="h-4 w-1/3 bg-muted/60 rounded animate-pulse" />
                      <div className="h-5 w-2/3 bg-muted/60 rounded animate-pulse" />
                      <div className="h-4 w-full bg-muted/50 rounded animate-pulse" />
                      <div className="h-4 w-5/6 bg-muted/50 rounded animate-pulse" />
                      <div className="h-10 w-40 bg-muted/60 rounded-lg animate-pulse" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          }>
            <Work />
          </Suspense>
        </AnimatedPage>
      ),
    },
    {
      path: '/publications',
      element: (
        <AnimatedPage>
          <Publications />
        </AnimatedPage>
      ),
    },
    {
      path: '/newsletter',
      element: (
        <AnimatedPage>
          <Newsletter />
        </AnimatedPage>
      ),
    },
    {
      path: '/certifications',
      element: (
        <AnimatedPage>
          <Certifications />
        </AnimatedPage>
      ),
    },
    {
      path: '/about',
      element: (
        <AnimatedPage>
          <About />
        </AnimatedPage>
      ),
    },
    {
      path: '/education',
      element: (
        <AnimatedPage>
          <Education />
        </AnimatedPage>
      ),
    },
    {
      path: '/contact',
      element: (
        <AnimatedPage>
          <Contact />
        </AnimatedPage>
      ),
    },
    {
      path: '*',
      element: (
        <AnimatedPage>
          <NotFound />
        </AnimatedPage>
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

  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-surface text-gray-900 dark:text-gray-100 font-body">
      <nav className="sticky top-0 z-50 backdrop-blur-lg bg-white/80 dark:bg-gray-900/80 border-b border-gray-200/50 dark:border-gray-700/50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors" aria-label="Home">
              <img src={logo} alt="Ted Dickey logo" width={40} height={40} className="mr-3" />
              <span className="text-xl md:text-2xl">Ted Dickey</span>
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <Link to="/about" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium" onClick={() => setMobileOpen(false)}>About</Link>
              <Link to="/work" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium" onClick={() => setMobileOpen(false)}>Portfolio</Link>
              <Link to="/education" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium" onClick={() => setMobileOpen(false)}>Education</Link>
              <Link to="/certifications" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium" onClick={() => setMobileOpen(false)}>Certifications</Link>
              <Link to="/publications" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium" onClick={() => setMobileOpen(false)}>Publications</Link>
              <Link to="/newsletter" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium" onClick={() => setMobileOpen(false)}>Newsletter</Link>
              <Link to="/contact" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium" onClick={() => setMobileOpen(false)}>Contact</Link>
              
              {/* Theme toggle */}
              <button
                className="p-3 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300 border border-gray-200 dark:border-gray-700"
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
                className="p-2 rounded-xl text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300"
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
                  transition={{ duration: shouldReduceMotion ? 0.1 : 0.2 }}
                  className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
                  onClick={() => setMobileOpen(false)}
                  aria-hidden="true"
                />
                
                {/* Mobile Menu */}
                <motion.div
                  initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: '100%' }}
                  animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, x: 0 }}
                  exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: '100%' }}
                  transition={{
                    duration: shouldReduceMotion ? 0.15 : 0.3,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="fixed top-0 right-0 bottom-0 w-64 bg-white dark:bg-gray-900 shadow-2xl z-50 lg:hidden overflow-y-auto"
                >
                  {/* Close button */}
                  <div className="flex justify-end p-4 border-b border-gray-200 dark:border-gray-700">
                    <button
                      onClick={() => setMobileOpen(false)}
                      className="p-2 rounded-xl text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300"
                      aria-label="Close navigation menu"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                  
                  <div className="lg:hidden pb-4 pt-4 px-4">
                    <motion.div
                      initial="closed"
                      animate="open"
                      variants={{
                        open: {
                          transition: { staggerChildren: shouldReduceMotion ? 0 : 0.05, delayChildren: shouldReduceMotion ? 0 : 0.1 }
                        },
                        closed: {
                          transition: { staggerChildren: 0, staggerDirection: -1 }
                        }
                      }}
                      className="flex flex-col space-y-3"
                    >
                      {[
                        { to: '/about', label: 'About' },
                        { to: '/work', label: 'Portfolio' },
                        { to: '/education', label: 'Education' },
                        { to: '/certifications', label: 'Certifications' },
                        { to: '/publications', label: 'Publications' },
                        { to: '/newsletter', label: 'Newsletter' },
                        { to: '/contact', label: 'Contact' },
                      ].map((item, index) => (
                        <motion.div
                          key={item.to}
                          variants={{
                            open: {
                              opacity: shouldReduceMotion ? 1 : [0, 1],
                              x: shouldReduceMotion ? 0 : [20, 0],
                            },
                            closed: {
                              opacity: shouldReduceMotion ? 0 : [1, 0],
                              x: shouldReduceMotion ? 0 : [0, 20],
                            }
                          }}
                          transition={{
                            duration: shouldReduceMotion ? 0.1 : 0.2,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                        >
                          <Link
                            to={item.to}
                            className="block text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium py-2 px-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
                            onClick={() => setMobileOpen(false)}
                          >
                            {item.label}
                          </Link>
                        </motion.div>
                      ))}
                      
                      <motion.div
                        variants={{
                          open: {
                            opacity: shouldReduceMotion ? 1 : [0, 1],
                            x: shouldReduceMotion ? 0 : [20, 0],
                          },
                          closed: {
                            opacity: shouldReduceMotion ? 0 : [1, 0],
                            x: shouldReduceMotion ? 0 : [0, 20],
                          }
                        }}
                        transition={{
                          duration: shouldReduceMotion ? 0.1 : 0.2,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="pt-3 border-t border-gray-200 dark:border-gray-700"
                      >
                        <button
                          className="flex items-center gap-3 w-full text-left text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium py-2 px-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
                          onClick={handleThemeToggle}
                        >
                          {currentTheme.icon}
                          <span>Theme: {currentTheme.label}</span>
                        </button>
                      </motion.div>
                    </motion.div>
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