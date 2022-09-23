/* Version: 0.1.170 - September 23, 2022 12:27:38 */
!function(n){'use strict';function t(n,t){for(var e=0;e<t.length;e++){var o=t[e];o.enumerable=o.enumerable||!1,o.configurable=!0,'value'in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}function e(n){return e=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},e(n)}function o(n,t){return o=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,t){return n.__proto__=t,n},o(n,t)}function r(){if('undefined'==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if('function'==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(n){return!1}}function i(n,t,e){return i=r()?Reflect.construct.bind():function(n,t,e){var r=[null];r.push.apply(r,t);var i=new(Function.bind.apply(n,r));return e&&o(i,e.prototype),i},i.apply(null,arguments)}function c(n){var t='function'==typeof Map?new Map:void 0;return c=function(n){if(null===n||(r=n,-1===Function.toString.call(r).indexOf('[native code]')))return n;var r;if('function'!=typeof n)throw new TypeError('Super expression must either be null or a function');if(void 0!==t){if(t.has(n))return t.get(n);t.set(n,c)}function c(){return i(n,arguments,e(this).constructor)}return c.prototype=Object.create(n.prototype,{constructor:{value:c,enumerable:!1,writable:!0,configurable:!0}}),o(c,n)},c(n)}function a(n){if(void 0===n)throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return n}function u(n,t){if(t&&('object'==typeof t||'function'==typeof t))return t;if(void 0!==t)throw new TypeError('Derived constructors may only return object or undefined');return a(n)}var l=document.createElement('template'),s=function(n){!function(n,t){if('function'!=typeof t&&null!==t)throw new TypeError('Super expression must either be null or a function');n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),Object.defineProperty(n,'prototype',{writable:!1}),t&&o(n,t)}(b,n);var i,c,s,f,p,d=(i=b,c=r(),function(){var n,t=e(i);if(c){var o=e(this).constructor;n=Reflect.construct(t,arguments,o)}else n=t.apply(this,arguments);return u(this,n)});function b(){var n,t,e,o,r,i,c,u,s,f;return function(n,t){if(!(n instanceof t))throw new TypeError('Cannot call a class as a function')}(this,b),(n=d.call(this)).attachShadow({mode:'open'}),t=a(n),e=t.getAttribute('alt'),o=t.getAttribute('link'),r=t.getAttribute('image'),i=t.getAttribute('imageWidth'),c=t.getAttribute('imageHeight'),u=t.getAttribute('cta'),s=t.getAttribute('title'),f=t.getAttribute('description'),l.innerHTML='\n    <style>\n      :host {\n\n        /* START: To remove when Base CSS is available everywhere */\n        --fluid-min-width: 320;\n        --fluid-max-width: 1140;\n        --fluid-screen: 100vw;\n        --fluid-bp: calc( (var(--fluid-screen) - var(--fluid-min-width) / 16 * 1rem) / (var(--fluid-max-width) - var(--fluid-min-width)) );\n\n        --f-0-min: 21;\n        --f-0-max: 24;\n        --fc-s-min: (var(--f-0-min, 21));\n        --fc-s-max: (var(--f-0-max, 24));\n        --fc-2xs-min: (var(--fc-s-min) * 0.5);\n        --fc-2xs-max: (var(--fc-s-max) * 0.5);\n        --space-2xs: calc( ((var(--fc-2xs-min) / 16) * 1rem) + (var(--fc-2xs-max) - var(--fc-2xs-min)) * var(--fluid-bp) );\n\n        --oc-blue-8: #1971c2;\n        --oc-indigo-5: #5c7cfa;\n        --oc-gray-3: #dee2e6;\n        --oc-gray-9: #212529;\n\n        --link-color: var(--oc-blue-8);\n        --text-color: var(--oc-gray-9);\n        /* END: To remove when Base CSS is available everywhere */\n\n        background: white;\n        display: block;\n        margin-bottom: var(--space-2xs);\n      }\n      \n      :host([type="card"]) {\n        transition: border-color 0.5s ease;\n        border: solid 1px var(--oc-gray-3);\n      }\n\n      :host([type="card"]:hover) {\n        border-color: var(--oc-indigo-5);\n      }\n\n      :host([type="card"]:hover) h3 {\n        text-decoration: underline;\n      }\n\n      a {\n        display: block;\n        position: relative;\n        text-decoration: none;\n      }\n      \n      img {\n        box-shadow: inset 0 0 80px rgb(230 237 236 / 50%);\n        display: block;\n        height: auto;\n        width: 100%;\n        aspect-ratio: '.concat(i,' / ').concat(c,';\n        transition: .3s,filter;\n        opacity: 1;\n      }\n\n      a:before {\n        background-color: #0000;\n        content: "";\n        display: block;\n        position: absolute;\n        transition: background-color 0.5s ease;\n        height: 100%;\n        width: 100%;\n      }\n      \n      a:hover:before {\n        background-color: #0005;\n      }\n\n      :host([type="card"]) a:before {\n        content: none;\n      }\n\n      span {\n        box-sizing: border-box;\n        background-color: #00000094;\n        color: white;\n        display: block;\n        font-size: 16px;\n        font-weight: bold;\n        text-decoration: none;\n        padding: .5rem;\n        position: absolute;\n        bottom: 0;\n        width: 100%;\n      }\n\n      p, h3 {\n        margin: var(--space-2xs) var(--space-2xs);\n      }\n\n      h3 {\n        color: var(--link-color);\n        font-size: 16px;\n        margin: var(--space-2xs) var(--space-2xs);\n      }\n\n      p {\n        color: var(--text-color);\n        font-size: 14px;\n      }\n   \n    </style>\n    <a href="').concat(o,'">\n      ').concat(r?'<img src="'.concat(r,'" alt="').concat(e,'" width="').concat(i,'" height="').concat(c,'" />'):'','\n      ').concat(s?'<h3>'.concat(s,'</h3>'):'','\n      ').concat(f?'<p>'.concat(f,'</p>'):'','\n      ').concat(u?'<span>'.concat(u,'</span>'):'','\n    </a>\n      '),n.shadowRoot.appendChild(l.content.cloneNode(!0)),n}return s=b,p=[{key:'properties',get:function(){return{image:{type:String}}}}],(f=null)&&t(s.prototype,f),p&&t(s,p),Object.defineProperty(s,'prototype',{writable:!1}),b}(c(HTMLElement));customElements.define('cor-banner',s),n.CorBanner=s,Object.defineProperty(n,'__esModule',{value:!0})}({});
