const defaultTheme = require("tailwindcss/defaultTheme");

const config = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "xtreamium": ["Raleway", "sans-serif"],
      },
    },
  },
  plugins: [],
};

module.exports = {
  ...config,
};
