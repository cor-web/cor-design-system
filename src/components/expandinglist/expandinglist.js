const template = document.createElement('template');
template.innerHTML = `
  <style>
    :host {
      display: grid;
    }

    .cor-btn {
      background-color: white;
      border-radius: var(--button-border-radius);
      color: var(--button-background-color);
      display: inline-block;
      font-weight: var(--button-font-weight);
      text-align: center;
      white-space: nowrap;
      vertical-align: middle;
      user-select: none;
      border: var(--button-border-width, 1px) solid var(--button-background-color);
      margin: 0 auto;
      padding: var(--button-padding-y) var(--button-padding-x);
    }

    .cor-btn:hover {
      color: var(--button-color-hover);
      background-color: var(--button-background-color-hover);
      border-color: var(--button-border-color-hover);
    }
    
    .cor-btn:focus {
      outline: 0;
      box-shadow: var(--button-focus-box-shadow);
      text-decoration: none;
    }
    
    .cor-btn:disabled {
      opacity: var(--button-disabled-opacity);
      box-shadow: none;
    }
    
    .cor-btn:not(:disabled):not(.disabled) {
      cursor: pointer;
    }

    .cor-btn:not(:disabled):not(.disabled):active {
      background-image: none;
      box-shadow: var(--button-active-box-shadow);
    }

    .cor-btn:not(:disabled):not(.disabled):active :focus {
      box-shadow: var(--button-focus-box-shadow) var(--button-active-box-shadow);
    }

  </style>
  <slot></slot>
  <button class="cor-btn" aria-hidden="true">Read More</button>
`;

class ExpandingList extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    // Get li elements 
    const lis = Array.from(this.children[0].children);

    this.button = this.shadowRoot.querySelector('button');

    this.listToHide = lis.slice(this.limit);

    this._hide();

    this.button.addEventListener('click', this._onClick.bind(this));

    this.focusableElements = Array.from(this.querySelectorAll('li a'));
    this.focusableElements.forEach(focusableElement => {
      focusableElement.addEventListener('focus', (event) => {
        this._onFocusin(event.target);
      });
    });

  }

  connectedCallback() {

  }

  _checkVisibleElements() {
    if (this.querySelectorAll('.visually-hidden').length === 0) {

      this.setAttribute('expanded', '');

      if (this.txtButtonHide) {
        this.button.textContent = this.txtButtonHide;
      }
    }
  }

  _onFocusin(focusedElement) {

    if (focusedElement.closest('.visually-hidden')) {
      focusedElement.closest('.visually-hidden').classList.remove('visually-hidden');
      this._checkVisibleElements();
    }
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
    this.listToHide[0].focus();
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

if (!customElements.get('cor-expanding-list')) {
  customElements.define('cor-expanding-list', ExpandingList);
}