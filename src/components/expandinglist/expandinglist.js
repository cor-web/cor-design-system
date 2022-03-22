const template = document.createElement("template");
template.innerHTML = `
  <style>
    :host {
      display: grid;
    }
    button {
      align-content: center;
      display: inline-flex;
      gap: var(--space-2xs);
    }
    .cor-btn {
      background-color: white;
      border-radius: var(--button-border-radius);
      color: var(--button-background-color);
      font-weight: var(--button-font-weight);
      text-align: center;
      white-space: nowrap;
      vertical-align: middle;
      user-select: none;
      border: var(--button-border-width, 1px) solid var(--button-background-color);
      margin: var(--button-margin-y, var(--space-xs)) var(--button-margin-x, auto);
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
    .less svg {
      transform: rotate(0.5turn);
    }
  </style>
  <slot></slot>
  <button class="cor-btn more" aria-hidden="true">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
    </svg> 
    <span>Read More</span>
  </button>
`;

class ExpandingList extends HTMLElement {
  constructor() {
    super();

    this.sliceStart = 0;
    this.sliceEnd = this.slice;

    const selector = this.selector
      ? this.querySelector(this.selector).children
      : this.children[0].children;

    // if (!selector) debugger;
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    // Get li elements
    const lis = Array.from(selector);

    this.button = this.shadowRoot.querySelector("button");
    this.button.content = this.shadowRoot.querySelector("button span");

    if (lis.length <= this.limit) this.button.remove();

    this.listToHide = lis.slice(this.limit);

    this._hide();

    this.button.addEventListener("click", this._onClick.bind(this));

    this.focusableElements = Array.from(this.querySelectorAll("li a"));
    this.focusableElements.forEach((focusableElement) => {
      focusableElement.addEventListener("focus", (event) => {
        this._onFocusin(event.target);
      });
    });
  }

  connectedCallback() {}

  _checkVisibleElements() {
    if (this.querySelectorAll(".visually-hidden").length === 0) {
      this.setAttribute("expanded", "");

      if (this.txtButtonHide) {
        this.changeTextButton(this.txtButtonHide);
      }
    }
  }

  _onFocusin(focusedElement) {
    if (focusedElement.closest(".visually-hidden")) {
      focusedElement
        .closest(".visually-hidden")
        .classList.remove("visually-hidden");
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
    const elementsToShow = this.slice
      ? this.listToHide.slice(this.sliceStart, this.sliceEnd)
      : this.listToHide;

    elementsToShow.forEach((li) => {
      li.classList.remove("visually-hidden");
      this.sliceStart++;
      this.sliceEnd++;
    });

    this.listToHide[0].focus();

    if (this.listToHide.length === this.sliceEnd - this.slice) {
      if (this.txtButtonHide) {
        this.changeTextButton(this.txtButtonHide);
      }
      this.setAttribute("expanded", "");
      this.button.classList.add("less");
    }
  }

  _hide() {
    this.listToHide.forEach((li) => {
      li.classList.add("visually-hidden");
    });

    this.removeAttribute("expanded");
    this.button.classList.remove("less");

    // window.scrollTo(0, this.offsetTop);

    this.sliceStart = 0;
    this.sliceEnd = this.slice;

    if (this.txtButtonShow) {
      this.changeTextButton(this.txtButtonShow);
    }
  }

  get limit() {
    return Number(this.getAttribute("limit"));
  }

  get slice() {
    return Number(this.getAttribute("slice"));
  }

  get selector() {
    return this.getAttribute("selector");
  }

  get txtButtonShow() {
    return this.getAttribute("more-btn-txt-show");
  }

  get txtButtonHide() {
    return this.getAttribute("more-btn-txt-hide");
  }

  changeTextButton(newText) {
    if (newText) this.button.querySelector("span").textContent = newText;
  }

  set expanded(value) {
    value = Boolean(value);
    if (value) this.setAttribute("expanded", "");
    else this.removeAttribute("expanded");
  }

  get expanded() {
    return this.hasAttribute("expanded");
  }
}

if (!customElements.get("cor-expanding-list")) {
  customElements.define("cor-expanding-list", ExpandingList);
}

class CorExpandingLists extends HTMLElement {
  constructor() {
    super();
    const lists = this.querySelectorAll(this.selector);
    [...lists].map((list) => {
      list.insertAdjacentHTML(
        "afterend",
        `<cor-expanding-list ${[...this.attributes].map(
          (attribute) => ` ${attribute.nodeName}="${attribute.nodeValue}"`
        )}>${list.outerHTML}</cor-expanding-list>`
      );
      list.remove();
      // list.nextSibling.appendChild(list);
    });
  }

  get selector() {
    return this.getAttribute("selector");
  }
}

if (!customElements.get("cor-expanding-lists")) {
  customElements.define("cor-expanding-lists", CorExpandingLists);
}
