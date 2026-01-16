import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#000000",
        foreground: "#ffffff",
        accent: "#eb5e28",
        muted: "#ffffffbf",
      },
      fontFamily: {
        title: ["var(--font-changa-one)", "sans-serif"],
        body: ["var(--font-open-sans)", "sans-serif"],
      },
      fontSize: {
        'page-title-lg': '144px',
        'page-title': '64px',
        'section-title-lg': '56px',
        'section-title': '36px',
      },
    },
  },
  plugins: [],
};
export default config;
