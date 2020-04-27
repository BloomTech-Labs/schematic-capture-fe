describe('test jobsheet component', function () {
  context('select elements from the jobsheet component', function() {
    // login and navigate to project
    beforeEach(function() {
      cy.FEclient();
    })

    it('displays elements correctly on the jobsheet page', function() {
      // click on the first jobsheet in the project to be taken to the jobsheet page
      cy.get('[href="/jobsheet/3"]').click();
      cy.url().should('include', 'jobsheet');
      cy.contains('testing 3')
      cy.contains('All Components')
      cy.contains('Components')
      cy.contains('Description')
      cy.contains('Manufacturer')
      cy.contains('Part Number')
      cy.contains('Stock Code')
      cy.contains('Select Image')
      cy.contains('Resources')
      cy.contains('Cutsheet')
      cy.contains('Stores Part #')

      cy.get('[href="/dashboard"]')
      cy.get('[href="/client/new"]')

      cy.contains('Electric Motor')
      cy.contains('Pump, Axial Piston')
      cy.contains('Ball Valve')
      cy.contains('Level Gauge')
      cy.contains('Return Line Filter')
      cy.contains('Breather')
      cy.contains('Venting Relief Valve')
      cy.contains('Heat Exchanger, Tube and Shell')
      cy.contains('Ball Valve')
      cy.contains('3-Pos, 4-Way Directional Control Valve')
      cy.contains('PO Check Valve')
      cy.contains('Dual Flow Control Valve')
      cy.contains('Cylinder')
      cy.contains('Baldor')
      cy.contains('Vickers')
      cy.contains('Hydac')
      cy.contains('Lenz')
      cy.contains('Parker')
      cy.contains('Rexroth')
      cy.contains('Thermal Transfer')
      cy.contains('Eaton')
      cy.contains('Not Provided')
      cy.contains('EK 500-0')
    })

    it('captures correct location information', function() {
      cy.location().should((location) => {
        expect(location.port).to.eq('3000')
        expect(location.protocol).to.eq('http:')
        expect(location.hostname).to.eq('localhost')
        expect(location.pathname).to.eq('/project/1')
      })
    })
  })
})
