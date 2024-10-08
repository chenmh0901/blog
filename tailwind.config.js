/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  plugins: [require('daisyui'), require('@tailwindcss/typography')],
  daisyui: { themes: ['wireframe', 'dark'] },
};
