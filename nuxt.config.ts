import Aura from "@primeuix/themes/aura";

export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: true,
  nitro: {
    preset: "vercel",
  },
  modules: ["@primevue/nuxt-module"],
  plugins: ["~/plugins/fontawesome.client.ts"],
  primevue: {
    options: {
      theme: {
        preset: Aura,
        options: {
          darkModeSelector: ".p-dark",
        },
      },
      ripple: true,
    },
    autoImport: true,
  },
  css: [
    /* '~/assets/global.scss',*/
    "@/assets/css/tailwind.css",
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  routeRules: {
    "/": { ssr: true, static: false }, // this avoids the localhost build-time fetch issue
  },
  runtimeConfig: {
    dbHost: "localhost",
    dbPort: 5432,
    dbName: "products_db",
    dbUser: "zach",
    dbPassword: "admin",
    databaseUrl: process.env.NUXT_DATABASE_URL,
    public: {
      web3FormsBaseUrl: "https://api.web3forms.com/submit",
      web3FormsPublicApiKey: process.env.WEB3_FORMS_PUBLIC_API_KEY,
    },
  },
  compatibilityDate: "2025-01-18",
  app: {
    head: {
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
        },
      ],
    },
  },
});
