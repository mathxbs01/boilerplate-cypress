/// <reference types="cypress"/>

import { InputElement } from "../../../page/elements/input_elements";

const inputElements = new InputElement();

Cypress.Commands.add(
  "inputPreenchimento",
  (tipoCampo, textoLabel, textoPreenchimento) => {
    const tipoInput = (type) => {
      switch (type) {
        case "data":
          return cy.inputData(textoLabel, textoPreenchimento);
        case "text":
          return cy.inputText(textoLabel, textoPreenchimento);
        case "multiSelect":
          return cy.inputSelect("multiSelect", textoLabel);
        case "singleSelect":
          return cy.inputSelect("singleSelect", textoLabel);
        default:
          return null;
      }
    };

    return tipoInput(tipoCampo);
  }
);

Cypress.Commands.add("inputText", (textoLabel, textoPreenchimento) => {
  let inputElement;
  let textArea = inputElements.input_AREA();

  if (inputElements.input_ID(textoLabel) === undefined) {
    if (textArea.includes(textoLabel)) {
      if (textoLabel === "Motivo") {
        inputElement = cy.get("textarea");
      } else {
        inputElement = cy.contains("textarea");
      }
    } else {
      inputElement = cy.get(`label:contains('${textoLabel}') + input`);
    }
  } else {
    console.log(cy.get(inputElements.input_ID(textoLabel)));

    inputElement = cy.get(inputElements.input_ID(textoLabel));
  }

  return inputElement.type(textoPreenchimento);
});

Cypress.Commands.add("inputSelect", (tipoDropdown, textoLabel) => {
  const tipoSelect = (type) => {
    switch (type) {
      case "multiSelect":
        return cy
          .get('div[class*="input-wrapper"]')
          .get(`label:contains('${textoLabel}') + mat-select`);
      case "singleSelect":
        return cy.get(inputElements.input_ID(textoLabel));
      default:
        return null;
    }
  };
  return tipoSelect(tipoDropdown);
});

Cypress.Commands.add("verificaValor", (tipoCampo, textoLabel, valor) => {
  const inputID = inputElements.input_ID(textoLabel);

  const inputElement =
    inputID === undefined
      ? cy.get(`label:contains('${textoLabel}') + input`)
      : inputID;

  const tipoInput = (type) => {
    switch (type) {
      case "text":
        return inputElement.should("have.value", valor);
      case "dropdown":
        return inputElement.contains("span", valor).should("exist");
      default:
        return null;
    }
  };

  return tipoInput[tipoCampo];
});

Cypress.Commands.add("element", (textoLabel) => {
  return cy.get(inputElements.input_ID(textoLabel));
});
