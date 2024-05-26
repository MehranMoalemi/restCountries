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
        white: ' hsl(0, 0%, 100%)',
        'dark-blue-700': 'hsl(209, 23%, 22%)',
        'dark-blue-900': 'hsl(207, 26%, 17%)',
        'dark-gray': 'hsl(0, 0%, 52%)',
        'light-gray':'hsl(0, 0%, 98%)'
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
