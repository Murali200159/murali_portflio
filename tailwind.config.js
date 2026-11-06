/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          dark: '#1B2A24',
          DEFAULT: '#24372F', // Primary dark forest green
          secondary: '#687F5B', // Secondary green / sage
          sage: '#E2EADF', // Soft sage tint for section backgrounds
          muted: '#687F5B',
          light: '#EBF1E8',
        },
        beige: {
          dark: '#C4B299',
          DEFAULT: '#D9C9B2', // Warm beige
          light: '#EFE9DF', // Light warm beige for section background
          subtle: '#F5EFE6',
        },
        terracotta: {
          DEFAULT: '#C96F4F', // Terracotta accent
          dark: '#B0593B',
          light: '#F8E8E2',
        },
        cream: {
          DEFAULT: '#F8F6EE', // Soft cream
          surface: '#F1EDE2',
          muted: '#E8E3D7',
        },
        ink: {
          DEFAULT: '#20231F', // Dark typography
          muted: '#4A5048',
          subtle: '#727970',
          light: '#F8F6EE',
        },
        charcoal: {
          DEFAULT: '#171918',
          light: '#222523',
          dark: '#111312',
        },
      },
      fontFamily: {
        heading: ['"Plus Jakarta Sans"', 'Manrope', 'system-ui', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      boxShadow: {
        'soft': '0 10px 30px -5px rgba(36, 55, 47, 0.08)',
        'soft-lg': '0 20px 40px -10px rgba(36, 55, 47, 0.12)',
        'dark-soft': '0 20px 40px -10px rgba(0, 0, 0, 0.35)',
      },
      lineHeight: {
        relaxed: '1.7',
      },
      maxWidth: {
        prose: '68ch',
      },
    },
  },
  plugins: [],
};
