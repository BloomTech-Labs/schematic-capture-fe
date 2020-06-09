describe("Logging In for the First Time", function () {
    // we can use these values to log in
    const username = "bob_johnson@lambdaschool.com";
    const password = "testing123!";
  
    context("HTML form submission", function () {
      beforeEach(function () {
        cy.visit("/firstlogin/1234");
      });

      it("displays the header", function () {
        cy.get("[data-cy=schematic-capture-title]");
      });
  
      it("displays an error if a new password is not provided", function () {
        cy.get("input[name=newPassword]").type("{enter}");
        cy.get("div").should("contain", "Please enter a new password");
        cy.url().should("include", "/firstlogin/1234");
      });
  
      it("displays an error if answer to question is not provided", function () {
        cy.get("input[name=newAnswer]").type("{enter}");
        cy.get("div").should(
          "contain",
          "Please answer the security question"
        );
        cy.url().should("include", "/firstlogin/1234");
      });
  
      it("displays errors on login with incorrect token", function () {
        // incorrect name and password on purpose
        cy.get("input[name=newPassword]").type("yoloswag1234");
        cy.get("input[name=newAnswer]").type("BigJohnson");
  
        // we should have a visible alert window now
        cy.on("window:alert", (str) => {
          expect(str).to.equal(`Request failed with status code 401`);
        });
  
        // and still be on the same URL
        cy.url().should("include", "/firstlogin/1234");
      });
  
      it("clears input fields when .clear is called", function () {
        cy.get("input[name=newPassword]")
          .type("yoloswag1234")
          .clear()
          .should("have.value", "");
        cy.get("input[name=newAnswer]")
          .type("BigJohnson")
          .clear()
          .should("have.value", "");
      });
  

      it("captures correct location information", function () {
        cy.location().should((location) => {
          expect(location.port).to.eq("3000");
          expect(location.protocol).to.eq("http:");
          expect(location.hostname).to.eq("localhost");
          expect(location.pathname).to.eq("/firstlogin/1234");
        });
      });
    });
  });
  