
describe('Test project page functionality', function() {
  context('Select items from the project page', function() {
    // first need to log in and navigate to project page
    beforeEach(function() {
      cy.projectToJobsheet()
    });

    it('Displays items on the project page correctly', function() {
      cy.url().should('include', '/project')
      // Top container
      cy.get('.sc-fzoiQi')
      // Completed status container
      cy.get('.sc-fzoiQi > :nth-child(1)')
      // Overall completed status indicator
      cy.get('h4')
      // Button container
      cy.get('.sc-fzqOul')
      // Assign techs button
      cy.get('[href=""]')
      // New jobsheet button
      cy.get('[variant="primary"]')
      // First jobsheet name in table
      cy.get(':nth-child(1) > :nth-child(1) > .sc-fznOgF')
      // First jobsheet status indicator
      cy.get(':nth-child(1) > :nth-child(4) > .sc-fznYue')
      // Second jobsheet name in table
      cy.get(':nth-child(2) > :nth-child(1) > .sc-fznOgF')
      // Second jobsheet status indicator
      cy.get(':nth-child(2) > :nth-child(4) > .sc-fznYue')
      // All jobsheets header container
      cy.get('.sc-fzqLLg')
      // Name header
      cy.get('thead > .sc-fzplgP > :nth-child(1)')
      // Description header
      cy.get('thead > .sc-fzplgP > :nth-child(2)')
      // Techs header
      cy.get('thead > .sc-fzplgP > :nth-child(3)')
      // Status header
      cy.get('thead > .sc-fzplgP > :nth-child(3)')
    })
    
    it('captures correct location information', function() {
      cy.location().should((location) => {
        expect(location.port).to.eq('3000')
        expect(location.protocol).to.eq('http:')
        expect(location.hostname).to.eq('localhost')
        expect(location.pathname).to.eq('/project/4')
      })
    })
  })
})
