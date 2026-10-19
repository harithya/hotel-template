// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: [
    '@photo-sphere-viewer/core/index.css',
    '@photo-sphere-viewer/virtual-tour-plugin/index.css',
  ],
})
