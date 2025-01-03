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
Cypress.Commands.add("login", (user, password) => {
  const login = () => {
    cy.visit("/");
    cy.get("button").contains("Login").click();
    cy.get('[data-cy="email"]').type(user);
    cy.get('[data-cy="password"]').type(password);
    cy.get("button").contains("Sign in").click();
    cy.contains("button", "Logout", { log: false }).should("be.visible");
  };

  const options = { cacheAcrossSpecs: true };

  cy.session(user, login, options);
});

//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
