// const colors = require('tailwindcss/colors')

module.exports = {
  content: ["index.html", "./src/**/*.{js,jsx,ts,tsx,vue,html}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Inter", "sans-serif"], // For general text
        heading: ["Merriweather", "serif"], // For headings or body text
      },
    },
  },
  plugins: [],
};
