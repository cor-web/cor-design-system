/* Version: 0.1.77 - August 19, 2021 14:04:59 */
!function(){'use strict';function n(t){return(n=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(t)}function t(n,e){return(t=Object.setPrototypeOf||function(n,t){return n.__proto__=t,n})(n,e)}function e(){if('undefined'==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if('function'==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(n){return!1}}function r(n,o,i){return(r=e()?Reflect.construct:function(n,e,r){var o=[null];o.push.apply(o,e);var i=new(Function.bind.apply(n,o));return r&&t(i,r.prototype),i}).apply(null,arguments)}function o(e){var i='function'==typeof Map?new Map:void 0;return(o=function(e){if(null===e||(o=e,-1===Function.toString.call(o).indexOf('[native code]')))return e;var o;if('function'!=typeof e)throw new TypeError('Super expression must either be null or a function');if(void 0!==i){if(i.has(e))return i.get(e);i.set(e,c)}function c(){return r(e,arguments,n(this).constructor)}return c.prototype=Object.create(e.prototype,{constructor:{value:c,enumerable:!1,writable:!0,configurable:!0}}),t(c,e)})(e)}function i(n,t){return!t||'object'!=typeof t&&'function'!=typeof t?function(n){if(void 0===n)throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return n}(n):t}function c(n){return function(n){if(Array.isArray(n))return a(n)}(n)||function(n){if('undefined'!=typeof Symbol&&null!=n[Symbol.iterator]||null!=n['@@iterator'])return Array.from(n)}(n)||function(n,t){if(!n)return;if('string'==typeof n)return a(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);'Object'===e&&n.constructor&&(e=n.constructor.name);if('Map'===e||'Set'===e)return Array.from(n);if('Arguments'===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return a(n,t)}(n)||function(){throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.')}()}function a(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,r=new Array(t);e<t;e++)r[e]=n[e];return r}var u=function(r){!function(n,e){if('function'!=typeof e&&null!==e)throw new TypeError('Super expression must either be null or a function');n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),e&&t(n,e)}(l,r);var o,a,u=(o=l,a=e(),function(){var t,e=n(o);if(a){var r=n(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return i(this,t)});function l(){var n;!function(n,t){if(!(n instanceof t))throw new TypeError('Cannot call a class as a function')}(this,l);var t=(n=u.call(this)).attachShadow({mode:'open'}),e=document.querySelectorAll('h2[id],h3[id],.cor-rich-text h2');return n.sections=c(e).map((function(n,t){return n.classList.add('cor-anchor'),n.id||(n.id=t),{id:n.id,title:n.textContent}})),t.innerHTML='\n      <style>\n        ul {\n          display: grid;\n          gap: var(--space-3xs);\n          margin: var(--space-3xs) 0 0 1rem;\n          padding: 0;\n        }\n        \n        ul > li {\n          list-style-position: outside;\n          list-style-type: disc;\n          padding-left: var(--space-3xs);\n        }\n        \n        h2 {\n          color: var(--g-8);\n          font-size: var(--step-0) !important;\n          font-weight: normal;\n          text-transform: initial;\n          margin: 0 0 var(--space--4xs) 0;\n        }\n        \n        a {\n          font-size: var(--step--3);\n          text-decoration: none;\n          margin-top: var(--space-4xs, 1rem);\n        }\n\n        a:link,\n        a:focus,\n        a:visited,\n        a:active {\n          color: var(--link-color);\n        }\n\n        a:hover {\n          text-decoration: underline;\n        }\n      \n        :host {\n          display: block;\n        }\n\n        .readingSection {\n          \n        }\n      </style>\n      <nav class="cor-toc cor-toc--sticky" aria-labelledby="sections-heading">\n        <h2 id="sections-heading"><slot name="toc-title">Contents</slot></h2>\n        <ul class="list-disc">\n          '.concat(n.sections.map((function(n){return'\n            <li>\n              <a href="#'.concat(n.id,'">').concat(n.title,'</a>\n            </li>\n          ')})).join(''),'\n        </ul>\n      </nav>\n    '),n}return l}(o(HTMLElement));customElements.get('cor-toc')||customElements.define('cor-toc',u)}();
