describe("Test project page functionality", function () {
  context("Select items from the project page", function () {
    // first need to log in and navigate to project page
    beforeEach(function () {
      cy.clientToProject();
    });

    it("Displays items on the project page correctly", function () {
      cy.url().should("include", "/project");
      // Top container
      cy.get("[data-cy=top-container]");
      // Overall completed status indicator
      cy.get("h4");
      // Button container
      cy.get("[data-cy=button-container]");
      // New jobsheet button
      cy.get('[variant="primary"]');
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
