describe('Test New Client form', function() {
  context('log in, navigate to user dashboard', function() {
    this.beforeEach(function() {
      cy.loginScript();
    });

    it('navigates from dashboard to new client form', function() {
      cy.contains('New Client').click();
      cy.url().should('include', 'client/new')
      cy.contains('Create a New Client')
      cy.get('#companyName')
        .should('have.attr', 'name', 'companyName')
        .and('have.attr', 'placeholder', 'Company Name')
      cy.get('#phone')
        .should('have.attr', 'name', 'phone')
        .and('have.attr', 'placeholder', 'Phone Number')
      cy.get('#street')
        .should('have.attr', 'name', 'street')
        .and('have.attr', 'placeholder', 'Street')
      cy.get('#city')
        .should('have.attr', 'name', 'city')
        .and('have.attr', 'placeholder', 'City')
      cy.get('#state')
        .should('have.attr', 'name', 'state')
        .and('have.attr', 'placeholder', 'State')
      cy.get('#zip')
        .should('have.attr', 'name', 'zip')
        .and('have.attr', 'placeholder', 'Zip Code')
    })
  })
})
