/** @type {import('tailwindcss').Config} */
import type { Config } from 'tailwindcss';

import tailwindcssAnimate from 'tailwindcss-animate';

const config: Config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: '10rem',
        sm: '10rem',
        lg: '10rem',
        xl: '10rem',
        '2xl': '10rem',
      },
    },
    extend: {
      keyframes: {
        shine: {
          '0%': { 'background-position': '100%' },
          '100%': { 'background-position': '-100%' },
        },
      },
      animation: {
        shine: 'shine 5s linear infinite',
      },
    },
  },
  plugins: [tailwindcssAnimate],
}
export default config;
