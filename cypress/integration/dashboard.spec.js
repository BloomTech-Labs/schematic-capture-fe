describe("User at Dashboard", function() {
  context("Selecting elements from dashboard", function() {
    beforeEach(function() {
      cy.FElogin()
    })

    it('Displays dashboard info correctly', function() {
      cy.url().should('include', '/dashboard')
      cy.contains('All Clients')
      cy.contains('Test Client 1')
      cy.contains('Test Client 2')
      cy.contains('Testing3')
      cy.contains('Company Test')
      cy.url().should('include', '/dashboard')
    })
  })
})
