const render = (text, title) => `
  <style>
    :host {
      display: flex;
    }

    .visua
  </style>
  <a href="https://twitter.com/KittyGiraudel" title="${ title }" class="cor-link">
    <svg 
        aria-hidden="true"
        focusable="false"
        xmlns="http://www.w3.org/2000/svg"
        viewbox="0 0 16 16"
    >
    ${ svg }
    </svg>
    <span class="visually-hidden">${ title }</span>
  </a>
`;

class CorIconLink extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({mode: 'open'});
    

    const text = this.getAttribute('text');
    const  title = this.getAttribute('title');
    const  svg. = this.getAttribute('img');
    
    shadow.innerHTML = render(title, svg);
  }
}

customElements.define('cor-icon-link', CorIconLink);