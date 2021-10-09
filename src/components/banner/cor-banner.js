const template = document.createElement('template');

const render = element => {
  const alt = element.getAttribute('alt');
  const link = element.getAttribute('link');
  const imageSRC = element.getAttribute('image');
  const imageWidth = element.getAttribute('imageWidth');
  const imageHeight = element.getAttribute('imageHeight');
  const cta = element.getAttribute('cta');
  const title = element.getAttribute('title');
  const description = element.getAttribute('description');

  template.innerHTML = `
    <style>
      :host {

        /* START: To remove when Base CSS is available everywhere */
        --fluid-min-width: 320;
        --fluid-max-width: 1140;
        --fluid-screen: 100vw;
        --fluid-bp: calc( (var(--fluid-screen) - var(--fluid-min-width) / 16 * 1rem) / (var(--fluid-max-width) - var(--fluid-min-width)) );

        --f-0-min: 21;
        --f-0-max: 24;
        --fc-s-min: (var(--f-0-min, 21));
        --fc-s-max: (var(--f-0-max, 24));
        --fc-2xs-min: (var(--fc-s-min) * 0.5);
        --fc-2xs-max: (var(--fc-s-max) * 0.5);
        --space-2xs: calc( ((var(--fc-2xs-min) / 16) * 1rem) + (var(--fc-2xs-max) - var(--fc-2xs-min)) * var(--fluid-bp) );

        --oc-blue-8: #1971c2;
        --oc-indigo-5: #5c7cfa;
        --oc-gray-3: #dee2e6;
        --oc-gray-9: #212529;

        --link-color: var(--oc-blue-8);
        --text-color: var(--oc-gray-9);
        /* END: To remove when Base CSS is available everywhere */

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

      :host([type="card"]:hover) h3 {
        text-decoration: underline;
      }

      a {
        display: block;
        position: relative;
        text-decoration: none;
      }
      
      img {
        box-shadow: inset 0 0 80px rgb(230 237 236 / 50%);
        display: block;
        height: auto;
        width: 100%;
        aspect-ratio: ${imageWidth} / ${imageHeight};
        transition: .3s,filter;
        opacity: 1;
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
        margin: var(--space-2xs) var(--space-2xs);
      }

      p {
        color: var(--text-color);
        font-size: 14px;
      }
   
    </style>
    <a href="${link}">
      ${imageSRC ? `<img src="${imageSRC}" alt="${alt}" width="${imageWidth}" height="${imageHeight}" />` : ''}
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