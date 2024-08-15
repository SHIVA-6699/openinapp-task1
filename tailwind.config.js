/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{html,js,jsx,ts,tsx}"];
export const darkMode = ["class"];
export const theme = {
  borderWidth: {
    DEFAULT: "1px",
    0: "0",
    2: "2px",
    3: "3px",
    4: "4px",
    6: "6px",
    8: "2rem",
  },
  extend: {
    fontFamily: {
      montserrat: ["Montserrat", "sans-serif"],
      lato: ["Lato", "sans-serif"],
      figtree: ["Figtree", "sans-serif"],
    },
  },
};
export const plugins = [];
