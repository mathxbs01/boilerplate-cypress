/// <reference types="cypress"/>
import { AutorizacaoService } from "./dummy_autenticacao.service";
const autorizacaoService = new AutorizacaoService();

const APIUrl = Cypress.env("API");
const API = APIUrl;

let APIGet = {
  DUMMY: `${API}/v1/DUMMY`,
};

let APIFiltered = {
  DUMMYFiltered: `${API}/v1/DUMMY`,
};

let APIPost = {
  DUMMYPost: `${API}/v1/DUMMY`,
};

let APIDelete = {
  DUMMYDelete: `${API}/v1/DUMMY`,
};

let APIPut = {
  DUMMYPut: `${API}/v1/DUMMY`,
};

const todosPost = {
  ...APIFiltered,
  ...APIPost,
};

class httpClient {
  useGet(nome, params, perfil) {
    let url = APIGet[nome];
    let uri;
    let token;
    params != undefined ? (uri = `${url}/${params}`) : (uri = `${url}`);
    return autorizacaoService.autorizacaoToken(perfil).then((x) => {
      token = x;
      cy.request({
        method: "GET",
        url: uri,
        headers: { Authorization: `Bearer ${token}` },
        failOnStatusCode: false,
      }).then((response) => {
        return response;
      });
    });
  }

  usePost(nome, body, perfil) {
    let uri = todosPost[nome];
    let token;
    return autorizacaoService.autorizacaoToken(perfil).then((x) => {
      token = x;
      cy.request({
        method: "POST",
        url: uri,
        headers: { Authorization: `Bearer ${token}` },
        body: body,
        failOnStatusCode: false,
      }).then((response) => {
        return response;
      });
    });
  }

  useDelete(nome, params, perfil) {
    let url = APIDelete[nome];
    let uri;
    let token;
    params != undefined ? (uri = `${url}${params}`) : (uri = `${url}`);
    return autorizacaoService.autorizacaoToken(perfil).then((x) => {
      token = x;
      cy.request({
        method: "DELETE",
        url: uri,
        headers: { Authorization: `Bearer ${token}` },
        failOnStatusCode: false,
      }).then((response) => {
        return response;
      });
    });
  }

  usePut(nome, params, body, perfil) {
    let url = APIPut[nome];
    let uri;
    let token;
    const active = {
      FuncionarioPut: `${url}${params}/Active`,
    };
    active[nome] == undefined
      ? (uri = `${url}/${params}`)
      : (uri = active[nome]);

    return autorizacaoService.autorizacaoToken(perfil).then((x) => {
      token = x;
      cy.request({
        method: "PUT",
        url: uri,
        headers: { Authorization: `Bearer ${token}` },
        body: body,
        failOnStatusCode: false,
      }).then((response) => {
        return response;
      });
    });
  }
}

export { httpClient };