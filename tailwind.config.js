
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/*.js",
    "./src/**/*.js",
    "./src/**/**/*.js",
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '770px',
      'lmd': '1000px',
      'lg': '1200px',
      'xl': '1380px',
      '2xl': '1536px',
    },
  },
  plugins: [],
}