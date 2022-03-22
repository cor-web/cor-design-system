/* Version: 0.1.119 - February 11, 2022 17:29:36 */
!function() {
    !function() {
        if ('content'in document.createElement('template')) {
            const t = document.createElement('template');
            if (t.innerHTML = '\n      <span class="cor-expander--header">\n        <button aria-expanded=\'false\'>\n          <svg aria-hidden=\'true\' focusable=\'false\' viewBox=\'0 0 16 16\'>\n            <path class="close" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"/>\n            <path class="open" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>\n          </svg>\n \n        </button>\n      </span>\n      <div class=\'content\' hidden>\n        <slot></slot>\n      </div>\n      <style>\n        .cor-expander--header {\n          margin: 0;\n        }\n\n        .cor-expander--header button {\n          all: inherit;\n          border: solid 2px var(--link-color);\n          box-sizing: border-box;\n          color: var(--link-color);\n          cursor: pointer;\n          display: flex;\n          align-items: center;\n          padding: var(--space-3xs);\n        }\n\n        .cor-expander--header button:focus {\n          border-color: white;\n          outline: 2px solid var(--focus-color);\n        }\n\n        button svg {\n          height: 1em;\n          margin-left: 0.5em;\n        }\n\n\n        [aria-expanded=\'true\'] path.open {\n          display: none;\n        }\n\n        [aria-expanded=\'true\'] path.close {\n          display: block;\n        }\n\n        [aria-expanded=\'false\'] path.open {\n          display: block;\n        }\n\n        [aria-expanded=\'false\'] path.close {\n          display: none;\n        }\n\n        [aria-expanded] path {\n          fill: currentColor;\n        }\n      </style>\n    ',
            document.head.attachShadow) {
                class n extends HTMLElement {
                    constructor() {
                        super(),
                        this.setAttribute('role', 'region'),
                        this.attachShadow({
                            mode: 'open'
                        }),
                        this.shadowRoot.appendChild(t.content.cloneNode(!0)),
                        this.btn = this.shadowRoot.querySelector('span button');
                        const n = this.querySelector(':first-child');
                        this.heading = this.shadowRoot.querySelector('span'),
                        this.btn.innerHTML = n.textContent + this.btn.innerHTML,
                        n.parentNode.removeChild(n),
                        this.switchState = ()=>{
                            let t = 'true' === this.getAttribute('open') || !1;
                            this.btn.setAttribute('aria-expanded', t),
                            this.shadowRoot.querySelector('.content').hidden = !t
                        }
                        ,
                        this.btn.onclick = ()=>{
                            this.setAttribute('open', 'true' === this.getAttribute('open') ? 'false' : 'true')
                        }
                    }
                    static get observedAttributes() {
                        return ['open']
                    }
                    attributeChangedCallback(t) {
                        'open' === t && this.switchState()
                    }
                }
                window.customElements.define('cor-expander', n)
            }
        }
    }();
    class t extends HTMLElement {
        constructor() {
            super(),
            this.root = this.attachShadow({
                mode: 'open'
            }),
            this.render()
        }
        getSections() {
            const t = document.querySelectorAll('.cor-container h2[id],.cor-container h3[id],.cor-rich-text h2');
            return this.sections = [...t].map(((t,n)=>(t.classList.add('cor-anchor'),
            t.id || (t.id = n),
            {
                id: t.id,
                title: t.textContent
            }))),
            this.sections
        }
        render() {
            this.sections = this.getSections(),
            this.root.innerHTML = `\n      <style>\n        ul {\n          display: grid;\n          gap: var(--space-4xs);\n          margin: var(--space-3xs) 0 0 1rem;\n          padding: 0;\n        }\n        \n        ul > li {\n          list-style-position: outside;\n          list-style-type: disc;\n          line-height: initial;\n        }\n        \n        h2 {\n          color: var(--g-8);\n          font-size: var(--step--3) !important;\n          font-weight: bold;\n          text-transform: initial;\n          margin: 0 0 var(--space--4xs) 0;\n        }\n        \n        a {\n          font-size: var(--step--4);\n          text-decoration: underline;\n          margin-top: var(--space-4xs, 1rem);\n        }\n        a:link,\n        a:focus,\n        a:visited,\n        a:active {\n          color: var(--link-color);\n        }\n        a:hover {\n          text-decoration: underline;\n        }\n      \n        :host {\n          display: block;\n        }\n        .readingSection {\n          \n        }\n      </style>\n      <nav class="cor-toc cor-toc--sticky" aria-labelledby="sections-heading">\n        <h2 id="sections-heading"><slot name="toc-title">Contents</slot></h2>\n        <ul class="list-disc">\n          ${this.sections.map((t=>`\n            <li>\n              <a href="#${t.id}">${t.title}</a>\n            </li>\n          `)).join('')}\n        </ul>\n      </nav>\n    `
        }
    }
    customElements.get('cor-toc') || customElements.define('cor-toc', t),
    function() {
        if ('content'in document.createElement('template')) {
            const t = document.createElement('template');
            if (t.innerHTML = '\n      <h3>\n        <button aria-expanded=\'false\'>\n          <svg aria-hidden=\'true\' focusable=\'false\' viewBox=\'0 0 10 10\'>\n            <rect class=\'vert\' height=\'8\' width=\'2\' y=\'1\' x=\'4\' />\n            <rect height=\'2\' width=\'8\' y=\'4\' x=\'1\' />\n          </svg>\n        </button>\n      </h3>\n      <div class=\'content\' hidden>\n        <slot></slot>\n      </div>\n      <style>\n        h3 {\n          margin: 0;\n        }\n\n        h3 button {\n          all: inherit;\n          align-items: center;\n          box-sizing: border-box;\n          color: var(--link-color);\n          cursor: hover;\n          display: flex;\n          justify-content: space-between;\n          width: 100%;\n          padding: 0.5em 0;\n        }\n\n        h3 button:hover {\n          cursor:pointer;\n        }\n        \n        h3 button:focus svg {\n          outline: 2px solid var(--focus-color);\n        }\n\n        button svg {\n          height: 1em;\n          margin-left: 0.5em;\n        }\n\n        [aria-expanded=\'true\'] .vert {\n          display: none;\n        }\n\n        [aria-expanded] rect {\n          fill: var(--link-color);\n        }\n      </style>\n    ',
            document.head.attachShadow) {
                class n extends HTMLElement {
                    constructor() {
                        super(),
                        this.setAttribute('role', 'region'),
                        this.attachShadow({
                            mode: 'open'
                        }),
                        this.shadowRoot.appendChild(t.content.cloneNode(!0)),
                        this.btn = this.shadowRoot.querySelector('h3 button');
                        const n = this.querySelector(':first-child');
                        let e = parseInt(n.tagName.substr(1));
                        this.heading = this.shadowRoot.querySelector('h3'),
                        e || console.warn('The first element inside each <toggle-section> should be a heading of an appropriate level.'),
                        e && 2 !== e && this.heading.setAttribute('aria-level', e),
                        this.btn.innerHTML = n.textContent + this.btn.innerHTML,
                        n.parentNode.removeChild(n),
                        this.switchState = ()=>{
                            let t = 'true' === this.getAttribute('open') || !1;
                            this.btn.setAttribute('aria-expanded', t),
                            this.shadowRoot.querySelector('.content').hidden = !t
                        }
                        ,
                        this.btn.onclick = ()=>{
                            this.setAttribute('open', 'true' === this.getAttribute('open') ? 'false' : 'true')
                        }
                    }
                    static get observedAttributes() {
                        return ['open']
                    }
                    attributeChangedCallback(t) {
                        'open' === t && this.switchState()
                    }
                }
                window.customElements.define('toggle-section', n);
                const e = document.createElement('div');
                e.innerHTML = '\n        <ul class=\'toggle-section-controls\' aria-label=\'section controls\'>\n          <li><button id=\'expand\'>expand all</button></li>\n          <li><button id=\'collapse\'>collapse all</button></li>\n        </ul>\n      ';
                const o = document.querySelector('toggle-section')
                  , i = document.querySelectorAll('toggle-section');
                o && o.parentNode.insertBefore(e, o),
                e.addEventListener('click', (t=>{
                    let n = 'expand' === t.target.id;
                    Array.prototype.forEach.call(i, (t=>{
                        t.setAttribute('open', n)
                    }
                    ))
                }
                ))
            }
        }
    }()
}();