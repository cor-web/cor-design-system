/* Version: 0.1.126 - March 14, 2022 10:50:55 */
!function(){!function(){if('content'in document.createElement('template')){const t=document.createElement('template');if(t.innerHTML='\n      <span class="cor-expander--header">\n        <button aria-expanded=\'false\'>\n          <svg aria-hidden=\'true\' focusable=\'false\' viewBox=\'0 0 16 16\'>\n            <path class="close" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"/>\n            <path class="open" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>\n          </svg>\n \n        </button>\n      </span>\n      <div class=\'content\' hidden>\n        <slot></slot>\n      </div>\n      <style>\n        .cor-expander--header {\n          margin: 0;\n        }\n\n        .cor-expander--header button {\n          all: inherit;\n          border: solid 2px var(--link-color);\n          box-sizing: border-box;\n          color: var(--link-color);\n          cursor: pointer;\n          display: flex;\n          align-items: center;\n          padding: var(--space-3xs);\n        }\n\n        .cor-expander--header button:focus {\n          border-color: white;\n          outline: 2px solid var(--focus-color);\n        }\n\n        button svg {\n          height: 1em;\n          margin-left: 0.5em;\n        }\n\n\n        [aria-expanded=\'true\'] path.open {\n          display: none;\n        }\n\n        [aria-expanded=\'true\'] path.close {\n          display: block;\n        }\n\n        [aria-expanded=\'false\'] path.open {\n          display: block;\n        }\n\n        [aria-expanded=\'false\'] path.close {\n          display: none;\n        }\n\n        [aria-expanded] path {\n          fill: currentColor;\n        }\n      </style>\n    ',document.head.attachShadow){class e extends HTMLElement{constructor(){super(),this.setAttribute('role','region'),this.attachShadow({mode:'open'}),this.shadowRoot.appendChild(t.content.cloneNode(!0)),this.btn=this.shadowRoot.querySelector('span button');const e=this.querySelector(':first-child');this.heading=this.shadowRoot.querySelector('span'),this.btn.innerHTML=e.textContent+this.btn.innerHTML,e.parentNode.removeChild(e),this.switchState=()=>{let t='true'===this.getAttribute('open')||!1;this.btn.setAttribute('aria-expanded',t),this.shadowRoot.querySelector('.content').hidden=!t},this.btn.onclick=()=>{this.setAttribute('open','true'===this.getAttribute('open')?'false':'true')}}static get observedAttributes(){return['open']}attributeChangedCallback(t){'open'===t&&this.switchState()}}window.customElements.define('cor-expander',e)}}}();const t=document.createElement('template');t.innerHTML='\n  <style>\n    :host {\n      display: grid;\n    }\n\n    .cor-btn {\n      background-color: white;\n      border-radius: var(--button-border-radius);\n      color: var(--button-background-color);\n      display: inline-block;\n      font-weight: var(--button-font-weight);\n      text-align: center;\n      white-space: nowrap;\n      vertical-align: middle;\n      user-select: none;\n      border: var(--button-border-width, 1px) solid var(--button-background-color);\n      margin: var(--button-margin-y, var(--space-xs)) var(--button-margin-x, auto);\n      padding: var(--button-padding-y) var(--button-padding-x);\n    }\n\n    .cor-btn:hover {\n      color: var(--button-color-hover);\n      background-color: var(--button-background-color-hover);\n      border-color: var(--button-border-color-hover);\n    }\n    \n    .cor-btn:focus {\n      outline: 0;\n      box-shadow: var(--button-focus-box-shadow);\n      text-decoration: none;\n    }\n    \n    .cor-btn:disabled {\n      opacity: var(--button-disabled-opacity);\n      box-shadow: none;\n    }\n    \n    .cor-btn:not(:disabled):not(.disabled) {\n      cursor: pointer;\n    }\n\n    .cor-btn:not(:disabled):not(.disabled):active {\n      background-image: none;\n      box-shadow: var(--button-active-box-shadow);\n    }\n\n    .cor-btn:not(:disabled):not(.disabled):active :focus {\n      box-shadow: var(--button-focus-box-shadow) var(--button-active-box-shadow);\n    }\n\n  </style>\n  <slot></slot>\n\n  <button class="cor-btn" aria-hidden="true">Read More</button>\n';class e extends HTMLElement{constructor(){super(),this.sliceStart=0,this.sliceEnd=this.slice;const e=this.selector?this.querySelectorAll(this.selector):this.children[0].children;this.attachShadow({mode:'open'}),this.shadowRoot.appendChild(t.content.cloneNode(!0));const n=Array.from(e);this.button=this.shadowRoot.querySelector('button'),n.length<=this.limit&&this.button.remove(),this.listToHide=n.slice(this.limit),this._hide(),this.button.addEventListener('click',this._onClick.bind(this)),this.focusableElements=Array.from(this.querySelectorAll('li a')),this.focusableElements.forEach((t=>{t.addEventListener('focus',(t=>{this._onFocusin(t.target)}))}))}connectedCallback(){}_checkVisibleElements(){0===this.querySelectorAll('.visually-hidden').length&&(this.setAttribute('expanded',''),this.txtButtonHide&&(this.button.textContent=this.txtButtonHide))}_onFocusin(t){t.closest('.visually-hidden')&&(t.closest('.visually-hidden').classList.remove('visually-hidden'),this._checkVisibleElements())}_onClick(){this._toggleExpanded()}_toggleExpanded(){this.expanded?this._hide():this._show()}_show(){(this.slice?this.listToHide.slice(this.sliceStart,this.sliceEnd):this.listToHide).forEach((t=>{t.classList.remove('visually-hidden'),this.sliceStart++,this.sliceEnd++})),this.listToHide[0].focus(),this.listToHide.length===this.sliceEnd-this.slice&&(this.txtButtonHide&&(this.button.textContent=this.txtButtonHide),this.setAttribute('expanded',''))}_hide(){this.listToHide.forEach((t=>{t.classList.add('visually-hidden')})),this.removeAttribute('expanded'),this.sliceStart=0,this.sliceEnd=this.slice,this.txtButtonShow&&(this.button.textContent=this.txtButtonShow)}get limit(){return Number(this.getAttribute('limit'))}get slice(){return Number(this.getAttribute('slice'))}get selector(){return this.getAttribute('selector')}get txtButtonShow(){return this.getAttribute('more-btn-txt-show')}get txtButtonHide(){return this.getAttribute('more-btn-txt-hide')}set expanded(t){(t=Boolean(t))?this.setAttribute('expanded',''):this.removeAttribute('expanded')}get expanded(){return this.hasAttribute('expanded')}}customElements.get('cor-expanding-list')||customElements.define('cor-expanding-list',e);class n extends HTMLElement{constructor(){super(),this.root=this.attachShadow({mode:'open'}),this.render()}getSections(){const t=document.querySelectorAll('.cor-container h2[id],.cor-container h3[id],.cor-rich-text h2');return this.sections=[...t].map(((t,e)=>(t.classList.add('cor-anchor'),t.id||(t.id=e),{id:t.id,title:t.textContent}))),this.sections}render(){this.sections=this.getSections(),this.root.innerHTML=`\n      <style>\n        ul {\n          display: grid;\n          gap: var(--space-4xs);\n          margin: var(--space-3xs) 0 0 1rem;\n          padding: 0;\n        }\n        \n        ul > li {\n          list-style-position: outside;\n          list-style-type: disc;\n          line-height: initial;\n        }\n        \n        h2 {\n          color: var(--g-8);\n          font-size: var(--step--3) !important;\n          font-weight: bold;\n          text-transform: initial;\n          margin: 0 0 var(--space--4xs) 0;\n        }\n        \n        a {\n          font-size: var(--step--4);\n          text-decoration: underline;\n          margin-top: var(--space-4xs, 1rem);\n          outline: 2px solid transparent;\n          outline-offset: 5px;\n          transition: outline-offset 0.2s linear;\n        }\n        \n        a:hover {\n          text-decoration: none;\n        }\n\n        a:link,\n        a:focus,\n        a:visited,\n        a:active {\n          color: var(--link-color);\n        }\n\n        a:active {\n          color: #fff;\n          background-color: #024;\n        }\n\n        a:focus {\n          outline-color: currentColor;\n          outline-offset: 2px;\n        }\n      \n        :host {\n          display: block;\n        }\n        .readingSection {\n          \n        }\n      </style>\n      <nav class="cor-toc cor-toc--sticky" aria-labelledby="sections-heading">\n        <h2 id="sections-heading"><slot name="toc-title">Contents</slot></h2>\n        <ul class="list-disc">\n          ${this.sections.map((t=>`\n            <li>\n              <a href="#${t.id}">${t.title}</a>\n            </li>\n          `)).join('')}\n        </ul>\n      </nav>\n    `}}customElements.get('cor-toc')||customElements.define('cor-toc',n),function(){if('content'in document.createElement('template')){const t=document.createElement('template');if(t.innerHTML='\n      <h3>\n        <button aria-expanded=\'false\'>\n          <svg aria-hidden=\'true\' focusable=\'false\' viewBox=\'0 0 10 10\'>\n            <rect class=\'vert\' height=\'8\' width=\'2\' y=\'1\' x=\'4\' />\n            <rect height=\'2\' width=\'8\' y=\'4\' x=\'1\' />\n          </svg>\n        </button>\n      </h3>\n      <div class=\'content\' hidden>\n        <slot></slot>\n      </div>\n      <style>\n        h3 {\n          margin: 0;\n        }\n\n        h3 button {\n          all: inherit;\n          align-items: center;\n          box-sizing: border-box;\n          color: var(--link-color);\n          cursor: hover;\n          display: flex;\n          justify-content: space-between;\n          width: 100%;\n          padding: 0.5em 0;\n        }\n\n        h3 button:hover {\n          cursor:pointer;\n        }\n        \n        h3 button:focus svg {\n          outline: 2px solid var(--focus-color);\n        }\n\n        button svg {\n          height: 1em;\n          margin-left: 0.5em;\n        }\n\n        [aria-expanded=\'true\'] .vert {\n          display: none;\n        }\n\n        [aria-expanded] rect {\n          fill: var(--link-color);\n        }\n      </style>\n    ',document.head.attachShadow){class e extends HTMLElement{constructor(){super(),this.setAttribute('role','region'),this.attachShadow({mode:'open'}),this.shadowRoot.appendChild(t.content.cloneNode(!0)),this.btn=this.shadowRoot.querySelector('h3 button');const e=this.querySelector(':first-child');let n=parseInt(e.tagName.substr(1));this.heading=this.shadowRoot.querySelector('h3'),n||console.warn('The first element inside each <toggle-section> should be a heading of an appropriate level.'),n&&2!==n&&this.heading.setAttribute('aria-level',n),this.btn.innerHTML=e.textContent+this.btn.innerHTML,e.parentNode.removeChild(e),this.switchState=()=>{let t='true'===this.getAttribute('open')||!1;this.btn.setAttribute('aria-expanded',t),this.shadowRoot.querySelector('.content').hidden=!t},this.btn.onclick=()=>{this.setAttribute('open','true'===this.getAttribute('open')?'false':'true')}}static get observedAttributes(){return['open']}attributeChangedCallback(t){'open'===t&&this.switchState()}}window.customElements.define('toggle-section',e);const n=document.createElement('div');n.innerHTML='\n        <ul class=\'toggle-section-controls\' aria-label=\'section controls\'>\n          <li><button id=\'expand\'>expand all</button></li>\n          <li><button id=\'collapse\'>collapse all</button></li>\n        </ul>\n      ';const o=document.querySelector('toggle-section'),i=document.querySelectorAll('toggle-section');o&&o.parentNode.insertBefore(n,o),n.addEventListener('click',(t=>{let e='expand'===t.target.id;Array.prototype.forEach.call(i,(t=>{t.setAttribute('open',e)}))}))}}}()}();
