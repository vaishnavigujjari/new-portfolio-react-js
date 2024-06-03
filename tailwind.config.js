/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins"],
      },
      colors: {
        customOrange: "#EA5B31",
        customGreen: "#B9D15F",
        customGray: "#606060",
      },
    },
  },
  plugins: [],
};
