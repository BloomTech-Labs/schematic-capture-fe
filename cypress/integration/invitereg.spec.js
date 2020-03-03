describe("Sending an Invite", () => {
  // we can use these values to log in
  const adminEmail = "bob_johnson@lambdaschool.com";
  const userEmail = "bobby_john@lambdaschool.com";
  const password = "testing123!";
  const fullName = "Bobby John";

  context("Registered Invite", () => {
    before(() => {
      // Visit Home Page
      cy.visit("http://localhost:3000/");

      // Signing in as an admin
      cy.get("[data-email-address]")
        .type(adminEmail)
        .should("have.value", adminEmail);

      cy.get("[data-password]")
        .type(password)
        .should("have.value", password);

      cy.get("[data-button-continue]").click();

      // cy.url().should("include", "/dashboard");

      // Navigating to the Invite User Page
      cy.get("[data-invite-user]").click();

      cy.url().should("include", "/invite");
    });

    //Sending an invite as a Technician (Role 3)
    it("Invite successfully sent", () => {
      cy.get("[data-full-name]")
        .type(fullName)
        .should("have.value", fullName);

      cy.get("[data-email-address]")
        .type(userEmail)
        .should("have.value", userEmail);

      cy.get("[data-select-role]")
        .select("3")
        .should("have.value", "3");

      cy.get("[data-button-invite]").click();

      cy.contains("OK").click();

      cy.visit("http://localhost:3000/invite");
    });

    it("Invite Email Required", () => {
      cy.get("[data-full-name]")
        .type(fullName)
        .should("have.value", fullName);

      cy.get("[data-select-role]")
        .select("3")
        .should("have.value", "3");

      cy.get("[data-button-invite]").click();

      cy.get("[data-error-email]")
        .invoke("text")
        .should("eq", "Please enter an email address.");

      cy.get("[data-full-name]").clear();
    });

    it("Invite Name Required", () => {
      cy.get("[data-email-address]")
        .type(userEmail)
        .should("have.value", userEmail);

      cy.get("[data-select-role]")
        .select("2")
        .should("have.value", "2");

      cy.get("[data-button-invite]").click();

      cy.get("[data-error-name]")
        .invoke("text")
        .should("eq", "Please enter a name.");

      cy.get("[data-email-address]").clear();
    });

    it("Roles Generated", () => {
      cy.get("[data-select-role]")
        .invoke("index")
        .should("greaterThan", 0);
    });

    // it("Back to Dashboard", () => {
    //   cy.get("[data-back-dash]").click();
    //   cy.url().should("include", "dashboard");
    // });
  });
});
