/* Version: 0.1.103 - October 19, 2021 18:41:22 */
!function(){'use strict';function t(t,n,e,r,o,i,a){try{var u=t[i](a),c=u.value}catch(t){return void e(t)}u.done?n(c):Promise.resolve(c).then(r,o)}function n(t,n){if(!(t instanceof n))throw new TypeError('Cannot call a class as a function')}function e(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,'value'in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function r(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}function o(t,n){if('function'!=typeof n&&null!==n)throw new TypeError('Super expression must either be null or a function');t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&a(t,n)}function i(t){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function a(t,n){return(a=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function u(){if('undefined'==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if('function'==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function c(t,n,e){return(c=u()?Reflect.construct:function(t,n,e){var r=[null];r.push.apply(r,n);var o=new(Function.bind.apply(t,r));return e&&a(o,e.prototype),o}).apply(null,arguments)}function l(t){var n='function'==typeof Map?new Map:void 0;return(l=function(t){if(null===t||(e=t,-1===Function.toString.call(e).indexOf('[native code]')))return t;var e;if('function'!=typeof t)throw new TypeError('Super expression must either be null or a function');if(void 0!==n){if(n.has(t))return n.get(t);n.set(t,r)}function r(){return c(t,arguments,i(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),a(r,t)})(t)}function f(t,n){if(null==t)return{};var e,r,o=function(t,n){if(null==t)return{};var e,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)e=i[r],n.indexOf(e)>=0||(o[e]=t[e]);return o}(t,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)e=i[r],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(o[e]=t[e])}return o}function s(t,n){return!n||'object'!=typeof n&&'function'!=typeof n?function(t){if(void 0===t)throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return t}(t):n}function d(t){var n=u();return function(){var e,r=i(t);if(n){var o=i(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return s(this,e)}}function p(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){var e=null==t?null:'undefined'!=typeof Symbol&&t[Symbol.iterator]||t['@@iterator'];if(null==e)return;var r,o,i=[],a=!0,u=!1;try{for(e=e.call(t);!(a=(r=e.next()).done)&&(i.push(r.value),!n||i.length!==n);a=!0);}catch(t){u=!0,o=t}finally{try{a||null==e.return||e.return()}finally{if(u)throw o}}return i}(t,n)||m(t,n)||function(){throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.')}()}function h(t){return function(t){if(Array.isArray(t))return v(t)}(t)||function(t){if('undefined'!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t['@@iterator'])return Array.from(t)}(t)||m(t)||function(){throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.')}()}function m(t,n){if(t){if('string'==typeof t)return v(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);return'Object'===e&&t.constructor&&(e=t.constructor.name),'Map'===e||'Set'===e?Array.from(t):'Arguments'===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?v(t,n):void 0}}function v(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}function y(t,n){var e='undefined'!=typeof Symbol&&t[Symbol.iterator]||t['@@iterator'];if(!e){if(Array.isArray(t)||(e=m(t))||n&&t&&'number'==typeof t.length){e&&(t=e);var r=0,o=function(){};return{s:o,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:o}}throw new TypeError('Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.')}var i,a=!0,u=!1;return{s:function(){e=e.call(t)},n:function(){var t=e.next();return a=t.done,t},e:function(t){u=!0,i=t},f:function(){try{a||null==e.return||e.return()}finally{if(u)throw i}}}}var b=['elements','easing','duration','delay','speed','loop','optimize','direction','blur','change'],g=function(t){return p(t,1)[0]},w=function(t,n){return'function'==typeof t?t(n):t},x=function(t,n){return t.style.willChange=n?n.map((function(t){return t.property})).join():'auto'},M=function(t,n){return Object.entries(n).reduce((function(t,n){var e=p(n,2),r=e[0],o=e[1];return t.setAttribute(r,o),t}),document.createElementNS('http://www.w3.org/2000/svg',t))},S={axes:['x','y'],count:0,add:function(t){var n=t.element,e=t.blur,r='motion-blur-'.concat(this.count++),o=M('svg',{style:'position: absolute; width: 0; height: 0'}),i=M('filter',this.axes.reduce((function(t,n){var r=2*e[n];return t[n]='-'.concat(r,'%'),t['x'==n?'width':'height']=''.concat(100+2*r,'%'),t}),{id:r,'color-interpolation-filters':'sRGB'})),a=M('feGaussianBlur',{in:'SourceGraphic'});return i.append(a),o.append(i),n.style.filter='url("#'.concat(r,'")'),document.body.prepend(o),a}},A=function(t,n){var e=t.blur,r=t.gaussian,o=t.easing,i=S.axes.map((function(t){return function(t,n,e){var r=n.easing,o=t*e,i=t-o,a='linear'==r?t:r.startsWith('in-out')?2*(e<.5?o:i):r.startsWith('in')?o:i;return Math.max(0,a)}(e[t],o,n)}));r.setAttribute('stdDeviation',i.join())},E=function(t){var n=S.axes.reduce((function(t,n){return t[n]=0,t}),{});return Object.assign(n,t)},O=function(t){var n=p(function(t){return function(t){var n=t.split(''),e=t.length<5?n.map((function(t){return t+t})):n.reduce((function(t,e,r){return r%2&&t.push(n[r-1]+e),t}),[]);return e.length<4&&e.push('ff'),e}(t).map((function(t){return parseInt(t,16)}))}(t.slice(1)),4),e=n[0],r=n[1],o=n[2],i=n[3];return'rgba('.concat(e,', ').concat(r,', ').concat(o,', ').concat(i/255,')')},j=2*Math.PI,q=function(t,n){return n/j*Math.asin(1/t)},k={linear:function(t){return t},'in-cubic':function(t){return Math.pow(t,3)},'in-quartic':function(t){return Math.pow(t,4)},'in-quintic':function(t){return Math.pow(t,5)},'in-exponential':function(t){return Math.pow(1024,t-1)},'in-circular':function(t){return 1-Math.sqrt(1-Math.pow(t,2))},'in-elastic':function(t,n,e){var r=Math.max(n,1),o=q(r,e);return-r*Math.pow(2,10*(t-=1))*Math.sin((t-o)*j/e)},'out-cubic':function(t){return Math.pow(--t,3)+1},'out-quartic':function(t){return 1-Math.pow(--t,4)},'out-quintic':function(t){return Math.pow(--t,5)+1},'out-exponential':function(t){return 1-Math.pow(2,-10*t)},'out-circular':function(t){return Math.sqrt(1-Math.pow(--t,2))},'out-elastic':function(t,n,e){var r=Math.max(n,1),o=q(r,e);return r*Math.pow(2,-10*t)*Math.sin((t-o)*j/e)+1},'in-out-cubic':function(t){return(t*=2)<1?.5*Math.pow(t,3):.5*((t-=2)*Math.pow(t,2)+2)},'in-out-quartic':function(t){return(t*=2)<1?.5*Math.pow(t,4):-.5*((t-=2)*Math.pow(t,3)-2)},'in-out-quintic':function(t){return(t*=2)<1?.5*Math.pow(t,5):.5*((t-=2)*Math.pow(t,4)+2)},'in-out-exponential':function(t){return(t*=2)<1?.5*Math.pow(1024,t-1):.5*(2-Math.pow(2,-10*(t-1)))},'in-out-circular':function(t){return(t*=2)<1?-.5*(Math.sqrt(1-Math.pow(t,2))-1):.5*(Math.sqrt(1-(t-=2)*t)+1)},'in-out-elastic':function(t,n,e){var r=Math.max(n,1),o=q(r,e);return(t*=2)<1?r*Math.pow(2,10*(t-=1))*Math.sin((t-o)*j/e)*-.5:r*Math.pow(2,-10*(t-=1))*Math.sin((t-o)*j/e)*.5+1}},T=function(t){var n=p(t.trim().split(' '),3),e=n[0],r=n[1],o=void 0===r?1:r,i=n[2];return{easing:e,amplitude:o,period:void 0===i?.4:i}},P=/-?\d*\.?\d+/g,R=function(t){return t.match(P).map(Number)},C=function(t,n){var e=function(t){return t.map((function(t){var n=String(t);return n.startsWith('#')?O(n):n}))}(n),r=g(e).split(P);return{property:t,strings:r,numbers:e.map(R),round:g(r).startsWith('rgb')}},I=function(t,n){return Object.entries(t).map((function(t){var e=p(t,2),r=e[0],o=e[1];return C(r,w(o,n))}))},z=function(t,n){return t.reduce((function(t,e){var r=e.property,o=e.numbers,i=e.strings,a=e.round;return t[r]=function(t,n,e,r){var o=p(t,2),i=o[0],a=o[1];return n.reduce((function(t,n,o){var u=o-1,c=function(t,n,e){return t+(n-t)*e}(i[u],a[u],r);return t+(e&&o<4?Math.round(c):c)+n}))}(o,i,a,n),t}),{})},L=function(t){return t.forEach((function(t){return t.numbers.reverse()}))},B={all:new Set,add:function(t){this.all.add(t).size<2&&requestAnimationFrame(H)}},_={},F=function(t,n,e){return t>0?w(n,e)/t:0},N=function(n,e){var r=n.elements,o=void 0===r?null:r,i=n.easing,a=void 0===i?'out-elastic':i,u=n.duration,c=void 0===u?1e3:u,l=n.delay,s=void 0===l?0:l,d=n.speed,p=void 0===d?1:d,h=n.loop,m=void 0!==h&&h,v=n.optimize,y=void 0!==v&&v,g=n.direction,M=void 0===g?'normal':g,A=n.blur,O=void 0===A?null:A,j=n.change,q=void 0===j?null:j,k=f(n,b),P={totalDuration:-1};(function(t){return Array.isArray(t)?t:!t||t.nodeType?[t]:Array.from('string'==typeof t?document.querySelectorAll(t):t)})(o).forEach(function(){var n,e=(n=regeneratorRuntime.mark((function t(n,e){var r,o,i,u;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=I(k,e),o={element:n,keyframes:r,loop:m,optimize:y,direction:M,change:q,easing:T(a),duration:F(p,c,e)},i=F(p,s,e),u=i+o.duration,'normal'!=M&&L(r),n&&(y&&x(n,r),O&&(o.blur=E(w(O,e)),o.gaussian=S.add(o))),u>P.totalDuration&&(P.animation=o,P.totalDuration=u),!i){t.next=10;break}return t.next=10,D(i);case 10:B.add(o);case 11:case'end':return t.stop()}}),t)})),function(){var e=this,r=arguments;return new Promise((function(o,i){var a=n.apply(e,r);function u(n){t(a,o,i,u,c,'next',n)}function c(n){t(a,o,i,u,c,'throw',n)}u(void 0)}))});return function(t,n){return e.apply(this,arguments)}}());var R=P.animation;R&&(R.end=e,R.options=n)},H=function t(n){var e=B.all;e.forEach((function(t){!function(t,n){t.startTime||(t.startTime=n),t.elapsed=n-t.startTime}(t,n);var r,o,i,a=function(t){var n=t.elapsed,e=t.duration;return e>0?Math.min(n/e,1):1}(t),u=t.element,c=t.keyframes,l=t.loop,f=t.optimize,s=t.direction,d=t.change,p=t.easing,h=t.duration,m=t.gaussian,v=t.end,y=t.options;if(s){var b=a;switch(a){case 0:'alternate'==s&&L(c);break;case 1:l?function(t){t.startTime=0}(t):(e.delete(t),f&&u&&x(u),m&&(r=m,o=u.style,i=r.parentNode.parentNode,o.filter='none',i.remove())),v&&v(y);break;default:b=function(t,n){var e=t.easing,r=t.amplitude,o=t.period;return k[e](n,r,o)}(p,a)}return m&&A(t,b),d&&v&&d(b),void(u&&Object.assign(u.style,z(c,b)))}a<1||(e.delete(t),v(h))})),e.size&&requestAnimationFrame(t)};document.addEventListener('visibilitychange',(function(){var t=performance.now();if(document.hidden){var n=B.all;return _.time=t,_.all=new Set(n),void n.clear()}var e=_.all,r=_.time;if(e){var o=t-r;requestAnimationFrame((function(){return e.forEach((function(t){t.startTime+=o,B.add(t)}))}))}}));var D=function(t){return new Promise((function(n){return B.add({duration:t,end:n})}))},W=function(t,n,e){return'\n    <svg style="display:block" viewBox="0 0 100 8" fill="none" xmlns="http://www.w3.org/2000/svg">\n      \n      <rect width="100" height="8" fill="var(--chart-'.concat(e,'-background, #dee2e6)"></rect>\n      \n      <g>\n        <rect ').concat(t>0?'animate':'','  x="0"  width="').concat(t,'" height="8" fill="var(--chart-').concat(e,'-color-1, #1E88E5)"></rect>\n        <text text-anchor="middle"  dominant-baseline="central"  \n           style="fill: ').concat(t/2>2?'var(--chart-'.concat(e,'-color-1-text, white)'):'black','; font-family: consolas; font-size: var(--bar-font-size, 20%); font-weight: 500; pointer-events: none;" x="').concat(t/2>2?t/2:7,'" y="4">').concat(n,'</text>\n      </g>\n      \n      <title>').concat(t,'%</title>\n    </svg>\n    ')},G=function(t){o(i,t);var e=d(i);function i(){var t;n(this,i);var r=(t=e.call(this)).getAttribute('value'),o=t.querySelector('[slot="item-value"]').textContent,a=t.getAttribute('theme');return t.attachShadow({mode:'open'}).innerHTML=W(r,o,a),t}return r(i,[{key:'connectedCallback',value:function(){var t,n=this.shadowRoot.querySelectorAll('[animate]');t={elements:n,duration:1200,delay:function(t){return 100*t},transform:['scalex(0)','scalex(1)']},new Promise((function(n){return N(t,n)}))}}]),i}(l(HTMLElement));customElements.get('bar-chart')||customElements.define('bar-chart',G);var U=function(t,n){var e=t.map((function(t){return Number(t)})).slice(0,n).reduce((function(t,n){return t+n}),0);return n>0?e:0},$=function(t,n,e,r){return'\n    <style>\n      \n      ul {\n        border: solid 1px var(--c-g-9);\n        display: flex;\n        flex-direction: var(--direction);\n        flex-wrap: wrap;\n        list-style: none;\n        font-size: .8rem;\n        margin-top: var(--space-s);\n        padding: .5rem;\n      }\n\n      li {\n        align-items: center;\n        display: flex;\n        flex-direction: row;\n        margin-right: .5rem;\n      }\n\n      li:last-child {\n        margin-right: 0;\n      }\n\n\n      li:before {\n        background: blue;\n        content:"";\n        display: inline-block;\n        height: 15px;\n        margin-right: .2rem;\n        width: 15px;\n      }\n\n      \n\n      '.concat(t.map((function(t,n){return'\n          li:nth-child('.concat(n+1,'):before {\n            background-color: var(--chart-').concat(r,'-color-').concat(n+1,', blue);\n          }\n        ')})).join(''),'\n\n      \n      </style>\n    <svg role="group" aria-labelledby="graph-title" aria-describedby="graph-desc" style="display:block" viewBox="0 0 100 8" fill="none" xmlns="http://www.w3.org/2000/svg">\n      <desc id="timeline-desc">An Interactive Timeline</desc>\n      <rect width="100" height="8" fill="var(--chart-').concat(r,'-background, #ECEFF1)"></rect>\n\n      ').concat(t.map((function(o,i){return'\n      <g aria-label="bar graph" '.concat('0'===o?'visibility="hidden"':'',' >\n        <g>\n          <rect x="').concat(U(t,i),'" ').concat(t>0?'animate':'','  width="').concat(o,'" height="8" fill="var(--chart-').concat(r,'-color-').concat(i+1,', blue)"></rect>\n          \n          ').concat(Number(o)>5?'\n            <text text-anchor="middle"  dominant-baseline="central"  \n            style="fill: var(--chart-'.concat(r,'-color-').concat(i+1,'-text, white); font-size: var(--bar-font-size, 20%);font-family: consolas; font-weight: 500; pointer-events: none;" x="').concat(U(t,i)+o/2,'" y="4">').concat(e[i],'</text>\n          '):'',' \n          \n        </g>\n        <title>').concat(n[i],': ').concat(e[i],'</title>\n      </g>\n      ')})).join(''),'\n        \n    </svg>\n    ')},J=document.createElement('template'),K=function(t){o(i,t);var e=d(i);function i(){var t;n(this,i),(t=e.call(this)).attachShadow({mode:'open'});var r=t.getAttribute('theme'),o=t.querySelectorAll('[value]'),a=h(o).map((function(t){return t.getAttribute('value')})),u=h(o).map((function(t){return t.querySelector('[slot="item-text"]').textContent})),c=h(o).map((function(t){return t.querySelector('[slot="item-value"]').textContent}));return J.innerHTML=$(a,u,c,r),t}return r(i,[{key:'addLegend',value:function(){var t=h(this.querySelectorAll('[slot="item-text"')).map((function(t){return t.textContent})),n=document.createElement('div');n.innerHTML='\n    <ul>\n        '.concat(t.map((function(t){return'<li>'.concat(t,'</li>')})).join(''),'\n    </ul>'),this.shadowRoot.appendChild(n)}},{key:'connectedCallback',value:function(){this.shadowRoot.appendChild(J.content.cloneNode(!0)),this.hasAttribute('legend')&&this.addLegend()}}]),i}(l(HTMLElement));customElements.get('multi-bar-chart')||customElements.define('multi-bar-chart',K);var Q=function(t){o(r,t);var e=d(r);function r(){var t;n(this,r);var o,i=(t=e.call(this)).querySelector('select').name,a=document.querySelectorAll('[filter='.concat(i,']')),u=document.querySelectorAll('[filter='.concat(i,'] [filterableBy]')),c=h(a).map((function(t){return document.getElementById(''.concat(t.getAttribute('filter'),'-filter'))})),l=function(t){var n,e=document.querySelectorAll('[filter='.concat(i,'] [filterableBy*="').concat(t,'"]')),r=y(u);try{for(r.s();!(n=r.n()).done;){n.value.hidden=!0}}catch(t){r.e(t)}finally{r.f()}var o,a=y(e);try{for(a.s();!(o=a.n()).done;){o.value.hidden=!1}}catch(t){a.e(t)}finally{a.f()}},f=y(c);try{for(f.s();!(o=f.n()).done;){var s=o.value;l(s.value)}}catch(t){f.e(t)}finally{f.f()}return h(c).map((function(t){return t.addEventListener('change',(function(n){return l(t.value)}))})),t}return r}(l(HTMLElement));customElements.get('cor-filter')||customElements.define('cor-filter',Q)}();
