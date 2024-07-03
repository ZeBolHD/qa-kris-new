import type { Config } from "tailwindcss";
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        "2xl": "1440px",
      },
      container: {
        center: true,
        screens: {
          "2xl": "1075px",
        },
      },
      colors: {
        "primary-pink": "#E50F8D",
        "primary-blue": "#267FF5",
        "primary-blue-dark": "#100D38",
        "primary-bg": "#FBFBFB",
      },
      borderRadius: {
        sm: "6px",
        md: "12px",
        lg: "16px",
        xl: "25px",
      },
      keyframes: {
        "rise-up": {
          "0%": { transform: "translateY(15px); opacity: 0" },
          "100%": { transform: "translateY(0); opacity: 1" },
        },
      },
      animation: {
        "rise-up": "rise-up 0.2s ease-in-out",
      },
    },
  },
  plugins: [],
};

export default config;
