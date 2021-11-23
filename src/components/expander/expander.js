// https://inclusive-components.design/collapsible-sections/

(function () {
  // Check for <template> support
  if ('content' in document.createElement('template')) {
    const tmpl = document.createElement('template');

    // Create the web component's template
    // featuring a <slot> for the light DOM content
    tmpl.innerHTML = `
      <span class="cor-expander--header">
        <button aria-expanded='false'>
          <svg aria-hidden='true' focusable='false' viewBox='0 0 16 16'>
            <path class="close" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"/>
            <path class="open" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
          </svg>
 
        </button>
      </span>
      <div class='content' hidden>
        <slot></slot>
      </div>
      <style>
        .cor-expander--header {
          margin: 0;
        }

        .cor-expander--header button {
          all: inherit;
          border: solid 2px var(--link-color);
          box-sizing: border-box;
          color: var(--link-color);
          cursor: pointer;
          display: flex;
          align-items: center;
          padding: var(--space-3xs);
        }

        .cor-expander--header button:focus {
          border-color: white;
          outline: 2px solid var(--oc-cyan-4);
        }

        button svg {
          height: 1em;
          margin-left: 0.5em;
        }


        [aria-expanded='true'] path.open {
          display: none;
        }

        [aria-expanded='true'] path.close {
          display: block;
        }

        [aria-expanded='false'] path.open {
          display: block;
        }

        [aria-expanded='false'] path.close {
          display: none;
        }

        [aria-expanded] path {
          fill: currentColor;
        }
      </style>
    `;

    // Check for latest Shadow DOM syntax suppport
    if (document.head.attachShadow) {
      class CorExpander extends HTMLElement {
        constructor() {
          super();

          // Make the host element a region
          this.setAttribute('role', 'region');

          // Create a `shadowroot`and populate from template
          this.attachShadow({ mode: 'open' });
          this.shadowRoot.appendChild(tmpl.content.cloneNode(true));

          // Assign the toggle button
          this.btn = this.shadowRoot.querySelector('span button');

          // Get the first element in light DOM
          // and cast its heading level (which should, but may not, exist)
          const oldHeading = this.querySelector(':first-child');
          let level = parseInt(oldHeading.tagName.substr(1));

          // Get the Shadow DOM <h3>
          this.heading = this.shadowRoot.querySelector('span');

          // If there is no level, there is no heading.
          // Add a warning
          if (!level) {
            console.warn(
              'The first element inside each <toggle-section> should be a heading of an appropriate level.'
            );
          }

          // If the level is a real integer and not 2
          // set `aria-level`accordingly
          if (level && level !== 2) {
            this.heading.setAttribute('aria-level', level);
          }

          // Add the light DOM heading label to the innerHTML of the toggle button
          // and remove the now unwanted Light DOM heading
          this.btn.innerHTML = oldHeading.textContent + this.btn.innerHTML;
          oldHeading.parentNode.removeChild(oldHeading);

          // The main state switching function
          this.switchState = () => {
            let expanded = this.getAttribute('open') === 'true' || false;

            // Toggle `aria-expanded`
            this.btn.setAttribute('aria-expanded', expanded);
            // Toggle the `.content` element's visibility
            this.shadowRoot.querySelector('.content').hidden = !expanded;
          };

          // Change the component's `open`attribute value on click
          // (which will, in turn, trigger switchState(), see below)
          this.btn.onclick = () => {
            this.setAttribute(
              'open',
              this.getAttribute('open') === 'true' ? 'false' : 'true'
            );
          };
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

      // Add our new custom element to the window for use
      window.customElements.define('cor-expander', CorExpander);

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
      const first = document.querySelector('toggle-section');
      const all = document.querySelectorAll('toggle-section');

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
    }
  }
})();
