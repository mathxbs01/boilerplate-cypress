/// <reference types="cypress" />
import { Entao } from "../../..";

Entao("visualizo a mensagem {string}", (mensagem) => {
  cy.wait(500);
  cy.modal(mensagem);
});
