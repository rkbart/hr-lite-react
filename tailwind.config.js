/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], 
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")], // ✅ Include DaisyUI as a plugin

  // ✅ Optional: set default DaisyUI theme
  daisyui: {
    themes: ["winter"], // you can add more themes like ["winter", "dark", "cupcake"]
  },
};
