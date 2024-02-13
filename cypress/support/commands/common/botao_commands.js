/// <reference types="cypress"/>

Cypress.Commands.add("botao", (textoBotao) => {
  const elementoBotao = cy.contains("button", textoBotao);
  return elementoBotao;
});
