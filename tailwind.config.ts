import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    // If you use the src/ directory:
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    
    // If you DO NOT use the src/ directory (files are in the root):
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        black: {
          DEFAULT: "#02040d",
          100: "#000319",
          200: "rgba(17, 25, 40, 0.75)",
          300: "rgba(255, 255, 255, 0.125)",
        },
        white: {
          DEFAULT: "#FFF",
          100: "#BEC1DD",
          200: "#C1C2D3",
        },
        blue: {
          "100": "#041A53",
        },
        purple: "#CBACF9",
      },
      fontFamily: {
        inter: ['var(--font-inter)'],
    },
  }
    
  },
  plugins: [],
};
export default config;