#language: pt

@dummy
Funcionalidade: TESTE

Contexto: 
    * que tenha realizado o login no X com acesso "X"


Cenario: TESTE
    Dado preencho no campo "CAMPO" o valor "VALOR"
    E clico no botão "NOME_BOTAO"
    Quando limpo os campos "CAMPO"
    E seleciono a opção "OPCAO"
    E seleciono o radio-button "RADIO_BUTTON"
    Então seleciono o checkbox "CHECKBOX"
    E visualizo a mensagem "MENSAGEM"

Esquema do Cenario: TESTE
    Dado preencho no campo "<CAMPO>" o valor "VALOR"
    E clico no botão "NOME_BOTAO"
    Quando limpo os campos "<CAMPO>"
    E seleciono a opção "OPCAO"
    E seleciono o radio-button "RADIO_BUTTON"
    Então seleciono o checkbox "CHECKBOX"
    E visualizo a mensagem "MENSAGEM"

    Exemplos:
        | CAMPO |
        | A     |
        | B     |
        | C     |
