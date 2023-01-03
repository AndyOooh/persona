/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    'node_mpdules/daisyui/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      spacing: {
        '4em': '4em',
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    styled: true, // default is true
    themes: [
      {
        mytheme: {
          primary: '#E19C90',
          // 'primary-focus': '#e3857d',
          'primary-focus': '#F1BDB5',
          // 'primary-content': '#14403c',
          secondary: '#F8DEDA',
          // 'secondary-focus': '#F1BDB5',
          // 'secondary-content': '#E98B7E',
          accent: '#F1BDB5',
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
      // 'retro',
      // 'coffee',
      // 'black',
      // 'business',
      // 'dark',
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
