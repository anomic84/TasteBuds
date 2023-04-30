/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                manrope: 'Manrope, sans-serif',
                bowlby: 'Bowlby One SC, cursive',
                titan: 'Titan One, cursive',
            },
            colors: {
                // borderblue: '#274472',
                borderblue: '#F2AFA9',
                hoverblue: '#DFD4D6',
                navtext1: '#ECBCB8',
                navtext2: '#ECBCB8',
                navbg: '#25364A',
                card: '#4D677B',
                mainbg: '#D8E0E5',
                darkest: '#222831',
                darkblue: '#25364A',
                blue: '#4D677B',
                lightblue: '#96B0BF',
                pink: '#E5C8C7',
                lightpink: '#DFD4D6',
                hotpink: '#F2AFA9',
            },
        },
    },
    plugins: [],
};
