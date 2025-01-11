import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/public/**/*.{js,ts,jsx,tsx,mdx}",
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
        duckRed: "#f25f5c",
        duckGreen: "#00b159",
        duckGold: "#aaa201",
        duckGray: "#f0f0f0",
        duckBlack: "#000000",
        duckWhite: "#ffffff",
        duckWhite2: "#f5f5f5",
        duckWhite3: "#f9f9f9",
        duckWhite4: "#f4f4f4",
        duckWhite5: "#f8f8f8",
      
      },
      animation: {
        "loop-scroll": "loop-scroll 200s linear infinite",
      },
      keyframes: {
        "loop-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-32%)" },
        },

      },
    },
  },
  plugins: [],
};

export default config;
