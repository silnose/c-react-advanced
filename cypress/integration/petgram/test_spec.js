/* global describe, it, cy Cypress*/
describe('Petgram', function () {
  it('Home Page', function () {
    cy.visit('/')
  })

  it('Navigate to a specific category', function () {
    cy.visit('/pet/2')
    cy.get('article')
  })
})

it('Navigate with navbar', function () {
  cy.visit('/pet/2')
  cy.get('nav a').first().click()
  cy.url().should('eq', Cypress.config().baseUrl)
})

it('Navigate to Favorites as Anonymos user ', function () {
  cy.visit('/favorites')
  cy.url().should('eq', `${Cypress.config().baseUrl}login`)
})

it('Navigate to Account as Anonymos user ', function () {
  cy.visit('/account')
  cy.url().should('eq', `${Cypress.config().baseUrl}login`)
})
