/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      // Paleta eco-lujo de la marca (antes solo vivía en BaseLayout)
      colors: {
        cream: { DEFAULT: '#f5f2e8', warm: '#ede8d6' },
        ink: { DEFAULT: '#1a1f1a', soft: '#4a5048', muted: '#5a6157' },
        forest: { DEFAULT: '#1f4029', deep: '#142a1c', bright: '#2d6240' },
        // gold-deep: dorado para TEXTO sobre fondos crema (contraste AA); gold solo para fondos y adornos
        gold: { DEFAULT: '#b8954a', light: '#d4b574', pale: '#f0e4c2', deep: '#7a5c24' },
      },
      fontFamily: {
        display: ['Fraunces', 'Cormorant Garamond', 'Georgia', 'serif'],
        body: ['Manrope', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 1px 2px rgba(20,25,20,0.04), 0 8px 24px rgba(20,25,20,0.06)',
        elevated: '0 4px 12px rgba(20,25,20,0.08), 0 24px 60px rgba(20,25,20,0.12)',
      },
    },
  },
  plugins: [],
}
