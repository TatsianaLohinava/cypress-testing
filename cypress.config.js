const { defineConfig } = require("cypress");

module.exports = defineConfig({
  blockHosts: [
    '*.yandex.ru',
    '*.google-analytics.com'
  ],
  e2e: {
    baseUrl: 'https://oz.by',
  },
})