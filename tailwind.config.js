/** @type {import('tailwindcss').Config} */
// tailwind.config.js
const { nextui } = require("@nextui-org/react");

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    // Add other paths if needed
  ],
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            primary: "#0072f5",
          },
        },
        dark: {
          colors: {
            primary: "#0072f5",
          },
        },
      },
    }),
  ],
};
