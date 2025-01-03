import HeroesPage from "../pages/heroesPage";

const heroes = new HeroesPage();

describe("Hero Page Tests", () => {
  
  beforeEach(() => {
    cy.login("admin@test.com", "test123");
    cy.visit("/heroes");
  });

  it("Creat new hero", () => {
    heroes.creatHero("Spider Man");
    cy.location("pathname").should("equal", "/heroes");
    cy.screenshot("Insert Hero");
  });

  it("Read list heroes", () => {
    heroes.readHero();
    cy.screenshot("Read Hero");
  });

  it("Update Hero", () => {
    heroes.updateHero();
    cy.screenshot("Update Hero");
  });

  it("Delete Hero", () => {
    heroes.deleteHero();
    cy.screenshot("Delete Hero");
  });


});
