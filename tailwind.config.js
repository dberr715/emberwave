module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        highlight: "#f9a53f", // Orange
        "highlight-dark": "#c77826", // Darker orange
        "highlight-light": "#fcd5a5", // Light orange
        dark: "#292929", // Dark background
      },
    },
  },
  plugins: [],
};
