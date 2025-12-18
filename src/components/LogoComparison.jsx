import React from 'react';
import logoOriginal from '../assets/logo1.svg';
import logoEnhanced from '../assets/logo-enhanced.svg';
import logoPersonal from '../assets/logo-personal.svg';

const LogoComparison = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-card dark:bg-card rounded-2xl shadow-lg">
      <h2 className="text-3xl font-bold text-center mb-8 text-foreground dark:text-white">
        Logo Design Comparison
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Original Logo */}
        <div className="text-center">
          <div className="mb-4 flex justify-center">
            <img src={logoOriginal} alt="Original Logo" width={96} height={96} className="border rounded-2xl" />
          </div>
          <h3 className="font-bold text-lg mb-2 text-foreground dark:text-white">Current Logo</h3>
          <p className="text-muted-foreground dark:text-gray-300 text-sm">
            Original data visualization concept with fixed colors
          </p>
        </div>

        {/* Enhanced Logo */}
        <div className="text-center">
          <div className="mb-4 flex justify-center">
            <img src={logoEnhanced} alt="Enhanced Logo" width={96} height={96} className="border rounded-2xl" />
          </div>
          <h3 className="font-bold text-lg mb-2 text-foreground dark:text-white">Option 1: Enhanced</h3>
          <p className="text-muted-foreground dark:text-gray-300 text-sm">
            Same concept with theme-aware gradients and modern styling
          </p>
        </div>

        {/* Personal Logo */}
        <div className="text-center">
          <div className="mb-4 flex justify-center">
            <img src={logoPersonal} alt="Personal Logo" width={96} height={96} className="border rounded-2xl" />
          </div>
          <h3 className="font-bold text-lg mb-2 text-foreground dark:text-white">Option 2: Personal</h3>
          <p className="text-muted-foreground dark:text-gray-300 text-sm">
            Personal branding with "TD" initials and tech elements
          </p>
          <div className="mt-8 p-6 bg-brand-primary/5 dark:bg-brand-primary/10 rounded-xl">
            <h4 className="font-semibold text-foreground dark:text-white mb-2">Design Analysis:</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-muted-foreground dark:text-gray-300">
              <div>
                <p><strong>Option 1 (Enhanced):</strong></p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Maintains brand recognition</li>
                  <li>Theme-aware colors</li>
                  <li>Modern gradients</li>
                  <li>Professional data focus</li>
                </ul>
              </div>
              <div>
                <p><strong>Option 2 (Personal):</strong></p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Personal branding with initials</li>
                  <li>Unique identity</li>
                  <li>Academic indicators</li>
                  <li>Tech-inspired elements</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoComparison;