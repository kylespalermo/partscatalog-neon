import Aura from '@primevue/themes/aura';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: true,
  nitro: {
    preset: 'vercel',
  },
  css: ['~/assets/global.scss'],
  routeRules: {
    // prerender index route by default
    '/': { prerender: true },
  },

  runtimeConfig: {
    databaseUrl: '',
  },

  modules: [
    '@primevue/nuxt-module'
  ],
  compatibilityDate: '2025-01-18',
});

