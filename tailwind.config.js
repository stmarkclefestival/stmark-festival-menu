/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-brown': '#3D2B1F',
        'mid-brown':  '#5C3D2A',
        'parchment':  '#C8A96E',
        'parchment-light': '#D4BA87',
        'parchment-pale':  '#E8D5A8',
        'parchment-bg':    '#C2A060',
        'cream':      '#F5EDD6',
        'cream-warm': '#EFE0B8',
        'gold':       '#B8922A',
        'gold-light': '#D4A843',
        'text-dark':  '#2A1A0E',
        'text-body':  '#3D2B1F',
      },
      fontFamily: {
        display: ['Cinzel', 'serif'],
        body:    ['Lora', 'serif'],
      },
      clipPath: {
        banner: 'polygon(0% 50%, 16px 0%, calc(100% - 16px) 0%, 100% 50%, calc(100% - 16px) 100%, 16px 100%)',
      },
      keyframes: {
        slideUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to:   { opacity: '1' },
        },
      },
      animation: {
        'slide-up': 'slideUp 0.28s ease',
        'fade-in':  'fadeIn 0.3s ease',
      },
    },
  },
  plugins: [],
}
