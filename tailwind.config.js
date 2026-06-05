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
          bg: '#0A0915',       // Deep tech-space midnight background
          card: 'rgba(23, 18, 36, 0.55)', // Elegant glassmorphic background
          pink: '#ec4899',     // Vibrant magenta-pink accent
          purple: '#a855f7',   // Neon electric purple
          peach: '#fdf2f8',    // Soft pale rose-peach background
          slate: '#cbd5e1',    // Text muted
        }
      },
      fontFamily: {
        sans: ['Quicksand', 'Poppins', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 12s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        }
      }
    },
  },
  plugins: [],
}
