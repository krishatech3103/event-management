/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#FDFBF0',
          100: '#FAF4DC',
          200: '#F5E6B5',
          300: '#EFD489',
          400: '#E4BF57',
          500: '#D4AF37', // Royal Primary Gold
          600: '#B89223',
          700: '#947217',
          800: '#755815',
          900: '#5F4614',
        },
        maroon: {
          50: '#FDF2F4',
          100: '#FCE7EA',
          200: '#F8CFD6',
          300: '#F1AAB7',
          400: '#E6758C',
          500: '#D34465',
          600: '#B8284C',
          700: '#981B3B',
          800: '#7E1934',
          900: '#68172E',
          950: '#3D0716', // Deep Royal Velvet
        },
        ivory: {
          50: '#FCFBF9',
          100: '#F9F7F2',
          200: '#F3EFE4',
          300: '#EBE4D2',
          400: '#DFD4BC',
          500: '#CEBE9F',
        },
        royal: {
          dark: '#0D0F12',
          card: '#161920',
          surface: '#1E222B',
          border: 'rgba(212, 175, 55, 0.18)',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'gold-sm': '0 2px 10px rgba(212, 175, 55, 0.12)',
        'gold-md': '0 8px 30px rgba(212, 175, 55, 0.20)',
        'gold-lg': '0 16px 40px rgba(212, 175, 55, 0.28)',
        'soft-elevated': '0 10px 40px -10px rgba(0,0,0,0.08)',
        'card-hover': '0 20px 40px -15px rgba(120, 0, 22, 0.15)',
      },
      animation: {
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
        'float-gentle': 'floatGentle 4s ease-in-out infinite',
      },
      keyframes: {
        pulseSubtle: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.9', transform: 'scale(1.02)' },
        },
        floatGentle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
      },
    },
  },
  plugins: [],
}
