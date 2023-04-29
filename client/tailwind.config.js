/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'manrope': 'Manrope, sans-serif',
        'bowlby': 'Bowlby One SC, cursive',
        'titan': 'Titan One, cursive'
      },
      colors: {
        borderblue: '#274472',
        hoverblue: '#ADD8E6',
        navtext1: '#5C474D',
        navtext2: '#B8A3A9',
        navbg: '#F2AFA9',
        card: '#FADEDC',
      }
    },
  },
  plugins: [],
}

