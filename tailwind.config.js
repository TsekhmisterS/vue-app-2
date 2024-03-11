/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "w-primary": "#98cf53",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
