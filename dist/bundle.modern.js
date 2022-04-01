/* Version: 0.1.139 - April 1, 2022 11:59:39 */
!function(t,e,n,o){function i(t){return t&&'object'==typeof t&&'default'in t?t:{default:t}}var s=i(t),r=i(e),a=i(n),l=i(o);!function(){if('content'in document.createElement('template')){const t=document.createElement('template');if(t.innerHTML='\n      <span class="cor-expander--header">\n        <button aria-expanded=\'false\'>\n          <svg aria-hidden=\'true\' focusable=\'false\' viewBox=\'0 0 16 16\'>\n            <path class="close" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"/>\n            <path class="open" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>\n          </svg>\n \n        </button>\n      </span>\n      <div class=\'content\' hidden>\n        <slot></slot>\n      </div>\n      <style>\n        .cor-expander--header {\n          margin: 0;\n        }\n\n        .cor-expander--header button {\n          all: inherit;\n          border: solid 2px var(--link-color);\n          box-sizing: border-box;\n          color: var(--link-color);\n          cursor: pointer;\n          display: flex;\n          align-items: center;\n          padding: var(--space-3xs);\n        }\n\n        .cor-expander--header button:focus {\n          border-color: white;\n          outline: 2px solid var(--focus-color);\n        }\n\n        button svg {\n          height: 1em;\n          margin-left: 0.5em;\n        }\n\n\n        [aria-expanded=\'true\'] path.open {\n          display: none;\n        }\n\n        [aria-expanded=\'true\'] path.close {\n          display: block;\n        }\n\n        [aria-expanded=\'false\'] path.open {\n          display: block;\n        }\n\n        [aria-expanded=\'false\'] path.close {\n          display: none;\n        }\n\n        [aria-expanded] path {\n          fill: currentColor;\n        }\n      </style>\n    ',document.head.attachShadow){class e extends HTMLElement{constructor(){super(),this.setAttribute('role','region'),this.attachShadow({mode:'open'}),this.shadowRoot.appendChild(t.content.cloneNode(!0)),this.btn=this.shadowRoot.querySelector('span button');const e=this.querySelector(':first-child');this.heading=this.shadowRoot.querySelector('span'),this.btn.innerHTML=e.textContent+this.btn.innerHTML,e.hidden='true',this.switchState=()=>{let t='true'===this.getAttribute('open')||!1;this.btn.setAttribute('aria-expanded',t),this.shadowRoot.querySelector('.content').hidden=!t},this.btn.onclick=()=>{this.setAttribute('open','true'===this.getAttribute('open')?'false':'true')}}static get observedAttributes(){return['open']}attributeChangedCallback(t){'open'===t&&this.switchState()}}window.customElements.define('cor-expander',e)}}}();const c=document.createElement('template');c.innerHTML='\n  <style>\n    :host {\n      display: grid;\n    }\n    button {\n      align-content: center;\n      display: inline-flex;\n      gap: var(--space-2xs);\n    }\n    .cor-btn {\n      background-color: white;\n      border-radius: var(--button-border-radius);\n      color: var(--button-background-color);\n      font-weight: var(--button-font-weight);\n      text-align: center;\n      white-space: nowrap;\n      vertical-align: middle;\n      user-select: none;\n      border: var(--button-border-width, 1px) solid var(--button-background-color);\n      margin: var(--button-margin-y, var(--space-xs)) var(--button-margin-x, auto);\n      padding: var(--button-padding-y) var(--button-padding-x);\n    }\n    .cor-btn:hover {\n      color: var(--button-color-hover);\n      background-color: var(--button-background-color-hover);\n      border-color: var(--button-border-color-hover);\n    }\n    \n    .cor-btn:focus {\n      outline: 0;\n      box-shadow: var(--button-focus-box-shadow);\n      text-decoration: none;\n    }\n    \n    .cor-btn:disabled {\n      opacity: var(--button-disabled-opacity);\n      box-shadow: none;\n    }\n    \n    .cor-btn:not(:disabled):not(.disabled) {\n      cursor: pointer;\n    }\n    .cor-btn:not(:disabled):not(.disabled):active {\n      background-image: none;\n      box-shadow: var(--button-active-box-shadow);\n    }\n    .cor-btn:not(:disabled):not(.disabled):active :focus {\n      box-shadow: var(--button-focus-box-shadow) var(--button-active-box-shadow);\n    }\n    .less svg {\n      transform: rotate(0.5turn);\n    }\n  </style>\n  <slot></slot>\n  <button class="cor-btn more" aria-hidden="true">\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">\n      <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>\n    </svg> \n    <span>Read More</span>\n  </button>\n';class d extends HTMLElement{constructor(){super(),this.sliceStart=0,this.sliceEnd=this.slice;const t=this.selector?this.querySelector(this.selector).children:this.children[0].children;this.attachShadow({mode:'open'}),this.shadowRoot.appendChild(c.content.cloneNode(!0));const e=Array.from(t);this.button=this.shadowRoot.querySelector('button'),this.button.content=this.shadowRoot.querySelector('button span'),e.length<=this.limit&&this.button.remove(),this.listToHide=e.slice(this.limit),this._hide(),this.button.addEventListener('click',this._onClick.bind(this)),this.focusableElements=Array.from(this.querySelectorAll('li a')),this.focusableElements.forEach((t=>{t.addEventListener('focus',(t=>{this._onFocusin(t.target)}))}))}connectedCallback(){}_checkVisibleElements(){0===this.querySelectorAll('.visually-hidden').length&&(this.setAttribute('expanded',''),this.txtButtonHide&&this.changeTextButton(this.txtButtonHide))}_onFocusin(t){t.closest('.visually-hidden')&&(t.closest('.visually-hidden').classList.remove('visually-hidden'),this._checkVisibleElements())}_onClick(){this._toggleExpanded()}_toggleExpanded(){this.expanded?this._hide():this._show()}_show(){(this.slice?this.listToHide.slice(this.sliceStart,this.sliceEnd):this.listToHide).forEach((t=>{t.classList.remove('visually-hidden'),this.sliceStart++,this.sliceEnd++})),this.listToHide[0].focus(),this.listToHide.length===this.sliceEnd-this.slice&&(this.txtButtonHide&&this.changeTextButton(this.txtButtonHide),this.setAttribute('expanded',''),this.button.classList.add('less'))}_hide(){this.listToHide.forEach((t=>{t.classList.add('visually-hidden')})),this.removeAttribute('expanded'),this.button.classList.remove('less'),this.sliceStart=0,this.sliceEnd=this.slice,this.txtButtonShow&&this.changeTextButton(this.txtButtonShow)}get limit(){return Number(this.getAttribute('limit'))}get slice(){return Number(this.getAttribute('slice'))}get selector(){return this.getAttribute('selector')}get txtButtonShow(){return this.getAttribute('more-btn-txt-show')}get txtButtonHide(){return this.getAttribute('more-btn-txt-hide')}changeTextButton(t){t&&(this.button.querySelector('span').textContent=t)}set expanded(t){(t=Boolean(t))?this.setAttribute('expanded',''):this.removeAttribute('expanded')}get expanded(){return this.hasAttribute('expanded')}}customElements.get('cor-expanding-list')||customElements.define('cor-expanding-list',d);class h extends HTMLElement{constructor(){super();[...this.querySelectorAll(this.selector)].map((t=>{t.insertAdjacentHTML('afterend',`<cor-expanding-list ${[...this.attributes].map((t=>` ${t.nodeName}="${t.nodeValue}"`))}>${t.outerHTML}</cor-expanding-list>`),t.remove()}))}get selector(){return this.getAttribute('selector')}}customElements.get('cor-expanding-lists')||customElements.define('cor-expanding-lists',h);class u extends HTMLElement{constructor(){super();const t=document.getElementById('gallery-container');t.addEventListener('lgAfterAppendSubHtml',(t=>{const{index:e}=t.detail,n=document.querySelector('.lg-sub-html').clientHeight;document.querySelector('.lg-inner').style.bottom=n+'px',console.log('test',e)}));s.default(t,{speed:500,container:t,closable:!1,download:!1,fullScreen:!1,showMaximizeIcon:!0,plugins:[r.default,a.default,l.default],mobileSettings:{controls:!1,showCloseIcon:!1,download:!1,rotate:!1},licenseKey:45}).openGallery(0)}}document.addEventListener('DOMContentLoaded',(t=>{customElements.get('cor-gallery')||customElements.define('cor-gallery',u)}));class b extends HTMLElement{constructor(){super(),this.root=this.attachShadow({mode:'open'}),this.render()}connectedCallback(){document.querySelector('.cor-container')}getSections(){const t=document.querySelectorAll('.cor-container h2[id],.cor-container h3[id],.cor-rich-text h2');return this.sections=[...t].map(((t,e)=>(t.classList.add('cor-anchor'),t.id||(t.id=e),{id:t.id,title:t.textContent}))),this.sections}render(){this.sections=this.getSections(),this.root.innerHTML=`\n      <style>\n        ul {  \n          margin: var(--space-3xs) 0 0 0;\n          padding: 0;\n          list-style: none;\n        }\n        \n        ul > li {\n          border-left: solid 2px var(--oc-gray-3);\n          padding: var(--space-4xs) var(--space-2xs);\n          line-height: initial;\n        }\n        \n        /*\n        ul > li.active {\n          background-color: rgba(var(--oc-blue-8-rgb), .1);\n          border-left: solid 2px var(--oc-blue-8);\n        }\n        */\n        \n        h2 {\n          color: var(--oc-gray-7);\n          font-size: var(--step--3) !important;\n          font-weight: normal;\n          letter-spacing: 1.5px;\n          text-transform: uppercase;\n          margin: 0 0 var(--space--4xs) 0;\n        }\n        \n        a {\n          font-size: var(--step--4);\n          text-decoration: none;\n          margin-top: var(--space-4xs, 1rem);\n          outline: 2px solid transparent;\n          outline-offset: 5px;\n          transition: outline-offset 0.2s linear;\n        }\n        \n        a:link,\n        a:focus,\n        a:visited,\n        a:active {\n          color: var(--link-color);\n        }\n\n        a:hover {\n          text-decoration: none;\n          color: var(--txt-color);\n        }\n\n        /*\n        a:active {\n          color: #fff;\n          background-color: #024;\n        }\n        */\n\n        a:focus {\n          outline-color: currentColor;\n          outline-offset: 2px;\n        }\n      \n        :host {\n          display: block;\n        }\n        .readingSection {\n          \n        }\n      </style>\n      <nav class="cor-toc cor-toc--sticky" aria-labelledby="sections-heading">\n        <h2 id="sections-heading"><slot name="toc-title">Contents</slot></h2>\n        <ul>\n          ${this.sections.map((t=>`\n            <li>\n              <a href="#${t.id}">${t.title}</a>\n            </li>\n          `)).join('')}\n        </ul>\n      </nav>\n    `}}customElements.get('cor-toc')||customElements.define('cor-toc',b),function(){if('content'in document.createElement('template')){const t=document.createElement('template');if(t.innerHTML='\n      <h3>\n        <button aria-expanded=\'false\'>\n          <svg aria-hidden=\'true\' focusable=\'false\' viewBox=\'0 0 10 10\'>\n            <rect class=\'vert\' height=\'8\' width=\'2\' y=\'1\' x=\'4\' />\n            <rect height=\'2\' width=\'8\' y=\'4\' x=\'1\' />\n          </svg>\n        </button>\n      </h3>\n      <div class=\'content\' hidden>\n        <slot></slot>\n      </div>\n      <style>\n        h3 {\n          margin: 0;\n        }\n\n        h3 button {\n          all: inherit;\n          align-items: center;\n          box-sizing: border-box;\n          color: var(--link-color);\n          cursor: hover;\n          display: flex;\n          justify-content: space-between;\n          width: 100%;\n          padding: 0.5em 0;\n        }\n\n        h3 button:hover {\n          cursor:pointer;\n        }\n        \n        h3 button:focus svg {\n          outline: 2px solid var(--focus-color);\n        }\n\n        button svg {\n          height: 1em;\n          margin-left: 0.5em;\n        }\n\n        [aria-expanded=\'true\'] .vert {\n          display: none;\n        }\n\n        [aria-expanded] rect {\n          fill: var(--link-color);\n        }\n      </style>\n    ',document.head.attachShadow){class e extends HTMLElement{constructor(){super(),this.setAttribute('role','region'),this.attachShadow({mode:'open'}),this.shadowRoot.appendChild(t.content.cloneNode(!0)),this.btn=this.shadowRoot.querySelector('h3 button');const e=this.querySelector(':first-child');let n=parseInt(e.tagName.substr(1));this.heading=this.shadowRoot.querySelector('h3'),n||console.warn('The first element inside each <toggle-section> should be a heading of an appropriate level.'),n&&2!==n&&this.heading.setAttribute('aria-level',n),this.btn.innerHTML=e.textContent+this.btn.innerHTML,e.parentNode.removeChild(e),this.switchState=()=>{let t='true'===this.getAttribute('open')||!1;this.btn.setAttribute('aria-expanded',t),this.shadowRoot.querySelector('.content').hidden=!t},this.btn.onclick=()=>{this.setAttribute('open','true'===this.getAttribute('open')?'false':'true')}}static get observedAttributes(){return['open']}attributeChangedCallback(t){'open'===t&&this.switchState()}}window.customElements.define('toggle-section',e);const n=document.createElement('div');n.innerHTML='\n        <ul class=\'toggle-section-controls\' aria-label=\'section controls\'>\n          <li><button id=\'expand\'>expand all</button></li>\n          <li><button id=\'collapse\'>collapse all</button></li>\n        </ul>\n      ';const o=document.querySelector('toggle-section'),i=document.querySelectorAll('toggle-section');o&&o.parentNode.insertBefore(n,o),n.addEventListener('click',(t=>{let e='expand'===t.target.id;Array.prototype.forEach.call(i,(t=>{t.setAttribute('open',e)}))}))}}}();class p extends HTMLElement{constructor(){super()}connectedCallback(){document.querySelector('cor-twitter-container button');const t=()=>{console.log(this,'test'),this.loadScript(),this.removeEventListener('click',t)};this.addEventListener('click',t)}_onMouseenter(){this.classList.add('shadow')}_onMouseleave(){this.classList.remove('shadow')}loadScript(){$wt.render('twitterContainer',twitterOptions),this.setAttribute('loaded',''),this.scrollIntoView({behavior:'smooth',block:'center',inline:'nearest'}),this.removeEventListener('click',this._onClick)}}document.addEventListener('DOMContentLoaded',(t=>{customElements.get('cor-twitter-container')||customElements.define('cor-twitter-container',p)}))}(lightGallery,lgZoom,lgThumbnail,lgAutoplay);
