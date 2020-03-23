describe('Test client page functionality', function() {
  context('Select items from client page', function() {
    // first need to log in and navigate to client page
    beforeEach(function() {
      cy.visit("/");
      cy.get("input[name=email]").type('bob_johnson@lambdaschool.com');
      cy.get("input[name=password]").type('testing123!');
      cy.get("form").submit();
      cy.contains('Test Client 1').click()
    });

    it('navigates to Test Client 1 and displays correct content', function() {
      cy.contains('Test Client 1')
      cy.contains('testing 3')
      cy.contains('table shenanigans')
      cy.contains('tyler')
      cy.url().should('include', '/client')
      cy.contains('testing 3').click()
    }) 
  })
})