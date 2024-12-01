import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        doto: ["Doto", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg, var(--tw-gradient-stops))",
      },

      colors: {
        background: "#000000",
        duckBlue: "#31c1fd",
        duckPurple: "#cc66d6",
        duckBlue2: "#d3eef9",
        duckYellow: "#fbc450",
      },
      animation: {
        "loop-scroll": "loop-scroll 200s linear infinite",
      },
      keyframes: {
        "loop-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },

      },
    },
  },
  plugins: [],
};

export default config;
