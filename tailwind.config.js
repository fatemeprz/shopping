/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#fe5d42",
        hover: "#f7806c",
      },
      gridTemplateColumns: {
        "auto-fill-240": "repeat(auto-fill, minmax(240px, 1fr))",
        "auto-fit-240": "repeat(auto-fit, minmax(240px, 1fr))",
      },
      gridTemplateRows: {
        "auto-fill-385": "repeat(auto-fill, minmax(385px, 1fr))",
        "auto-fit-385": "repeat(auto-fit, minmax(385px, 1fr))",
      },
    },
  },
  plugins: [],
};
