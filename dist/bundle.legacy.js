/* Version: 0.1.68 - July 15, 2021 08:06:01 */
!function(){'use strict';function t(t,n,e,r,i,o,a){try{var c=t[o](a),u=c.value}catch(t){return void e(t)}c.done?n(u):Promise.resolve(u).then(r,i)}function n(t,n){if(!(t instanceof n))throw new TypeError('Cannot call a class as a function')}function e(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,'value'in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function r(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}function i(t,n){if('function'!=typeof n&&null!==n)throw new TypeError('Super expression must either be null or a function');t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&a(t,n)}function o(t){return(o=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function a(t,n){return(a=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function c(){if('undefined'==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if('function'==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function u(t,n,e){return(u=c()?Reflect.construct:function(t,n,e){var r=[null];r.push.apply(r,n);var i=new(Function.bind.apply(t,r));return e&&a(i,e.prototype),i}).apply(null,arguments)}function l(t){var n='function'==typeof Map?new Map:void 0;return(l=function(t){if(null===t||(e=t,-1===Function.toString.call(e).indexOf('[native code]')))return t;var e;if('function'!=typeof t)throw new TypeError('Super expression must either be null or a function');if(void 0!==n){if(n.has(t))return n.get(t);n.set(t,r)}function r(){return u(t,arguments,o(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),a(r,t)})(t)}function s(t,n){if(null==t)return{};var e,r,i=function(t,n){if(null==t)return{};var e,r,i={},o=Object.keys(t);for(r=0;r<o.length;r++)e=o[r],n.indexOf(e)>=0||(i[e]=t[e]);return i}(t,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)e=o[r],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(i[e]=t[e])}return i}function d(t){if(void 0===t)throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return t}function f(t,n){return!n||'object'!=typeof n&&'function'!=typeof n?d(t):n}function h(t){var n=c();return function(){var e,r=o(t);if(n){var i=o(this).constructor;e=Reflect.construct(r,arguments,i)}else e=r.apply(this,arguments);return f(this,e)}}function p(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){if('undefined'==typeof Symbol||!(Symbol.iterator in Object(t)))return;var e=[],r=!0,i=!1,o=void 0;try{for(var a,c=t[Symbol.iterator]();!(r=(a=c.next()).done)&&(e.push(a.value),!n||e.length!==n);r=!0);}catch(t){i=!0,o=t}finally{try{r||null==c.return||c.return()}finally{if(i)throw o}}return e}(t,n)||v(t,n)||function(){throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.')}()}function m(t){return function(t){if(Array.isArray(t))return b(t)}(t)||function(t){if('undefined'!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||v(t)||function(){throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.')}()}function v(t,n){if(t){if('string'==typeof t)return b(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);return'Object'===e&&t.constructor&&(e=t.constructor.name),'Map'===e||'Set'===e?Array.from(t):'Arguments'===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?b(t,n):void 0}}function b(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}function y(t,n){var e;if('undefined'==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(e=v(t))||n&&t&&'number'==typeof t.length){e&&(t=e);var r=0,i=function(){};return{s:i,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:i}}throw new TypeError('Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.')}var o,a=!0,c=!1;return{s:function(){e=t[Symbol.iterator]()},n:function(){var t=e.next();return a=t.done,t},e:function(t){c=!0,o=t},f:function(){try{a||null==e.return||e.return()}finally{if(c)throw o}}}}var g=function(t){return p(t,1)[0]},w=function(t,n){return'function'==typeof t?t(n):t},x=function(t,n){return t.style.willChange=n?n.map((function(t){return t.property})).join():'auto'},E=function(t,n){return Object.entries(n).reduce((function(t,n){var e=p(n,2),r=e[0],i=e[1];return t.setAttribute(r,i),t}),document.createElementNS('http://www.w3.org/2000/svg',t))},A={axes:['x','y'],count:0,add:function(t){var n=t.element,e=t.blur,r='motion-blur-'.concat(this.count++),i=E('svg',{style:'position: absolute; width: 0; height: 0'}),o=E('filter',this.axes.reduce((function(t,n){var r=2*e[n];return t[n]='-'.concat(r,'%'),t['x'==n?'width':'height']=''.concat(100+2*r,'%'),t}),{id:r,'color-interpolation-filters':'sRGB'})),a=E('feGaussianBlur',{in:'SourceGraphic'});return o.append(a),i.append(o),n.style.filter='url("#'.concat(r,'")'),document.body.prepend(i),a}},M=function(t,n){var e=t.blur,r=t.gaussian,i=t.easing,o=A.axes.map((function(t){return function(t,n,e){var r=n.easing,i=t*e,o=t-i,a='linear'==r?t:r.startsWith('in-out')?2*(e<.5?i:o):r.startsWith('in')?i:o;return Math.max(0,a)}(e[t],i,n)}));r.setAttribute('stdDeviation',o.join())},S=function(t){var n=A.axes.reduce((function(t,n){return t[n]=0,t}),{});return Object.assign(n,t)},k=function(t){var n=p(function(t){return function(t){var n=t.split(''),e=t.length<5?n.map((function(t){return t+t})):n.reduce((function(t,e,r){return r%2&&t.push(n[r-1]+e),t}),[]);return e.length<4&&e.push('ff'),e}(t).map((function(t){return parseInt(t,16)}))}(t.slice(1)),4),e=n[0],r=n[1],i=n[2],o=n[3];return'rgba('.concat(e,', ').concat(r,', ').concat(i,', ').concat(o/255,')')},q=2*Math.PI,_=function(t,n){return n/q*Math.asin(1/t)},L={linear:function(t){return t},'in-cubic':function(t){return Math.pow(t,3)},'in-quartic':function(t){return Math.pow(t,4)},'in-quintic':function(t){return Math.pow(t,5)},'in-exponential':function(t){return Math.pow(1024,t-1)},'in-circular':function(t){return 1-Math.sqrt(1-Math.pow(t,2))},'in-elastic':function(t,n,e){var r=Math.max(n,1),i=_(r,e);return-r*Math.pow(2,10*(t-=1))*Math.sin((t-i)*q/e)},'out-cubic':function(t){return Math.pow(--t,3)+1},'out-quartic':function(t){return 1-Math.pow(--t,4)},'out-quintic':function(t){return Math.pow(--t,5)+1},'out-exponential':function(t){return 1-Math.pow(2,-10*t)},'out-circular':function(t){return Math.sqrt(1-Math.pow(--t,2))},'out-elastic':function(t,n,e){var r=Math.max(n,1),i=_(r,e);return r*Math.pow(2,-10*t)*Math.sin((t-i)*q/e)+1},'in-out-cubic':function(t){return(t*=2)<1?.5*Math.pow(t,3):.5*((t-=2)*Math.pow(t,2)+2)},'in-out-quartic':function(t){return(t*=2)<1?.5*Math.pow(t,4):-.5*((t-=2)*Math.pow(t,3)-2)},'in-out-quintic':function(t){return(t*=2)<1?.5*Math.pow(t,5):.5*((t-=2)*Math.pow(t,4)+2)},'in-out-exponential':function(t){return(t*=2)<1?.5*Math.pow(1024,t-1):.5*(2-Math.pow(2,-10*(t-1)))},'in-out-circular':function(t){return(t*=2)<1?-.5*(Math.sqrt(1-Math.pow(t,2))-1):.5*(Math.sqrt(1-(t-=2)*t)+1)},'in-out-elastic':function(t,n,e){var r=Math.max(n,1),i=_(r,e);return(t*=2)<1?r*Math.pow(2,10*(t-=1))*Math.sin((t-i)*q/e)*-.5:r*Math.pow(2,-10*(t-=1))*Math.sin((t-i)*q/e)*.5+1}},T=function(t){var n=p(t.trim().split(' '),3),e=n[0],r=n[1],i=void 0===r?1:r,o=n[2];return{easing:e,amplitude:i,period:void 0===o?.4:o}},j=/-?\d*\.?\d+/g,O=function(t){return t.match(j).map(Number)},C=function(t,n){var e=function(t){return t.map((function(t){var n=String(t);return n.startsWith('#')?k(n):n}))}(n),r=g(e).split(j);return{property:t,strings:r,numbers:e.map(O),round:g(r).startsWith('rgb')}},I=function(t,n){return Object.entries(t).map((function(t){var e=p(t,2),r=e[0],i=e[1];return C(r,w(i,n))}))},R=function(t,n){return t.reduce((function(t,e){var r=e.property,i=e.numbers,o=e.strings,a=e.round;return t[r]=function(t,n,e,r){var i=p(t,2),o=i[0],a=i[1];return n.reduce((function(t,n,i){var c=i-1,u=function(t,n,e){return t+(n-t)*e}(o[c],a[c],r);return t+(e&&i<4?Math.round(u):u)+n}))}(i,o,a,n),t}),{})},H=function(t){return t.forEach((function(t){return t.numbers.reverse()}))},z={all:new Set,add:function(t){this.all.add(t).size<2&&requestAnimationFrame(F)}},N={},P=function(t,n,e){return t>0?w(n,e)/t:0},B=function(n,e){var r=n.elements,i=void 0===r?null:r,o=n.easing,a=void 0===o?'out-elastic':o,c=n.duration,u=void 0===c?1e3:c,l=n.delay,d=void 0===l?0:l,f=n.speed,h=void 0===f?1:f,p=n.loop,m=void 0!==p&&p,v=n.optimize,b=void 0!==v&&v,y=n.direction,g=void 0===y?'normal':y,E=n.blur,M=void 0===E?null:E,k=n.change,q=void 0===k?null:k,_=s(n,['elements','easing','duration','delay','speed','loop','optimize','direction','blur','change']),L={totalDuration:-1};(function(t){return Array.isArray(t)?t:!t||t.nodeType?[t]:Array.from('string'==typeof t?document.querySelectorAll(t):t)})(i).forEach(function(){var n,e=(n=regeneratorRuntime.mark((function t(n,e){var r,i,o,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=I(_,e),i={element:n,keyframes:r,loop:m,optimize:b,direction:g,change:q,easing:T(a),duration:P(h,u,e)},o=P(h,d,e),c=o+i.duration,'normal'!=g&&H(r),n&&(b&&x(n,r),M&&(i.blur=S(w(M,e)),i.gaussian=A.add(i))),c>L.totalDuration&&(L.animation=i,L.totalDuration=c),!o){t.next=10;break}return t.next=10,D(o);case 10:z.add(i);case 11:case'end':return t.stop()}}),t)})),function(){var e=this,r=arguments;return new Promise((function(i,o){var a=n.apply(e,r);function c(n){t(a,i,o,c,u,'next',n)}function u(n){t(a,i,o,c,u,'throw',n)}c(void 0)}))});return function(t,n){return e.apply(this,arguments)}}());var j=L.animation;j&&(j.end=e,j.options=n)},F=function t(n){var e=z.all;e.forEach((function(t){!function(t,n){t.startTime||(t.startTime=n),t.elapsed=n-t.startTime}(t,n);var r,i,o,a=function(t){var n=t.elapsed,e=t.duration;return e>0?Math.min(n/e,1):1}(t),c=t.element,u=t.keyframes,l=t.loop,s=t.optimize,d=t.direction,f=t.change,h=t.easing,p=t.duration,m=t.gaussian,v=t.end,b=t.options;if(d){var y=a;switch(a){case 0:'alternate'==d&&H(u);break;case 1:l?function(t){t.startTime=0}(t):(e.delete(t),s&&c&&x(c),m&&(r=m,i=c.style,o=r.parentNode.parentNode,i.filter='none',o.remove())),v&&v(b);break;default:y=function(t,n){var e=t.easing,r=t.amplitude,i=t.period;return L[e](n,r,i)}(h,a)}return m&&M(t,y),f&&v&&f(y),void(c&&Object.assign(c.style,R(u,y)))}a<1||(e.delete(t),v(p))})),e.size&&requestAnimationFrame(t)};document.addEventListener('visibilitychange',(function(){var t=performance.now();if(document.hidden){var n=z.all;return N.time=t,N.all=new Set(n),void n.clear()}var e=N.all,r=N.time;if(e){var i=t-r;requestAnimationFrame((function(){return e.forEach((function(t){t.startTime+=i,z.add(t)}))}))}}));var D=function(t){return new Promise((function(n){return z.add({duration:t,end:n})}))},W=function(t,n,e){return'\n    <svg style="display:block" viewBox="0 0 100 8" fill="none" xmlns="http://www.w3.org/2000/svg">\n      \n      <rect width="100" height="8" fill="var(--chart-'.concat(e,'-background, #dee2e6)"></rect>\n      \n      <g>\n        <rect ').concat(t>0?'animate':'','  x="0"  width="').concat(t,'" height="8" fill="var(--chart-').concat(e,'-color-1, #1E88E5)"></rect>\n        <text text-anchor="middle"  dominant-baseline="central"  \n           style="fill: ').concat(t/2>2?'var(--chart-'.concat(e,'-color-1-text, white)'):'black','; font-family: consolas; font-size: var(--bar-font-size, 20%); font-weight: 500; pointer-events: none;" x="').concat(t/2>2?t/2:7,'" y="4">').concat(n,'</text>\n      </g>\n      \n      <title>').concat(t,'%</title>\n    </svg>\n    ')},G=function(t){i(o,t);var e=h(o);function o(){var t;n(this,o);var r=(t=e.call(this)).getAttribute('value'),i=t.querySelector('[slot="item-value"]').textContent,a=t.getAttribute('theme');return t.attachShadow({mode:'open'}).innerHTML=W(r,i,a),t}return r(o,[{key:'connectedCallback',value:function(){var t,n=this.shadowRoot.querySelectorAll('[animate]');t={elements:n,duration:1200,delay:function(t){return 100*t},transform:['scalex(0)','scalex(1)']},new Promise((function(n){return B(t,n)}))}}]),o}(l(HTMLElement));customElements.get('bar-chart')||customElements.define('bar-chart',G);var U=function(t,n){var e=t.map((function(t){return Number(t)})).slice(0,n).reduce((function(t,n){return t+n}),0);return n>0?e:0},$=function(t,n,e,r){return'\n    <style>\n      \n      ul {\n        border: solid 1px var(--c-g-9);\n        display: flex;\n        flex-direction: var(--direction);\n        flex-wrap: wrap;\n        list-style: none;\n        font-size: .8rem;\n        margin-top: var(--space-s);\n        padding: .5rem;\n      }\n\n      li {\n        align-items: center;\n        display: flex;\n        flex-direction: row;\n        margin-right: .5rem;\n      }\n\n      li:last-child {\n        margin-right: 0;\n      }\n\n\n      li:before {\n        background: blue;\n        content:"";\n        display: inline-block;\n        height: 15px;\n        margin-right: .2rem;\n        width: 15px;\n      }\n\n      \n\n      '.concat(t.map((function(t,n){return'\n          li:nth-child('.concat(n+1,'):before {\n            background-color: var(--chart-').concat(r,'-color-').concat(n+1,', blue);\n          }\n        ')})).join(''),'\n\n      \n      </style>\n    <svg role="group" aria-labelledby="graph-title" aria-describedby="graph-desc" style="display:block" viewBox="0 0 100 8" fill="none" xmlns="http://www.w3.org/2000/svg">\n      <desc id="timeline-desc">An Interactive Timeline</desc>\n      <rect width="100" height="8" fill="var(--chart-').concat(r,'-background, #ECEFF1)"></rect>\n\n      ').concat(t.map((function(i,o){return'\n      <g aria-label="bar graph" '.concat('0'===i?'visibility="hidden"':'',' >\n        <g>\n          <rect x="').concat(U(t,o),'" ').concat(t>0?'animate':'','  width="').concat(i,'" height="8" fill="var(--chart-').concat(r,'-color-').concat(o+1,', blue)"></rect>\n          \n          ').concat(Number(i)>5?'\n            <text text-anchor="middle"  dominant-baseline="central"  \n            style="fill: var(--chart-'.concat(r,'-color-').concat(o+1,'-text, white); font-size: var(--bar-font-size, 20%);font-family: consolas; font-weight: 500; pointer-events: none;" x="').concat(U(t,o)+i/2,'" y="4">').concat(e[o],'</text>\n          '):'',' \n          \n        </g>\n        <title>').concat(n[o],': ').concat(e[o],'</title>\n      </g>\n      ')})).join(''),'\n        \n    </svg>\n    ')},J=document.createElement('template'),K=function(t){i(o,t);var e=h(o);function o(){var t;n(this,o),(t=e.call(this)).attachShadow({mode:'open'});var r=t.getAttribute('theme'),i=t.querySelectorAll('[value]'),a=m(i).map((function(t){return t.getAttribute('value')})),c=m(i).map((function(t){return t.querySelector('[slot="item-text"]').textContent})),u=m(i).map((function(t){return t.querySelector('[slot="item-value"]').textContent}));return J.innerHTML=$(a,c,u,r),t}return r(o,[{key:'addLegend',value:function(){var t=m(this.querySelectorAll('[slot="item-text"')).map((function(t){return t.textContent})),n=document.createElement('div');n.innerHTML='\n    <ul>\n        '.concat(t.map((function(t){return'<li>'.concat(t,'</li>')})).join(''),'\n    </ul>'),this.shadowRoot.appendChild(n)}},{key:'connectedCallback',value:function(){this.shadowRoot.appendChild(J.content.cloneNode(!0)),this.hasAttribute('legend')&&this.addLegend()}}]),o}(l(HTMLElement));customElements.get('multi-bar-chart')||customElements.define('multi-bar-chart',K);var Q=function(t){i(r,t);var e=h(r);function r(){var t;n(this,r);var i,o=(t=e.call(this)).querySelector('select').name,a=document.querySelectorAll('[filter='.concat(o,']')),c=document.querySelectorAll('[filter='.concat(o,'] [filterableBy]')),u=m(a).map((function(t){return document.getElementById(''.concat(t.getAttribute('filter'),'-filter'))})),l=function(t){var n,e=document.querySelectorAll('[filter='.concat(o,'] [filterableBy*="').concat(t,'"]')),r=y(c);try{for(r.s();!(n=r.n()).done;){n.value.hidden=!0}}catch(t){r.e(t)}finally{r.f()}var i,a=y(e);try{for(a.s();!(i=a.n()).done;){i.value.hidden=!1}}catch(t){a.e(t)}finally{a.f()}},s=y(u);try{for(s.s();!(i=s.n()).done;){var d=i.value;l(d.value)}}catch(t){s.e(t)}finally{s.f()}return m(u).map((function(t){return t.addEventListener('change',(function(n){return l(t.value)}))})),t}return r}(l(HTMLElement));customElements.get('cor-filter')||customElements.define('cor-filter',Q);var V=function(t){i(o,t);var e=h(o);function o(){var t;return n(this,o),(t=e.call(this))._show=t._show.bind(d(t)),t._hide=t._hide.bind(d(t)),t}return r(o,[{key:'connectedCallback',value:function(){this.hasAttribute('role')||this.setAttribute('role','tooltip'),this.hasAttribute('tabindex')||this.setAttribute('tabIndex',-1),this._hide(),this._target=document.querySelector('[aria-describedby='+this.id+']'),this._target&&(this._target.addEventListener('focus',this._show),this._target.addEventListener('blur',this._hide),this._target.addEventListener('mouseenter',this._show),this._target.addEventListener('mouseleave',this._hide))}},{key:'disconnectedCallback',value:function(){this._target&&(this._target.removeEventListener('focus',this._show),this._target.removeEventListener('blur',this._hide),this._target.removeEventListener('mouseenter',this._show),this._target.removeEventListener('mouseleave',this._hide),this._target=null)}},{key:'_show',value:function(){this.hidden=!1}},{key:'_hide',value:function(){this.hidden=!0}}]),o}(l(HTMLElement));customElements.get('cor-tooltip')||customElements.define('cor-tooltip',V);var X=function(t){i(o,t);var e=h(o);function o(){var t;n(this,o);var r=(t=e.call(this)).attachShadow({mode:'open'}),i=document.querySelectorAll('h2[id],h3[id]');t.sections=m(i).map((function(t,n){return t.classList.add('cor-anchor'),t.id||(t.id=n),{id:t.id,title:t.textContent}})),r.innerHTML='\n      <style>\n        ul {\n          display: grid;\n          gap: var(--space-3xs);\n          margin: var(--space-3xs) 0 0 0;\n          padding: 0;\n        }\n        \n        ul > li {\n          list-style-position: inside;\n          list-style-type: disc;\n          padding-left: var(--space-3xs);\n        }\n        \n        h2 {\n          color: var(--g-8);\n          font-size: var(--step-0) !important;\n          font-weight: normal;\n          text-transform: initial;\n          margin: 0 0 var(--space--4xs) 0;\n        }\n        \n        a {\n          font-size: var(--step--3);\n          text-decoration: none;\n          margin-top: var(--space-4xs, 1rem);\n        }\n\n        a:link,\n        a:focus,\n        a:visited,\n        a:active {\n          color: var(--link-color);\n        }\n\n        a:hover {\n          text-decoration: underline;\n        }\n      \n        :host {\n          display: block;\n        }\n\n        .readingSection {\n          \n        }\n      </style>\n      <nav class="cor-toc cor-toc--sticky" aria-labelledby="sections-heading">\n        <h2 id="sections-heading"><slot name="toc-title">Contents</slot></h2>\n        <ul class="list-disc">\n          '.concat(t.sections.map((function(t){return'\n            <li>\n              <a href="#'.concat(t.id,'">').concat(t.title,'</a>\n            </li>\n          ')})).join(''),'\n        </ul>\n      </nav>\n    ');var a=i,c=r.querySelectorAll('a');return m(t.sections.map((function(n){var e=m(a).find((function(t){return t.id===n.id})),r=m(c).find((function(t){return-1!==t.href.indexOf('#'.concat(n.id))}));t.observe(e,r)}))),t}return r(o,[{key:'observe',value:function(t,n){new IntersectionObserver((function(t,e){t.forEach((function(t){t.isIntersecting?n.classList.add('readingSection'):n.classList.remove('readingSection')}))})).observe(t)}}]),o}(l(HTMLElement));customElements.get('cor-toc')||customElements.define('cor-toc',X);var Y=function(t){i(o,t);var e=h(o);function o(){var t;return n(this,o),(t=e.call(this)).render=function(){if(t.i='Switcher-'.concat([t.threshold,t.space,t.limit].join('')),t.dataset.i=t.i,!document.getElementById(t.i)){var n=document.createElement('style');n.id=t.i,n.innerHTML='\n          [data-i="'.concat(t.i,'"] {\n            gap: ').concat(t.space,';\n          }\n\n          [data-i="').concat(t.i,'"] > * {\n            flex-basis: calc((').concat(t.threshold,' - 100%) * 999);\n          }\n\n          [data-i="').concat(t.i,'"] > :nth-last-child(n+').concat(parseInt(t.limit)+1,'),\n          [data-i="').concat(t.i,'"] > :nth-last-child(n+').concat(parseInt(t.limit)+1,') ~ * {\n            flex-basis: 100%;\n          }\n        ').replace(/\s\s+/g,' ').trim(),document.head.appendChild(n)}},t}return r(o,[{key:'threshold',get:function(){return this.getAttribute('threshold')||'var(--measure)'},set:function(t){return this.setAttribute('threshold',t)}},{key:'space',get:function(){return this.getAttribute('space')||'var(--s1)'},set:function(t){return this.setAttribute('space',t)}},{key:'limit',get:function(){return this.getAttribute('limit')||'5'},set:function(t){return this.getAttribute('limit',t)}},{key:'connectedCallback',value:function(){this.render()}},{key:'attributeChangedCallback',value:function(){this.render()}}],[{key:'observedAttributes',get:function(){return['threshold','space','limit']}}]),o}(l(HTMLElement));'customElements'in window&&customElements.define('cor-switcher-l',Y);var Z=document.querySelectorAll('li.has-submenu');Array.prototype.forEach.call(Z,(function(t,n){t.addEventListener('mouseover',(function(t){this.className='has-submenu open',clearTimeout(timer)})),t.addEventListener('mouseout',(function(t){setTimeout((function(t){document.querySelector('.has-submenu.open').className='has-submenu'}),1e3)}))})),function(){if('content'in document.createElement('template')){var t=document.createElement('template');if(t.innerHTML='\n      <h3>\n        <button aria-expanded="false">\n          <svg aria-hidden="true" focusable="false" viewBox="0 0 10 10">\n            <rect class="vert" height="8" width="2" y="1" x="4" />\n            <rect height="2" width="8" y="4" x="1" />\n          </svg>\n        </button>\n      </h3>\n      <div class="content" hidden>\n        <slot></slot>\n      </div>\n      <style>\n        h3 {\n          margin: 0;\n        }\n\n        h3 button {\n          all: inherit;\n          box-sizing: border-box;\n          cursor: hover;\n          display: flex;\n          justify-content: space-between;\n          width: 100%;\n          padding: 0.5em 0;\n        }\n\n        h3 button:focus svg {\n          outline: 2px solid;\n        }\n\n        button svg {\n          height: 1em;\n          margin-left: 0.5em;\n        }\n\n        [aria-expanded="true"] .vert {\n          display: none;\n        }\n\n        [aria-expanded] rect {\n          fill: currentColor;\n        }\n      </style>\n    ',document.head.attachShadow){var e=function(e){i(a,e);var o=h(a);function a(){var e;n(this,a),(e=o.call(this)).setAttribute('role','region'),e.attachShadow({mode:'open'}),e.shadowRoot.appendChild(t.content.cloneNode(!0)),e.btn=e.shadowRoot.querySelector('h3 button');var r=e.querySelector(':first-child'),i=parseInt(r.tagName.substr(1));return e.heading=e.shadowRoot.querySelector('h3'),i||console.warn('The first element inside each <toggle-section> should be a heading of an appropriate level.'),i&&2!==i&&e.heading.setAttribute('aria-level',i),e.btn.innerHTML=r.textContent+e.btn.innerHTML,r.parentNode.removeChild(r),e.switchState=function(){var t='true'===e.getAttribute('open')||!1;e.btn.setAttribute('aria-expanded',t),e.shadowRoot.querySelector('.content').hidden=!t},e.btn.onclick=function(){e.setAttribute('open','true'===e.getAttribute('open')?'false':'true')},e}return r(a,[{key:'attributeChangedCallback',value:function(t){'open'===t&&this.switchState()}}],[{key:'observedAttributes',get:function(){return['open']}}]),a}(l(HTMLElement));window.customElements.define('toggle-section',e);var o=document.createElement('div');o.innerHTML='\n        <ul class="toggle-section-controls" aria-label="section controls">\n          <li><button id="expand">expand all</button></li>\n          <li><button id="collapse">collapse all</button></li>\n        </ul>\n      ';var a=document.querySelector('toggle-section'),c=document.querySelectorAll('toggle-section');a.parentNode.insertBefore(o,a),o.addEventListener('click',(function(t){var n='expand'===t.target.id;Array.prototype.forEach.call(c,(function(t){t.setAttribute('open',n)}))}))}}}()}();
