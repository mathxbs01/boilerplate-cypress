class InputElement {
  input_ID(Campo) {
    const camposID = {
      CAMPO_TESTE: "#campo",
      EMAIL: "#email",
      SENHA: "#senha"
    };

    return camposID[Campo];
  }

  input_AREA() {
    const camposArea = [
      "Motivo",
      "Descritivo de entrada",
      "Observação Devolução",
    ];

    return camposArea;
  }

  input_DROPDOWN(type) {
    const camposOpcao = {
      lista: 'div[role="listbox"]',
      seleção: 'mat-option[role="option"]',
    };

    return camposOpcao[type];
  }
}

export { InputElement };
