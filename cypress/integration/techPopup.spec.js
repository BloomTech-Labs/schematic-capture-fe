describe("test techModal", function () {

    context("Assigns technician to project", function () {

      // login and navigate to project
      beforeEach(function () {
        cy.projectsToAssignTech();
      });

      it("Selects Tech, Project, and Date", function () {

          // selects technician:
          cy.get("input").click({ multiple: true });
          cy.contains("Next").click();
          cy.expect("input[]")

          // selects project:
          cy.get("input").click({ multiple: true });
          cy.contains("Next").click();

          // selects date:
          cy.get("input").click();
          cy.get("input[name=Date]").type("2040-01-20");
          cy.contains("Next").click();

          // confirms:
          cy.contains("Next").click();
      })

      it("Displays elements", function () {

        // shows checkboxes:
        cy.get("[data-cy=checkboxes-for-techs]")

        // shows next button:
        cy.get("[data-cy=next-button]")

        // shows header to form:
        cy.get("[data-cy=assign-tech-header]")

      })

      it("Should display tech's email in project after assignment", function () {

        // barne272@msu.edu	under project 1:
        cy.get("[data-cy=technician-email]").contains('barne272@msu.edu')
      })

    })
})