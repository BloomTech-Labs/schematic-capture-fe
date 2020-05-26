describe('Test client page functionality', function() {
  context('Select items from client page', function() {
    // first need to log in, get to dashboard, then navigate to client page
    beforeEach(function() {
      cy.dashboardToClient();
    });

    it('navigates to Test Client 1 and displays correct content', function() {
      // Schematic capture header
      cy.get("h1").should("contain", "Schematic Capture");
      // search widget
      cy.get("img").should("contain", "Schematic Capture");
      // user widget
      cy.get("button").should("contain", "Bob");
      // client name
      cy.get("a").should("contain", "Evraz");
      // New Project button
      cy.get("a").should("contain", "New Project");
      // Projects title bar
      cy.get("h2").should("contain", "Projects");
      // Name header
      cy.get("th").should("contain", "Name");
      // Description header
      cy.get("th").should("contain", "Description");
      // Technician header
      cy.get("th").should("contain", "Technician/s");
      // Jobsheet header
      cy.get("th").should("contain", "Jobsheets");
      // Status header
      cy.get("th").should("contain", "Status");
      // First entry in projects table
      cy.get("a").should("contain", "Test Project 1");
      // Second entry in projects table
      cy.get("th").should("contain", "Test Project 2");
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
