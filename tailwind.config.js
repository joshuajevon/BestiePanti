// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./src/main/resources/templates/**/*.html"
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/main/resources/templates/**/*.html"],

  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", ...defaultTheme.fontFamily.sans],
      },

      colors: {
        cBlack: "#000000",
        cGold: "#C5AF66",
        cWhite: "#FFFFFF",
        cLightGrey: "#EFEFEF",
        cDarkGrey: "#D9D9D9",
        cDarkerGrey: "#292929",
      },
    },
  },

  plugins: [forms],
};
