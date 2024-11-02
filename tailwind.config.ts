/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */

const config = {
  content: [
    // "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    // "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    // "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
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
        // 'dynamic-color-from':'#ff3a30',
        // 'dynamic-color-to':'#ff6a00',
        'dynamic-color-from':'#4859f9',
        'dynamic-color-to':'#4859f9',
        'dynamic-color-from-rgba':'#4859f910',
        'dynamic-color-to-rgba':'#4859f901'
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1.3em',
        sm: '2.5rem',
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
};
export default config;
