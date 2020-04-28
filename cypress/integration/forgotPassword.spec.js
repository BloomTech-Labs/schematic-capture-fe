describe('Navigating to and testing Forgot Password form', function() {
  context('Navigating to Forgot Password', function() {
    this.beforeEach(function() {
      cy.visit('/')
      cy.contains('Forgot password?').click();
    })

    it('displays forgot password component correctly', function() {
      // Schematic Capture title
      cy.get('.sc-fzplWN')
      // Reset Password container
      cy.get('.sc-fznKkj')
      // Reset Password h2
      cy.get('h2')
      // Reset Password paragraph content
      cy.get('p')
      // Email input form
      cy.get('#email')
      // Send reset link button
      cy.get('.sc-fzpjYC')
      // Back to login link
      cy.get('.sc-AxjAm > div')
      // Back to login arrow
      cy.get('svg')
    })


  })

  
})