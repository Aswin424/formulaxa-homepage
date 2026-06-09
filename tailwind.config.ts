import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        carbon: {
          950: "#050505",
          900: "#0A0A0A",
          850: "#111111",
        },
        electric: "#22D3EE",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 80px rgba(124, 58, 237, 0.24)",
        cyan: "0 0 70px rgba(34, 211, 238, 0.16)",
      },
      backgroundImage: {
        "primary-gradient": "linear-gradient(135deg, #0EA5E9, #22D3EE, #FFFFFF)",
      },
    },
  },
  plugins: [],
};

export default config;
