/* Version: 0.1.77 - August 16, 2021 15:32:52 */
!function(){class n extends HTMLElement{constructor(){super();const n=this.attachShadow({mode:'open'}),t=document.querySelectorAll('h2[id],h3[id],.cor-rich-text h2');this.sections=[...t].map(((n,t)=>(n.classList.add('cor-anchor'),n.id||(n.id=t),{id:n.id,title:n.textContent}))),n.innerHTML=`\n      <style>\n        ul {\n          display: grid;\n          gap: var(--space-3xs);\n          margin: var(--space-3xs) 0 0 1rem;\n          padding: 0;\n        }\n        \n        ul > li {\n          list-style-position: outside;\n          list-style-type: disc;\n          padding-left: var(--space-3xs);\n        }\n        \n        h2 {\n          color: var(--g-8);\n          font-size: var(--step-0) !important;\n          font-weight: normal;\n          text-transform: initial;\n          margin: 0 0 var(--space--4xs) 0;\n        }\n        \n        a {\n          font-size: var(--step--3);\n          text-decoration: none;\n          margin-top: var(--space-4xs, 1rem);\n        }\n\n        a:link,\n        a:focus,\n        a:visited,\n        a:active {\n          color: var(--link-color);\n        }\n\n        a:hover {\n          text-decoration: underline;\n        }\n      \n        :host {\n          display: block;\n        }\n\n        .readingSection {\n          \n        }\n      </style>\n      <nav class="cor-toc cor-toc--sticky" aria-labelledby="sections-heading">\n        <h2 id="sections-heading"><slot name="toc-title">Contents</slot></h2>\n        <ul class="list-disc">\n          ${this.sections.map((n=>`\n            <li>\n              <a href="#${n.id}">${n.title}</a>\n            </li>\n          `)).join('')}\n        </ul>\n      </nav>\n    `}}customElements.get('cor-toc')||customElements.define('cor-toc',n)}();
