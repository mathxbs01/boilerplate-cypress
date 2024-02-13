/// <reference types="cypress"/>

import { InputElement } from "../../../page/elements/input_elements";

const inputElements = new InputElement();

Cypress.Commands.add("lista", () => {
  const element = inputElements.input_DROPDOWN("lista");
  return cy.get(element);
});

Cypress.Commands.add("listaInput", (elementos) => {
  return cy
    .lista()
    .get("span")
    .filter((index, elemento) => elemento.innerText.includes(elementos));
});

Cypress.Commands.add("listaInputSelecionado", (elementos) => {
  const element = inputElements.input_DROPDOWN("seleção");
  const sibling = 'mat-pseudo-checkbox[class*="mat-pseudo-checkbox-checked"]';
  let inputElement;

  if (elementos === undefined) {
    inputElement = cy.get(element).get("span");
  } else {
    inputElement = cy.get(element).get(`span:contains('${elementos}')`);
  }

  return inputElement
    .siblings(sibling)
    .parent()
    .should("have.attr", "aria-selected", "true");
});
