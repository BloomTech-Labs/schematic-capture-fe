describe("User at Dashboard", function() {
  context("Selecting elements from dashboard", function() {
    beforeEach(function() {
      cy.visit("/")
    })

    it('Correctly navigates to client pages from dashboard', function() {
       // must login first
      cy.get("input[name=email]").type('bob_johnson@lambdaschool.com');
      cy.get("input[name=password]").type('testing123!');
      cy.get("form").submit();

      cy.url().should('include', '/dashboard')

      // after reaching dashboard, navigate to test client 1
      cy.contains('Test Client 1').click()

      cy.url().should('include', '/client')

      cy.contains('All Projects')
      cy.contains('Test Project 2')
      cy.contains('testing 3')
      cy.contains('table shenanigans')
      cy.contains('tyler')

      cy.contains('Test Project 2').click()
      cy.contains('Test Project 2').click()


    })

  })
})