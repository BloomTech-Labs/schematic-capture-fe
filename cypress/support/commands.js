// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

// Commands currently intended for use in testing the front end:
// Log in using the front end, ending up on dashboard:
Cypress.Commands.add('loginScript', () => {
  cy.visit("/");
  cy.get("input[name=email]").type('bob_johnson@lambdaschool.com')
        .clear()
        .should('have.value', '')
  cy.get("input[name=password]").type("testing123!")
    .clear()
    .should('have.value', '')
  cy.get("input[name=email]").type('bob_johnson@lambdaschool.com');
  cy.get("input[name=password]").type('testing123!');
  cy.get("form").submit();
})

// Log in using the front end and then navigate to Test Client 1 from dashboard
Cypress.Commands.add('FEdashboard', () => {
  cy.loginScript();
  cy.contains('Test Client 1').click()
})

Cypress.Commands.add('FEclient', () => {
  cy.FEdashboard();
  cy.contains('testing 3').click();
  cy.contains('testing 3').click();
})

Cypress.Commands.add('FEjobsheet', () => {
  cy.FEclient();
})

// Commands currently intended for use in testing the back end:
// This function will change after Okta is set up!  It is currently hard-coded to include the authorization bearer token because of backend requiremements.
Cypress.Commands.add('login', () => {
  console.log('custom login function fired!')
  cy.request({
    method: 'POST',
    url: 'https://sc-be-production.herokuapp.com/api/auth/login', 
    headers: {
      "authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImRjMGMzNWZlYjBjODIzYjQyNzdkZDBhYjIwNDQzMDY5ZGYzMGZkZWEiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vc2NoZW1hdGljLWNhcHR1cmUiLCJhdWQiOiJzY2hlbWF0aWMtY2FwdHVyZSIsImF1dGhfdGltZSI6MTU4NjQ2MzUyMiwidXNlcl9pZCI6InRpRFRmZU5GMUtjRWtXOTdnUExJcEc4NWl1YjIiLCJzdWIiOiJ0aURUZmVORjFLY0VrVzk3Z1BMSXBHODVpdWIyIiwiaWF0IjoxNTg2NDYzNTIyLCJleHAiOjE1ODY0NjcxMjIsImVtYWlsIjoiYm9iX2pvaG5zb25AbGFtYmRhc2Nob29sLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJib2Jfam9obnNvbkBsYW1iZGFzY2hvb2wuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.2qDTh8zMlm9S3XPUM_McTCBI0-VpKNeu5xVpgptSLMVqEq8aRQdSbUtvFIkFI3wjHAXnmWLoH59UUCb0bMaMbmigz8i3OtOBtWAF_rhcBGhbTJ5yXtXgPiCKYwhOJnZgS6x3LMuSonT0b7VVH9YFBdIWcSmtIEOHcypE3-Nf3ixcTOnD_Z0ipLI43wqExKLVAzZcNw1EdcRqNlIQB4qYl8nasyvNHzf8zPiu1A58vDhAThVVeo9-b2bamFzGt28Yf6ztrOenGGaxIYb8l-JC4VCdlaGsGiuMu7QRIAt-GWOeMwFwo0yJrwTBGO_q-Dhhk_jzVjSmNWgXU0_Lnrj3mA"
    },
    body: {
      email: 'bob_johnson@lambdaschool.com',
      password: 'testing123!'
    }
  })
  .then((response) => {
    console.log(response);
    expect(response.status).to.eq(200)
  })
})
