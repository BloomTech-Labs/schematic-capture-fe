describe('Test project page functionality', function() {
  context('Select items from the project page', function() {
    // first need to log in and navigate to project page
    beforeEach(function() {
      cy.visit("/");
      cy.get("input[name=email]").type('bob_johnson@lambdaschool.com');
      cy.get("input[name=password]").type('testing123!');
      cy.get("form").submit();
      cy.contains('Test Client 1').click()
      cy.contains('testing 3').click()

    });

    it('Displays items on the project page correctly', function() {
      cy.url().should('include', '/client')
      cy.contains('testing 3').click()
      cy.url().should('include', 'project')
      cy.contains('All Jobsheets')
      cy.contains('New Jobsheet')
    })
  })
})
