/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Substitute pure white globally with preferred off-white token.
        // Supports alpha utilities like bg-white/80 via <alpha-value> placeholder.
        white: 'rgb(var(--color-white) / <alpha-value>)',
      },
    },
  },
  plugins: [],
}