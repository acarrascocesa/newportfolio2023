/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#26A0DA",
        headingColor: "#081e21",
        smallTextColor: "#2B5876",
      },
    },
  },
  plugins: [require('tailwindcss-animated')],
};
