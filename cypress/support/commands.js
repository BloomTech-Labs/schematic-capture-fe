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
  cy.get("input[name=email]").type('bob_johnson@lambdaschool.com');
  cy.get("input[name=password]").type('testing123!');
  cy.get("form").submit();
})

// Log in using the front end and then navigate to Test Client 1 from dashboard
Cypress.Commands.add('dashboardToClient', () => {
  cy.loginScript();
  cy.contains('Test Client 1').click()
})

Cypress.Commands.add('projectToJobsheet', () => {
  cy.dashboardToClient();
  cy.contains('testing 3').click();
})

Cypress.Commands.add('clientToNewProject', () => {
  cy.dashboardToClient();
  cy.contains('New Project').click();
})
