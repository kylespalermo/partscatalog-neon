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
    databaseUrl: '',
  },
  modules: ['@primevue/nuxt-module'],
  // primevue: {
  //   options: {
  //     unstyled: true
  //   }
  // },
  compatibilityDate: '2025-01-18',
});

