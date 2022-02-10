/* Version: 0.1.117 - February 10, 2022 16:09:57 */
!function(){'use strict';function n(n,t){if(!(n instanceof t))throw new TypeError('Cannot call a class as a function')}function t(n,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,'value'in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}function e(n,e,r){return e&&t(n.prototype,e),r&&t(n,r),n}function r(n,t){if('function'!=typeof t&&null!==t)throw new TypeError('Super expression must either be null or a function');n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),t&&i(n,t)}function o(n){return(o=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}function i(n,t){return(i=Object.setPrototypeOf||function(n,t){return n.__proto__=t,n})(n,t)}function a(){if('undefined'==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if('function'==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(n){return!1}}function c(n,t,e){return(c=a()?Reflect.construct:function(n,t,e){var r=[null];r.push.apply(r,t);var o=new(Function.bind.apply(n,r));return e&&i(o,e.prototype),o}).apply(null,arguments)}function l(n){var t='function'==typeof Map?new Map:void 0;return(l=function(n){if(null===n||(e=n,-1===Function.toString.call(e).indexOf('[native code]')))return n;var e;if('function'!=typeof n)throw new TypeError('Super expression must either be null or a function');if(void 0!==t){if(t.has(n))return t.get(n);t.set(n,r)}function r(){return c(n,arguments,o(this).constructor)}return r.prototype=Object.create(n.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),i(r,n)})(n)}function s(n,t){return!t||'object'!=typeof t&&'function'!=typeof t?function(n){if(void 0===n)throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return n}(n):t}function u(n){var t=a();return function(){var e,r=o(n);if(t){var i=o(this).constructor;e=Reflect.construct(r,arguments,i)}else e=r.apply(this,arguments);return s(this,e)}}function d(n){return function(n){if(Array.isArray(n))return p(n)}(n)||function(n){if('undefined'!=typeof Symbol&&null!=n[Symbol.iterator]||null!=n['@@iterator'])return Array.from(n)}(n)||function(n,t){if(!n)return;if('string'==typeof n)return p(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);'Object'===e&&n.constructor&&(e=n.constructor.name);if('Map'===e||'Set'===e)return Array.from(n);if('Arguments'===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return p(n,t)}(n)||function(){throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.')}()}function p(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,r=new Array(t);e<t;e++)r[e]=n[e];return r}!function(){if('content'in document.createElement('template')){var t=document.createElement('template');if(t.innerHTML='\n      <span class="cor-expander--header">\n        <button aria-expanded=\'false\'>\n          <svg aria-hidden=\'true\' focusable=\'false\' viewBox=\'0 0 16 16\'>\n            <path class="close" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"/>\n            <path class="open" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>\n          </svg>\n \n        </button>\n      </span>\n      <div class=\'content\' hidden>\n        <slot></slot>\n      </div>\n      <style>\n        .cor-expander--header {\n          margin: 0;\n        }\n\n        .cor-expander--header button {\n          all: inherit;\n          border: solid 2px var(--link-color);\n          box-sizing: border-box;\n          color: var(--link-color);\n          cursor: pointer;\n          display: flex;\n          align-items: center;\n          padding: var(--space-3xs);\n        }\n\n        .cor-expander--header button:focus {\n          border-color: white;\n          outline: 2px solid var(--focus-color);\n        }\n\n        button svg {\n          height: 1em;\n          margin-left: 0.5em;\n        }\n\n\n        [aria-expanded=\'true\'] path.open {\n          display: none;\n        }\n\n        [aria-expanded=\'true\'] path.close {\n          display: block;\n        }\n\n        [aria-expanded=\'false\'] path.open {\n          display: block;\n        }\n\n        [aria-expanded=\'false\'] path.close {\n          display: none;\n        }\n\n        [aria-expanded] path {\n          fill: currentColor;\n        }\n      </style>\n    ',document.head.attachShadow){var o=function(o){r(a,o);var i=u(a);function a(){var e;n(this,a),(e=i.call(this)).setAttribute('role','region'),e.attachShadow({mode:'open'}),e.shadowRoot.appendChild(t.content.cloneNode(!0)),e.btn=e.shadowRoot.querySelector('span button');var r=e.querySelector(':first-child');return e.heading=e.shadowRoot.querySelector('span'),e.btn.innerHTML=r.textContent+e.btn.innerHTML,r.parentNode.removeChild(r),e.switchState=function(){var n='true'===e.getAttribute('open')||!1;e.btn.setAttribute('aria-expanded',n),e.shadowRoot.querySelector('.content').hidden=!n},e.btn.onclick=function(){e.setAttribute('open','true'===e.getAttribute('open')?'false':'true')},e}return e(a,[{key:'attributeChangedCallback',value:function(n){'open'===n&&this.switchState()}}],[{key:'observedAttributes',get:function(){return['open']}}]),a}(l(HTMLElement));window.customElements.define('cor-expander',o)}}}();var f=function(t){r(i,t);var o=u(i);function i(){var t;return n(this,i),(t=o.call(this)).root=t.attachShadow({mode:'open'}),t.render(),t}return e(i,[{key:'getSections',value:function(){var n=document.querySelectorAll('.cor-container h2[id],.cor-container h3[id],.cor-rich-text h2');return this.sections=d(n).map((function(n,t){return n.classList.add('cor-anchor'),n.id||(n.id=t),{id:n.id,title:n.textContent}})),this.sections}},{key:'render',value:function(){this.sections=this.getSections(),this.root.innerHTML='\n      <style>\n        ul {\n          display: grid;\n          gap: var(--space-4xs);\n          margin: var(--space-3xs) 0 0 1rem;\n          padding: 0;\n        }\n        \n        ul > li {\n          list-style-position: outside;\n          list-style-type: disc;\n          line-height: initial;\n        }\n        \n        h2 {\n          color: var(--g-8);\n          font-size: var(--step--3) !important;\n          font-weight: bold;\n          text-transform: initial;\n          margin: 0 0 var(--space--4xs) 0;\n        }\n        \n        a {\n          font-size: var(--step--4);\n          text-decoration: underline;\n          margin-top: var(--space-4xs, 1rem);\n        }\n        a:link,\n        a:focus,\n        a:visited,\n        a:active {\n          color: var(--link-color);\n        }\n        a:hover {\n          text-decoration: underline;\n        }\n      \n        :host {\n          display: block;\n        }\n        .readingSection {\n          \n        }\n      </style>\n      <nav class="cor-toc cor-toc--sticky" aria-labelledby="sections-heading">\n        <h2 id="sections-heading"><slot name="toc-title">Contents</slot></h2>\n        <ul class="list-disc">\n          '.concat(this.sections.map((function(n){return'\n            <li>\n              <a href="#'.concat(n.id,'">').concat(n.title,'</a>\n            </li>\n          ')})).join(''),'\n        </ul>\n      </nav>\n    ')}}]),i}(l(HTMLElement));customElements.get('cor-toc')||customElements.define('cor-toc',f),function(){if('content'in document.createElement('template')){var t=document.createElement('template');if(t.innerHTML='\n      <h3>\n        <button aria-expanded=\'false\'>\n          <svg aria-hidden=\'true\' focusable=\'false\' viewBox=\'0 0 10 10\'>\n            <rect class=\'vert\' height=\'8\' width=\'2\' y=\'1\' x=\'4\' />\n            <rect height=\'2\' width=\'8\' y=\'4\' x=\'1\' />\n          </svg>\n        </button>\n      </h3>\n      <div class=\'content\' hidden>\n        <slot></slot>\n      </div>\n      <style>\n        h3 {\n          margin: 0;\n        }\n\n        h3 button {\n          all: inherit;\n          align-items: center;\n          box-sizing: border-box;\n          color: var(--link-color);\n          cursor: hover;\n          display: flex;\n          justify-content: space-between;\n          width: 100%;\n          padding: 0.5em 0;\n        }\n\n        h3 button:hover {\n          cursor:pointer;\n        }\n        \n        h3 button:focus svg {\n          outline: 2px solid var(--focus-color);\n        }\n\n        button svg {\n          height: 1em;\n          margin-left: 0.5em;\n        }\n\n        [aria-expanded=\'true\'] .vert {\n          display: none;\n        }\n\n        [aria-expanded] rect {\n          fill: var(--link-color);\n        }\n      </style>\n    ',document.head.attachShadow){var o=function(o){r(a,o);var i=u(a);function a(){var e;n(this,a),(e=i.call(this)).setAttribute('role','region'),e.attachShadow({mode:'open'}),e.shadowRoot.appendChild(t.content.cloneNode(!0)),e.btn=e.shadowRoot.querySelector('h3 button');var r=e.querySelector(':first-child'),o=parseInt(r.tagName.substr(1));return e.heading=e.shadowRoot.querySelector('h3'),o||console.warn('The first element inside each <toggle-section> should be a heading of an appropriate level.'),o&&2!==o&&e.heading.setAttribute('aria-level',o),e.btn.innerHTML=r.textContent+e.btn.innerHTML,r.parentNode.removeChild(r),e.switchState=function(){var n='true'===e.getAttribute('open')||!1;e.btn.setAttribute('aria-expanded',n),e.shadowRoot.querySelector('.content').hidden=!n},e.btn.onclick=function(){e.setAttribute('open','true'===e.getAttribute('open')?'false':'true')},e}return e(a,[{key:'attributeChangedCallback',value:function(n){'open'===n&&this.switchState()}}],[{key:'observedAttributes',get:function(){return['open']}}]),a}(l(HTMLElement));window.customElements.define('toggle-section',o);var i=document.createElement('div');i.innerHTML='\n        <ul class=\'toggle-section-controls\' aria-label=\'section controls\'>\n          <li><button id=\'expand\'>expand all</button></li>\n          <li><button id=\'collapse\'>collapse all</button></li>\n        </ul>\n      ';var a=document.querySelector('toggle-section'),c=document.querySelectorAll('toggle-section');a&&a.parentNode.insertBefore(i,a),i.addEventListener('click',(function(n){var t='expand'===n.target.id;Array.prototype.forEach.call(c,(function(n){n.setAttribute('open',t)}))}))}}}()}();
