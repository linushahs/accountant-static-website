import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        "2xl": "1620px"
      },
      colors: {
        background: "var(--background)",
        primary: "var(--primary)",
        lightWhite: "var(--light-white)",
        white: "var(--white)",
        black: "var(--black)",
        lightBlack: "var(--light-black)",
        accentBlack: "var(--accent-black)",
        textGray: "var(--text-gray)"
      }
    },
  },
  plugins: [],
  corePlugins: {
    container: false
  }
};
export default config;
