/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            screens: {
                'smr': '500px'
            },
            fontFamily: {
                manrope: 'Manrope, sans-serif',
                bowlby: 'Bowlby One SC, cursive',
                titan: 'Titan One, cursive',
            },
            colors: {
                darkest: '#5C2626',
                maroon: '#B74242',
                hotred: '#6F1313',
                hotpink: '#BB5A5A',
                coral: '#EA7362',
                orange: '#FFCB8E',
                pink: '#E97171',
                lightpink: '#EF8879',
                apricot: '#F49E80',
                cream: '#FFF3EB',
                white: '#FDF7F7',
            },
        },
    },
    plugins: [],
};
