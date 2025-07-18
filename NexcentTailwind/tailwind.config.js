/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors:{
       primary: '#4CAF4F',
       neutralSilver: '#F5F7FA',
       neutralWhite: '#ffffff',
      },
      gap: {
        '50': '50px',
        '14': '14px',
        '104': '104px',
      },
      padding: {
        '10': '10px',
        '20': '20px',
      }
    },
  },
  plugins: [],
}

