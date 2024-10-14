import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
 screens: {
        'cxxs': '300px',   
        'cxs': '375px', 
        'csm': '423px', 
        'ms' : '769px',
        'clg': '1135px', 
        'clmd': '1095px',

      },
      margin: {
        '17': '68px',
        '18': '72px',
        '19': '76px', 
      },
      keyframes: {
        parallax: {
          '0%': { backgroundPosition: 'center 50%' },
          '100%': { backgroundPosition: 'center 100%' },
        },
      },
      animation: {
        parallax: 'parallax 1s linear infinite',
      },
      borderWidth: {
        '10': '10px',  
        '12': '12px',
        '16': '16px',
        '20': '20px',
        '24': '24px',
        '30': '30px',
        '40': '40px',
        '50': '50px',
      },
      translate: {
        '92' : '92%',
        '40': '40%',
        '45': '45%',
        '47': '47%',
        '48' : '48%',
      },
      height: {
        '350': '350px',
        '450': '450px',
        '500': '500px',
        '550': '550px',
        '600': '600px',
        '650': '650px',
        '200': '200px',
        '250': '250px',
        '300': '300px',
      },
      width: {
        '350': '350px',
        '400': '400px',
        '450': '450px',
        '500': '500px',
        '550': '550px',
        '600': '600px',
        '650': '650px',
        '200': '200px',
        '250': '250px',
        '300': '300px',
      },
      fontSize: {
        '8': '8px',
        '9': '9px',
        '10': '10px',
        '11': '11px',
        '12': '12px',
        '13': '13px',
        '14': '14px',
        '15': '15px',
        '16': '16px',
        '17': '17px',
        '18': '18px',
        '19': '19px',
        '20': '20px',
        '21': '21px',
        '22': '22px',
        '23': '23px',
        '24': '24px',
        '25': '25px',
        '26': '26px',
        '27': '27px',
        '28': '28px',
        '29': '29px',
        '30': '30px',
        '31': '31px',
        '32': '32px',
        '33': '33px',
        '34': '34px',
        '35': '35px',
        '36': '36px',
        '37': '37px',
        '38': '38px',
        '39': '39px',
        '40': '40px',
        '41': '41px',
        '42': '42px',
        '43': '43px',
        '44': '44px',
        '45': '45px',
        '46': '46px',
        '47': '47px',
        '48': '48px',
        '49': '49px',
        '50': '50px',
      },
      
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        crypOrange: "#FEA301",
        bitBlack: "#222328",
        text: "#353535",
        textG:"#757575",
        nLetterbg: "#1F202D",
        customYellow:"#fea301",
        Choosebg: "#FAFAFA",
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
