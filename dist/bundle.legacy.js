/* Version: 0.1.104 - October 19, 2021 18:46:11 */
!function(){'use strict';function t(t,n){if(!(t instanceof n))throw new TypeError('Cannot call a class as a function')}function n(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,'value'in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function e(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),t}function r(t,n){if('function'!=typeof n&&null!==n)throw new TypeError('Super expression must either be null or a function');t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&i(t,n)}function o(t){return(o=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function i(t,n){return(i=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function a(){if('undefined'==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if('function'==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function c(t,n,e){return(c=a()?Reflect.construct:function(t,n,e){var r=[null];r.push.apply(r,n);var o=new(Function.bind.apply(t,r));return e&&i(o,e.prototype),o}).apply(null,arguments)}function l(t){var n='function'==typeof Map?new Map:void 0;return(l=function(t){if(null===t||(e=t,-1===Function.toString.call(e).indexOf('[native code]')))return t;var e;if('function'!=typeof t)throw new TypeError('Super expression must either be null or a function');if(void 0!==n){if(n.has(t))return n.get(t);n.set(t,r)}function r(){return c(t,arguments,o(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),i(r,t)})(t)}function u(t,n){return!n||'object'!=typeof n&&'function'!=typeof n?function(t){if(void 0===t)throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return t}(t):n}function s(t){var n=a();return function(){var e,r=o(t);if(n){var i=o(this).constructor;e=Reflect.construct(r,arguments,i)}else e=r.apply(this,arguments);return u(this,e)}}function f(t){return function(t){if(Array.isArray(t))return d(t)}(t)||function(t){if('undefined'!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t['@@iterator'])return Array.from(t)}(t)||function(t,n){if(!t)return;if('string'==typeof t)return d(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);'Object'===e&&t.constructor&&(e=t.constructor.name);if('Map'===e||'Set'===e)return Array.from(t);if('Arguments'===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return d(t,n)}(t)||function(){throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.')}()}function d(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}var p=function(n){r(i,n);var o=s(i);function i(){var n;return t(this,i),(n=o.call(this)).root=n.attachShadow({mode:'open'}),n.render(),n}return e(i,[{key:'getSections',value:function(){var t=document.querySelectorAll('.cor-container h2[id],.cor-container h3[id],.cor-rich-text h2');return this.sections=f(t).map((function(t,n){return t.classList.add('cor-anchor'),t.id||(t.id=n),{id:t.id,title:t.textContent}})),this.sections}},{key:'render',value:function(){this.sections=this.getSections(),this.root.innerHTML='\n      <style>\n        ul {\n          display: grid;\n          gap: var(--space-3xs);\n          margin: var(--space-3xs) 0 0 1rem;\n          padding: 0;\n        }\n        \n        ul > li {\n          list-style-position: outside;\n          list-style-type: disc;\n          padding-left: var(--space-3xs);\n        }\n        \n        h2 {\n          color: var(--g-8);\n          font-size: var(--step-0) !important;\n          font-weight: normal;\n          text-transform: initial;\n          margin: 0 0 var(--space--4xs) 0;\n        }\n        \n        a {\n          font-size: var(--step--3);\n          text-decoration: none;\n          margin-top: var(--space-4xs, 1rem);\n        }\n        a:link,\n        a:focus,\n        a:visited,\n        a:active {\n          color: var(--link-color);\n        }\n        a:hover {\n          text-decoration: underline;\n        }\n      \n        :host {\n          display: block;\n        }\n        .readingSection {\n          \n        }\n      </style>\n      <nav class="cor-toc cor-toc--sticky" aria-labelledby="sections-heading">\n        <h2 id="sections-heading"><slot name="toc-title">Contents</slot></h2>\n        <ul class="list-disc">\n          '.concat(this.sections.map((function(t){return'\n            <li>\n              <a href="#'.concat(t.id,'">').concat(t.title,'</a>\n            </li>\n          ')})).join(''),'\n        </ul>\n      </nav>\n    ')}}]),i}(l(HTMLElement));customElements.get('cor-toc')||customElements.define('cor-toc',p),function(){if('content'in document.createElement('template')){var n=document.createElement('template');if(n.innerHTML='\n      <h3>\n        <button aria-expanded=\'false\'>\n          <svg aria-hidden=\'true\' focusable=\'false\' viewBox=\'0 0 10 10\'>\n            <rect class=\'vert\' height=\'8\' width=\'2\' y=\'1\' x=\'4\' />\n            <rect height=\'2\' width=\'8\' y=\'4\' x=\'1\' />\n          </svg>\n        </button>\n      </h3>\n      <div class=\'content\' hidden>\n        <slot></slot>\n      </div>\n      <style>\n        h3 {\n          margin: 0;\n        }\n\n        h3 button {\n          all: inherit;\n          box-sizing: border-box;\n          cursor: hover;\n          display: flex;\n          justify-content: space-between;\n          width: 100%;\n          padding: 0.5em 0;\n        }\n\n        h3 button:focus svg {\n          outline: 2px solid;\n        }\n\n        button svg {\n          height: 1em;\n          margin-left: 0.5em;\n        }\n\n        [aria-expanded=\'true\'] .vert {\n          display: none;\n        }\n\n        [aria-expanded] rect {\n          fill: currentColor;\n        }\n      </style>\n    ',document.head.attachShadow){var o=function(o){r(a,o);var i=s(a);function a(){var e;t(this,a),(e=i.call(this)).setAttribute('role','region'),e.attachShadow({mode:'open'}),e.shadowRoot.appendChild(n.content.cloneNode(!0)),e.btn=e.shadowRoot.querySelector('h3 button');var r=e.querySelector(':first-child'),o=parseInt(r.tagName.substr(1));return e.heading=e.shadowRoot.querySelector('h3'),o||console.warn('The first element inside each <toggle-section> should be a heading of an appropriate level.'),o&&2!==o&&e.heading.setAttribute('aria-level',o),e.btn.innerHTML=r.textContent+e.btn.innerHTML,r.parentNode.removeChild(r),e.switchState=function(){var t='true'===e.getAttribute('open')||!1;e.btn.setAttribute('aria-expanded',t),e.shadowRoot.querySelector('.content').hidden=!t},e.btn.onclick=function(){e.setAttribute('open','true'===e.getAttribute('open')?'false':'true')},e}return e(a,[{key:'attributeChangedCallback',value:function(t){'open'===t&&this.switchState()}}],[{key:'observedAttributes',get:function(){return['open']}}]),a}(l(HTMLElement));window.customElements.define('toggle-section',o);var i=document.createElement('div');i.innerHTML='\n        <ul class=\'toggle-section-controls\' aria-label=\'section controls\'>\n          <li><button id=\'expand\'>expand all</button></li>\n          <li><button id=\'collapse\'>collapse all</button></li>\n        </ul>\n      ';var a=document.querySelector('toggle-section'),c=document.querySelectorAll('toggle-section');a&&a.parentNode.insertBefore(i,a),i.addEventListener('click',(function(t){var n='expand'===t.target.id;Array.prototype.forEach.call(c,(function(t){t.setAttribute('open',n)}))}))}}}()}();
