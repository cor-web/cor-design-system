/* Version: 0.1.147 - April 28, 2022 10:42:26 */
!function(){'use strict';function t(t,n){if(!(t instanceof n))throw new TypeError('Cannot call a class as a function')}function n(t,n){for(var e=0;e<n.length;e++){var o=n[e];o.enumerable=o.enumerable||!1,o.configurable=!0,'value'in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function e(t,e,o){return e&&n(t.prototype,e),o&&n(t,o),t}function o(t,n){if('function'!=typeof n&&null!==n)throw new TypeError('Super expression must either be null or a function');t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&i(t,n)}function r(t){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function i(t,n){return(i=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function a(){if('undefined'==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if('function'==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function c(t,n,e){return(c=a()?Reflect.construct:function(t,n,e){var o=[null];o.push.apply(o,n);var r=new(Function.bind.apply(t,o));return e&&i(r,e.prototype),r}).apply(null,arguments)}function l(t){var n='function'==typeof Map?new Map:void 0;return(l=function(t){if(null===t||(e=t,-1===Function.toString.call(e).indexOf('[native code]')))return t;var e;if('function'!=typeof t)throw new TypeError('Super expression must either be null or a function');if(void 0!==n){if(n.has(t))return n.get(t);n.set(t,o)}function o(){return c(t,arguments,r(this).constructor)}return o.prototype=Object.create(t.prototype,{constructor:{value:o,enumerable:!1,writable:!0,configurable:!0}}),i(o,t)})(t)}function s(t){if(void 0===t)throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return t}function u(t,n){return!n||'object'!=typeof n&&'function'!=typeof n?s(t):n}function d(t){var n=a();return function(){var e,o=r(t);if(n){var i=r(this).constructor;e=Reflect.construct(o,arguments,i)}else e=o.apply(this,arguments);return u(this,e)}}function h(t){return function(t){if(Array.isArray(t))return f(t)}(t)||function(t){if('undefined'!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t['@@iterator'])return Array.from(t)}(t)||function(t,n){if(!t)return;if('string'==typeof t)return f(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);'Object'===e&&t.constructor&&(e=t.constructor.name);if('Map'===e||'Set'===e)return Array.from(t);if('Arguments'===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return f(t,n)}(t)||function(){throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.')}()}function f(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,o=new Array(n);e<n;e++)o[e]=t[e];return o}!function(){if('content'in document.createElement('template')){var n=document.createElement('template');if(n.innerHTML='\n      <span class="cor-expander--header">\n        <button aria-expanded=\'false\'>\n          <svg aria-hidden=\'true\' focusable=\'false\' viewBox=\'0 0 16 16\'>\n            <path class="close" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"/>\n            <path class="open" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>\n          </svg>\n \n        </button>\n      </span>\n      <div class=\'content\' hidden>\n        <slot></slot>\n      </div>\n      <style>\n        .cor-expander--header {\n          margin: 0;\n        }\n\n        .cor-expander--header button {\n          all: inherit;\n          border: solid 2px var(--link-color);\n          box-sizing: border-box;\n          color: var(--link-color);\n          cursor: pointer;\n          display: flex;\n          align-items: center;\n          padding: var(--space-3xs);\n        }\n\n        .cor-expander--header button:focus {\n          border-color: white;\n          outline: 2px solid var(--focus-color);\n        }\n\n        button svg {\n          height: 1em;\n          margin-left: 0.5em;\n        }\n\n\n        [aria-expanded=\'true\'] path.open {\n          display: none;\n        }\n\n        [aria-expanded=\'true\'] path.close {\n          display: block;\n        }\n\n        [aria-expanded=\'false\'] path.open {\n          display: block;\n        }\n\n        [aria-expanded=\'false\'] path.close {\n          display: none;\n        }\n\n        [aria-expanded] path {\n          fill: currentColor;\n        }\n      </style>\n    ',document.head.attachShadow){var r=function(r){o(a,r);var i=d(a);function a(){var e;t(this,a),(e=i.call(this)).setAttribute('role','region'),e.attachShadow({mode:'open'}),e.shadowRoot.appendChild(n.content.cloneNode(!0)),e.btn=e.shadowRoot.querySelector('span button');var o=e.querySelector(':first-child');return e.heading=e.shadowRoot.querySelector('span'),e.btn.innerHTML=o.textContent+e.btn.innerHTML,o.hidden='true',e.switchState=function(){var t='true'===e.getAttribute('open')||!1;e.btn.setAttribute('aria-expanded',t),e.shadowRoot.querySelector('.content').hidden=!t},e.btn.onclick=function(){e.setAttribute('open','true'===e.getAttribute('open')?'false':'true')},e}return e(a,[{key:'attributeChangedCallback',value:function(t){'open'===t&&this.switchState()}}],[{key:'observedAttributes',get:function(){return['open']}}]),a}(l(HTMLElement));window.customElements.define('cor-expander',r)}}}();var p=document.createElement('template');p.innerHTML='\n  <style>\n    :host {\n      display: grid;\n    }\n    button {\n      align-content: center;\n      display: inline-flex;\n      gap: var(--space-2xs);\n    }\n    .cor-btn {\n      background-color: white;\n      border-radius: var(--button-border-radius);\n      color: var(--button-background-color);\n      font-weight: var(--button-font-weight);\n      text-align: center;\n      white-space: nowrap;\n      vertical-align: middle;\n      user-select: none;\n      border: var(--button-border-width, 1px) solid var(--button-background-color);\n      margin: var(--button-margin-y, var(--space-xs)) var(--button-margin-x, auto);\n      padding: var(--button-padding-y) var(--button-padding-x);\n    }\n    .cor-btn:hover {\n      color: var(--button-color-hover);\n      background-color: var(--button-background-color-hover);\n      border-color: var(--button-border-color-hover);\n    }\n    \n    .cor-btn:focus {\n      outline: 0;\n      box-shadow: var(--button-focus-box-shadow);\n      text-decoration: none;\n    }\n    \n    .cor-btn:disabled {\n      opacity: var(--button-disabled-opacity);\n      box-shadow: none;\n    }\n    \n    .cor-btn:not(:disabled):not(.disabled) {\n      cursor: pointer;\n    }\n    .cor-btn:not(:disabled):not(.disabled):active {\n      background-image: none;\n      box-shadow: var(--button-active-box-shadow);\n    }\n    .cor-btn:not(:disabled):not(.disabled):active :focus {\n      box-shadow: var(--button-focus-box-shadow) var(--button-active-box-shadow);\n    }\n    .less svg {\n      transform: rotate(0.5turn);\n    }\n  </style>\n  <slot></slot>\n  <button class="cor-btn more" aria-hidden="true">\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">\n      <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>\n    </svg> \n    <span>Read More</span>\n  </button>\n';var b=function(n){o(i,n);var r=d(i);function i(){var n;t(this,i),(n=r.call(this)).sliceStart=0,n.sliceEnd=n.slice;var e=n.selector?n.querySelector(n.selector).children:n.children[0].children;n.attachShadow({mode:'open'}),n.shadowRoot.appendChild(p.content.cloneNode(!0));var o=Array.from(e);return n.button=n.shadowRoot.querySelector('button'),n.button.content=n.shadowRoot.querySelector('button span'),o.length<=n.limit&&n.button.remove(),n.listToHide=o.slice(n.limit),n._hide(),n.button.addEventListener('click',n._onClick.bind(s(n))),n.focusableElements=Array.from(n.querySelectorAll('li a')),n.focusableElements.forEach((function(t){t.addEventListener('focus',(function(t){n._onFocusin(t.target)}))})),n}return e(i,[{key:'connectedCallback',value:function(){}},{key:'_checkVisibleElements',value:function(){0===this.querySelectorAll('.visually-hidden').length&&(this.setAttribute('expanded',''),this.txtButtonHide&&this.changeTextButton(this.txtButtonHide))}},{key:'_onFocusin',value:function(t){t.closest('.visually-hidden')&&(t.closest('.visually-hidden').classList.remove('visually-hidden'),this._checkVisibleElements())}},{key:'_onClick',value:function(){this._toggleExpanded()}},{key:'_toggleExpanded',value:function(){this.expanded?this._hide():this._show()}},{key:'_show',value:function(){var t=this;(this.slice?this.listToHide.slice(this.sliceStart,this.sliceEnd):this.listToHide).forEach((function(n){n.classList.remove('visually-hidden'),t.sliceStart++,t.sliceEnd++})),this.listToHide[0].focus(),this.listToHide.length===this.sliceEnd-this.slice&&(this.txtButtonHide&&this.changeTextButton(this.txtButtonHide),this.setAttribute('expanded',''),this.button.classList.add('less'))}},{key:'_hide',value:function(){this.listToHide.forEach((function(t){t.classList.add('visually-hidden')})),this.removeAttribute('expanded'),this.button.classList.remove('less'),this.sliceStart=0,this.sliceEnd=this.slice,this.txtButtonShow&&this.changeTextButton(this.txtButtonShow)}},{key:'limit',get:function(){return Number(this.getAttribute('limit'))}},{key:'slice',get:function(){return Number(this.getAttribute('slice'))}},{key:'selector',get:function(){return this.getAttribute('selector')}},{key:'txtButtonShow',get:function(){return this.getAttribute('more-btn-txt-show')}},{key:'txtButtonHide',get:function(){return this.getAttribute('more-btn-txt-hide')}},{key:'changeTextButton',value:function(t){t&&(this.button.querySelector('span').textContent=t)}},{key:'expanded',get:function(){return this.hasAttribute('expanded')},set:function(t){(t=Boolean(t))?this.setAttribute('expanded',''):this.removeAttribute('expanded')}}]),i}(l(HTMLElement));customElements.get('cor-expanding-list')||customElements.define('cor-expanding-list',b);var v=function(n){o(i,n);var r=d(i);function i(){var n;return t(this,i),h((n=r.call(this)).querySelectorAll(n.selector)).map((function(t){t.insertAdjacentHTML('afterend','<cor-expanding-list '.concat(h(n.attributes).map((function(t){return' '.concat(t.nodeName,'="').concat(t.nodeValue,'"')})),'>').concat(t.outerHTML,'</cor-expanding-list>')),t.remove()})),n}return e(i,[{key:'selector',get:function(){return this.getAttribute('selector')}}]),i}(l(HTMLElement));customElements.get('cor-expanding-lists')||customElements.define('cor-expanding-lists',v);var g=function(n){o(i,n);var r=d(i);function i(){var n;return t(this,i),(n=r.call(this)).root=n.attachShadow({mode:'open'}),n.render(),n}return e(i,[{key:'connectedCallback',value:function(){document.querySelector('.cor-container')}},{key:'getSections',value:function(){var t=document.querySelectorAll('.cor-container h2[id],.cor-container h3[id],.cor-rich-text h2');return this.sections=h(t).map((function(t,n){return t.classList.add('cor-anchor'),t.id||(t.id=n),{id:t.id,title:t.textContent}})),this.sections}},{key:'render',value:function(){this.sections=this.getSections(),this.root.innerHTML='\n      <style>\n      \n      ul {\n        display: grid;\n        gap: var(--space-4xs);\n        margin: var(--space-3xs) 0 0 1rem;\n        padding: 0;\n      }\n      \n      ul > li {\n        list-style-position: outside;\n        list-style-type: disc;\n        line-height: initial;\n      }\n      \n      h2 {\n        color: var(--g-8);\n        font-size: var(--step--3) !important;\n        font-weight: bold;\n        text-transform: initial;\n        margin: 0 0 var(--space--4xs) 0;\n      }\n      \n      a {\n        font-size: var(--step--4);\n        text-decoration: underline;\n        margin-top: var(--space-4xs, 1rem);\n        outline: 2px solid transparent;\n        outline-offset: 5px;\n        transition: outline-offset 0.2s linear;\n      }\n      \n      a:hover {\n        text-decoration: none;\n      }\n\n      a:link,\n      a:focus,\n      a:visited,\n      a:active {\n        color: var(--link-color);\n      }\n\n      a:active {\n        color: #fff;\n        background-color: #024;\n      }\n\n      a:focus {\n        outline-color: currentColor;\n        outline-offset: 2px;\n      }\n    \n      :host {\n        display: block;\n      }\n      </style>\n      <nav class="cor-toc cor-toc--sticky" aria-labelledby="sections-heading">\n        <h2 id="sections-heading"><slot name="toc-title">Contents</slot></h2>\n        <ul>\n          '.concat(this.sections.map((function(t){return'\n            <li>\n              <a href="#'.concat(t.id,'">').concat(t.title,'</a>\n            </li>\n          ')})).join(''),'\n        </ul>\n      </nav>\n    ')}}]),i}(l(HTMLElement));customElements.get('cor-toc')||customElements.define('cor-toc',g),function(){if('content'in document.createElement('template')){var n=document.createElement('template');if(n.innerHTML='\n      <h3>\n        <button aria-expanded=\'false\'>\n          <svg aria-hidden=\'true\' focusable=\'false\' viewBox=\'0 0 10 10\'>\n            <rect class=\'vert\' height=\'8\' width=\'2\' y=\'1\' x=\'4\' />\n            <rect height=\'2\' width=\'8\' y=\'4\' x=\'1\' />\n          </svg>\n        </button>\n      </h3>\n      <div class=\'content\' hidden>\n        <slot></slot>\n      </div>\n      <style>\n        h3 {\n          margin: 0;\n        }\n\n        h3 button {\n          all: inherit;\n          align-items: center;\n          box-sizing: border-box;\n          color: var(--link-color);\n          cursor: hover;\n          display: flex;\n          justify-content: space-between;\n          width: 100%;\n          padding: 0.5em 0;\n        }\n\n        h3 button:hover {\n          cursor:pointer;\n        }\n        \n        h3 button:focus svg {\n          outline: 2px solid var(--focus-color);\n        }\n\n        button svg {\n          height: 1em;\n          margin-left: 0.5em;\n        }\n\n        [aria-expanded=\'true\'] .vert {\n          display: none;\n        }\n\n        [aria-expanded] rect {\n          fill: var(--link-color);\n        }\n      </style>\n    ',document.head.attachShadow){var r=function(r){o(a,r);var i=d(a);function a(){var e;t(this,a),(e=i.call(this)).setAttribute('role','region'),e.attachShadow({mode:'open'}),e.shadowRoot.appendChild(n.content.cloneNode(!0)),e.btn=e.shadowRoot.querySelector('h3 button');var o=e.querySelector(':first-child'),r=parseInt(o.tagName.substr(1));return e.heading=e.shadowRoot.querySelector('h3'),r||console.warn('The first element inside each <toggle-section> should be a heading of an appropriate level.'),r&&2!==r&&e.heading.setAttribute('aria-level',r),e.btn.innerHTML=o.textContent+e.btn.innerHTML,o.parentNode.removeChild(o),e.switchState=function(){var t='true'===e.getAttribute('open')||!1;e.btn.setAttribute('aria-expanded',t),e.shadowRoot.querySelector('.content').hidden=!t},e.btn.onclick=function(){e.setAttribute('open','true'===e.getAttribute('open')?'false':'true')},e}return e(a,[{key:'attributeChangedCallback',value:function(t){'open'===t&&this.switchState()}}],[{key:'observedAttributes',get:function(){return['open']}}]),a}(l(HTMLElement));window.customElements.define('toggle-section',r);var i=document.createElement('div');i.innerHTML='\n        <ul class=\'toggle-section-controls\' aria-label=\'section controls\'>\n          <li><button id=\'expand\'>expand all</button></li>\n          <li><button id=\'collapse\'>collapse all</button></li>\n        </ul>\n      ',document.querySelector('toggle-section');var a=document.querySelectorAll('toggle-section');Array.prototype.forEach.call(a,(function(t){t.parentNode.insertBefore(i,t)})),i.addEventListener('click',(function(t){var n='expand'===t.target.id;Array.prototype.forEach.call(a,(function(t){t.setAttribute('open',n)}))}))}}}();var m=document.createElement('template');m.innerHTML='\n  <style>\n    .toggle-heading {\n      display: flex;\n      padding: var(--toggle-heading-padding)\n    }\n  \n    .toggle-heading button {\n      all: inherit;\n      align-items: center;\n      box-sizing: border-box;\n      color: var(--link-color);\n      cursor: hover;\n      display: flex;\n      justify-content: space-between;\n      width: 100%;\n      padding: 0.5em 0;\n    }\n\n    .toggle-heading:hover {\n      cursor:pointer;\n    }\n\n    .toggle-heading button:focus svg {\n      outline: 2px solid var(--focus-color);\n    }\n\n    button svg {\n      height: 1em;\n      margin-left: 0.5em;\n    }\n\n    [aria-expanded=\'true\'] .vert {\n      display: none;\n    }\n\n    [aria-expanded] rect {\n      fill: var(--link-color);\n    }\n  </style>\n  <div class="toggle-heading">\n    <button aria-expanded=\'false\'>\n      <slot name="toggle-heading">My default title</slot>\n\n      <svg aria-hidden=\'true\' focusable=\'false\' viewBox=\'0 0 10 10\'>\n        <rect class=\'vert\' height=\'8\' width=\'2\' y=\'1\' x=\'4\' />\n        <rect height=\'2\' width=\'8\' y=\'4\' x=\'1\' />\n      </svg>\n    </button>\n  </div>\n  <div class=\'content\' hidden>\n    <slot name="toggle-content"></slot>\n  </div>\n';var y=function(n){o(i,n);var r=d(i);function i(){var n;return t(this,i),(n=r.call(this)).setAttribute('role','region'),n.attachShadow({mode:'open'}).appendChild(m.content.cloneNode(!0)),n.btn=n.shadowRoot.querySelector('.toggle-heading'),n.btn.onclick=function(){n.setAttribute('open','true'===n.getAttribute('open')?'false':'true')},n}return e(i,[{key:'switchState',value:function(){var t='true'===this.getAttribute('open')||!1;this.btn.setAttribute('aria-expanded',t),this.shadowRoot.querySelector('.content').hidden=!t}},{key:'attributeChangedCallback',value:function(t){'open'===t&&this.switchState()}}],[{key:'observedAttributes',get:function(){return['open']}}]),i}(l(HTMLElement));window.customElements.define('cor-toggle',y);var x=function(n){o(i,n);var r=d(i);function i(){return t(this,i),r.call(this)}return e(i,[{key:'connectedCallback',value:function(){var t=this;document.querySelector('cor-twitter-container button');this.addEventListener('click',(function n(){t.loadScript(),t.removeEventListener('click',n)}))}},{key:'_onMouseenter',value:function(){this.classList.add('shadow')}},{key:'_onMouseleave',value:function(){this.classList.remove('shadow')}},{key:'loadScript',value:function(){$wt.render('twitterContainer',twitterOptions),this.setAttribute('loaded',''),this.scrollIntoView({behavior:'smooth',block:'center',inline:'nearest'}),this.removeEventListener('click',this._onClick)}}]),i}(l(HTMLElement));document.addEventListener('DOMContentLoaded',(function(t){customElements.get('cor-twitter-container')||customElements.define('cor-twitter-container',x)}))}();
