import { defineConfig } from 'cypress'

export default defineConfig({

  e2e: {
    viewportWidth: 1366,
    viewportHeight: 768,
    experimentalStudio: true,
    video: true,
  },


  component: {
    devServer: {
      framework: 'angular',
      bundler: 'webpack',
    },
    specPattern: '**/*.cy.ts'
  }

})
