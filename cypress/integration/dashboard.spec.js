describe("User at Dashboard", function() {
  context("Selecting elements from dashboard", function() {
    beforeEach(function() {
      cy.loginScript()
    })

    it('Displays dashboard info correctly', function() {
      cy.url().should('include', '/dashboard')
      cy.contains('Clients')
      cy.contains('Test Client 1')
      cy.contains('Test Client 2')
      cy.contains('Testing3')
      cy.contains('Company Test')
    })

    it('captures correct location information', function() {
      cy.location().should((location) => {
        expect(location.port).to.eq('3000')
        expect(location.protocol).to.eq('http:')
        expect(location.hostname).to.eq('localhost')
      })
    })
  })
})
