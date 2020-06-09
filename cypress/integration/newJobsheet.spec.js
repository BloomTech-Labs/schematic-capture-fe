describe("Testing new jobsheet component", function () {
  context(
    "Login, navigate to new jobsheet form, check for elements",
    function () {
      beforeEach(function () {
        cy.projectsToNewJobsheet();
      });

      it("displays the header component correctly", function () {
        // Schematic Capture page title
        cy.get("[data-cy=schematic-capture-heading]");
        // breadcrumb container
        cy.get("[data-cy=breadcrumb]");
        // home breadcrumb
        cy.get('[href="/dashboard"] > div');
        // clients breadcrumb
        cy.get('[href="/client/1"] > div');
        // projects breadcrumb
        cy.get('[href="/project/1"] > div');
        // user container
        cy.get("[data-cy=greeting]");
        // user profile
        cy.get("[data-cy=user-profile]");
      });

      it("displays the new jobsheet component correctly", function () {
        // Schematic Capture title
        cy.get(":nth-child(2) > :nth-child(1) > h1");
        // import label
        cy.get(":nth-child(1) > :nth-child(1) > label > p");
        // create button
        cy.get(":nth-child(1) > :nth-child(1) > button");
        // please message
        cy.get("table > div > h1");
      });
    }
  );
});
