class ModalElement {
  swal(type) {
    const typeModal = {
      comum: 'div[class*="swal2-modal"]',
    };

    return typeModal[type];
  }
}

export { ModalElement };
