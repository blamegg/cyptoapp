import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      borderWidth: {
        '10': '10px',  // Custom border width
        '12': '12px',
        '16': '16px',
        '20': '20px',
        '24': '24px',
        '30': '30px',
        '40': '40px',
        '50': '50px',
      },
      translate: {
        '92' : '92%'
      },
      height: {
        '350': '350px',
        '450': '450px',
        '500': '500px',
        '550': '550px',
        '600': '600px',
        '650': '650px',
      },
      width: {
        '350': '350px',
        '450': '450px',
        '500': '500px',
        '550': '550px',
        '600': '600px',
        '650': '650px',
      },
      fontSize: {
        '40': '40px',
        '13': '13px',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        crypOrange: "#FEA301",
        bitBlack: "#222328",
        text: "#353535",
        nLetterbg: "#1F202D",
        customYellow:"#fea301",
        customGray:"rgb(34 35 47)"
      },
      fontFamily: {
        varela: ['Varela', 'sans-serif'],
        ubuntu: ['Ubuntu', 'sans-serif'],
        opensans: ['Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
