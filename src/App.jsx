import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useEffect, useState, Suspense, lazy } from 'react';
import Home from './pages/Home';
const Work = lazy(() => import('./pages/Work'));
import About from './pages/About';
import Education from './pages/Education';
import Contact from './pages/Contact';
import Newsletter from './pages/Newsletter';
import Certifications from './pages/Certifications';
import Publications from './pages/Publications';
import Footer from './components/Footer';
import logo from './assets/logo-enhanced.svg';
import NotFound from './pages/NotFound';

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
  { value: 'auto', icon: <AutoIcon />, label: 'Auto (System)' },
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

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem(THEME_KEY) || 'auto';
  });

  // Apply theme on mount and when theme changes
  useEffect(() => {
    setHtmlTheme(theme);
    if (theme === 'auto') {
      const listener = () => setHtmlTheme('auto');
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', listener);
      return () => window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', listener);
    }
  }, [theme]);

  // Persist theme
  useEffect(() => {
    localStorage.setItem(THEME_KEY, theme);
  }, [theme]);

  // Cycle through theme options
  const handleThemeToggle = () => {
    const idx = themeOptions.findIndex(opt => opt.value === theme);
    const next = themeOptions[(idx + 1) % themeOptions.length];
    setTheme(next.value);
  };
  const currentTheme = themeOptions.find(opt => opt.value === theme) || themeOptions[0];

  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-[#F8F7F4] dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-sans">
        <nav className="sticky top-0 z-50 backdrop-blur-lg bg-white/80 dark:bg-gray-900/80 border-b border-gray-200/50 dark:border-gray-700/50 shadow-lg">
          <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
            <div className="flex items-center justify-between">
              <Link to="/" className="flex items-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors" aria-label="Home">
                <img src={logo} alt="Site logo" width={40} height={40} className="mr-3" />
                <span className="text-xl md:text-2xl">Ted Dickey</span>
              </Link>
              
              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-8">
                <Link to="/work" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium" onClick={() => setMobileOpen(false)}>Work</Link>
                <Link to="/publications" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium" onClick={() => setMobileOpen(false)}>Publications</Link>
                <Link to="/newsletter" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium" onClick={() => setMobileOpen(false)}>Newsletter</Link>
                <Link to="/certifications" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium" onClick={() => setMobileOpen(false)}>Certifications</Link>
                <Link to="/about" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium" onClick={() => setMobileOpen(false)}>About</Link>
                <Link to="/education" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium" onClick={() => setMobileOpen(false)}>Education</Link>
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
              <div className="md:hidden">
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

            {/* Mobile Navigation */}
            {mobileOpen && (
              <div className="md:hidden mt-4 pb-4 border-t border-gray-200 dark:border-gray-700 pt-4">
                <div className="flex flex-col space-y-3">
                  <Link to="/work" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium py-2 px-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800" onClick={() => setMobileOpen(false)}>Work</Link>
                  <Link to="/publications" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium py-2 px-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800" onClick={() => setMobileOpen(false)}>Publications</Link>
                  <Link to="/newsletter" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium py-2 px-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800" onClick={() => setMobileOpen(false)}>Newsletter</Link>
                  <Link to="/certifications" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium py-2 px-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800" onClick={() => setMobileOpen(false)}>Certifications</Link>
                  <Link to="/about" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium py-2 px-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800" onClick={() => setMobileOpen(false)}>About</Link>
                  <Link to="/education" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium py-2 px-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800" onClick={() => setMobileOpen(false)}>Education</Link>
                  <Link to="/contact" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium py-2 px-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800" onClick={() => setMobileOpen(false)}>Contact</Link>
                  
                  <div className="pt-3 border-t border-gray-200 dark:border-gray-700">
                    <button
                      className="flex items-center gap-3 w-full text-left text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium py-2 px-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
                      onClick={handleThemeToggle}
                    >
                      {currentTheme.icon}
                      <span>Theme: {currentTheme.label}</span>
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </nav>
        <main className="max-w-4xl mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/work" element={
              <Suspense fallback={<div className="flex justify-center items-center min-h-[30vh]"><span className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-600 mr-2"></span> Loading Work...</div>}>
                <Work />
              </Suspense>
            } />
            <Route path="/publications" element={<Publications />} />
            <Route path="/newsletter" element={<Newsletter />} />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/about" element={<About />} />
            <Route path="/education" element={<Education />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;