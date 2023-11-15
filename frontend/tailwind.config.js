/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        mainLay: '##172233',
        greyLettering: '#A2A7AD',
        secondary: '#5F6D7E',
        neutral700: '#D1D9E2',
        neutral600: '#E6E9EC',
        neutral100: '#F8F9FB',
        gray500: '#2E3646',
        secondaryGreen: '#169872',
      },
      fontFamily: {
        body: ['Arial', 'sans-serif'],
        heading: ['Georgia', 'serif'],
        // Add more fonts as needed
      },
    },
  },
  plugins: [],
};
