import { defineConfig } from 'cypress'

export default defineConfig({

  reporter: 'cypress-mochawesome-reporter',

  e2e: {
    viewportWidth: 1366,
    viewportHeight: 768,
    experimentalStudio: true,
    video: true,
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
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
