describe("Test client page functionality", function () {
  context("Select items from client page", function () {
    // first need to log in, get to dashboard, then navigate to client page
    beforeEach(function () {
      cy.dashboardToClient();
    });

    it("navigates to Test Client 1 and displays correct content", function () {
      // Schematic capture header
      cy.get("[data-cy=schematic-capture-heading]");
      // search widget
      cy.get("[data-cy=search]");
      // user widget
      cy.get("[data-cy=greeting]");
      // client name
      cy.get("[data-cy=client-name]");
      // Assign techs button
      cy.get("[data-cy=assign-techs]");
      // New Project button
      cy.get("[data-cy=new-project]");
      // Projects title bar
      cy.get("[data-cy=projects-title-bar]");
      // Name header
      cy.get("[data-cy=name-header]");
      // Description header
      cy.get("[data-cy=description-header]");
      // Technician header
      cy.get("[data-cy=technician-header]");
      // Jobsheet header
      cy.get("[data-cy=jobsheet-header]");
      // Status header
      cy.get("[data-cy=status-header]");
      // First entry in projects table
      cy.get("[data-cy=projects-1]");
      // Second entry in projects table
      cy.get("[data-cy=projects-2]");
      cy.url().should("include", "/client");
    });

    it("captures correct location information", function () {
      cy.location().should((location) => {
        expect(location.port).to.eq("3000");
        expect(location.protocol).to.eq("http:");
        expect(location.hostname).to.eq("localhost");
        expect(location.pathname).to.eq("/client/1");
      });
    });
  });
});
