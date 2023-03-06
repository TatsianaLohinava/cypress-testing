const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'k8z923',
  blockHosts: [
    '*.yandex.ru',
    '*.google-analytics.com'
  ],
  e2e: {
    baseUrl: 'https://oz.by',
  },
})