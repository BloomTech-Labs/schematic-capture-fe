/// <reference types="Cypress" />

context("Window", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("cy.window() - get the global window object", () => {
    // https://on.cypress.io/window
    cy.window().should("have.property", "top");
  });

  it("cy.window() - get the global window.document object", () => {
    // https://on.cypress.io/window
    cy.window().should("have.property", "document");
  });

  it("cy.window() - get the global window.history object", () => {
    // https://on.cypress.io/window
    cy.window().should("have.property", "history");
  });

  it("cy.window() - get the global window.defaultStatus object", () => {
    // https://on.cypress.io/window
    cy.window().should("have.property", "defaultStatus");
  });

  it("cy.window() - get the global window.location object", () => {
    // https://on.cypress.io/window
    cy.window().should("have.property", "location");
  });

  it("cy.window() - get the global window.frames object", () => {
    // https://on.cypress.io/window
    cy.window().should("have.property", "frames");
  });

  it("cy.window() - get the global window.screen object", () => {
    // https://on.cypress.io/window
    cy.window().should("have.property", "screen");
  });

  it("cy.window() - get the global window.status object", () => {
    // https://on.cypress.io/window
    cy.window().should("have.property", "status");
  });

  it("cy.document() - get the document object", () => {
    // https://on.cypress.io/document
    cy.document()
      .should("have.property", "charset")
      .and("eq", "UTF-8");
  });

  it("cy.title() - get the title", () => {
    // https://on.cypress.io/title
    cy.title().should("include", "Schematic Capture");
  });

});
