describe("User at Dashboard", function() {
  context("Selecting elements from dashboard", function() {
    beforeEach(function() {
      cy.loginScript()
    })

    it('Displays dashboard info correctly', function() {
      cy.url().should('include', '/dashboard')
      cy.get(':nth-child(1) > .sc-fzomME')
      cy.get(':nth-child(2) > .sc-fzomME')
      cy.get(':nth-child(1) > .sc-fzoJMP')
      cy.get(':nth-child(2) > .sc-fzoJMP')
    })

    it('captures correct location information', function() {
      cy.location().should((location) => {
        expect(location.port).to.eq('3000')
        expect(location.protocol).to.eq('http:')
        expect(location.hostname).to.eq('localhost')
        expect(location.pathname).to.eq('/dashboard')
      })
    })
  })
})
