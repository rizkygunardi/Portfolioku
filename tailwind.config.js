/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#489fb5",
        secondary: "#16697a",
        third: "#64748b",
        dark: "#0f172a",
        js: "#F7DF1E",
        git: "#181717",
        postman: "#FF6C37",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
