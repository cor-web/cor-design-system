/* Version: 0.1.70 - July 27, 2021 09:38:09 */
!function(){class t extends HTMLElement{constructor(){super();const t=this.attachShadow({mode:'open'}),e=document.querySelectorAll('h2[id],h3[id],.cor-rich-text h2');this.sections=[...e].map(((t,e)=>(t.classList.add('cor-anchor'),t.id||(t.id=e),{id:t.id,title:t.textContent}))),t.innerHTML=`\n      <style>\n        ul {\n          display: grid;\n          gap: var(--space-3xs);\n          margin: var(--space-3xs) 0 0 1rem;\n          padding: 0;\n        }\n        \n        ul > li {\n          list-style-position: outside;\n          list-style-type: disc;\n          padding-left: var(--space-3xs);\n        }\n        \n        h2 {\n          color: var(--g-8);\n          font-size: var(--step-0) !important;\n          font-weight: normal;\n          text-transform: initial;\n          margin: 0 0 var(--space--4xs) 0;\n        }\n        \n        a {\n          font-size: var(--step--3);\n          text-decoration: none;\n          margin-top: var(--space-4xs, 1rem);\n        }\n\n        a:link,\n        a:focus,\n        a:visited,\n        a:active {\n          color: var(--link-color);\n        }\n\n        a:hover {\n          text-decoration: underline;\n        }\n      \n        :host {\n          display: block;\n        }\n\n        .readingSection {\n          \n        }\n      </style>\n      <nav class="cor-toc cor-toc--sticky" aria-labelledby="sections-heading">\n        <h2 id="sections-heading"><slot name="toc-title">Contents</slot></h2>\n        <ul class="list-disc">\n          ${this.sections.map((t=>`\n            <li>\n              <a href="#${t.id}">${t.title}</a>\n            </li>\n          `)).join('')}\n        </ul>\n      </nav>\n    `;const n=e,i=t.querySelectorAll('a');this.sections.map((t=>{const e=[...n].find((e=>e.id===t.id)),s=[...i].find((e=>-1!==e.href.indexOf(`#${t.id}`)));this.observe(e,s)}))}observe(t,e){new IntersectionObserver(((t,n)=>{t.forEach((t=>{t.isIntersecting?e.classList.add('readingSection'):e.classList.remove('readingSection')}))})).observe(t)}}customElements.get('cor-toc')||customElements.define('cor-toc',t);class e extends HTMLElement{constructor(){super(),this.render=()=>{if(this.i=`Switcher-${[this.threshold,this.space,this.limit].join('')}`,this.dataset.i=this.i,!document.getElementById(this.i)){let t=document.createElement('style');t.id=this.i,t.innerHTML=`\n          [data-i="${this.i}"] {\n            gap: ${this.space};\n          }\n\n          [data-i="${this.i}"] > * {\n            flex-basis: calc((${this.threshold} - 100%) * 999);\n          }\n\n          [data-i="${this.i}"] > :nth-last-child(n+${parseInt(this.limit)+1}),\n          [data-i="${this.i}"] > :nth-last-child(n+${parseInt(this.limit)+1}) ~ * {\n            flex-basis: 100%;\n          }\n        `.replace(/\s\s+/g,' ').trim(),document.head.appendChild(t)}}}get threshold(){return this.getAttribute('threshold')||'var(--measure)'}set threshold(t){return this.setAttribute('threshold',t)}get space(){return this.getAttribute('space')||'var(--s1)'}set space(t){return this.setAttribute('space',t)}get limit(){return this.getAttribute('limit')||'5'}set limit(t){return this.getAttribute('limit',t)}static get observedAttributes(){return['threshold','space','limit']}connectedCallback(){this.render()}attributeChangedCallback(){this.render()}}'customElements'in window&&customElements.define('cor-switcher-l',e);var n=document.querySelectorAll('li.has-submenu');Array.prototype.forEach.call(n,(function(t,e){t.addEventListener('mouseover',(function(t){this.className='has-submenu open',clearTimeout(timer)})),t.addEventListener('mouseout',(t=>{setTimeout((t=>{document.querySelector('.has-submenu.open').className='has-submenu'}),1e3)}))})),function(){if('content'in document.createElement('template')){const t=document.createElement('template');if(t.innerHTML='\n      <h3>\n        <button aria-expanded="false">\n          <svg aria-hidden="true" focusable="false" viewBox="0 0 10 10">\n            <rect class="vert" height="8" width="2" y="1" x="4" />\n            <rect height="2" width="8" y="4" x="1" />\n          </svg>\n        </button>\n      </h3>\n      <div class="content" hidden>\n        <slot></slot>\n      </div>\n      <style>\n        h3 {\n          margin: 0;\n        }\n\n        h3 button {\n          all: inherit;\n          box-sizing: border-box;\n          cursor: hover;\n          display: flex;\n          justify-content: space-between;\n          width: 100%;\n          padding: 0.5em 0;\n        }\n\n        h3 button:focus svg {\n          outline: 2px solid;\n        }\n\n        button svg {\n          height: 1em;\n          margin-left: 0.5em;\n        }\n\n        [aria-expanded="true"] .vert {\n          display: none;\n        }\n\n        [aria-expanded] rect {\n          fill: currentColor;\n        }\n      </style>\n    ',document.head.attachShadow){class e extends HTMLElement{constructor(){super(),this.setAttribute('role','region'),this.attachShadow({mode:'open'}),this.shadowRoot.appendChild(t.content.cloneNode(!0)),this.btn=this.shadowRoot.querySelector('h3 button');const e=this.querySelector(':first-child');let n=parseInt(e.tagName.substr(1));this.heading=this.shadowRoot.querySelector('h3'),n||console.warn('The first element inside each <toggle-section> should be a heading of an appropriate level.'),n&&2!==n&&this.heading.setAttribute('aria-level',n),this.btn.innerHTML=e.textContent+this.btn.innerHTML,e.parentNode.removeChild(e),this.switchState=()=>{let t='true'===this.getAttribute('open')||!1;this.btn.setAttribute('aria-expanded',t),this.shadowRoot.querySelector('.content').hidden=!t},this.btn.onclick=()=>{this.setAttribute('open','true'===this.getAttribute('open')?'false':'true')}}static get observedAttributes(){return['open']}attributeChangedCallback(t){'open'===t&&this.switchState()}}window.customElements.define('toggle-section',e);const n=document.createElement('div');n.innerHTML='\n        <ul class="toggle-section-controls" aria-label="section controls">\n          <li><button id="expand">expand all</button></li>\n          <li><button id="collapse">collapse all</button></li>\n        </ul>\n      ';const i=document.querySelector('toggle-section'),s=document.querySelectorAll('toggle-section');i.parentNode.insertBefore(n,i),n.addEventListener('click',(t=>{let e='expand'===t.target.id;Array.prototype.forEach.call(s,(t=>{t.setAttribute('open',e)}))}))}}}()}();
