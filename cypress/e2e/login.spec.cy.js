import LoginPage from "../pages/loginPage";

const loginPage = new LoginPage();
describe("Login Tests", () => {
  it("Successful login", () => {
    cy.visit("/");
    loginPage.fillLoginWithAnyUser(
      Cypress.env("adminUser"),
      Cypress.env("password")
    );
    cy.screenshot("Login success");
  });

  it("Incorret password", () => {
    cy.visit("/");
    loginPage.fillLoginWithAnyUser(Cypress.env("adminUser"), "test");
    cy.get(".text-red-500").contains("Invalid email or password");
    cy.screenshot("Incorret password");
  });

  it("Not existent user", () => {
    cy.visit("/");
    loginPage.fillLoginWithAnyUser("Test", Cypress.env("password"));
    cy.get(".text-red-500").contains("Email is not valid");
    cy.screenshot("User not exist");
  });
  it("Empty fields", () => {
    cy.visit("/");
    loginPage.fillLoginWithAnyUser(" ", Cypress.env("password"));
    cy.get(".text-red-500").contains("Email is required");
    cy.screenshot("Empty field");
  });
});
