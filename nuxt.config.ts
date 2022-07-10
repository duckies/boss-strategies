import presetIcons from '@unocss/preset-icons';
import presetWind from '@unocss/preset-wind';
import transformerDirective from '@unocss/transformer-directives';
import { defineNuxtConfig } from 'nuxt';

export default defineNuxtConfig({
  srcDir: 'src',
  css: ['~/assets/styles/main.scss', '~/assets/styles/prose.scss'],
  modules: [
    '@nuxt/content',
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@nuxtjs/color-mode',
  ],
  colorMode: {
    preference: 'dark',
    storageKey: 'theme',
    classPrefix: '',
    classSuffix: '',
  },
  content: {
    navigation: {
      fields: ['navigation'],
    },
  },
  unocss: {
    presets: [presetWind(), presetIcons()],
    transformers: [transformerDirective()],
    theme: {
      fontFamily: {
        sans: '"DM Sans", sans-serif',
        mono: '"DM Mono", mono',
      },
      colors: {
        primary: '#d157f9',
        surface: {
          '50': '#F2F2F2',
          '100': '#DBDBDB',
          '200': '#ABABAB',
          '300': '#787878',
          '400': '#474747',
          '500': '#171717',
          '600': '#121212',
          '700': '#0D0D0D',
          '800': '#0A0A0A',
          '900': '#050505',
        },
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
    },
    link: [
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap',
      },
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
