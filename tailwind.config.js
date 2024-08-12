/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [require("./plugins/openVariant")],
  vairants: {
    extend: {
      display: ["group-open"],
      visibility: ["peer-open"],
    },
  },
};
