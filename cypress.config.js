const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'xn41gq',
  blockHosts: [
    '*mc.yandex.ru',
    '*.google-analytics.com'
  ],
  e2e: {
    baseUrl: 'https://oz.by',
  },
})