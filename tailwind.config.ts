import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
        'darker-grotesque': ['Darker Grotesque', 'sans-serif'],
        'codystar': ['Codystar', 'cursive'],
        'gloria': ['Gloria Hallelujah', 'cursive'],
      },
      colors: {
        'magenta': '#ff31d2',
        'magenta-light': '#ffc9d6',
      },
    },
  },
  plugins: [],
};

export default config;
