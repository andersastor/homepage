// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Homepage'
    }
  },
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  runtimeConfig: {
    public: {
      openweatherApiSecret: '',
      cityID: ''
    }
  }
})
