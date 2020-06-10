describe("test jobsheet component", function () {
  context("select elements from the jobsheet component", function () {
    // login and navigate to project
    beforeEach(function () {
      cy.clientToProject();
    });

    it("displays elements correctly on the jobsheet page", function () {
      // Schematic capture title
      cy.get("[data-cy=schematic-capture-heading]");
      // Clients breadcrumb
      cy.get('[href="/dashboard"] > div');
      // Projects breadcrumb
      cy.get('[href="/client/1"] > div');
      // Search icon
      cy.get("[data-cy=search]");
      // User info/logout button
      cy.get("[data-cy=greeting]");
      // Button container
      cy.get("[data-cy=button-container]");
      // Completed/Incomplete header
      cy.get("h4");
      // Invite user button
      cy.get("[data-cy=invite-user-btn]");
      // New Jobsheet button
      cy.get('[variant="primary"]');
      // All jobsheets header container
      cy.get("[data-cy=all-jobsheets-header]");
      // Table body, name container
      cy.get(":nth-child(1) > [data-cy=jobsheet-table-name]");
      // Table body, status container
      cy.get(":nth-child(1) > [data-cy=jobsheet-table-status]");
    });

    it("captures correct location information", function () {
      cy.location().should((location) => {
        expect(location.port).to.eq("3000");
        expect(location.protocol).to.eq("http:");
        expect(location.hostname).to.eq("localhost");
        expect(location.pathname).to.eq("/project/1");
      });
    });
  });
});
