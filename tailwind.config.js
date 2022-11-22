const theme = require("tailwindcss/defaultTheme")

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['"Montserrat"', ...theme.fontFamily.sans],
        sans: ['"Open Sans"', ...theme.fontFamily.sans],
      },
      colors: {
        "theme": "#0ea5e9",
        "theme-pale-gray": "#1d2124",
        "theme-extra-pale-gray": "#353d42",
      },
    },
  },
  plugins: [],
}