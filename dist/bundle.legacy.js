/* Version: 0.1.90 - September 20, 2021 12:23:32 */
!function(){'use strict';function t(t,n){if(!(t instanceof n))throw new TypeError('Cannot call a class as a function')}function n(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,'value'in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function e(t,n){if('function'!=typeof n&&null!==n)throw new TypeError('Super expression must either be null or a function');t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&o(t,n)}function r(t){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function o(t,n){return(o=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function i(){if('undefined'==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if('function'==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function a(t,n,e){return(a=i()?Reflect.construct:function(t,n,e){var r=[null];r.push.apply(r,n);var i=new(Function.bind.apply(t,r));return e&&o(i,e.prototype),i}).apply(null,arguments)}function c(t){var n='function'==typeof Map?new Map:void 0;return(c=function(t){if(null===t||(e=t,-1===Function.toString.call(e).indexOf('[native code]')))return t;var e;if('function'!=typeof t)throw new TypeError('Super expression must either be null or a function');if(void 0!==n){if(n.has(t))return n.get(t);n.set(t,i)}function i(){return a(t,arguments,r(this).constructor)}return i.prototype=Object.create(t.prototype,{constructor:{value:i,enumerable:!1,writable:!0,configurable:!0}}),o(i,t)})(t)}function l(t,n){return!n||'object'!=typeof n&&'function'!=typeof n?function(t){if(void 0===t)throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return t}(t):n}function u(t){var n=i();return function(){var e,o=r(t);if(n){var i=r(this).constructor;e=Reflect.construct(o,arguments,i)}else e=o.apply(this,arguments);return l(this,e)}}function s(t){return function(t){if(Array.isArray(t))return f(t)}(t)||function(t){if('undefined'!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t['@@iterator'])return Array.from(t)}(t)||function(t,n){if(!t)return;if('string'==typeof t)return f(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);'Object'===e&&t.constructor&&(e=t.constructor.name);if('Map'===e||'Set'===e)return Array.from(t);if('Arguments'===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return f(t,n)}(t)||function(){throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.')}()}function f(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}var d=function(n){e(o,n);var r=u(o);function o(){var n;t(this,o);var e=(n=r.call(this)).attachShadow({mode:'open'}),i=document.querySelectorAll('h2[id],h3[id],.cor-rich-text h2');return n.sections=s(i).map((function(t,n){return t.classList.add('cor-anchor'),t.id||(t.id=n),{id:t.id,title:t.textContent}})),e.innerHTML='\n      <style>\n        ul {\n          display: grid;\n          gap: var(--space-3xs);\n          margin: var(--space-3xs) 0 0 1rem;\n          padding: 0;\n        }\n        \n        ul > li {\n          list-style-position: outside;\n          list-style-type: disc;\n          padding-left: var(--space-3xs);\n        }\n        \n        h2 {\n          color: var(--g-8);\n          font-size: var(--step-0) !important;\n          font-weight: normal;\n          text-transform: initial;\n          margin: 0 0 var(--space--4xs) 0;\n        }\n        \n        a {\n          font-size: var(--step--3);\n          text-decoration: none;\n          margin-top: var(--space-4xs, 1rem);\n        }\n\n        a:link,\n        a:focus,\n        a:visited,\n        a:active {\n          color: var(--link-color);\n        }\n\n        a:hover {\n          text-decoration: underline;\n        }\n      \n        :host {\n          display: block;\n        }\n\n        .readingSection {\n          \n        }\n      </style>\n      <nav class="cor-toc cor-toc--sticky" aria-labelledby="sections-heading">\n        <h2 id="sections-heading"><slot name="toc-title">Contents</slot></h2>\n        <ul class="list-disc">\n          '.concat(n.sections.map((function(t){return'\n            <li>\n              <a href="#'.concat(t.id,'">').concat(t.title,'</a>\n            </li>\n          ')})).join(''),'\n        </ul>\n      </nav>\n    '),n}return o}(c(HTMLElement));customElements.get('cor-toc')||customElements.define('cor-toc',d),function(){if('content'in document.createElement('template')){var r=document.createElement('template');if(r.innerHTML='\n      <h3>\n        <button aria-expanded=\'false\'>\n          <svg aria-hidden=\'true\' focusable=\'false\' viewBox=\'0 0 10 10\'>\n            <rect class=\'vert\' height=\'8\' width=\'2\' y=\'1\' x=\'4\' />\n            <rect height=\'2\' width=\'8\' y=\'4\' x=\'1\' />\n          </svg>\n        </button>\n      </h3>\n      <div class=\'content\' hidden>\n        <slot></slot>\n      </div>\n      <style>\n        h3 {\n          margin: 0;\n        }\n\n        h3 button {\n          all: inherit;\n          box-sizing: border-box;\n          cursor: hover;\n          display: flex;\n          justify-content: space-between;\n          width: 100%;\n          padding: 0.5em 0;\n        }\n\n        h3 button:focus svg {\n          outline: 2px solid;\n        }\n\n        button svg {\n          height: 1em;\n          margin-left: 0.5em;\n        }\n\n        [aria-expanded=\'true\'] .vert {\n          display: none;\n        }\n\n        [aria-expanded] rect {\n          fill: currentColor;\n        }\n      </style>\n    ',document.head.attachShadow){var o=function(o){e(s,o);var i,a,c,l=u(s);function s(){var n;t(this,s),(n=l.call(this)).setAttribute('role','region'),n.attachShadow({mode:'open'}),n.shadowRoot.appendChild(r.content.cloneNode(!0)),n.btn=n.shadowRoot.querySelector('h3 button');var e=n.querySelector(':first-child'),o=parseInt(e.tagName.substr(1));return n.heading=n.shadowRoot.querySelector('h3'),o||console.warn('The first element inside each <toggle-section> should be a heading of an appropriate level.'),o&&2!==o&&n.heading.setAttribute('aria-level',o),n.btn.innerHTML=e.textContent+n.btn.innerHTML,e.parentNode.removeChild(e),n.switchState=function(){var t='true'===n.getAttribute('open')||!1;n.btn.setAttribute('aria-expanded',t),n.shadowRoot.querySelector('.content').hidden=!t},n.btn.onclick=function(){n.setAttribute('open','true'===n.getAttribute('open')?'false':'true')},n}return i=s,c=[{key:'observedAttributes',get:function(){return['open']}}],(a=[{key:'attributeChangedCallback',value:function(t){'open'===t&&this.switchState()}}])&&n(i.prototype,a),c&&n(i,c),s}(c(HTMLElement));window.customElements.define('toggle-section',o);var i=document.createElement('div');i.innerHTML='\n        <ul class=\'toggle-section-controls\' aria-label=\'section controls\'>\n          <li><button id=\'expand\'>expand all</button></li>\n          <li><button id=\'collapse\'>collapse all</button></li>\n        </ul>\n      ';var a=document.querySelector('toggle-section'),l=document.querySelectorAll('toggle-section');a&&a.parentNode.insertBefore(i,a),i.addEventListener('click',(function(t){var n='expand'===t.target.id;Array.prototype.forEach.call(l,(function(t){t.setAttribute('open',n)}))}))}}}()}();
