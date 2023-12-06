import { defineConfig } from 'cypress'

const allureWriter = require('@shelex/cypress-allure-plugin/writer');

export default defineConfig({

  // reporter: 'cypress-mochawesome-reporter',

  env: {
    allure: true
  },

  e2e: {
    viewportWidth: 1366,
    viewportHeight: 768,
    experimentalStudio: true,
    video: true,
    setupNodeEvents(on, config) {
      // require('cypress-mochawesome-reporter/plugin')(on);
      allureWriter(on, config);
      // return config;
    },
  },


  component: {
    devServer: {
      framework: 'angular',
      bundler: 'webpack',
    },
    specPattern: '**/*.cy.ts'
  }

})
