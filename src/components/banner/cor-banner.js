const template = document.createElement('template');

const render = element => {
  const alt = element.getAttribute('alt');
  const link = element.getAttribute('link');
  const image = element.getAttribute('image');
  const cta = element.getAttribute('cta');
  const title = element.getAttribute('title');
  const description = element.getAttribute('description');

  template.innerHTML = `
    <style>
      :host {
        background: white;
        display: block;
        margin-bottom: var(--space-2xs);
      }
      
      :host([type="card"]) {
        transition: border-color 0.5s ease;
        border: solid 1px var(--oc-gray-3);
      }

      :host([type="card"]:hover) {
        border-color: var(--oc-indigo-5);
      }

      :host([type="card"]) h3 {
        text-decoration: underline;
      }

      :host([type="card"]:hover) h3 {
        text-decoration: none;
      }

      a {
        display: block;
        position: relative;
        text-decoration: none;
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

      :host([type="card"]) a:before {
        content: none;
      }

      span {
        box-sizing: border-box;
        background-color: #00000094;
        color: white;
        display: block;
        font-size: 16px;
        font-weight: bold;
        text-decoration: none;
        padding: .5rem;
        position: absolute;
        bottom: 0;
        width: 100%;
      }

      p, h3 {
        margin: var(--space-2xs) var(--space-2xs);
      }

      h3 {
        color: var(--link-color);
        font-size: 16px;
      }

      p {
        color: var(--text-color);
        font-size: 14px;
      }
   
    </style>
    <a href="${link}">
      ${image ? `<img src="${image}" alt="${alt}" />` : '' }
      ${title ? `<h3>${title}</h3>` : ''}
      ${description ? `<p>${description}</p>` : ''}
      ${cta ? `<span>${cta}</span>` : ''}
    </a>
      `;
};



export class CorBanner extends HTMLElement {
  static get properties() {
    return {
      image: { type: String }
    };
  }

  constructor() {
    super();

    this.attachShadow({ mode: 'open' });

    render(this);
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

customElements.define('cor-banner', CorBanner);