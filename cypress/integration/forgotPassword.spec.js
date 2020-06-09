describe("Navigating to and testing Forgot Password form", function () {
  context("Navigating to Forgot Password", function () {
    this.beforeEach(function () {
      cy.visit("/");
      cy.contains("Forgot password?").click();
    });

    it("displays forgot password component correctly", function () {
      // Schematic Capture title
      cy.get("[data-cy=schematic-capture-title]");
      // Reset Password container
      cy.get("[data-cy=forgot-password-container]");
      // Reset Password h2
      cy.get("h2");
      // Reset Password paragraph content
      cy.get("p");
      // Email input form
      cy.get("#email");
      // Send reset link button
      cy.get("[data-cy=send-reset-link]");
      // Back to login link
      cy.get("[data-cy=back-to-login-link]");
      // Back to login arrow
      cy.get("svg");
    });
  });
});
