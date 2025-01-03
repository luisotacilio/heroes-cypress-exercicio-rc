class Heroes {
  buttonCreateNewHero = "a > .undefined";
  inputName = "[data-cy='nameInput']";
  inputPrice = "[data-cy='priceInput']";
  inputFans = "[data-cy='fansInput']";
  inputSaves = "[data-cy='savesInput']";
  inputPower = "[data-cy='powersSelect']";
  inputDropImg = "[data-cy='avatarFile']";
  buttonSubmit =
    "button[class='max-w-[100px] items-center py-2 px-4 text-sm font-medium text-center rounded-lg focus:ring-4 focus:outline-none text-white bg-blue-700 hover:bg-blue-800 focus:ring-blue-300']";
  buttonLike = "[data-cy='like']";
  buttonMoney = "[data-cy='money']";
  buttonPencil = "[data-cy='pencil']";
  buttonTrash = "[data-cy='trash']";
  buttonYes = "button.bg-red-600";

  creatHero(_name) {
    cy.get(this.buttonCreateNewHero).click();
    cy.get(this.inputName).type(_name);
    cy.get(this.inputPrice).type("0");
    cy.get(this.inputFans).type("0");
    cy.get(this.inputSaves).type("0");
    cy.get(this.inputPower).select("Flying");
    cy.get(this.inputDropImg).selectFile("cypress/fixtures/spider-man.png");
    cy.get(this.buttonSubmit).click();
  }

  readHero() {
    cy.visit("/");
  }

  updateHero() {
    cy.visit("/");
    cy.get(this.buttonPencil).eq(0).click();
    cy.get(this.inputName).type(" Update Name");
    cy.get(this.buttonSubmit).click();
  }

  deleteHero() {
    cy.visit("/");
    cy.get(this.buttonTrash).eq(7).click();
    cy.get("button").contains("Yes").click();
  }
}
export default Heroes;
