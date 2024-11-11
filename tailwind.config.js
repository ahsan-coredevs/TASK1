/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        nav: '#1F2937',
        primary:'#1ab69d',
        secondary: '#ee4a62',
        grayDark: '#111822',
        dark: '#020b17',
        yallow: '#fd7e14',
        ctaColorBg: '#F0F4F5',
        gold: '#FFD700'
      },
      keyframes: {
        move: {
          '0%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(200px)' },
          '100%': { transform: 'translateX(0)' }
        },
        bounce: {
          '0%, 10%, 100%': { transform: 'translateY(0)' },
          '10%': { transform: 'translateY(50px)' },
        },
        spinreverse: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(-360deg)' },
        },
        
          slideInLeft: {
          '0%': { transform: 'translateX(100%)', opacity: 0 },
          '40%': { transform: 'translateX(0)', opacity: 1 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },

      },
      animation: {
         move: 'move 6s linear infinite',
         bounce: 'bounce 4s linear infinite',
         spinreverse: 'spinreverse 10s linear infinite',
         slideInLeft: 'slideInLeft 4s ease-in-out infinite'
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.no-arrows': {
          // Remove arrows in WebKit browsers (Chrome, Safari, etc.)
          '&::-webkit-inner-spin-button': {
            appearance: 'none',
            margin: 0,
          },
          '&::-webkit-outer-spin-button': {
            appearance: 'none',
            margin: 0,
          },
          // Remove arrows in Firefox
          '-moz-appearance': 'textfield',
        },
      });
    },
  ],
}