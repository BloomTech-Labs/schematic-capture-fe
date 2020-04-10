describe("User at Dashboard", function() {
  context("Selecting elements from dashboard", function() {
    beforeEach(function() {
      cy.loginScript()
    })

    it('Displays dashboard info correctly', function() {
      cy.url().should('include', '/dashboard')
      cy.contains('All Clients')
      cy.contains('Test Client 1')
      cy.contains('Test Client 2')
      cy.contains('Testing3')
      cy.contains('Company Test')
      cy.contains('New Client')
    })

    it('Set local storage after successful login', function() {
      cy.url().should('include', '/dashboard')
      cy.getLocalStorage('idToken')
        .should('exist')
      cy.getLocalStorage('state')
       .should('exist')
      cy.getLocalStorage('user')
       .should('exist')
    })
  })
})
