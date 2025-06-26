import Aura from '@primeuix/themes/aura'

export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: true,
  nitro: {
    preset: 'vercel',
  },
  modules: ['@primevue/nuxt-module'],
  primevue: {
    options: {
      theme: { preset: Aura },       // use a styled mode preset
      ripple: true,                  // optional UI effect
    }
  },
  css: [
    'primeicons/primeicons.css',
    '~/assets/global.scss'
  ],
  routeRules: {
    '/': { ssr: true, static: false } // this avoids the localhost build-time fetch issue
  },
  runtimeConfig: {
    databaseUrl: process.env.DATABASE_URL, // map env var to runtime config key
  },
  compatibilityDate: '2025-01-18',
});

