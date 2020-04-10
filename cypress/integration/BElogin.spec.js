describe('Backend direct login', function() {
  context('Login by direct request to backend', function() {
    it('logs the user into the system and gets a 200 response if credentials are correct', function() {
      // from commands.js, after bearer token has been hardcoded into request
      cy.login();
    })
  })
})
