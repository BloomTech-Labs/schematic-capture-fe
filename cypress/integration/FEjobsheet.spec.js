describe('test jobsheet component', function () {
  context('select elements from the jobsheet component', function() {
    // login and navigate to project
    beforeEach(function() {
      cy.FEjobsheet();
    })

    it('displays elements correctly on the jobsheet page', function() {
      // click on the first jobsheet in the project to be taken to the jobsheet page
      cy.get('[href="/jobsheet/2"]').click();
      cy.url().should('include', 'jobsheet');
      cy.contains('testing 3')
      cy.contains('Testing 3')
      cy.contains('All Components')
      cy.contains('Components')
      cy.contains('Description')
      cy.contains('Manufacturer')
      cy.contains('Part Number')
      cy.contains('Stock Code')
      cy.contains('Select Image')
      cy.contains('Resources')
      cy.contains('Cutsheet')
      cy.contains('Stores Part #')
      cy.get('[href="/dashboard"]')
      cy.get('[href="/client/new"]')
    })
  })
})
