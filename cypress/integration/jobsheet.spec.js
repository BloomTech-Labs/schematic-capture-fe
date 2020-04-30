describe('test jobsheet component', function () {
  context('select elements from the jobsheet component', function() {
    // login and navigate to project
    beforeEach(function() {
      cy.projectToJobsheet();
    })

    it('displays elements correctly on the jobsheet page', function() {
      // Schematic capture title
      cy.get('.sc-fzqPZZ')
      // Clients breadcrumb
      cy.get('[href="/dashboard"] > div')
      // Projects breadcrumb
      cy.get('[href="/client/1"] > div')
      // Search icon
      cy.get('.sc-fzqAbL')
      // User info/logout button
      cy.get('.sc-fzpkJw')
      // Button container
      cy.get('.sc-fzoiQi')
      // Completed/Incomplete header
      cy.get('h4')
      // Right button container
      cy.get('.sc-fzqOul')
      // Assign techs button
      // cy.get('.sc-fznNTe > .sc-fzqOul')
      // New Jobsheet button
      cy.get('[variant="primary"]')
      // All jobsheets header container
      cy.get('.sc-fzoxnE')
      // Name
      // cy.get('thead > .sc-fznzqM > :nth-child(1)')
      // Description
      // cy.get('thead > .sc-fznzqM > :nth-child(2)')
      // Techs
      // cy.get('thead > .sc-fznzqM > :nth-child(3)')
      // Status
      // cy.get('thead > .sc-fznzqM > :nth-child(4)')
      // Table body, name container
      cy.get('tbody > :nth-child(1) > :nth-child(1)')
      // Table body, jobsheet name
      // cy.get(':nth-child(1) > :nth-child(1) > .sc-fznYue')
      // Table body, assignment button container
      cy.get('tbody > :nth-child(1) > :nth-child(4)')
      // Table body, assignment button
      // cy.get(':nth-child(1) > :nth-child(4) > .sc-fzonjX')
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
