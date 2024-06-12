/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
};

///
module.exports = {
  mode: "jit",
  purge: ["./src/**/*.html", "./src/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        sarabun: ["Sarabun", "sans-serif"],
      },
    },
  },
  variants: {},
  plugins: [],
};
