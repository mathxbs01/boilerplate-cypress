/// <reference types="cypress"/>

import { AutorizacaoService } from "../../service/dummy_autenticacao.service";
const autorizacaoService = new AutorizacaoService();
let usuario;
let token;

beforeEach(() => {
  cy.fixture("dummy/dummy").then((acessos) => {
    usuario = acessos;
  });
});

Cypress.Commands.add("loginAutenticacao", (perfil) => {
  autorizacaoService.autorizacaoToken(perfil);
});

export { token };
