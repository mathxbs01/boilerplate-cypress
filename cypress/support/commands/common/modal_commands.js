/// <reference types="cypress"/>

import { ModalElement } from "../../../elements/modal_elements";

const modalElement = new ModalElement();

Cypress.Commands.add("modal", (mensagem) => {
  const modal = modalElement.swal("comum");
  return cy.get(modal).contains(mensagem).should("be.visible");
});
