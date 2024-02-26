import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        'hero-pattern': "url('https://admcasa.com.br/wp-content/uploads/2021/11/condominio-de-casas-1-1.jpg')",
      },
      height: {
        '180': '45rem',
        '160': '40rem',
        '144': '36rem',
        '140': '35rem',
        '116': '29rem',
      },
      width: {
        '180': '70rem',
        '152': '38rem',
        '304': '76rem'
      }
    },
  },
  plugins: [],
};
export default config;
