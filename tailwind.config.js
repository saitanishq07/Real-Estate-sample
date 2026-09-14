/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0f7f4',
          100: '#dceee7',
          200: '#bce0d3',
          300: '#91cbba',
          400: '#60ae9a',
          500: '#3e917e',
          600: '#2b7464',
          700: '#225d51',
          800: '#1b4a41',
          900: '#0d3327', // Deep architectural forest green
          950: '#061d16', // Ultra dark forest background
        },
        gold: {
          50: '#faf6eb',
          100: '#f3eacc',
          200: '#e8d697',
          300: '#dcb85c',
          400: '#d4af37', // Metallic luxury gold
          500: '#c5a059', // Champagne bronze gold
          600: '#a37e3d',
          700: '#7f5f2d',
          800: '#5e4320',
        },
        alabaster: {
          50: '#fbf9f5',  // Pure luxury alabaster background
          100: '#f5f2ec', // Secondary soft warm background
          200: '#e8e4db', // Elegant border tone
          300: '#d6cfc1',
          400: '#baa393',
        },
        dark: {
          800: '#16201d',
          900: '#0e1412', // Pure luxury dark charcoal
          950: '#070a09',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'subtle': '0 4px 20px -2px rgba(13, 51, 39, 0.04)',
        'card': '0 12px 35px -5px rgba(13, 51, 39, 0.07)',
        'luxury': '0 20px 40px -10px rgba(13, 51, 39, 0.12)',
        'glow-gold': '0 0 30px rgba(197, 160, 89, 0.28)',
        'glow-forest': '0 0 30px rgba(13, 51, 39, 0.35)',
      },
      letterSpacing: {
        'widest-plus': '0.25em',
        'architectural': '0.3em',
      }
    },
  },
  plugins: [],
};
