/** @type {import('tailwindcss').Config} */

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layout/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        bYekan: ['var(--font-Yekan)'],
        parskala: ['var(--font-parskala)'],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'dynamic-color-from':'#ff3a30',
        'dynamic-color-to':'#ff6a00'
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '.5rem',
        sm: '.5rem',
        lg: '.5rem',
        xl: '.5rem',
        '2xl': '2rem',
      },
      screens: {
        sm: '1200px',
        md: '1350px',
        lg: '1400px',
        xl: '1600px',
        '2xl': '1300px',
      }
    },
  },
  plugins: [],
};
export default config;
