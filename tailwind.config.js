/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}",
  "./node_modules/flowbite/**/*.js"],
  theme: {
    fontFamily: {
      sans: ["Montserrat", "sans-serif"],
    },
    plugins: [
      require('flowbite/plugin')
    ],
    extend: {
      colors: {
        salmao: "#e63946",
        brancoverdeado: "#f1faee",
        littleblue: "#a8dadc",
        azulmarinho: "#457b9d",
        azulcobalto: "#1d3557",
        quasebranco: "#f5f5f7",
        cinzinha: "#eeeeee",
        cinza: "#838383",
      },
      backgroundImage: {},
    },
  },
  plugins: [],
};
