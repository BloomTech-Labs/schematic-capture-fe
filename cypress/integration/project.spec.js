
describe('Test project page functionality', function() {
  context('Select items from the project page', function() {
    // first need to log in and navigate to project page
    beforeEach(function() {
      cy.FEclient()
    });

    it('Displays items on the project page correctly', function() {
      cy.url().should('include', '/project')
      cy.contains('Testing 3')
      cy.contains('testing 3')
      cy.contains('Renamed version')
      cy.contains('New Jobsheet')
    })
  })
})
