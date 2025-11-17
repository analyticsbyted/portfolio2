/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        headline: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
        body: ['"Source Serif Pro"', 'Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
      },
      lineHeight: {
        // Custom line heights optimized for typography
        'serif': '1.75',  // Optimal for Source Serif Pro (serif fonts need more breathing room)
        'serif-tight': '1.65',  // Slightly tighter for shorter paragraphs
      },
      colors: {
        // Substitute pure white globally with preferred off-white token.
        // Supports alpha utilities like bg-white/80 via <alpha-value> placeholder.
        white: 'rgb(var(--color-white) / <alpha-value>)',
        surface: 'rgb(var(--color-surface) / <alpha-value>)',
        card: 'rgb(var(--color-card) / <alpha-value>)',
        border: 'rgb(var(--color-border) / <alpha-value>)',
        muted: 'rgb(var(--color-muted) / <alpha-value>)',
        
        // Brand color tokens for consistent theming
        // Usage: bg-brand-primary, text-brand-primary, bg-brand-accent, etc.
        brand: {
          primary: '#2563EB',    // blue-600 (start of gradient)
          secondary: '#9333EA',  // purple-600 (end of gradient)
          accent: '#1D4ED8',     // blue-700 (hover/darker)
          accentAlt: '#7E22CE',  // purple-700 (hover/darker)
        },
      },
    },
  },
  plugins: [],
}