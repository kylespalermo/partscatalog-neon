import Aura from '@primeuix/themes/aura';

export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: true,
  nitro: {
    preset: 'vercel',
  },
  modules: ['@primevue/nuxt-module'],
	primevue: {
		options: {
			theme: {
				preset: Aura,
				options: {
					darkModeSelector: ".p-dark",
				}
			},
			ripple: true
		},
		autoImport: true
	},
  css: [
    '~/assets/global.scss'
  ],
  routeRules: {
    '/': { ssr: true, static: false } // this avoids the localhost build-time fetch issue
  },
  runtimeConfig: {
    databaseUrl: '',
  },
  compatibilityDate: '2025-01-18',
});

