
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/*.js",
    "./src/**/*.js",
    "./src/**/**/*.js",
  ],
  theme: {
    screens: {
      'fdc': '320px',
      'sdc': '420px',
      'tdc': '620px',
      'ftdc': '820px',
      'fvdc': '920px',
    },
  },
  plugins: [],
}