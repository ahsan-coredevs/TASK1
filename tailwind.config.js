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
        grayDark: '#343a40',
        dark: '#020b17',
      },
      keyframes: {
        move: {
          '0%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(200px)' },
          '100%': { transform: 'translateX(0)' }
        },
      },
      animation: {
         move: 'move 6s linear infinite'
      }
    },
  },
  plugins: [],
}