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
        primary: {
          50: '#fef3e7',
          100: '#fde2c3',
          200: '#fbcd9b',
          300: '#f9b673',
          400: '#f7a355',
          500: '#f59037',
          600: '#e07928',
          700: '#c4611a',
          800: '#a84f0f',
          900: '#8c3d05',
        },
        secondary: {
          50: '#f0f5f3',
          100: '#d9e6e0',
          200: '#b5d0c4',
          300: '#8ebaa6',
          400: '#6da590',
          500: '#4c907a',
          600: '#3d7a67',
          700: '#2e6454',
          800: '#204e41',
          900: '#12382e',
        },
        wood: {
          50: '#faf7f2',
          100: '#f2ebe0',
          200: '#e6d9c7',
          300: '#d4c0a4',
          400: '#c2a781',
          500: '#b08e5e',
          600: '#9a7547',
          700: '#7d5d36',
          800: '#604527',
          900: '#432e19',
        },
        stone: {
          50: '#f8f8f7',
          100: '#edecea',
          200: '#dcd9d5',
          300: '#c7c2bb',
          400: '#b2aaa1',
          500: '#9d9287',
          600: '#84796e',
          700: '#6a6155',
          800: '#51493e',
          900: '#383127',
        },
        accent: {
          DEFAULT: '#d4a574',
          hover: '#c29460',
        },
      },
      fontFamily: {
        sans: ['Heebo', 'system-ui', 'sans-serif'],
        display: ['Alef', 'Heebo', 'system-ui', 'sans-serif'],
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      boxShadow: {
        'warm': '0 10px 40px rgba(180, 142, 94, 0.1)',
        'warm-lg': '0 20px 60px rgba(180, 142, 94, 0.15)',
      },
    },
  },
  plugins: [],
};

export default config;
