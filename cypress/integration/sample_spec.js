describe('My First Test', function () {
  it('Visits the cypress example page', function() {
    // visit page
    cy.visit('https://example.cypress.io')

    // pause
    // cy.pause()

    // find an element that contains the string 'type'
    cy.contains('type')

    // navigate to new page by clicking on that element
    cy.contains('type').click()

    // after clicking, url should contain '/commands/actions'
    cy.url()
      .should('include', '/commands/actions')

    cy.get('.action-email')
      .type('myemail@email.com')
      .should('have.value', 'myemail@email.com')
  });
});


