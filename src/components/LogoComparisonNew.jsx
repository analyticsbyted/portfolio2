import React from 'react';
import logoOriginal from '../assets/logo1.svg';
import logoEnhanced from '../assets/logo-enhanced.svg';
import logoOptionA from '../assets/logo-option-a.svg';
import logoOptionB from '../assets/logo-option-b.svg';
import logoOptionC from '../assets/logo-option-c.svg';
import logoOptionD from '../assets/logo-option-d.svg';

const LogoComparisonNew = () => {
  return (
    <div className="max-w-6xl mx-auto p-8 bg-card dark:bg-card rounded-2xl shadow-lg">
      <h2 className="text-3xl font-bold text-center mb-8 text-foreground dark:text-white">
        Enhanced Logo Options - 2024 Design Standards
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Current Logo */}
        <div className="text-center p-4 bg-muted dark:bg-muted/10 rounded-xl">
          <div className="mb-4 flex justify-center">
            <img src={logoEnhanced} alt="Current Enhanced Logo" width={80} height={80} className="border rounded-xl" />
          </div>
          <h3 className="font-bold text-lg mb-2 text-foreground dark:text-white">Current Enhanced</h3>
          <p className="text-muted-foreground dark:text-muted-foreground text-sm">
            Thin green bars, contrast issues identified
          </p>
        </div>

        {/* Option A */}
        <div className="text-center p-4 bg-gray-50 dark:bg-gray-900 rounded-xl">
          <div className="mb-4 flex justify-center">
            <img src={logoOptionA} alt="Option A Logo" width={80} height={80} className="border rounded-xl" />
          </div>
          <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">Option A: High Contrast</h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm">
            Thick white bars, maximum visibility, data trend line
          </p>
        </div>

        {/* Option B */}
        <div className="text-center p-4 bg-gray-50 dark:bg-gray-900 rounded-xl">
          <div className="mb-4 flex justify-center">
            <img src={logoOptionB} alt="Option B Logo" width={80} height={80} className="border rounded-xl" />
          </div>
          <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">Option B: Network Tech</h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm">
            Connected nodes, modern geometric, data flow concept
          </p>
        </div>

        {/* Option C */}
        <div className="text-center p-4 bg-gray-50 dark:bg-gray-900 rounded-xl">
          <div className="mb-4 flex justify-center">
            <img src={logoOptionC} alt="Option C Logo" width={80} height={80} className="border rounded-xl" />
          </div>
          <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">Option C: Vibrant Abstract</h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm">
            Dark background, electric gradient accents, 2024 trend
          </p>
        </div>

        {/* Option D */}
        <div className="text-center p-4 bg-gray-50 dark:bg-gray-900 rounded-xl">
          <div className="mb-4 flex justify-center">
            <img src={logoOptionD} alt="Option D Logo" width={80} height={80} className="border rounded-xl" />
          </div>
          <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">Option D: Typography + Data</h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm">
            "TD" initials with subtle data elements, personal branding
          </p>
        </div>

        {/* Original for Reference */}
        <div className="text-center p-4 bg-gray-50 dark:bg-gray-900 rounded-xl opacity-60">
          <div className="mb-4 flex justify-center">
            <img src={logoOriginal} alt="Original Logo" width={80} height={80} className="border rounded-xl" />
          </div>
          <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">Original Reference</h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm">
            Starting point for comparison
          </p>
        </div>
      </div>

      <div className="mt-8 p-6 bg-brand-primary/5 dark:bg-brand-primary/10 rounded-xl">
        <h4 className="font-semibold text-foreground dark:text-white mb-4">2024 Design Analysis:</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-muted-foreground dark:text-muted-foreground">
          <div>
            <p><strong>Option A:</strong> Maximum contrast with thick white elements. Best for readability across all devices.</p>
            <p><strong>Option B:</strong> Modern tech aesthetic with connected data nodes. Shows data relationships.</p>
          </div>
          <div>
            <p><strong>Option C:</strong> Follows 2024 trend of electric colors on dark backgrounds. High digital impact.</p>
            <p><strong>Option D:</strong> Personal branding approach combining initials with data visualization subtly.</p>
          </div>
        </div>
      </div>

      <div className="mt-6 p-4 bg-brand-secondary/5 dark:bg-brand-secondary/10 rounded-xl">
        <p className="text-sm text-foreground dark:text-white">
          <strong>Recommendation:</strong> Based on 2024 design research, <strong>Option A or C</strong> provide the best contrast and modern appeal.
          Option A is safest for all contexts, while Option C follows current vibrant trend for maximum digital impact.
        </p>
      </div>
    </div>
  );
};

export default LogoComparisonNew;