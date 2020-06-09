describe("test techModal", function () {
    context("Displays a list of technicians", function () {
      // login and navigate to project
      beforeEach(function () {
        cy.projectsToAssignTech();
      });

      it("Selects Bob", function () {
          cy.get("input")
          //.expect($input).to.have.length(9)
            //const bob = $input[0]
            //cy.get(bob).click();
          })
      //expect($input).not.to.be.checked
    })
})