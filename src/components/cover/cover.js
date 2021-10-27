/*
const template = document.createElement("template");
template.innerHTML = `
  <style>
    :host {
    display: block;
    }
  </style>
  <slot name="title"></slot>
  <slot name="description"></slot>
  <slot name="image"></slot>
`;

class CorCover extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

customElements.define("cor-cover", CorCover);
*/
