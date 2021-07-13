/* Version: 0.1.67 - July 13, 2021 16:51:00 */
!function(){const t=([t])=>t,e=(t,e)=>'function'==typeof t?t(e):t,n=({style:t},e)=>t.willChange=e?e.map((({property:t})=>t)).join():'auto',i=(t,e)=>Object.entries(e).reduce(((t,[e,n])=>(t.setAttribute(e,n),t)),document.createElementNS('http://www.w3.org/2000/svg',t)),s={axes:['x','y'],count:0,add({element:t,blur:e}){const n='motion-blur-'+this.count++,s=i('svg',{style:'position: absolute; width: 0; height: 0'}),r=i('filter',this.axes.reduce(((t,n)=>{const i=2*e[n];return t[n]=`-${i}%`,t['x'==n?'width':'height']=100+2*i+'%',t}),{id:n,'color-interpolation-filters':'sRGB'})),a=i('feGaussianBlur',{in:'SourceGraphic'});return r.append(a),s.append(r),t.style.filter=`url("#${n}")`,document.body.prepend(s),a}},r=({blur:t,gaussian:e,easing:n},i)=>{const r=s.axes.map((e=>((t,{easing:e},n)=>{const i=t*n,s=t-i,r='linear'==e?t:e.startsWith('in-out')?2*(n<.5?i:s):e.startsWith('in')?i:s;return Math.max(0,r)})(t[e],n,i)));e.setAttribute('stdDeviation',r.join())},a=t=>{const e=t.slice(1),[n,i,s,r]=(t=>(t=>{const e=t.split(''),n=t.length<5?e.map((t=>t+t)):e.reduce(((t,n,i)=>(i%2&&t.push(e[i-1]+n),t)),[]);return n.length<4&&n.push('ff'),n})(t).map((t=>parseInt(t,16))))(e);return`rgba(${n}, ${i}, ${s}, ${r/255})`},o=2*Math.PI,l=(t,e)=>e/o*Math.asin(1/t),c={linear:t=>t,'in-cubic':t=>t**3,'in-quartic':t=>t**4,'in-quintic':t=>t**5,'in-exponential':t=>1024**(t-1),'in-circular':t=>1-Math.sqrt(1-t**2),'in-elastic':(t,e,n)=>{const i=Math.max(e,1),s=l(i,n);return-i*2**(10*(t-=1))*Math.sin((t-s)*o/n)},'out-cubic':t=>--t**3+1,'out-quartic':t=>1- --t**4,'out-quintic':t=>--t**5+1,'out-exponential':t=>1-2**(-10*t),'out-circular':t=>Math.sqrt(1- --t**2),'out-elastic':(t,e,n)=>{const i=Math.max(e,1),s=l(i,n);return i*2**(-10*t)*Math.sin((t-s)*o/n)+1},'in-out-cubic':t=>(t*=2)<1?.5*t**3:.5*((t-=2)*t**2+2),'in-out-quartic':t=>(t*=2)<1?.5*t**4:-.5*((t-=2)*t**3-2),'in-out-quintic':t=>(t*=2)<1?.5*t**5:.5*((t-=2)*t**4+2),'in-out-exponential':t=>(t*=2)<1?.5*1024**(t-1):.5*(2-2**(-10*(t-1))),'in-out-circular':t=>(t*=2)<1?-.5*(Math.sqrt(1-t**2)-1):.5*(Math.sqrt(1-(t-=2)*t)+1),'in-out-elastic':(t,e,n)=>{const i=Math.max(e,1),s=l(i,n);return(t*=2)<1?i*2**(10*(t-=1))*Math.sin((t-s)*o/n)*-.5:i*2**(-10*(t-=1))*Math.sin((t-s)*o/n)*.5+1}},d=t=>{const[e,n=1,i=.4]=t.trim().split(' ');return{easing:e,amplitude:n,period:i}},h=/-?\d*\.?\d+/g,u=t=>t.match(h).map(Number),m=(e,n)=>{const i=(t=>t.map((t=>{const e=String(t);return e.startsWith('#')?a(e):e})))(n),s=t(i).split(h);return{property:e,strings:s,numbers:i.map(u),round:t(s).startsWith('rgb')}},p=(t,e)=>t.reduce(((t,{property:n,numbers:i,strings:s,round:r})=>(t[n]=(([t,e],n,i,s)=>n.reduce(((n,r,a)=>{const o=a-1,l=((t,e,n)=>t+(e-t)*n)(t[o],e[o],s);return n+(i&&a<4?Math.round(l):l)+r})))(i,s,r,e),t)),{}),g=t=>t.forEach((({numbers:t})=>t.reverse())),b={all:new Set,add(t){this.all.add(t).size<2&&requestAnimationFrame(x)}},f={},v=(t,n,i)=>t>0?e(n,i)/t:0,y=(t,i)=>{const{elements:r=null,easing:a='out-elastic',duration:o=1e3,delay:l=0,speed:c=1,loop:h=!1,optimize:u=!1,direction:p='normal',blur:f=null,change:y=null,...x}=t,$={totalDuration:-1};(t=>Array.isArray(t)?t:!t||t.nodeType?[t]:Array.from('string'==typeof t?document.querySelectorAll(t):t))(r).forEach((async(t,i)=>{const r=((t,n)=>Object.entries(t).map((([t,i])=>m(t,e(i,n)))))(x,i),E={element:t,keyframes:r,loop:h,optimize:u,direction:p,change:y,easing:d(a),duration:v(c,o,i)},A=v(c,l,i),S=A+E.duration;'normal'!=p&&g(r),t&&(u&&n(t,r),f&&(E.blur=(t=>{const e=s.axes.reduce(((t,e)=>(t[e]=0,t)),{});return Object.assign(e,t)})(e(f,i)),E.gaussian=s.add(E))),S>$.totalDuration&&($.animation=E,$.totalDuration=S),A&&await w(A),b.add(E)}));const{animation:E}=$;E&&(E.end=i,E.options=t)},x=t=>{const{all:e}=b;e.forEach((i=>{((t,e)=>{t.startTime||(t.startTime=e),t.elapsed=e-t.startTime})(i,t);const s=(({elapsed:t,duration:e})=>e>0?Math.min(t/e,1):1)(i),{element:a,keyframes:o,loop:l,optimize:d,direction:h,change:u,easing:m,duration:b,gaussian:f,end:v,options:y}=i;if(h){let t=s;switch(s){case 0:'alternate'==h&&g(o);break;case 1:l?(t=>{t.startTime=0})(i):(e.delete(i),d&&a&&n(a),f&&(({style:t},{parentNode:{parentNode:e}})=>{t.filter='none',e.remove()})(a,f)),v&&v(y);break;default:t=(({easing:t,amplitude:e,period:n},i)=>c[t](i,e,n))(m,s)}return f&&r(i,t),u&&v&&u(t),void(a&&Object.assign(a.style,p(o,t)))}s<1||(e.delete(i),v(b))})),e.size&&requestAnimationFrame(x)};document.addEventListener('visibilitychange',(()=>{const t=performance.now();if(document.hidden){const{all:e}=b;return f.time=t,f.all=new Set(e),void e.clear()}const{all:e,time:n}=f;if(!e)return;const i=t-n;requestAnimationFrame((()=>e.forEach((t=>{t.startTime+=i,b.add(t)}))))}));const w=t=>new Promise((e=>b.add({duration:t,end:e})));var $={render:(t,e,n)=>`\n    <svg style="display:block" viewBox="0 0 100 8" fill="none" xmlns="http://www.w3.org/2000/svg">\n      \n      <rect width="100" height="8" fill="var(--chart-${n}-background, #dee2e6)"></rect>\n      \n      <g>\n        <rect ${t>0?'animate':''}  x="0"  width="${t}" height="8" fill="var(--chart-${n}-color-1, #1E88E5)"></rect>\n        <text text-anchor="middle"  dominant-baseline="central"  \n           style="fill: ${t/2>2?`var(--chart-${n}-color-1-text, white)`:'black'}; font-family: consolas; font-size: var(--bar-font-size, 20%); font-weight: 500; pointer-events: none;" x="${t/2>2?t/2:7}" y="4">${e}</text>\n      </g>\n      \n      <title>${t}%</title>\n    </svg>\n    `};class E extends HTMLElement{constructor(){super();const t=this.getAttribute('value'),e=this.querySelector('[slot="item-value"]').textContent,n=this.getAttribute('theme');this.attachShadow({mode:'open'}).innerHTML=$.render(t,e,n)}connectedCallback(){const t=this.shadowRoot.querySelectorAll('[animate]');var e;e={elements:t,duration:1200,delay:t=>100*t,transform:['scalex(0)','scalex(1)']},new Promise((t=>y(e,t)))}}customElements.get('bar-chart')||customElements.define('bar-chart',E);const A=(t,e)=>{const n=t.map((t=>Number(t))).slice(0,e).reduce(((t,e)=>t+e),0);return e>0?n:0};var S={render:(t,e,n,i)=>`\n    <style>\n      \n      ul {\n        border: solid 1px var(--c-g-9);\n        display: flex;\n        flex-direction: var(--direction);\n        flex-wrap: wrap;\n        list-style: none;\n        font-size: .8rem;\n        margin-top: var(--space-s);\n        padding: .5rem;\n      }\n\n      li {\n        align-items: center;\n        display: flex;\n        flex-direction: row;\n        margin-right: .5rem;\n      }\n\n      li:last-child {\n        margin-right: 0;\n      }\n\n\n      li:before {\n        background: blue;\n        content:"";\n        display: inline-block;\n        height: 15px;\n        margin-right: .2rem;\n        width: 15px;\n      }\n\n      \n\n      ${t.map(((t,e)=>`\n          li:nth-child(${e+1}):before {\n            background-color: var(--chart-${i}-color-${e+1}, blue);\n          }\n        `)).join('')}\n\n      \n      </style>\n    <svg role="group" aria-labelledby="graph-title" aria-describedby="graph-desc" style="display:block" viewBox="0 0 100 8" fill="none" xmlns="http://www.w3.org/2000/svg">\n      <desc id="timeline-desc">An Interactive Timeline</desc>\n      <rect width="100" height="8" fill="var(--chart-${i}-background, #ECEFF1)"></rect>\n\n      ${t.map(((s,r)=>`\n      <g aria-label="bar graph" ${'0'===s?'visibility="hidden"':''} >\n        <g>\n          <rect x="${A(t,r)}" ${t>0?'animate':''}  width="${s}" height="8" fill="var(--chart-${i}-color-${r+1}, blue)"></rect>\n          \n          ${Number(s)>5?`\n            <text text-anchor="middle"  dominant-baseline="central"  \n            style="fill: var(--chart-${i}-color-${r+1}-text, white); font-size: var(--bar-font-size, 20%);font-family: consolas; font-weight: 500; pointer-events: none;" x="${A(t,r)+s/2}" y="4">${n[r]}</text>\n          `:''} \n          \n        </g>\n        <title>${e[r]}: ${n[r]}</title>\n      </g>\n      `)).join('')}\n        \n    </svg>\n    `};const q=document.createElement('template');class L extends HTMLElement{constructor(){super(),this.attachShadow({mode:'open'});const t=this.getAttribute('theme'),e=this.querySelectorAll('[value]'),n=[...e].map((t=>t.getAttribute('value'))),i=[...e].map((t=>t.querySelector('[slot="item-text"]').textContent)),s=[...e].map((t=>t.querySelector('[slot="item-value"]').textContent));q.innerHTML=S.render(n,i,s,t)}addLegend(){const t=[...this.querySelectorAll('[slot="item-text"')].map((t=>t.textContent)),e=document.createElement('div');e.innerHTML=`\n    <ul>\n        ${t.map((t=>`<li>${t}</li>`)).join('')}\n    </ul>`,this.shadowRoot.appendChild(e)}connectedCallback(){this.shadowRoot.appendChild(q.content.cloneNode(!0)),this.hasAttribute('legend')&&this.addLegend()}}customElements.get('multi-bar-chart')||customElements.define('multi-bar-chart',L);class M extends HTMLElement{constructor(){super();const t=this.querySelector('select').name,e=document.querySelectorAll(`[filter=${t}]`),n=document.querySelectorAll(`[filter=${t}] [filterableBy]`),i=[...e].map((t=>document.getElementById(`${t.getAttribute('filter')}-filter`))),s=e=>{const i=document.querySelectorAll(`[filter=${t}] [filterableBy*="${e}"]`);for(const t of n)t.hidden=!0;for(const t of i)t.hidden=!1};for(const t of i)s(t.value);[...i].map((t=>t.addEventListener('change',(e=>s(t.value)))))}}customElements.get('cor-filter')||customElements.define('cor-filter',M);class _ extends HTMLElement{constructor(){super(),this._show=this._show.bind(this),this._hide=this._hide.bind(this)}connectedCallback(){this.hasAttribute('role')||this.setAttribute('role','tooltip'),this.hasAttribute('tabindex')||this.setAttribute('tabIndex',-1),this._hide(),this._target=document.querySelector('[aria-describedby='+this.id+']'),this._target&&(this._target.addEventListener('focus',this._show),this._target.addEventListener('blur',this._hide),this._target.addEventListener('mouseenter',this._show),this._target.addEventListener('mouseleave',this._hide))}disconnectedCallback(){this._target&&(this._target.removeEventListener('focus',this._show),this._target.removeEventListener('blur',this._hide),this._target.removeEventListener('mouseenter',this._show),this._target.removeEventListener('mouseleave',this._hide),this._target=null)}_show(){this.hidden=!1}_hide(){this.hidden=!0}}customElements.get('cor-tooltip')||customElements.define('cor-tooltip',_);class T extends HTMLElement{constructor(){super();const t=this.attachShadow({mode:'open'}),e=document.querySelectorAll('h2[id],h3[id]');this.sections=[...e].map(((t,e)=>(t.classList.add('cor-anchor'),t.id||(t.id=e),{id:t.id,title:t.textContent}))),t.innerHTML=`\n      <style>\n        ul {\n          display: grid;\n          gap: var(--space-3xs);\n          margin: var(--space-3xs) 0 0 0;\n          padding: 0;\n        }\n        \n        ul > li {\n          list-style-position: inside;\n          list-style-type: disc;\n          padding-left: var(--space-3xs);\n        }\n        \n        h2 {\n          color: var(--g-8);\n          font-size: var(--step-0) !important;\n          font-weight: normal;\n          text-transform: initial;\n          margin: 0 0 var(--space--4xs) 0;\n        }\n        \n        a {\n          font-size: var(--step--3);\n          text-decoration: none;\n          margin-top: var(--space-4xs, 1rem);\n        }\n\n        a:link,\n        a:focus,\n        a:visited,\n        a:active {\n          color: var(--link-color);\n        }\n\n        a:hover {\n          text-decoration: underline;\n        }\n      \n        :host {\n          display: block;\n        }\n\n        .readingSection {\n          \n        }\n      </style>\n      <nav class="cor-toc cor-toc--sticky" aria-labelledby="sections-heading">\n        <h2 id="sections-heading"><slot name="toc-title">Contents</slot></h2>\n        <ul class="list-disc">\n          ${this.sections.map((t=>`\n            <li>\n              <a href="#${t.id}">${t.title}</a>\n            </li>\n          `)).join('')}\n        </ul>\n      </nav>\n    `;const n=e,i=t.querySelectorAll('a');this.sections.map((t=>{const e=[...n].find((e=>e.id===t.id)),s=[...i].find((e=>-1!==e.href.indexOf(`#${t.id}`)));this.observe(e,s)}))}observe(t,e){new IntersectionObserver(((t,n)=>{t.forEach((t=>{t.isIntersecting?e.classList.add('readingSection'):e.classList.remove('readingSection')}))})).observe(t)}}customElements.get('cor-toc')||customElements.define('cor-toc',T);class k extends HTMLElement{constructor(){super(),this.render=()=>{if(this.i=`Switcher-${[this.threshold,this.space,this.limit].join('')}`,this.dataset.i=this.i,!document.getElementById(this.i)){let t=document.createElement('style');t.id=this.i,t.innerHTML=`\n          [data-i="${this.i}"] {\n            gap: ${this.space};\n          }\n\n          [data-i="${this.i}"] > * {\n            flex-basis: calc((${this.threshold} - 100%) * 999);\n          }\n\n          [data-i="${this.i}"] > :nth-last-child(n+${parseInt(this.limit)+1}),\n          [data-i="${this.i}"] > :nth-last-child(n+${parseInt(this.limit)+1}) ~ * {\n            flex-basis: 100%;\n          }\n        `.replace(/\s\s+/g,' ').trim(),document.head.appendChild(t)}}}get threshold(){return this.getAttribute('threshold')||'var(--measure)'}set threshold(t){return this.setAttribute('threshold',t)}get space(){return this.getAttribute('space')||'var(--s1)'}set space(t){return this.setAttribute('space',t)}get limit(){return this.getAttribute('limit')||'5'}set limit(t){return this.getAttribute('limit',t)}static get observedAttributes(){return['threshold','space','limit']}connectedCallback(){this.render()}attributeChangedCallback(){this.render()}}'customElements'in window&&customElements.define('cor-switcher-l',k);var C=document.querySelectorAll('li.has-submenu');Array.prototype.forEach.call(C,(function(t,e){t.addEventListener('mouseover',(function(t){this.className='has-submenu open',clearTimeout(timer)})),t.addEventListener('mouseout',(t=>{setTimeout((t=>{document.querySelector('.has-submenu.open').className='has-submenu'}),1e3)}))})),function(){if('content'in document.createElement('template')){const t=document.createElement('template');if(t.innerHTML='\n      <h3>\n        <button aria-expanded="false">\n          <svg aria-hidden="true" focusable="false" viewBox="0 0 10 10">\n            <rect class="vert" height="8" width="2" y="1" x="4" />\n            <rect height="2" width="8" y="4" x="1" />\n          </svg>\n        </button>\n      </h3>\n      <div class="content" hidden>\n        <slot></slot>\n      </div>\n      <style>\n        h3 {\n          margin: 0;\n        }\n\n        h3 button {\n          all: inherit;\n          box-sizing: border-box;\n          cursor: hover;\n          display: flex;\n          justify-content: space-between;\n          width: 100%;\n          padding: 0.5em 0;\n        }\n\n        h3 button:focus svg {\n          outline: 2px solid;\n        }\n\n        button svg {\n          height: 1em;\n          margin-left: 0.5em;\n        }\n\n        [aria-expanded="true"] .vert {\n          display: none;\n        }\n\n        [aria-expanded] rect {\n          fill: currentColor;\n        }\n      </style>\n    ',document.head.attachShadow){class e extends HTMLElement{constructor(){super(),this.setAttribute('role','region'),this.attachShadow({mode:'open'}),this.shadowRoot.appendChild(t.content.cloneNode(!0)),this.btn=this.shadowRoot.querySelector('h3 button');const e=this.querySelector(':first-child');let n=parseInt(e.tagName.substr(1));this.heading=this.shadowRoot.querySelector('h3'),n||console.warn('The first element inside each <toggle-section> should be a heading of an appropriate level.'),n&&2!==n&&this.heading.setAttribute('aria-level',n),this.btn.innerHTML=e.textContent+this.btn.innerHTML,e.parentNode.removeChild(e),this.switchState=()=>{let t='true'===this.getAttribute('open')||!1;this.btn.setAttribute('aria-expanded',t),this.shadowRoot.querySelector('.content').hidden=!t},this.btn.onclick=()=>{this.setAttribute('open','true'===this.getAttribute('open')?'false':'true')}}static get observedAttributes(){return['open']}attributeChangedCallback(t){'open'===t&&this.switchState()}}window.customElements.define('toggle-section',e);const n=document.createElement('div');n.innerHTML='\n        <ul class="toggle-section-controls" aria-label="section controls">\n          <li><button id="expand">expand all</button></li>\n          <li><button id="collapse">collapse all</button></li>\n        </ul>\n      ';const i=document.querySelector('toggle-section'),s=document.querySelectorAll('toggle-section');i.parentNode.insertBefore(n,i),n.addEventListener('click',(t=>{let e='expand'===t.target.id;Array.prototype.forEach.call(s,(t=>{t.setAttribute('open',e)}))}))}}}()}();
