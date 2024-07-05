/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],

  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('../src/img/Header-Image.jpeg')",
      },
    },
  },
  plugins: [],
};
