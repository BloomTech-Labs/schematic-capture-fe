describe("Test components are rendering", () => {
  context("select elements from the components component", () => {
    beforeEach(() => cy.projectToJobsheet());

    it("displays components correctly", () => {
      // Schematic capture header
      cy.get("[data-cy=schematic-capture-heading]");
      // search widget
      cy.get("[data-cy=search]");
      // user widget
      cy.get("[data-cy=greeting]");
      // find first component
      cy.get("[data-cy=component-1]");
      // get description
      cy.get('[data-cy=component-1] > [data-label="Description"]');
      // get image
      cy.get('[data-cy=component-1] > [data-label="Select Image"]');
      // open update modal
      cy.get("[data-cy=update-component-btn]").first().click();
      // get edit component header
      cy.get("[data-cy=edit-component-header]");
      // find description label
      cy.get(":nth-child(1) > label");
      // find description input
      cy.get("#descriptions");
      // find change image btn
      cy.get("[data-cy=dropbox-change-image]");
      // find update component btn
      cy.get("form > button");
    });

    it("captures correct location information", function () {
      cy.location().should((location) => {
        expect(location.port).to.eq("3000");
        expect(location.protocol).to.eq("http:");
        expect(location.hostname).to.eq("localhost");
        expect(location.pathname).to.eq("/jobsheet/1");
      });
    });
  });
});
