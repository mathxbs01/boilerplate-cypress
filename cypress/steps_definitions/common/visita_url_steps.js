/// <reference types="cypress" />
import { Dado } from "../../..";

let URL = Cypress.env("BASE_URL");

Dado("que tenha realizado o login no X com acesso {string}", () => {
  cy.visit(URL);
});
