class LoginPage {
  inputEmail = "[data-cy='email']";
  inputPassword = "[data-cy='password']";

  fillLoginWithAnyUser(_user, _password) {
    if (cy.get("button").contains("Login")) {
      cy.get("button").contains("Login").click();
      cy.get(this.inputEmail).type(_user);
      cy.get(this.inputPassword).type(_password);
      cy.get("button").contains("Sign in").click();
      cy.url().should("eq", "http://localhost:3000/heroes/");
    }
  }

  
}
export default LoginPage;
