const template = document.createElement("template");
template.innerHTML = `
  <style>
  :host {
    background: var(--posterSrc) no-repeat;
    background-size: cover;
    display: inline-block;
  }

  :host(:hover) {
    cursor: pointer;
  }

  ::slotted(iframe) {
    cursor: pointer;
    visibility: hidden;
  }

  ::slotted:hover {
    cursor: pointer;
  }

  :host([clicked=true]) ::slotted(iframe)  {
    visibility: visible;
  }

  :host([clicked=true]:hover)  {
    cursor: default;
  }

  </style>
  <slot></slot>
`;

class CorEmbed extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    const newPoster = `url('${this.poster}')`;
    console.log(newPoster);
    this.style.setProperty("--posterSrc", newPoster);

    this.addEventListener('click', this._onClick);

  }

  _onClick() {
    console.log('cliccck');
    this.setAttribute("clicked", "true");
    this.style.setProperty("--posterSrc", "");

    const iframe = this.querySelector("iframe");
    iframe.src = this.src;
  }

  get poster() {
    return this.getAttribute("poster");
  }

  get src() {
    return this.getAttribute("src");
  }
}

if (!customElements.get('cor-embed')) {
  customElements.define('cor-embed', CorEmbed);
}