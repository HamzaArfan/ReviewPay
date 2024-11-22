/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'gradient-x': 'gradient-x 15s ease infinite',
        'gradient-text': 'gradient-text 5s ease infinite',
        'blob': 'blob 7s infinite'
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' }
        },
        'gradient-text': {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' }
        },
        'blob': {
          '0%': { 
            transform: 'translate(0px, 0px) scale(1)',
            opacity: 0.7
          },
          '33%': { 
            transform: 'translate(30px, -50px) scale(1.1)',
            opacity: 0.5
          },
          '66%': { 
            transform: 'translate(-20px, 20px) scale(0.9)',
            opacity: 0.6
          },
          '100%': { 
            transform: 'translate(0px, 0px) scale(1)',
            opacity: 0.7
          }
        }
      }
    }
  },
  plugins: [],
}

