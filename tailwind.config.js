/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      Inter: ['"Inter"', "sans-serif"],
    },
    extend: {
      colors: {
        primaryColor: "#FFC265",
        secondaryColor: "#1DA599",

        // ...
      },
    },
  },
  plugins: [],
};
