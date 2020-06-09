describe("User at Dashboard", function () {
  context("Selecting elements from dashboard", function () {
    beforeEach(function () {
      cy.loginScript();
    });

    it("Displays dashboard info correctly", function () {
      cy.url().should("include", "/dashboard");
      // Clients header
      cy.get("[data-cy=clients-header]");
      // First client name
      cy.get("[data-cy=client-name-1]");
      // Second client name
      cy.get("[data-cy=client-name-2]");
      // First client completed status
      cy.get("[data-cy=client-complete-1]");
      // Second client completed status
      cy.get("[data-cy=client-complete-2]");
    });

    it("captures correct location information", function () {
      cy.location().should((location) => {
        expect(location.port).to.eq("3000");
        expect(location.protocol).to.eq("http:");
        expect(location.hostname).to.eq("localhost");
        expect(location.pathname).to.eq("/dashboard");
      });
    });
  });
});
