describe('Test client page functionality', function() {
  context('Select items from client page', function() {
    // first need to log in, get to dashboard, then navigate to client page
    beforeEach(function() {
      cy.dashboardToClient();
    });

    it('navigates to Test Client 1 and displays correct content', function() {
      // Schematic capture header
      cy.get('.sc-fzqPZZ')
      // search widget
      cy.get('.sc-fzqAbL')
      // user widget
      cy.get('.sc-fzpkJw')
      // client name
      cy.get('.sc-fzqARJ')
      // New Project button
      cy.get('.sc-fzoNJl')
      // Projects title bar
      cy.get('.sc-fzqNqU')
      // Name header
      cy.get('thead > .sc-fznMAR > :nth-child(1)')
      // Description header
      cy.get('thead > .sc-fznMAR > :nth-child(1)')
      // Technician header
      cy.get('thead > .sc-fznMAR > :nth-child(3)')
      // Jobsheet header
      cy.get('thead > .sc-fznMAR > :nth-child(4)')
      // Status header
      cy.get('thead > .sc-fznMAR > :nth-child(5)')
      // First entry in projects table
      cy.get(':nth-child(1) > :nth-child(1) > .sc-fzqBkg')
      // Second entry in projects table
      cy.get(':nth-child(1) > :nth-child(1) > .sc-fzqBkg')
      // Table row
      cy.get('tbody > :nth-child(1) > :nth-child(1)')
      cy.url().should('include', '/client')
    }) 

    it('captures correct location information', function() {
      cy.location().should((location) => {
        expect(location.port).to.eq('3000')
        expect(location.protocol).to.eq('http:')
        expect(location.hostname).to.eq('localhost')
        expect(location.pathname).to.eq('/client/1')
      })
    })
  })
})
