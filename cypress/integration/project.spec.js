
describe('Test project page functionality', function() {
  context('Select items from the project page', function() {
    // first need to log in and navigate to project page
    beforeEach(function() {
      cy.FEclient()
    });

    it('Displays items on the project page correctly', function() {
      cy.url().should('include', '/project')
      cy.contains('Testing 3')
      cy.contains('All Jobsheets')
      cy.contains('testing 3')
      cy.contains('Renamed version')
      cy.contains('New Jobsheet')
    })
    
    it('captures correct location information', function() {
      cy.location().should((location) => {
        expect(location.port).to.eq('3000')
        expect(location.protocol).to.eq('http:')
        expect(location.hostname).to.eq('localhost')
        expect(location.pathname).to.eq('/project/4')
      })
    })
  })
})
