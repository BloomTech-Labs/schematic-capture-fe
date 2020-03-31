describe('Test client page functionality', function() {
  context('Select items from client page', function() {
    // first need to log in, get to dashboard, then navigate to client page
    beforeEach(function() {
      cy.FEdashboard();
    });

    it('navigates to Test Client 1 and displays correct content', function() {
      cy.contains('Test Client 1')
      cy.contains('testing 3')
      cy.contains('table shenanigans')
      cy.contains('tyler')
      cy.url().should('include', '/client')
    }) 
  })
})
