/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        body: "#b6cbce",
        heading: "#eef3db",
        base: "#057786",
        base2: "#022a30",
        brand: "#ffff00",
        brand2: "#46540f",
        highlight: "#f9a53f",
        dark: "#292929",
        sidebarBg: "#595959",
      },
      fontFamily: {
        base: ["Kanit", "sans-serif"],
        heading: ["Bai Jamjuree", "sans-serif"],
      },
    },
  },
  plugins: [],
};
