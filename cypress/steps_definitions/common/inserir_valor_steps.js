/// <reference types="cypress" />
import { E } from "../../..";

let APIUrl = Cypress.env("API");
let API = APIUrl;

beforeEach(() => {
  cy.intercept("GET", `${API}/v1/GET/*`).as("getTESTE");
});

E("preencho no campo {string} o valor {string}", (campo, valor) => {
  if (valor !== "") {
    cy.wait(500);
    if (valor.includes("/")) {
      cy.inputPreenchimento("data", campo, valor);
    } else {
      cy.inputPreenchimento("text", campo, valor);
    }
  }
});

E("limpo os campos {string}", (campo) => {
  cy.wait(500);
  if (campo !== "") {
    cy.element(campo).clear({ force: true });
  }
});

E("seleciono a opção {string}", (opcao) => {
  cy.wait(500);
  if (opcao !== "") {
    cy.lista()
      .contains("span", opcao)
      .click()
      .trigger("keydown", { keyCode: 27 });
  }
});

E("seleciono o radio-button {string}", (nomeRadio) => {
  cy.wait(500);
  if (nomeRadio !== "") {
    if (cy.element(nomeRadio) === undefined) {
      cy.get("[ng-reflect-value]")
        .contains(nomeRadio, { matchCase: false })
        .click();
    } else {
      cy.element(nomeRadio.trim()).click({ force: true });
    }
  }
});

E("seleciono o checkbox {string}", (nomeCheck) => {
  cy.wait(500);
  if (nomeCheck !== "") {
    cy.element(nomeCheck).check();
  }
});
