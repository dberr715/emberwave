import type { Config } from "tailwindcss";

const config: Config = {
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
        body: "#b6cbce",
        heading: "#eef3db",
        base: "#057786",
        base2: "#022a30",
        brand: "#ffff00",
        brand2: "#46540f",
        sidebarBg: "#595959",
      },
      fontFamily: {
        base: ["Kanit", "sans-serif"],
        heading: ["Bai Jamjuree", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")], // Added daisyUI plugin
  daisyui: {
    themes: [
      {
        emberwave: {
          primary: "#f9a53f",
          "primary-focus": "#c77826",
          "primary-content": "#ffffff",
          secondary: "#292929",
          "secondary-focus": "#1e1e1e",
          "secondary-content": "#ffffff",
          accent: "#057786",
          "accent-focus": "#045f6a",
          "accent-content": "#ffffff",
          neutral: "#595959",
          "neutral-focus": "#404040",
          "neutral-content": "#ffffff",
          "base-100": "#292929",
          "base-content": "#ffffff",
        },
      },
    ],
    darkTheme: "emberwave", // Sets "emberwave" as the default dark theme
  },
};

export default config;
