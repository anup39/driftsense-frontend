/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/*.js",
    "./src/**/*.js",
    "./src/**/**/*.js",
    "./src/**/**/**/*.js",
    "./src/**/**/**/**/*.js",
  ],
  theme: {
    screens: {
      fdc: "320px",
      sdc: "420px",
      tdc: "620px",
      ftdc: "820px",
      fvdc: "920px",
      sxdc: "1080px",
      sedc: "1280px",
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      orange: "#F2994A",
      gray: "#929292",
      authslate: "#161C24",
      authgray: "#D8DAE5",
      pinkred: "#D44453",
      formblue: "#384063",
    },
  },
  plugins: [],
};
