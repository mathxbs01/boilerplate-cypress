// <reference types="cypress"/>
const APIUrl = Cypress.env("API");
const API = APIUrl;
let usuario;
beforeEach(() => {
  cy.fixture("dummy/dummy.json").then((acessos) => {
    usuario = acessos;
  });
});

class AutorizacaoService {
  autorizacaoToken(perfil) {
    let token;
    let usuarioCredenciais = {
      DUMMY: usuario.dummy,
    };

    const valorPerfil = usuarioCredenciais[perfil];

    return cy
      .request({
        method: "POST",
        url: `${API}/v1/DUMMY/AUTENTICACAODUMMY`,
        body: {
          USER: valorPerfil.USER,
          PASSWORD: valorPerfil.PASSWORD,
        },
        failOnStatusCode: false,
      })
      .then((response) => {
        token = response.body.TOKEN.Token;
        return token;
      });
  }
}
export { AutorizacaoService };