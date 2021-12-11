/* global describe, it,cy */
describe('Petgram', function () {
  it('just seeing if my app works', function () {
    cy.visit('/')
  })
  it('navigate to categories and see photos', function () {
    cy.visit('/pet/1')
    cy.get('article')
  })
})
