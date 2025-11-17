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
      fontSize: {
        // Semantic Typographic Scale
        // Headlines (Inter font, tight line height, bold weight)
        'headline-1': ['3.5rem', { lineHeight: '1.1', fontWeight: '800' }], // 56px - Hero headlines (mobile)
        'headline-1-md': ['3.75rem', { lineHeight: '1.1', fontWeight: '800' }], // 60px - Hero headlines (tablet)
        'headline-1-lg': ['4.5rem', { lineHeight: '1.1', fontWeight: '800' }], // 72px - Hero headlines (desktop)
        
        'headline-2': ['2.25rem', { lineHeight: '1.2', fontWeight: '700' }], // 36px - Section headings (H2)
        
        'headline-3': ['1.5rem', { lineHeight: '1.3', fontWeight: '700' }], // 24px - Subsection headings (H3, mobile)
        'headline-3-md': ['1.875rem', { lineHeight: '1.3', fontWeight: '700' }], // 30px - Subsection headings (H3, desktop)
        
        // Body text (Source Serif Pro, relaxed line height)
        'body-large': ['1.25rem', { lineHeight: '1.75' }], // 20px - Hero subtitles, large body (mobile)
        'body-large-md': ['1.5rem', { lineHeight: '1.75' }], // 24px - Hero subtitles, large body (desktop)
        
        'body': ['1rem', { lineHeight: '1.75' }], // 16px - Default body text
        'body-md': ['1.125rem', { lineHeight: '1.75' }], // 18px - Medium body text
        
        'body-small': ['0.875rem', { lineHeight: '1.65' }], // 14px - Small text, captions
        
        // Special use cases
        'stat-value': ['1.875rem', { lineHeight: '1.2', fontWeight: '700' }], // 30px - KPI stat values
        'button': ['1.125rem', { lineHeight: '1.5', fontWeight: '600' }], // 18px - Button text
        'badge': ['0.875rem', { lineHeight: '1.4', fontWeight: '600' }], // 14px - Badge text
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
        
        // Brand color tokens - flattened for gradient support
        // Usage: bg-brand-primary, text-brand-primary, from-brand-primary, to-brand-secondary
        // Gradients: from-brand-primary to-brand-secondary, hover:from-brand-accent hover:to-brand-accent-alt
        'brand-primary': '#2563EB',      // blue-600 (start of gradient)
        'brand-secondary': '#9333EA',    // purple-600 (end of gradient)
        'brand-accent': '#1D4ED8',       // blue-700 (hover/darker variants)
        'brand-accent-alt': '#7E22CE',   // purple-700 (hover/darker variants)
        
        // Aliases for backward compatibility (if needed during migration)
        // These allow gradual migration from nested structure
        brand: {
          primary: '#2563EB',    // Alias to brand-primary (for bg-brand-primary, text-brand-primary)
          secondary: '#9333EA',  // Alias to brand-secondary
          accent: '#1D4ED8',     // Alias to brand-accent
          accentAlt: '#7E22CE',  // Alias to brand-accent-alt
        },
      },
    },
  },
  plugins: [],
}