/* Version: 0.1.110 - November 19, 2021 16:19:25 */
!function(){class t extends HTMLElement{constructor(){super(),this.root=this.attachShadow({mode:'open'}),this.render()}getSections(){const t=document.querySelectorAll('.cor-container h2[id],.cor-container h3[id],.cor-rich-text h2');return this.sections=[...t].map(((t,e)=>(t.classList.add('cor-anchor'),t.id||(t.id=e),{id:t.id,title:t.textContent}))),this.sections}render(){this.sections=this.getSections(),this.root.innerHTML=`\n      <style>\n        ul {\n          display: grid;\n          gap: var(--space-4xs);\n          margin: var(--space-3xs) 0 0 1rem;\n          padding: 0;\n        }\n        \n        ul > li {\n          list-style-position: outside;\n          list-style-type: disc;\n          padding-left: var(--space-3xs);\n        }\n        \n        h2 {\n          color: var(--g-8);\n          font-size: var(--step--3) !important;\n          font-weight: bold;\n          text-transform: initial;\n          margin: 0 0 var(--space--4xs) 0;\n        }\n        \n        a {\n          font-size: var(--step--3);\n          text-decoration: underline;\n          margin-top: var(--space-4xs, 1rem);\n        }\n        a:link,\n        a:focus,\n        a:visited,\n        a:active {\n          color: var(--link-color);\n        }\n        a:hover {\n          text-decoration: underline;\n        }\n      \n        :host {\n          display: block;\n        }\n        .readingSection {\n          \n        }\n      </style>\n      <nav class="cor-toc cor-toc--sticky" aria-labelledby="sections-heading">\n        <h2 id="sections-heading"><slot name="toc-title">Contents</slot></h2>\n        <ul class="list-disc">\n          ${this.sections.map((t=>`\n            <li>\n              <a href="#${t.id}">${t.title}</a>\n            </li>\n          `)).join('')}\n        </ul>\n      </nav>\n    `}}customElements.get('cor-toc')||customElements.define('cor-toc',t),function(){if('content'in document.createElement('template')){const t=document.createElement('template');if(t.innerHTML='\n      <h3>\n        <button aria-expanded=\'false\'>\n          <svg aria-hidden=\'true\' focusable=\'false\' viewBox=\'0 0 10 10\'>\n            <rect class=\'vert\' height=\'8\' width=\'2\' y=\'1\' x=\'4\' />\n            <rect height=\'2\' width=\'8\' y=\'4\' x=\'1\' />\n          </svg>\n        </button>\n      </h3>\n      <div class=\'content\' hidden>\n        <slot></slot>\n      </div>\n      <style>\n        h3 {\n          margin: 0;\n        }\n\n        h3 button {\n          all: inherit;\n          box-sizing: border-box;\n          cursor: hover;\n          display: flex;\n          justify-content: space-between;\n          width: 100%;\n          padding: 0.5em 0;\n        }\n\n        h3 button:focus svg {\n          outline: 2px solid;\n        }\n\n        button svg {\n          height: 1em;\n          margin-left: 0.5em;\n        }\n\n        [aria-expanded=\'true\'] .vert {\n          display: none;\n        }\n\n        [aria-expanded] rect {\n          fill: currentColor;\n        }\n      </style>\n    ',document.head.attachShadow){class e extends HTMLElement{constructor(){super(),this.setAttribute('role','region'),this.attachShadow({mode:'open'}),this.shadowRoot.appendChild(t.content.cloneNode(!0)),this.btn=this.shadowRoot.querySelector('h3 button');const e=this.querySelector(':first-child');let n=parseInt(e.tagName.substr(1));this.heading=this.shadowRoot.querySelector('h3'),n||console.warn('The first element inside each <toggle-section> should be a heading of an appropriate level.'),n&&2!==n&&this.heading.setAttribute('aria-level',n),this.btn.innerHTML=e.textContent+this.btn.innerHTML,e.parentNode.removeChild(e),this.switchState=()=>{let t='true'===this.getAttribute('open')||!1;this.btn.setAttribute('aria-expanded',t),this.shadowRoot.querySelector('.content').hidden=!t},this.btn.onclick=()=>{this.setAttribute('open','true'===this.getAttribute('open')?'false':'true')}}static get observedAttributes(){return['open']}attributeChangedCallback(t){'open'===t&&this.switchState()}}window.customElements.define('toggle-section',e);const n=document.createElement('div');n.innerHTML='\n        <ul class=\'toggle-section-controls\' aria-label=\'section controls\'>\n          <li><button id=\'expand\'>expand all</button></li>\n          <li><button id=\'collapse\'>collapse all</button></li>\n        </ul>\n      ';const i=document.querySelector('toggle-section'),o=document.querySelectorAll('toggle-section');i&&i.parentNode.insertBefore(n,i),n.addEventListener('click',(t=>{let e='expand'===t.target.id;Array.prototype.forEach.call(o,(t=>{t.setAttribute('open',e)}))}))}}}()}();
