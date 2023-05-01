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
                // hoverblue: '#DFD4D6',
                // navtext1: '#ECBCB8',
                // navtext2: '#FDF7F7',
                // navbg: '#25364A',
                // card: '#4D677B',
                // darkblue: '#6F1313',
                // blue: '#B74242',
                mainbg: '#FDF7F7',
                darkest: '#5C2626',
                maroon: '#B74242',
                hotred: '#6F1313',
                hotpink: '#BB5A5A',
                coral: '#EA7362',
                lightcoral: '#E97171',
                orange: '#FFCB8E',
                pink: '#E97171',
                lightpink: '#EF8879',
                apricot: '#F49E80',
                cream: '#FFF3EB',
                platinum: '#FFF3EB',
                white: '#FDF7F7',
            },
        },
    },
    plugins: [],
};
