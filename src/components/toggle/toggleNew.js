const tmpl = document.createElement('template');
tmpl.innerHTML = `
  <style>
    .toggle-heading {
      display: flex;
      padding: var(--toggle-heading-padding)
    }
  
    .toggle-heading button {
      all: inherit;
      align-items: center;
      box-sizing: border-box;
      color: var(--link-color);
      cursor: hover;
      display: flex;
      justify-content: space-between;
      width: 100%;
      padding: 0.5em 0;
    }

    .toggle-heading:hover {
      cursor:pointer;
    }

    .toggle-heading button:focus svg {
      outline: 2px solid var(--focus-color);
    }

    button svg {
      height: 1em;
      margin-left: 0.5em;
    }

    [aria-expanded='true'] .vert {
      display: none;
    }

    [aria-expanded] rect {
      fill: var(--link-color);
    }
  </style>
  <div class="toggle-heading">
    <button aria-expanded='false'>
      <slot name="toggle-heading">My default title</slot>

      <svg aria-hidden='true' focusable='false' viewBox='0 0 10 10'>
        <rect class='vert' height='8' width='2' y='1' x='4' />
        <rect height='2' width='8' y='4' x='1' />
      </svg>
    </button>
  </div>
  <div class='content' hidden>
    <slot name="toggle-content"></slot>
  </div>
`;

class CorToggle extends HTMLElement {
  constructor() {
    super();

    // Make the host element a region
    this.setAttribute('role', 'region');

    // Create a `shadowroot`and populate from template
    const shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.appendChild(tmpl.content.cloneNode(true));

    // Assign the toggle button
    this.btn = this.shadowRoot.querySelector('.toggle-heading');

    // Change the component's `open`attribute value on click
    // (which will, in turn, trigger switchState(), see below)
    this.btn.onclick = () => {
      this.setAttribute(
        'open',
        this.getAttribute('open') === 'true' ? 'false' : 'true'
      );
    };
  }

  switchState() {
    let expanded = this.getAttribute('open') === 'true' || false;

    // Toggle `aria-expanded`
    this.btn.setAttribute('aria-expanded', expanded);
    // Toggle the `.content` element's visibility
    this.shadowRoot.querySelector('.content').hidden = !expanded;
  }

  // Identify just the `open` attribute as an observed attribute
  static get observedAttributes() {
    return ['open'];
  }

  // When `open` changes value, execute switchState()
  attributeChangedCallback(name) {
    if (name === 'open') {
      this.switchState();
    }
  }
}

window.customElements.define('cor-toggle', CorToggle);

(function () {
  // Define the expand/collapse all template
  const buttons = document.createElement('div');
  buttons.innerHTML = `
    <ul class='toggle-section-controls' aria-label='section controls'>
      <li><button id='expand'>expand all</button></li>
      <li><button id='collapse'>collapse all</button></li>
    </ul>
  `;

  // Get the first `toggle-section` on the page
  // and all toggle sections as a node list
  const first = document.querySelector('cor-toggle');
  const all = document.querySelectorAll('cor-toggle');

  // Insert the button controls before the first <toggle-section>
  if (first) first.parentNode.insertBefore(buttons, first);

  // Place the click on the parent <ul> ...
  buttons.addEventListener('click', (e) => {
    // ... then determine which button was the target
    let expand = e.target.id === 'expand' ? true : false;

    // Iterate over the toggle sections to switch
    // each one's state uniformly
    Array.prototype.forEach.call(all, (t) => {
      t.setAttribute('open', expand);
    });
  });
})();