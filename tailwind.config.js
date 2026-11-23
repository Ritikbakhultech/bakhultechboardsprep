/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: {
            DEFAULT: '#1e40af', // royal blue
            dark: '#1e3a8a',
            deep: '#0f172a',
            light: '#3b82f6',
            pale: '#eff6ff',
            soft: '#f0f7ff'
          },
          teal: {
            DEFAULT: '#0d9488',
            dark: '#0f766e',
            light: '#14b8a6',
            pale: '#f0fdfa'
          },
          amber: {
            DEFAULT: '#f59e0b',
            light: '#fef3c7'
          },
          emerald: {
            DEFAULT: '#10b981',
            light: '#d1fae5'
          }
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'subtle': '0 2px 8px -1px rgba(0, 0, 0, 0.05), 0 1px 3px -1px rgba(0, 0, 0, 0.03)',
        'card': '0 4px 20px -2px rgba(30, 58, 138, 0.06), 0 2px 6px -1px rgba(0, 0, 0, 0.03)',
        'card-hover': '0 10px 25px -3px rgba(30, 58, 138, 0.12), 0 4px 10px -2px rgba(0, 0, 0, 0.05)',
      }
    },
  },
  plugins: [],
}
