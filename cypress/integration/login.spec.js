describe("Logging In", function() {
  // we can use these values to log in
  const username = "bob_johnson@lambdaschool.com";
  const password = "testing123!";

  context("HTML form submission", function() {
    beforeEach(function() {
      cy.visit("/");
    });

    it("displays errors on login", function() {
      // incorrect name and password on purpose
      cy.get("input[name=email]").type("bob_johnson@lambaschool.com");
      cy.get("input[name=password]").type("festing123!{enter}");

      // we should have a visible alert window now
      cy.on("window:alert", str => {
        expect(str).to.equal(
          `The password is invalid or the user does not have a password.`
        );
      });

      // and still be on the same URL
      cy.url().should("include", "/");
    });

    it("redirects to /dashboard on success", function() {
      cy.get("input[name=email]").type(username);
      cy.get("input[name=password]").type(password);
      cy.get("form").submit();

      // we should be redirected to /dashboard
      cy.url().should("include", "/dashboard");
      cy.get("h1").should("contain", "Dashboard");

      cy.contains('Test Client 1').click()

      cy.contains('table shenanigans').click()

    });
  });
});
