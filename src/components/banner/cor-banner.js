const template = document.createElement('template');


export class CorBanner extends HTMLElement {
  static get properties() {
    return {
      image: { type: String }
    };
  }

  constructor() {
    super();

    this.attachShadow({ mode: "open" });

    template.innerHTML = `
    <style>
      :host {
        display: block;
        margin-bottom: var(--space-2xs);
      }

      a {
        display: block;
        position: relative;
      }
      
      img {
        display: block;
        max-width: 100%;

      }

      a:before {
        background-color: #0000;
        content: "";
        display: block;
        position: absolute;
        transition: background-color 0.5s ease;
        height: 100%;
        width: 100%;
      }
      
      a:hover:before {
        background-color: #0005;
        
      }

      span {
        box-sizing: border-box;
        background-color: #00000094;
        color: white;
        display: block;
        font-weight: bold;
        text-decoration: none;
        padding: .5rem;
        position: absolute;
        bottom: 0;
        width: 100%;
      }
   
    </style>
    <a href="${this.getAttribute('link')}">
      <img src="${this.getAttribute('image')}" alt="" />
      <span>${this.getAttribute('cta')}</span>
    </a>
      `;
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

customElements.define('cor-banner', CorBanner);