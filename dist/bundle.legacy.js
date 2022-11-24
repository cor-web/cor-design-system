/* Version: 0.1.178 - November 24, 2022 15:26:13 */
!function(){'use strict';function n(n,t){if(!(n instanceof t))throw new TypeError('Cannot call a class as a function')}function t(n,t){for(var e=0;e<t.length;e++){var o=t[e];o.enumerable=o.enumerable||!1,o.configurable=!0,'value'in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}function e(n,e,o){return e&&t(n.prototype,e),o&&t(n,o),Object.defineProperty(n,'prototype',{writable:!1}),n}function o(n,t){if('function'!=typeof t&&null!==t)throw new TypeError('Super expression must either be null or a function');n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),Object.defineProperty(n,'prototype',{writable:!1}),t&&i(n,t)}function r(n){return r=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},r(n)}function i(n,t){return i=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,t){return n.__proto__=t,n},i(n,t)}function a(){if('undefined'==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if('function'==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(n){return!1}}function s(n,t,e){return s=a()?Reflect.construct.bind():function(n,t,e){var o=[null];o.push.apply(o,t);var r=new(Function.bind.apply(n,o));return e&&i(r,e.prototype),r},s.apply(null,arguments)}function c(n){var t='function'==typeof Map?new Map:void 0;return c=function(n){if(null===n||(e=n,-1===Function.toString.call(e).indexOf('[native code]')))return n;var e;if('function'!=typeof n)throw new TypeError('Super expression must either be null or a function');if(void 0!==t){if(t.has(n))return t.get(n);t.set(n,o)}function o(){return s(n,arguments,r(this).constructor)}return o.prototype=Object.create(n.prototype,{constructor:{value:o,enumerable:!1,writable:!0,configurable:!0}}),i(o,n)},c(n)}function l(n){if(void 0===n)throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return n}function u(n,t){if(t&&('object'==typeof t||'function'==typeof t))return t;if(void 0!==t)throw new TypeError('Derived constructors may only return object or undefined');return l(n)}function d(n){var t=a();return function(){var e,o=r(n);if(t){var i=r(this).constructor;e=Reflect.construct(o,arguments,i)}else e=o.apply(this,arguments);return u(this,e)}}function h(n){return function(n){if(Array.isArray(n))return f(n)}(n)||function(n){if('undefined'!=typeof Symbol&&null!=n[Symbol.iterator]||null!=n['@@iterator'])return Array.from(n)}(n)||function(n,t){if(!n)return;if('string'==typeof n)return f(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);'Object'===e&&n.constructor&&(e=n.constructor.name);if('Map'===e||'Set'===e)return Array.from(n);if('Arguments'===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return f(n,t)}(n)||function(){throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.')}()}function f(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,o=new Array(t);e<t;e++)o[e]=n[e];return o}var p=document.createElement('template');p.innerHTML='\n  <style>\n  :host {\n    background: var(--posterSrc) no-repeat;\n    background-size: cover;\n    display: inline-block;\n  }\n\n  :host(:hover) {\n    cursor: pointer;\n  }\n\n  ::slotted(iframe) {\n    cursor: pointer;\n    visibility: hidden;\n  }\n\n  ::slotted:hover {\n    cursor: pointer;\n  }\n\n  :host([clicked=true]) ::slotted(iframe)  {\n    visibility: visible;\n  }\n\n  :host([clicked=true]:hover)  {\n    cursor: default;\n  }\n\n  </style>\n  <slot></slot>\n';var b=function(t){o(i,t);var r=d(i);function i(){var t;n(this,i),(t=r.call(this)).attachShadow({mode:'open'}),t.shadowRoot.appendChild(p.content.cloneNode(!0));var e='url(\''.concat(t.poster,'\')');return console.log(e),t.style.setProperty('--posterSrc',e),t.addEventListener('click',t._onClick),t}return e(i,[{key:'_onClick',value:function(){console.log('cliccck'),this.setAttribute('clicked','true'),this.style.setProperty('--posterSrc',''),this.querySelector('iframe').src=this.src}},{key:'poster',get:function(){return this.getAttribute('poster')}},{key:'src',get:function(){return this.getAttribute('src')}}]),i}(c(HTMLElement));customElements.get('cor-embed')||customElements.define('cor-embed',b),function(){if('content'in document.createElement('template')){var t=document.createElement('template');if(t.innerHTML='\n      <span class="cor-expander--header">\n        <button aria-expanded=\'false\'>\n          <svg aria-hidden=\'true\' focusable=\'false\' viewBox=\'0 0 16 16\'>\n            <path class="close" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"/>\n            <path class="open" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>\n          </svg>\n \n        </button>\n      </span>\n      <div class=\'content\' hidden>\n        <slot></slot>\n      </div>\n      <style>\n        .cor-expander--header {\n          margin: 0;\n        }\n\n        .cor-expander--header button {\n          all: inherit;\n          border: solid 2px var(--link-color);\n          box-sizing: border-box;\n          color: var(--link-color);\n          cursor: pointer;\n          display: flex;\n          flex-shrink: 0;\n          align-items: center;\n          padding: var(--space-3xs);\n        }\n\n        .cor-expander--header button:focus {\n          border-color: white;\n          outline: 2px solid var(--focus-color);\n        }\n\n        button svg {\n          height: 1em;\n          margin-left: 0.5em;\n        }\n\n\n        [aria-expanded=\'true\'] path.open {\n          display: none;\n        }\n\n        [aria-expanded=\'true\'] path.close {\n          display: block;\n        }\n\n        [aria-expanded=\'false\'] path.open {\n          display: block;\n        }\n\n        [aria-expanded=\'false\'] path.close {\n          display: none;\n        }\n\n        [aria-expanded] path {\n          fill: currentColor;\n        }\n      </style>\n    ',document.head.attachShadow){var r=function(r){o(a,r);var i=d(a);function a(){var e;n(this,a),(e=i.call(this)).setAttribute('role','region'),e.attachShadow({mode:'open'}),e.shadowRoot.appendChild(t.content.cloneNode(!0)),e.btn=e.shadowRoot.querySelector('span button');var o=e.querySelector(':first-child');return e.heading=e.shadowRoot.querySelector('span'),e.btn.innerHTML=o.textContent+e.btn.innerHTML,o.hidden='true',e.switchState=function(){var n='true'===e.getAttribute('open')||!1;e.btn.setAttribute('aria-expanded',n),e.shadowRoot.querySelector('.content').hidden=!n},e.btn.onclick=function(){e.setAttribute('open','true'===e.getAttribute('open')?'false':'true')},e}return e(a,[{key:'attributeChangedCallback',value:function(n){'open'===n&&this.switchState()}}],[{key:'observedAttributes',get:function(){return['open']}}]),a}(c(HTMLElement));window.customElements.define('cor-expander',r)}}}();var v=document.createElement('template');v.innerHTML='\n  <style>\n    :host {\n      display: grid;\n    }\n    button {\n      align-content: center;\n      display: inline-flex;\n      gap: var(--space-2xs);\n    }\n    .cor-btn {\n      background-color: var(--oc-blue-1);\n      border-radius: var(--button-border-radius);\n      color: var(--oc-blue-9);\n      font-weight: var(--button-font-weight);\n      text-align: center;\n      white-space: nowrap;\n      vertical-align: middle;\n      user-select: none;\n      border: none;\n      margin: var(--button-margin-y, var(--space-xs)) var(--button-margin-x, auto);\n      padding: var(--button-padding-y) var(--button-padding-x);\n      transition: background-color .2s linear, border-color .2s linear;\n    }\n    \n    .cor-btn:hover {\n      background-color: var(--oc-blue-2);\n      border-color: var(--button-border-color-hover);\n    }\n    \n    .cor-btn:focus {\n      outline: 0;\n      box-shadow: var(--button-focus-box-shadow);\n      text-decoration: none;\n    }\n    \n    .cor-btn:disabled {\n      opacity: var(--button-disabled-opacity);\n      box-shadow: none;\n    }\n    \n    .cor-btn:not(:disabled):not(.disabled) {\n      cursor: pointer;\n    }\n    .cor-btn:not(:disabled):not(.disabled):active {\n      background-image: none;\n      box-shadow: var(--button-active-box-shadow);\n    }\n    .cor-btn:not(:disabled):not(.disabled):active :focus {\n      box-shadow: var(--button-focus-box-shadow) var(--button-active-box-shadow);\n    }\n    .less svg {\n      transform: rotate(0.5turn);\n    }\n  </style>\n  <slot></slot>\n  <button class="cor-btn more" aria-hidden="true" tabindex="-1">\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">\n      <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>\n    </svg> \n    <span>Read More</span>\n  </button>\n';var g=function(t){o(i,t);var r=d(i);function i(){var t;n(this,i),(t=r.call(this)).sliceStart=0,t.sliceEnd=t.slice;var e=t.selector?t.querySelector(t.selector).children:t.children[0].children;t.attachShadow({mode:'open'}),t.shadowRoot.appendChild(v.content.cloneNode(!0));var o=Array.from(e);return t.button=t.shadowRoot.querySelector('button'),t.button.content=t.shadowRoot.querySelector('button span'),o.length<=t.limit&&t.button.remove(),t.listToHide=o.slice(t.limit),t._hide(),t.button.addEventListener('click',t._onClick.bind(l(t))),t.focusableElements=Array.from(t.querySelectorAll('li a')),t.focusableElements.forEach((function(n){n.addEventListener('focus',(function(n){t._onFocusin(n.target)}))})),t}return e(i,[{key:'connectedCallback',value:function(){}},{key:'_checkVisibleElements',value:function(){0===this.querySelectorAll('.visually-hidden').length&&(this.setAttribute('expanded',''),this.txtButtonHide&&this.changeTextButton(this.txtButtonHide))}},{key:'_onFocusin',value:function(n){n.closest('.visually-hidden')&&(n.closest('.visually-hidden').classList.remove('visually-hidden'),this._checkVisibleElements())}},{key:'_onClick',value:function(){this._toggleExpanded()}},{key:'_toggleExpanded',value:function(){this.expanded?this._hide():this._show()}},{key:'_show',value:function(){var n=this;(this.slice?this.listToHide.slice(this.sliceStart,this.sliceEnd):this.listToHide).forEach((function(t){t.classList.remove('visually-hidden'),n.sliceStart++,n.sliceEnd++})),this.listToHide[0].focus(),this.listToHide.length===this.sliceEnd-this.slice&&(this.txtButtonHide&&this.changeTextButton(this.txtButtonHide),this.setAttribute('expanded',''),this.button.classList.add('less'))}},{key:'_hide',value:function(){this.listToHide.forEach((function(n){n.classList.add('visually-hidden')})),this.removeAttribute('expanded'),this.button.classList.remove('less'),this.sliceStart=0,this.sliceEnd=this.slice,this.txtButtonShow&&this.changeTextButton(this.txtButtonShow)}},{key:'limit',get:function(){return Number(this.getAttribute('limit'))}},{key:'slice',get:function(){return Number(this.getAttribute('slice'))}},{key:'selector',get:function(){return this.getAttribute('selector')}},{key:'txtButtonShow',get:function(){return this.getAttribute('more-btn-txt-show')}},{key:'txtButtonHide',get:function(){return this.getAttribute('more-btn-txt-hide')}},{key:'changeTextButton',value:function(n){n&&(this.button.querySelector('span').textContent=n)}},{key:'expanded',get:function(){return this.hasAttribute('expanded')},set:function(n){(n=Boolean(n))?this.setAttribute('expanded',''):this.removeAttribute('expanded')}}]),i}(c(HTMLElement));customElements.get('cor-expanding-list')||customElements.define('cor-expanding-list',g);var y=function(t){o(i,t);var r=d(i);function i(){var t;return n(this,i),h((t=r.call(this)).querySelectorAll(t.selector)).map((function(n){n.insertAdjacentHTML('afterend','<cor-expanding-list '.concat(h(t.attributes).map((function(n){return' '.concat(n.nodeName,'="').concat(n.nodeValue,'"')})),'>').concat(n.outerHTML,'</cor-expanding-list>')),n.remove()})),t}return e(i,[{key:'selector',get:function(){return this.getAttribute('selector')}}]),i}(c(HTMLElement));customElements.get('cor-expanding-lists')||customElements.define('cor-expanding-lists',y);var m=function(t){o(i,t);var r=d(i);function i(){var t;return n(this,i),(t=r.call(this)).root=t.attachShadow({mode:'open'}),t.render(),t}return e(i,[{key:'connectedCallback',value:function(){document.querySelector('.cor-container')}},{key:'getSections',value:function(){var n=document.querySelectorAll('main h2[id],main h3[id],.cor-rich-text h2');return this.sections=h(n).map((function(n,t){return n.classList.add('cor-anchor'),n.id||(n.id=t),{id:n.id,title:n.textContent}})),this.sections}},{key:'render',value:function(){this.sections=this.getSections(),this.root.innerHTML='\n    <style>\n        ul {  \n          margin: var(--space-3xs) 0 0 0;\n          padding: 0;\n          list-style: none;\n        }\n        \n        ul > li {\n          border-left: solid 2px var(--oc-gray-3);\n          padding: var(--space-4xs) var(--space-2xs);\n          line-height: initial;\n        }\n        \n        /*\n        ul > li.active {\n          background-color: rgba(var(--oc-blue-8-rgb), .1);\n          border-left: solid 2px var(--oc-blue-8);\n        }\n        */\n        \n        h2 {\n          color: var(--oc-gray-7);\n          font-size: var(--step--3) !important;\n          font-weight: normal;\n          letter-spacing: 1.5px;\n          text-transform: uppercase;\n          margin: 0 0 var(--space--4xs) 0;\n        }\n        \n        a {\n          font-size: var(--step--4);\n          text-decoration: none;\n          margin-top: var(--space-4xs, 1rem);\n          outline: 2px solid transparent;\n          outline-offset: 5px;\n          transition: outline-offset 0.2s linear;\n        }\n        \n        a:link,\n        a:focus,\n        a:visited,\n        a:active {\n          color: var(--link-color);\n        }\n\n        a:hover {\n          text-decoration: none;\n          color: var(--txt-color);\n        }\n\n        /*\n        a:active {\n          color: #fff;\n          background-color: #024;\n        }\n        */\n\n        a:focus {\n          outline-color: currentColor;\n          outline-offset: 2px;\n        }\n      \n        :host {\n          display: block;\n        }\n        .readingSection {\n          \n        }\n      </style>\n      \x3c!--  \n    <style>\n      \n      ul {\n        display: grid;\n        gap: var(--space-4xs);\n        margin: var(--space-3xs) 0 0 1rem;\n        padding: 0;\n      }\n      \n      ul > li {\n        list-style-position: outside;\n        list-style-type: disc;\n        line-height: initial;\n      }\n      \n      h2 {\n        color: var(--g-8);\n        font-size: var(--step--3) !important;\n        font-weight: bold;\n        text-transform: initial;\n        margin: 0 0 var(--space--4xs) 0;\n      }\n      \n      a {\n        font-size: var(--step--4);\n        text-decoration: underline;\n        margin-top: var(--space-4xs, 1rem);\n        outline: 2px solid transparent;\n        outline-offset: 5px;\n        transition: outline-offset 0.2s linear;\n      }\n      \n      a:hover {\n        text-decoration: none;\n      }\n\n      a:link,\n      a:focus,\n      a:visited,\n      a:active {\n        color: var(--link-color);\n      }\n\n      a:active {\n        color: #fff;\n        background-color: #024;\n      }\n\n      a:focus {\n        outline-color: currentColor;\n        outline-offset: 2px;\n      }\n    \n      :host {\n        display: block;\n      }\n      </style>\n      --\x3e\n      <nav class="cor-toc cor-toc--sticky" aria-labelledby="sections-heading">\n        <h2 id="sections-heading"><slot name="toc-title">Contents</slot></h2>\n        <ul>\n          '.concat(this.sections.map((function(n){return'\n            <li>\n              <a href="#'.concat(n.id,'">').concat(n.title,'</a>\n            </li>\n          ')})).join(''),'\n        </ul>\n      </nav>\n    ')}}]),i}(c(HTMLElement));customElements.get('cor-toc')||customElements.define('cor-toc',m);var x=document.createElement('template');x.innerHTML='\n  <style>\n    .toggle-heading {\n      display: flex;\n      padding: var(--toggle-heading-padding);\n    }\n  \n    .toggle-heading button {\n      all: inherit;\n      align-items: center;\n      box-sizing: border-box;\n      color: var(--link-color);\n      cursor: hover;\n      display: flex;\n      width: 100%;\n      padding: 0.5em 0;\n    }\n\n    .toggle-heading:hover {\n      cursor:pointer;\n    }\n\n    .toggle-heading button:focus svg {\n      outline: 2px solid var(--focus-color);\n    }\n\n    button svg {\n      flex-shrink: 0;\n      height: 1em;\n      margin-left: 0.5em;\n    }\n\n    [aria-expanded=\'true\'] .vert {\n      display: none;\n    }\n\n    [aria-expanded] rect {\n      fill: var(--link-color);\n    }\n  </style>\n  <div class="toggle-heading">\n    <button aria-expanded=\'false\'>\n      <slot name="toggle-heading">My default title</slot>\n\n      <svg aria-hidden=\'true\' focusable=\'false\' viewBox=\'0 0 10 10\'>\n        <rect class=\'vert\' height=\'8\' width=\'2\' y=\'1\' x=\'4\' />\n        <rect height=\'2\' width=\'8\' y=\'4\' x=\'1\' />\n      </svg>\n    </button>\n  </div>\n  <div class=\'content\' hidden>\n    <slot name="toggle-content"></slot>\n  </div>\n';var w=function(t){o(i,t);var r=d(i);function i(){var t;return n(this,i),(t=r.call(this)).setAttribute('role','region'),t.attachShadow({mode:'open'}).appendChild(x.content.cloneNode(!0)),t.btn=t.shadowRoot.querySelector('.toggle-heading'),t.btn.onclick=function(){t.setAttribute('open','true'===t.getAttribute('open')?'false':'true')},t}return e(i,[{key:'switchState',value:function(){var n='true'===this.getAttribute('open')||!1;this.btn.setAttribute('aria-expanded',n),this.shadowRoot.querySelector('.content').hidden=!n}},{key:'attributeChangedCallback',value:function(n){'open'===n&&this.switchState()}}],[{key:'observedAttributes',get:function(){return['open']}}]),i}(c(HTMLElement));window.customElements.define('cor-toggle',w);var k=function(t){o(i,t);var r=d(i);function i(){return n(this,i),r.call(this)}return e(i,[{key:'connectedCallback',value:function(){var n=this;document.querySelector('cor-twitter-container button');this.addEventListener('click',(function t(){n.loadScript(),n.removeEventListener('click',t)}))}},{key:'_onMouseenter',value:function(){this.classList.add('shadow')}},{key:'_onMouseleave',value:function(){this.classList.remove('shadow')}},{key:'loadScript',value:function(){$wt.render('twitterContainer',twitterOptions),this.setAttribute('loaded',''),this.scrollIntoView({behavior:'smooth',block:'center',inline:'nearest'}),this.removeEventListener('click',this._onClick)}}]),i}(c(HTMLElement));document.addEventListener('DOMContentLoaded',(function(n){customElements.get('cor-twitter-container')||customElements.define('cor-twitter-container',k)}))}();
