import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'dark': "#1C2936",
        'light-green': "#73DCA5",
        'clear-green': '#91E39B',
        'dust': "#FDEFD7"
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
};
export default config;
