/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        teal: {
          primary: '#1a5f7a',
          light: '#2a7f9a',
          dark: '#0f3d50',
        },
        sage: {
          light: '#e8f4f0',
          DEFAULT: '#c5ddd6',
        },
        warm: '#f8f7f5',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
