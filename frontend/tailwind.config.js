export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        mainLay: '#172233',
        greyLettering: '#A2A7AD',
        secondary: '#5F6D7E',
        neutral700: '#D1D9E2',
        neutral600: '#E6E9EC',
        neutral100: '#F8F9FB',
        gray500: '#2E3646',
        secondaryGreen: '#169872',
        fair: '#C0F5F9',
        logoBlue: '#0A1C6B',
        fontBlue: '#121212',
        headerBackground: 'rgba(171, 209, 250, 0.30)',
        loginButtonBackground: 'rgba(171, 209, 250, 0.80)',
        homeCardBackground: 'rgba(171, 209, 250, 0.50)',
        homeSignUp: '#1436D9',
        footerText: '#F5F7FA',
      },
      fontFamily: {
        body: ['Arial', 'sans-serif'],
        heading: ['Georgia', 'serif'],
      },
    },
  },
  plugins: [],
};
