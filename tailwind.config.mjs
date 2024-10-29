/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        'open-sans': ['Open Sans', 'sans-serif'],
      },
      colors: {
        primary: '#051E38',
        secondary: '#0B242F',
        tertiary: '#547780',
        accent: '#A1BEC0',
        neutral: '#F1F4F5',
      },
    },
  },
  plugins: [],
}
