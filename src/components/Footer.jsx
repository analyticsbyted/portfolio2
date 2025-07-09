import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo-td.svg";

// Define your social links in one place for easy updates
const socialLinks = [
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/teddickey', // <-- UPDATE THIS LINK
    path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
  },
  {
    name: 'X',
    href: 'https://x.com/your-username-here', // <-- UPDATE THIS LINK
    path: 'M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 7.184L18.901 1.153zm-1.653 19.57h2.608L5.397 2.16H2.64l14.608 18.563z'
  },
  {
    name: 'GitHub',
    href: 'https://github.com/analyticsbyted', // <-- UPDATE THIS LINK
    path: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
  }
];

const Footer = () => {
  const year = new Date().getFullYear();
  
  const handleLinkClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 text-white mt-16" role="contentinfo" aria-label="Site footer">
      <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
        {/* Mobile Layout */}
        <div className="block md:hidden text-center">
          <div className="flex flex-col items-center space-y-4">
            <div className="flex items-center">
              <img src={logo} alt="Site logo" width={32} height={32} className="mr-2" />
              <span className="text-xl font-bold">Ted Dickey II</span>
            </div>
            <p className="text-gray-300 text-sm">© {year} Ted Dickey II. All rights reserved.</p>
            <div className="flex space-x-6">
              {socialLinks.map(link => (
                <a key={link.name} href={link.href} target="_blank" rel="noopener noreferrer" aria-label={`View my ${link.name} profile`} className="text-gray-300 hover:text-blue-400 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d={link.path} />
                  </svg>
                </a>
              ))}
            </div>
            <p className="text-gray-400 text-xs">Built with React & Tailwind CSS</p>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:block">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center mb-4">
                <img src={logo} alt="Site logo" width={40} height={40} className="mr-3" />
                <span className="text-2xl font-bold">Ted Dickey II</span>
              </div>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Data Science professional with 6+ years of experience in analytics, machine learning, and organizational leadership. PhD Candidate specializing in AI/ML.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map(link => (
                  <a key={link.name} href={link.href} target="_blank" rel="noopener noreferrer" aria-label={`View my ${link.name} profile`} className="text-gray-300 hover:text-blue-400 transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d={link.path} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links and Resources (Unchanged) */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link to="/work" onClick={handleLinkClick} className="text-gray-300 hover:text-white transition-colors">Portfolio</Link></li>
                <li><Link to="/about" onClick={handleLinkClick} className="text-gray-300 hover:text-white transition-colors">About Me</Link></li>
                <li><Link to="/certifications" onClick={handleLinkClick} className="text-gray-300 hover:text-white transition-colors">Certifications</Link></li>
                <li><Link to="/education" onClick={handleLinkClick} className="text-gray-300 hover:text-white transition-colors">Education</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><Link to="/publications" onClick={handleLinkClick} className="text-gray-300 hover:text-white transition-colors">Publications</Link></li>
                <li><Link to="/newsletter" onClick={handleLinkClick} className="text-gray-300 hover:text-white transition-colors">Newsletter</Link></li>
                <li><Link to="/contact" onClick={handleLinkClick} className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar (Unchanged) */}
          <div className="border-t border-gray-700 pt-8 mt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center text-gray-300">
                <img src={logo} alt="Site logo" width={24} height={24} className="mr-2" />
                <span className="text-sm">© {year} Ted Dickey II. All rights reserved.</span>
              </div>
              <div className="mt-4 md:mt-0">
                <p className="text-gray-400 text-sm">
                  Built with React & Tailwind CSS
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;