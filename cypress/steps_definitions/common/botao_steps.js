/// <reference types="cypress" />
import {
  E,
} from "../../..";

E("clico no botão {string}", (nomeBotao) => {
  cy.wait(500);
  cy.botao(nomeBotao).click({ force: true });
});
