import { defineNuxtConfig } from 'nuxt';

export default defineNuxtConfig({
  srcDir: 'src',
  css: ['@unocss/reset/tailwind.css', '~/assets/styles/main.scss'],
  modules: [
    '@nuxt/content',
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@nuxtjs/color-mode',
  ],
  content: {
    navigation: {
      fields: ['navTitle'],
    },
  },
  unocss: {
    typography: true,
    theme: {
      fontFamily: {
        sans: '"DM Sans", sans-serif',
      },
    },
  },
  meta: {
    script: [
      {
        src: 'https://wow.zamimg.com/widgets/power.js',
      },
    ],
    htmlAttrs: {
      lang: 'en',
      style: 'background-color: var(--html-bg)',
    },
    link: [
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=DM+Mono:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&family=DM+Serif+Display:ital@0;1&display=swap',
      },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
    ],
  },
  experimental: {
    reactivityTransform: true,
  },
});
