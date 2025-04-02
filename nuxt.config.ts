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
    '/': { ssr: true, static: false } // this avoids the localhost build-time fetch issue
  },

  runtimeConfig: {
    databaseUrl: process.env.DATABASE_URL, // map env var to runtime config key
  },

  modules: [
    '@primevue/nuxt-module'
  ],
  compatibilityDate: '2025-01-18',
});

