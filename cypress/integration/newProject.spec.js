describe("Testing New Project Button and Form", function() {
  context('Login, get New Project Button and click to navigate to New Project form', function() {
    beforeEach(function() {
      cy.clientToNewProject();
    });

    it('displays the New Project Form correctly', function() {
      cy.url().should('include', '/project/new')
      cy.contains('Please enter the project name below:')
      cy.get('form').should('be.visible')
      cy.get('p').should('be.visible')
      cy.get('input').should('be.visible')
      cy.get('button').should('be.visible')
    })

    it('assigns correct attributes to the input', function() {
      cy.get('input').should('have.attr', 'type')
      cy.get('input').should('have.attr', 'name')
      cy.get('input').should('have.attr', 'id')
      cy.get('input').should('have.attr', 'placeholder')
      cy.get('input').should('have.attr', 'aria-label')
    })

    it('assigns correct attributes to the button', function() {
      cy.get('form > :nth-child(3) > button').should('have.attr', 'variant')
      cy.get('form > :nth-child(3) > button').should('have.attr', 'submit')
      
    })
  })
})
