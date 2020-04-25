describe('test jobsheet component', function () {
  context('select elements from the jobsheet component', function() {
    // login and navigate to project
    beforeEach(function() {
      cy.projectToJobsheet();
    })

    it('displays elements correctly on the jobsheet page', function() {
      // click on the first jobsheet in the project to be taken to the jobsheet page
      cy.get(':nth-child(1) > :nth-child(1) > .sc-fznOgF').click();
      cy.url().should('include', 'jobsheet');
      cy.contains('Testing 3')
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
