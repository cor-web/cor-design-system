export default class extends HTMLElement {
  constructor() {
    super();
    this.root = document.querySelector('cor-header');
  }

  dispatchUpdate(detail) {
    const event = new CustomEvent('state-update', {
      detail,
      bubbles: true,
      composed: true
    });

    this.dispatchEvent(event);
  }
}