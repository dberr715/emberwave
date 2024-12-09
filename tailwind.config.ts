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
        "highlight-light": "#fcd5a5",
        fire: "#ef5531", // darker fire orange
        dark: "#292929", // Dark background
        body: "#b6cbce", // General body color
        heading: "#eef3db", // Heading text color
        base: "#057786", // Base accent color
        base2: "#022a30", // Secondary base accent
        brand: "#ffff00", // Bright brand color
        brand2: "#46540f", // Muted brand color
        sidebarBg: "#595959", // Sidebar background
      },
      fontFamily: {
        base: ["Kanit", "sans-serif"], // Base font
        heading: ["Bai Jamjuree", "sans-serif"], // Heading font
      },
      boxShadow: {
        orangeGlow: "0 15px 50px rgba(249, 165, 63, 0.9)", // Custom glowing orange shadow
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        emberwave: {
          primary: "#f9a53f", // Primary orange
          "primary-focus": "#c77826", // Darker orange
          "primary-content": "#ffffff", // Text on primary background
          secondary: "#292929", // Dark background
          "secondary-focus": "#1e1e1e", // Darker secondary
          "secondary-content": "#ffffff", // Text on secondary background
          accent: "#057786", // Blue-green accent
          "accent-focus": "#045f6a", // Darker accent
          "accent-content": "#ffffff", // Text on accent
          neutral: "#595959", // Neutral gray
          "neutral-focus": "#404040", // Darker neutral
          "neutral-content": "#ffffff", // Text on neutral
          "base-100": "#292929", // Base background
          "base-content": "#ffffff", // Text on base background
        },
      },
    ],
    darkTheme: "emberwave", // Default dark theme
  },
};

export default config;
