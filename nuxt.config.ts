// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from 'path';
export default defineNuxtConfig({
  alias: {
    '@': resolve(__dirname, '/')
  },
  css: ['~/assets/css/main.scss', '~/assets/css/scss/components/_listing-feed.scss'],
  devtools: { enabled: true },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
