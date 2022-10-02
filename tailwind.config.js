const defaultColors = require("tailwindcss/colors");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      backgroundImage: {
        HeaderBg: "url('/src/assets/Logo.png')",
        "footer-texture": "url('/img/footer-texture.png')",
      },
      colors: {
        ...defaultColors,
        buttonColor: "#01A4B7",
        WebsiteGreenColor: "#006B6E",
      },
    },
  },
  plugins: [],
};
