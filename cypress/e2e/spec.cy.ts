describe('My First Test', () => {
  it('Visits the initial project page', () => {
    cy.visit('https://www.cypress.io/');
    cy.contains('With Cypress,');
  })
})
