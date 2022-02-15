const template = document.createElement('template');
template.innerHTML = `
  <style>
    :host {
    display: block;
    }
  </style>
  <slot></slot>
  <button aria-hidden="true">Read More</button>
`;

class ExpandingList extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    // Get li elements 
    const lis = Array.from(this.querySelectorAll('li'));

    this.button = this.shadowRoot.querySelector('button');

    this.listToHide = lis.slice(this.limit);

    this._hide();

    this.button.addEventListener('click', this._onClick.bind(this));

  }

  connectedCallback() {

  }

  _onClick() {
    this._toggleExpanded();
  }

  _toggleExpanded() {
    if (!this.expanded) {
      this._show();
    } else {
      this._hide();
    }
  }

  _show() {
    this.listToHide.forEach(li => {
      li.classList.remove('visually-hidden');
    });
    this.setAttribute('expanded', '');

    if (this.txtButtonHide) {
      this.button.textContent = this.txtButtonHide;
    }

  }

  _hide() {
    this.listToHide.forEach(li => {
      li.classList.add('visually-hidden');
    });

    this.removeAttribute('expanded');

    if (this.txtButtonShow) {
      this.button.textContent = this.txtButtonShow;
    }
  }

  get limit() {
    return this.getAttribute('limit');
  }

  get txtButtonShow() {
    return this.getAttribute('more-btn-txt-show');
  }

  get txtButtonHide() {
    return this.getAttribute('more-btn-txt-hide');
  }

  set expanded(value) {
    value = Boolean(value);
    if (value)
      this.setAttribute('expanded', '');
    else
      this.removeAttribute('expanded');
  }

  get expanded() {
    return this.hasAttribute('expanded');
  }
}

customElements.define('expanding-list', ExpandingList);