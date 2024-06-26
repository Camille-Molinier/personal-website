/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  // daisyUI config
  daisyui: {
    styled: true,
    themes: ["forest"],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
  },
}

