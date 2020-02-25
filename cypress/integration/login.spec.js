describe("Logging In", function() {
  // we can use these values to log in
  const username = "bob_johnson@lambaschool.com";
  const password = "testing123!";

  context("HTML form submission", function() {
    beforeEach(function() {
      cy.visit("/login");
    });

    it("displays errors on login", function() {
      // incorrect username on purpose
      cy.get("input[name=email]").type("bob_johnson@lambaschool.com");
      cy.get("input[name=password]").type("festing123!{enter}");

      // we should have visible errors now
      cy.get("p.error")
        .should("be.visible")
        .and("contain", "Username and/or password is incorrect");

      // and still be on the same URL
      cy.url().should("include", "/login");
    });

    it("redirects to /dashboard on success", function() {
      cy.get("input[name=email]").type(username);
      cy.get("input[name=password]").type(password);
      cy.get("form").submit();

      // we should be redirected to /dashboard
      cy.url().should("include", "/dashboard");
      cy.get("h1").should("contain", "Dashboard");
    });
  });

  context("HTML form submission with cy.request", function() {
    it("can bypass the UI and yet still test log in", function() {
      // oftentimes once we have a proper e2e test around logging in
      // there is NO more reason to actually use our UI to log in users
      // doing so wastes is slow because our entire page has to load,
      // all associated resources have to load, we have to fill in the
      // form, wait for the form submission and redirection process
      //
      // with cy.request we can bypass this because it automatically gets
      // and sets cookies under the hood. This acts exactly as if the requests
      // came from the browser
      cy.request({
        method: "POST",
        url: "/login", // baseUrl will be prepended to this url
        form: true, // indicates the body should be form urlencoded and sets Content-Type: application/x-www-form-urlencoded headers
        body: {
          username,
          password
        }
      });
    });
  });

  context('Reusable "login" custom command', function() {
    // typically we'd put this in cypress/support/commands.js
    // but because this custom command is specific to this example
    // we'll keep it here
    Cypress.Commands.add("loginByForm", (username, password) => {
      Cypress.log({
        name: "loginByForm",
        message: `${username} | ${password}`
      });

      return cy.request({
        method: "POST",
        url: "/login",
        form: true,
        body: {
          username,
          password
        }
      });
    });

    beforeEach(function() {
      // login before each test
      cy.loginByForm(username, password);
    });

    it("can visit /dashboard", function() {
      // after cy.request, the session cookie has been set
      // and we can visit a protected page
      cy.visit("/dashboard");
      cy.get("h1").should("contain", "Dashboard");
    });

    it("can visit /client/new", function() {
      // or another protected page
      cy.visit("/client/new");
      cy.get("button").should("contain", "Save");
    });

    it("can simply request other authenticated pages", function() {
      // instead of visiting each page and waiting for all
      // the associated resources to load, we can instead
      // just issue a simple HTTP request and make an
      // assertion about the response body
      cy.request("/client/1")
        .its("body")
        .should("include", "<h2>All Projects</h2>");
    });
  });
});
