import type { Config } from "tailwindcss";
// import flowbite from "flowbite";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "node_modules/flowbite-react/**/*.{js,ts,jsx,tsx}", // Add Flowbite content here
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        example: {
          "0%": { backgroundColor: "red" },
          "100%": { backgroundColor: "yellow" },
        },
        colorChange: {
          "0%": { color: "red" },
          "100%": { color: "yellow" },
        },
        marquee: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        colorChange: "colorChange 4s infinite",
      },
      paths: {
        "@/*": ["./src/*"],
      },
    },
  },
  plugins: [],
};

export default config;
