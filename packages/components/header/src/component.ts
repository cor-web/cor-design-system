export default class extends HTMLElement {
  root: any;

  constructor() {
    super();
    this.root = document.querySelector('cor-header');
  }

  dispatchUpdate(detail: { type: string; text: string | null; }) {
    const event = new CustomEvent('state-update', {
      detail,
      bubbles: true,
      composed: true
    });

    this.dispatchEvent(event);
  }
}