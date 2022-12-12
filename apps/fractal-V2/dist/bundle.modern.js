/* Version: 0.1.159 - June 15, 2022 13:15:26 */
!function(){!function(){if('content'in document.createElement('template')){const t=document.createElement('template');if(t.innerHTML='\n      <span class="cor-expander--header">\n        <button aria-expanded=\'false\'>\n          <svg aria-hidden=\'true\' focusable=\'false\' viewBox=\'0 0 16 16\'>\n            <path class="close" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"/>\n            <path class="open" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>\n          </svg>\n \n        </button>\n      </span>\n      <div class=\'content\' hidden>\n        <slot></slot>\n      </div>\n      <style>\n        .cor-expander--header {\n          margin: 0;\n        }\n\n        .cor-expander--header button {\n          all: inherit;\n          border: solid 2px var(--link-color);\n          box-sizing: border-box;\n          color: var(--link-color);\n          cursor: pointer;\n          display: flex;\n          align-items: center;\n          padding: var(--space-3xs);\n        }\n\n        .cor-expander--header button:focus {\n          border-color: white;\n          outline: 2px solid var(--focus-color);\n        }\n\n        button svg {\n          height: 1em;\n          margin-left: 0.5em;\n        }\n\n\n        [aria-expanded=\'true\'] path.open {\n          display: none;\n        }\n\n        [aria-expanded=\'true\'] path.close {\n          display: block;\n        }\n\n        [aria-expanded=\'false\'] path.open {\n          display: block;\n        }\n\n        [aria-expanded=\'false\'] path.close {\n          display: none;\n        }\n\n        [aria-expanded] path {\n          fill: currentColor;\n        }\n      </style>\n    ',document.head.attachShadow){class e extends HTMLElement{constructor(){super(),this.setAttribute('role','region'),this.attachShadow({mode:'open'}),this.shadowRoot.appendChild(t.content.cloneNode(!0)),this.btn=this.shadowRoot.querySelector('span button');const e=this.querySelector(':first-child');this.heading=this.shadowRoot.querySelector('span'),this.btn.innerHTML=e.textContent+this.btn.innerHTML,e.hidden='true',this.switchState=()=>{let t='true'===this.getAttribute('open')||!1;this.btn.setAttribute('aria-expanded',t),this.shadowRoot.querySelector('.content').hidden=!t},this.btn.onclick=()=>{this.setAttribute('open','true'===this.getAttribute('open')?'false':'true')}}static get observedAttributes(){return['open']}attributeChangedCallback(t){'open'===t&&this.switchState()}}window.customElements.define('cor-expander',e)}}}();const t=document.createElement('template');t.innerHTML='\n  <style>\n    :host {\n      display: grid;\n    }\n    button {\n      align-content: center;\n      display: inline-flex;\n      gap: var(--space-2xs);\n    }\n    .cor-btn {\n      background-color: white;\n      border-radius: var(--button-border-radius);\n      color: var(--button-background-color);\n      font-weight: var(--button-font-weight);\n      text-align: center;\n      white-space: nowrap;\n      vertical-align: middle;\n      user-select: none;\n      border: var(--button-border-width, 1px) solid var(--button-background-color);\n      margin: var(--button-margin-y, var(--space-xs)) var(--button-margin-x, auto);\n      padding: var(--button-padding-y) var(--button-padding-x);\n    }\n    .cor-btn:hover {\n      color: var(--button-color-hover);\n      background-color: var(--button-background-color-hover);\n      border-color: var(--button-border-color-hover);\n    }\n    \n    .cor-btn:focus {\n      outline: 0;\n      box-shadow: var(--button-focus-box-shadow);\n      text-decoration: none;\n    }\n    \n    .cor-btn:disabled {\n      opacity: var(--button-disabled-opacity);\n      box-shadow: none;\n    }\n    \n    .cor-btn:not(:disabled):not(.disabled) {\n      cursor: pointer;\n    }\n    .cor-btn:not(:disabled):not(.disabled):active {\n      background-image: none;\n      box-shadow: var(--button-active-box-shadow);\n    }\n    .cor-btn:not(:disabled):not(.disabled):active :focus {\n      box-shadow: var(--button-focus-box-shadow) var(--button-active-box-shadow);\n    }\n    .less svg {\n      transform: rotate(0.5turn);\n    }\n  </style>\n  <slot></slot>\n  <button class="cor-btn more" aria-hidden="true" tabindex="-1">\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">\n      <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>\n    </svg> \n    <span>Read More</span>\n  </button>\n';class e extends HTMLElement{constructor(){super(),this.sliceStart=0,this.sliceEnd=this.slice;const e=this.selector?this.querySelector(this.selector).children:this.children[0].children;this.attachShadow({mode:'open'}),this.shadowRoot.appendChild(t.content.cloneNode(!0));const n=Array.from(e);this.button=this.shadowRoot.querySelector('button'),this.button.content=this.shadowRoot.querySelector('button span'),n.length<=this.limit&&this.button.remove(),this.listToHide=n.slice(this.limit),this._hide(),this.button.addEventListener('click',this._onClick.bind(this)),this.focusableElements=Array.from(this.querySelectorAll('li a')),this.focusableElements.forEach((t=>{t.addEventListener('focus',(t=>{this._onFocusin(t.target)}))}))}connectedCallback(){}_checkVisibleElements(){0===this.querySelectorAll('.visually-hidden').length&&(this.setAttribute('expanded',''),this.txtButtonHide&&this.changeTextButton(this.txtButtonHide))}_onFocusin(t){t.closest('.visually-hidden')&&(t.closest('.visually-hidden').classList.remove('visually-hidden'),this._checkVisibleElements())}_onClick(){this._toggleExpanded()}_toggleExpanded(){this.expanded?this._hide():this._show()}_show(){(this.slice?this.listToHide.slice(this.sliceStart,this.sliceEnd):this.listToHide).forEach((t=>{t.classList.remove('visually-hidden'),this.sliceStart++,this.sliceEnd++})),this.listToHide[0].focus(),this.listToHide.length===this.sliceEnd-this.slice&&(this.txtButtonHide&&this.changeTextButton(this.txtButtonHide),this.setAttribute('expanded',''),this.button.classList.add('less'))}_hide(){this.listToHide.forEach((t=>{t.classList.add('visually-hidden')})),this.removeAttribute('expanded'),this.button.classList.remove('less'),this.sliceStart=0,this.sliceEnd=this.slice,this.txtButtonShow&&this.changeTextButton(this.txtButtonShow)}get limit(){return Number(this.getAttribute('limit'))}get slice(){return Number(this.getAttribute('slice'))}get selector(){return this.getAttribute('selector')}get txtButtonShow(){return this.getAttribute('more-btn-txt-show')}get txtButtonHide(){return this.getAttribute('more-btn-txt-hide')}changeTextButton(t){t&&(this.button.querySelector('span').textContent=t)}set expanded(t){(t=Boolean(t))?this.setAttribute('expanded',''):this.removeAttribute('expanded')}get expanded(){return this.hasAttribute('expanded')}}customElements.get('cor-expanding-list')||customElements.define('cor-expanding-list',e);class n extends HTMLElement{constructor(){super();[...this.querySelectorAll(this.selector)].map((t=>{t.insertAdjacentHTML('afterend',`<cor-expanding-list ${[...this.attributes].map((t=>` ${t.nodeName}="${t.nodeValue}"`))}>${t.outerHTML}</cor-expanding-list>`),t.remove()}))}get selector(){return this.getAttribute('selector')}}customElements.get('cor-expanding-lists')||customElements.define('cor-expanding-lists',n);class o extends HTMLElement{constructor(){super(),this.root=this.attachShadow({mode:'open'}),this.render()}connectedCallback(){document.querySelector('.cor-container')}getSections(){const t=document.querySelectorAll('.cor-container h2[id],.cor-container h3[id],.cor-rich-text h2');return this.sections=[...t].map(((t,e)=>(t.classList.add('cor-anchor'),t.id||(t.id=e),{id:t.id,title:t.textContent}))),this.sections}render(){this.sections=this.getSections(),this.root.innerHTML=`\n      <style>\n      \n      ul {\n        display: grid;\n        gap: var(--space-4xs);\n        margin: var(--space-3xs) 0 0 1rem;\n        padding: 0;\n      }\n      \n      ul > li {\n        list-style-position: outside;\n        list-style-type: disc;\n        line-height: initial;\n      }\n      \n      h2 {\n        color: var(--g-8);\n        font-size: var(--step--3) !important;\n        font-weight: bold;\n        text-transform: initial;\n        margin: 0 0 var(--space--4xs) 0;\n      }\n      \n      a {\n        font-size: var(--step--4);\n        text-decoration: underline;\n        margin-top: var(--space-4xs, 1rem);\n        outline: 2px solid transparent;\n        outline-offset: 5px;\n        transition: outline-offset 0.2s linear;\n      }\n      \n      a:hover {\n        text-decoration: none;\n      }\n\n      a:link,\n      a:focus,\n      a:visited,\n      a:active {\n        color: var(--link-color);\n      }\n\n      a:active {\n        color: #fff;\n        background-color: #024;\n      }\n\n      a:focus {\n        outline-color: currentColor;\n        outline-offset: 2px;\n      }\n    \n      :host {\n        display: block;\n      }\n      </style>\n      <nav class="cor-toc cor-toc--sticky" aria-labelledby="sections-heading">\n        <h2 id="sections-heading"><slot name="toc-title">Contents</slot></h2>\n        <ul>\n          ${this.sections.map((t=>`\n            <li>\n              <a href="#${t.id}">${t.title}</a>\n            </li>\n          `)).join('')}\n        </ul>\n      </nav>\n    `}}customElements.get('cor-toc')||customElements.define('cor-toc',o);const i=document.createElement('template');i.innerHTML='\n  <style>\n    .toggle-heading {\n      display: flex;\n      padding: var(--toggle-heading-padding);\n    }\n  \n    .toggle-heading button {\n      all: inherit;\n      align-items: center;\n      box-sizing: border-box;\n      color: var(--link-color);\n      cursor: hover;\n      display: flex;\n      width: 100%;\n      padding: 0.5em 0;\n    }\n\n    .toggle-heading:hover {\n      cursor:pointer;\n    }\n\n    .toggle-heading button:focus svg {\n      outline: 2px solid var(--focus-color);\n    }\n\n    button svg {\n      flex-shrink: 0;\n      height: 1em;\n      margin-left: 0.5em;\n    }\n\n    [aria-expanded=\'true\'] .vert {\n      display: none;\n    }\n\n    [aria-expanded] rect {\n      fill: var(--link-color);\n    }\n  </style>\n  <div class="toggle-heading">\n    <button aria-expanded=\'false\'>\n      <slot name="toggle-heading">My default title</slot>\n\n      <svg aria-hidden=\'true\' focusable=\'false\' viewBox=\'0 0 10 10\'>\n        <rect class=\'vert\' height=\'8\' width=\'2\' y=\'1\' x=\'4\' />\n        <rect height=\'2\' width=\'8\' y=\'4\' x=\'1\' />\n      </svg>\n    </button>\n  </div>\n  <div class=\'content\' hidden>\n    <slot name="toggle-content"></slot>\n  </div>\n';class s extends HTMLElement{constructor(){super(),this.setAttribute('role','region');this.attachShadow({mode:'open'}).appendChild(i.content.cloneNode(!0)),this.btn=this.shadowRoot.querySelector('.toggle-heading'),this.btn.onclick=()=>{this.setAttribute('open','true'===this.getAttribute('open')?'false':'true')}}switchState(){let t='true'===this.getAttribute('open')||!1;this.btn.setAttribute('aria-expanded',t),this.shadowRoot.querySelector('.content').hidden=!t}static get observedAttributes(){return['open']}attributeChangedCallback(t){'open'===t&&this.switchState()}}window.customElements.define('cor-toggle',s);class r extends HTMLElement{constructor(){super()}connectedCallback(){document.querySelector('cor-twitter-container button');const t=()=>{this.loadScript(),this.removeEventListener('click',t)};this.addEventListener('click',t)}_onMouseenter(){this.classList.add('shadow')}_onMouseleave(){this.classList.remove('shadow')}loadScript(){$wt.render('twitterContainer',twitterOptions),this.setAttribute('loaded',''),this.scrollIntoView({behavior:'smooth',block:'center',inline:'nearest'}),this.removeEventListener('click',this._onClick)}}document.addEventListener('DOMContentLoaded',(t=>{customElements.get('cor-twitter-container')||customElements.define('cor-twitter-container',r)}))}();