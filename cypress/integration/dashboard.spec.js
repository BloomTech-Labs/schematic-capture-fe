describe("User at Dashboard", function() {
  context("Selecting elements from dashboard", function() {
    beforeEach(function() {
      cy.visit("/")
    })

    it('Displays dashboard info correctly', function() {
       // must login first
      cy.get("input[name=email]").type('bob_johnson@lambdaschool.com');
      cy.get("input[name=password]").type('testing123!');
      cy.get("form").submit();

      cy.url().should('include', '/dashboard')

      cy.contains('All Clients')
      cy.contains('Test Client 1')
      cy.contains('Test Client 2')
      cy.contains('Testing3')
      cy.contains('Company Test')

      cy.contains('Test Client 1').click()
    })
  })
})
