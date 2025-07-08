import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
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
import logo from './assets/logo1.svg';
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
        <nav className="flex flex-wrap items-center justify-between px-4 md:px-8 py-4 shadow-sm bg-[#F8F7F4] dark:bg-gray-900 sticky top-0 z-10">
          <Link to="/" className="flex items-center text-2xl font-bold tracking-tight" style={{ fontSize: '1.5rem' }} aria-label="Home">
            <img src={logo} alt="Site logo" width={36} height={36} className="mr-2" />
            Ted Dickey
          </Link>
          {/* Mobile menu button */}
          <div className="md:hidden ml-auto">
            <button
              onClick={() => setMobileOpen(v => !v)}
              className="p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              aria-label="Open navigation menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" /></svg>
            </button>
          </div>
          {/* Nav links */}
          <div className={`flex-col md:flex-row md:flex items-center space-y-4 md:space-y-0 md:space-x-6 w-full md:w-auto mt-4 md:mt-0 ${mobileOpen ? 'flex' : 'hidden'} md:flex`}>
            <Link to="/work" className="hover:text-blue-600 dark:hover:text-blue-400 transition text-base md:text-sm" style={{ fontSize: '1rem' }}>Work</Link>
            <Link to="/publications" className="hover:text-blue-600 dark:hover:text-blue-400 transition text-base md:text-sm" style={{ fontSize: '1rem' }}>Publications</Link>
            <Link to="/newsletter" className="hover:text-blue-600 dark:hover:text-blue-400 transition text-base md:text-sm" style={{ fontSize: '1rem' }}>Newsletter</Link>
            <Link to="/certifications" className="hover:text-blue-600 dark:hover:text-blue-400 transition text-base md:text-sm" style={{ fontSize: '1rem' }}>Certifications</Link>
            <Link to="/about" className="hover:text-blue-600 dark:hover:text-blue-400 transition text-base md:text-sm" style={{ fontSize: '1rem' }}>About</Link>
            <Link to="/education" className="hover:text-blue-600 dark:hover:text-blue-400 transition text-base md:text-sm" style={{ fontSize: '1rem' }}>Education</Link>
            <Link to="/contact" className="hover:text-blue-600 dark:hover:text-blue-400 transition text-base md:text-sm" style={{ fontSize: '1rem' }}>Contact</Link>
            {/* Theme toggle */}
            <button
              className="ml-0 md:ml-4 p-2 rounded-full border border-transparent hover:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition bg-blue-100 dark:bg-gray-800"
              aria-label={`Theme: ${currentTheme.label}`}
              title={`Theme: ${currentTheme.label}`}
              onClick={handleThemeToggle}
              style={{ fontSize: '1rem' }}
            >
              {currentTheme.icon}
            </button>
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