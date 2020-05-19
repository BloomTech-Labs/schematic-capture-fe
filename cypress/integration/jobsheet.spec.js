describe("test jobsheet component", function () {
  context("select elements from the jobsheet component", function () {
    // login and navigate to project
    beforeEach(function () {
      cy.projectToJobsheet();
    });

    it("displays elements correctly on the jobsheet page", function () {
      // Schematic capture title
      cy.get(".sc-fzqPZZ");
      // Clients breadcrumb
      cy.get('[href="/dashboard"] > div');
      // Projects breadcrumb
      cy.get('[href="/client/1"] > div');
      // Search icon
      cy.get(".sc-fzqAbL");
      // User info/logout button
      cy.get(".sc-fzpkJw");
      // Button container
      cy.get(".sc-fzoiQi");
      // Completed/Incomplete header
      cy.get("h4");
      // Right button container
      cy.get(".sc-fzqOul");
      // Assign techs button
      // cy.get('.sc-fznNTe > .sc-fzqOul')
      // New Jobsheet button
      cy.get('[variant="primary"]');
      // All jobsheets header container
      cy.get(".sc-fzoxnE");
      // Table body, name container
      cy.get("tbody > :nth-child(1) > :nth-child(1)");
      // Table body, assignment button container
      cy.get("tbody > :nth-child(1) > :nth-child(4)");
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
