/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    'node_mpdules/daisyui/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    styled: true, // default is true
    themes: [
      {
        mytheme: {
          primary: '#EFABA3',
          'primary-focus': '#E98B7E',
          'primary-content': '#44403c',
          secondary: '#FBEEEC',
          'secondary-focus': '#F1BDB5',
          'secondary-content': '#E98B7E',
          accent: '#5456c9',
          neutral: '#1C1622',
          'base-100': '#FDFCFD',
          info: '#9ECDE6',
          success: '#1D9579',
          warning: '#DAAB10',
          error: '#F23168',
        },
      },
      // 'light',
      // 'bumblebee',
      'retro',
      // 'coffee',
      // 'black',
      // 'business',
    ],
    // these are all defaults
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: '',
    darkTheme: 'black',
  },
};
