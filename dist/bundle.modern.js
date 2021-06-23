/* Version: 0.1.52 - June 23, 2021 17:17:04 */
!function(){const t=([t])=>t,e=(t,e)=>'function'==typeof t?t(e):t,n=({style:t},e)=>t.willChange=e?e.map((({property:t})=>t)).join():'auto',i=(t,e)=>Object.entries(e).reduce(((t,[e,n])=>(t.setAttribute(e,n),t)),document.createElementNS('http://www.w3.org/2000/svg',t)),r={axes:['x','y'],count:0,add({element:t,blur:e}){const n='motion-blur-'+this.count++,r=i('svg',{style:'position: absolute; width: 0; height: 0'}),s=i('filter',this.axes.reduce(((t,n)=>{const i=2*e[n];return t[n]=`-${i}%`,t['x'==n?'width':'height']=100+2*i+'%',t}),{id:n,'color-interpolation-filters':'sRGB'})),a=i('feGaussianBlur',{in:'SourceGraphic'});return s.append(a),r.append(s),t.style.filter=`url("#${n}")`,document.body.prepend(r),a}},s=({blur:t,gaussian:e,easing:n},i)=>{const s=r.axes.map((e=>((t,{easing:e},n)=>{const i=t*n,r=t-i,s='linear'==e?t:e.startsWith('in-out')?2*(n<.5?i:r):e.startsWith('in')?i:r;return Math.max(0,s)})(t[e],n,i)));e.setAttribute('stdDeviation',s.join())},a=t=>{const e=t.slice(1),[n,i,r,s]=(t=>(t=>{const e=t.split(''),n=t.length<5?e.map((t=>t+t)):e.reduce(((t,n,i)=>(i%2&&t.push(e[i-1]+n),t)),[]);return n.length<4&&n.push('ff'),n})(t).map((t=>parseInt(t,16))))(e);return`rgba(${n}, ${i}, ${r}, ${s/255})`},o=2*Math.PI,l=(t,e)=>e/o*Math.asin(1/t),c={linear:t=>t,'in-cubic':t=>t**3,'in-quartic':t=>t**4,'in-quintic':t=>t**5,'in-exponential':t=>1024**(t-1),'in-circular':t=>1-Math.sqrt(1-t**2),'in-elastic':(t,e,n)=>{const i=Math.max(e,1),r=l(i,n);return-i*2**(10*(t-=1))*Math.sin((t-r)*o/n)},'out-cubic':t=>--t**3+1,'out-quartic':t=>1- --t**4,'out-quintic':t=>--t**5+1,'out-exponential':t=>1-2**(-10*t),'out-circular':t=>Math.sqrt(1- --t**2),'out-elastic':(t,e,n)=>{const i=Math.max(e,1),r=l(i,n);return i*2**(-10*t)*Math.sin((t-r)*o/n)+1},'in-out-cubic':t=>(t*=2)<1?.5*t**3:.5*((t-=2)*t**2+2),'in-out-quartic':t=>(t*=2)<1?.5*t**4:-.5*((t-=2)*t**3-2),'in-out-quintic':t=>(t*=2)<1?.5*t**5:.5*((t-=2)*t**4+2),'in-out-exponential':t=>(t*=2)<1?.5*1024**(t-1):.5*(2-2**(-10*(t-1))),'in-out-circular':t=>(t*=2)<1?-.5*(Math.sqrt(1-t**2)-1):.5*(Math.sqrt(1-(t-=2)*t)+1),'in-out-elastic':(t,e,n)=>{const i=Math.max(e,1),r=l(i,n);return(t*=2)<1?i*2**(10*(t-=1))*Math.sin((t-r)*o/n)*-.5:i*2**(-10*(t-=1))*Math.sin((t-r)*o/n)*.5+1}},d=t=>{const[e,n=1,i=.4]=t.trim().split(' ');return{easing:e,amplitude:n,period:i}},h=/-?\d*\.?\d+/g,u=t=>t.match(h).map(Number),m=(e,n)=>{const i=(t=>t.map((t=>{const e=String(t);return e.startsWith('#')?a(e):e})))(n),r=t(i).split(h);return{property:e,strings:r,numbers:i.map(u),round:t(r).startsWith('rgb')}},p=(t,e)=>t.reduce(((t,{property:n,numbers:i,strings:r,round:s})=>(t[n]=(([t,e],n,i,r)=>n.reduce(((n,s,a)=>{const o=a-1,l=((t,e,n)=>t+(e-t)*n)(t[o],e[o],r);return n+(i&&a<4?Math.round(l):l)+s})))(i,r,s,e),t)),{}),g=t=>t.forEach((({numbers:t})=>t.reverse())),b={all:new Set,add(t){this.all.add(t).size<2&&requestAnimationFrame(x)}},f={},v=(t,n,i)=>t>0?e(n,i)/t:0,y=(t,i)=>{const{elements:s=null,easing:a='out-elastic',duration:o=1e3,delay:l=0,speed:c=1,loop:h=!1,optimize:u=!1,direction:p='normal',blur:f=null,change:y=null,...x}=t,$={totalDuration:-1};(t=>Array.isArray(t)?t:!t||t.nodeType?[t]:Array.from('string'==typeof t?document.querySelectorAll(t):t))(s).forEach((async(t,i)=>{const s=((t,n)=>Object.entries(t).map((([t,i])=>m(t,e(i,n)))))(x,i),E={element:t,keyframes:s,loop:h,optimize:u,direction:p,change:y,easing:d(a),duration:v(c,o,i)},A=v(c,l,i),M=A+E.duration;'normal'!=p&&g(s),t&&(u&&n(t,s),f&&(E.blur=(t=>{const e=r.axes.reduce(((t,e)=>(t[e]=0,t)),{});return Object.assign(e,t)})(e(f,i)),E.gaussian=r.add(E))),M>$.totalDuration&&($.animation=E,$.totalDuration=M),A&&await w(A),b.add(E)}));const{animation:E}=$;E&&(E.end=i,E.options=t)},x=t=>{const{all:e}=b;e.forEach((i=>{((t,e)=>{t.startTime||(t.startTime=e),t.elapsed=e-t.startTime})(i,t);const r=(({elapsed:t,duration:e})=>e>0?Math.min(t/e,1):1)(i),{element:a,keyframes:o,loop:l,optimize:d,direction:h,change:u,easing:m,duration:b,gaussian:f,end:v,options:y}=i;if(h){let t=r;switch(r){case 0:'alternate'==h&&g(o);break;case 1:l?(t=>{t.startTime=0})(i):(e.delete(i),d&&a&&n(a),f&&(({style:t},{parentNode:{parentNode:e}})=>{t.filter='none',e.remove()})(a,f)),v&&v(y);break;default:t=(({easing:t,amplitude:e,period:n},i)=>c[t](i,e,n))(m,r)}return f&&s(i,t),u&&v&&u(t),void(a&&Object.assign(a.style,p(o,t)))}r<1||(e.delete(i),v(b))})),e.size&&requestAnimationFrame(x)};document.addEventListener('visibilitychange',(()=>{const t=performance.now();if(document.hidden){const{all:e}=b;return f.time=t,f.all=new Set(e),void e.clear()}const{all:e,time:n}=f;if(!e)return;const i=t-n;requestAnimationFrame((()=>e.forEach((t=>{t.startTime+=i,b.add(t)}))))}));const w=t=>new Promise((e=>b.add({duration:t,end:e})));var $={render:(t,e,n)=>`\n    <svg style="display:block" viewBox="0 0 100 8" fill="none" xmlns="http://www.w3.org/2000/svg">\n      \n      <rect width="100" height="8" fill="var(--chart-${n}-background, #dee2e6)"></rect>\n      \n      <g>\n        <rect ${t>0?'animate':''}  x="0"  width="${t}" height="8" fill="var(--chart-${n}-color-1, #1E88E5)"></rect>\n        <text text-anchor="middle"  dominant-baseline="central"  \n           style="fill: ${t/2>2?'white':'black'}; font-size: var(--bar-font-size, 15%); font-weight: 500; pointer-events: none;" x="${t/2>2?t/2:7}" y="4">${e}</text>\n      </g>\n      \n\n    </svg>\n    `};class E extends HTMLElement{constructor(){super();const t=this.getAttribute('value'),e=this.querySelector('[slot="item-value"]').textContent,n=this.getAttribute('theme');this.attachShadow({mode:'open'}).innerHTML=$.render(t,e,n)}connectedCallback(){const t=this.shadowRoot.querySelectorAll('[animate]');var e;e={elements:t,duration:1200,delay:t=>100*t,transform:['scalex(0)','scalex(1)']},new Promise((t=>y(e,t)))}}customElements.get('bar-chart')||customElements.define('bar-chart',E);const A=(t,e)=>{const n=t.map((t=>Number(t))).slice(0,e).reduce(((t,e)=>t+e),0);return e>0?n:0};var M={render:(t,e,n,i)=>`\n    <style>\n      \n      ul {\n        border: solid 1px var(--c-g-9);\n        display: flex;\n        flex-direction: var(--direction);\n        flex-wrap: wrap;\n        list-style: none;\n        font-size: .8rem;\n        margin-top: var(--space-s);\n        padding: .5rem;\n      }\n\n      li {\n        align-items: center;\n        display: flex;\n        flex-direction: row;\n        margin-right: .5rem;\n      }\n\n      li:last-child {\n        margin-right: 0;\n      }\n\n\n      li:before {\n        background: blue;\n        content:"";\n        display: inline-block;\n        height: 15px;\n        margin-right: .2rem;\n        width: 15px;\n      }\n\n      \n\n      ${t.map(((t,e)=>`\n          li:nth-child(${e+1}):before {\n            background-color: var(--chart-${i}-color-${e+1}, blue);\n          }\n        `)).join('')}\n\n      \n      </style>\n    <svg role="group" aria-labelledby="graph-title" aria-describedby="graph-desc" style="display:block" viewBox="0 0 100 8" fill="none" xmlns="http://www.w3.org/2000/svg">\n      <desc id="timeline-desc">An Interactive Timeline</desc>\n      <rect width="100" height="8" fill="var(--chart-${i}-background, #ECEFF1)"></rect>\n\n      ${t.map(((r,s)=>`\n      <g aria-label="bar graph" ${'0'===r?'visibility="hidden"':''} >\n        <g>\n          <rect x="${A(t,s)}" ${t>0?'animate':''}  width="${r}" height="8" fill="var(--chart-${i}-color-${s+1}, blue)"></rect>\n          \n          ${Number(r)>5?`\n            <text text-anchor="middle"  dominant-baseline="central"  \n            style="fill: white; font-size: var(--bar-font-size, 15%); font-weight: 500; pointer-events: none;" x="${A(t,s)+r/2}" y="4">${n[s]}</text>\n          `:''} \n          \n        </g>\n        <title>${e[s]}: ${n[s]}</title>\n      </g>\n      `)).join('')}\n        \n    </svg>\n    `};const _=document.createElement('template');class q extends HTMLElement{constructor(){super(),this.attachShadow({mode:'open'});const t=this.getAttribute('theme'),e=this.querySelectorAll('[value]'),n=[...e].map((t=>t.getAttribute('value'))),i=[...e].map((t=>t.querySelector('[slot="item-text"]').textContent)),r=[...e].map((t=>t.querySelector('[slot="item-value"]').textContent));_.innerHTML=M.render(n,i,r,t)}addLegend(){const t=[...this.querySelectorAll('[slot="item-text"')].map((t=>t.textContent)),e=document.createElement('div');e.innerHTML=`\n    <ul>\n        ${t.map((t=>`<li>${t}</li>`)).join('')}\n    </ul>`,this.shadowRoot.appendChild(e)}connectedCallback(){this.shadowRoot.appendChild(_.content.cloneNode(!0)),this.hasAttribute('legend')&&this.addLegend()}}customElements.get('multi-bar-chart')||customElements.define('multi-bar-chart',q);class L extends HTMLElement{constructor(){super();const t=this.querySelector('select').name,e=document.querySelectorAll(`[filter=${t}]`),n=document.querySelectorAll(`[filter=${t}] [filterableBy]`),i=[...e].map((t=>document.getElementById(`${t.getAttribute('filter')}-filter`))),r=e=>{const i=document.querySelectorAll(`[filter=${t}] [filterableBy*="${e}"]`);for(const t of n)t.hidden=!0;for(const t of i)t.hidden=!1};for(const t of i)r(t.value);[...i].map((t=>t.addEventListener('change',(e=>r(t.value)))))}}customElements.get('cor-filter')||customElements.define('cor-filter',L);class k extends HTMLElement{constructor(){super(),this._show=this._show.bind(this),this._hide=this._hide.bind(this)}connectedCallback(){this.hasAttribute('role')||this.setAttribute('role','tooltip'),this.hasAttribute('tabindex')||this.setAttribute('tabIndex',-1),this._hide(),this._target=document.querySelector('[aria-describedby='+this.id+']'),this._target&&(this._target.addEventListener('focus',this._show),this._target.addEventListener('blur',this._hide),this._target.addEventListener('mouseenter',this._show),this._target.addEventListener('mouseleave',this._hide))}disconnectedCallback(){this._target&&(this._target.removeEventListener('focus',this._show),this._target.removeEventListener('blur',this._hide),this._target.removeEventListener('mouseenter',this._show),this._target.removeEventListener('mouseleave',this._hide),this._target=null)}_show(){this.hidden=!1}_hide(){this.hidden=!0}}customElements.get('cor-tooltip')||customElements.define('cor-tooltip',k);class S extends HTMLElement{constructor(){super();const t=this.attachShadow({mode:'open'}),e=[...document.querySelectorAll('.cor-toc-section')].map((t=>({id:t.id,title:t.textContent})));t.innerHTML=`\n      <style>\n        ul {\n          margin: var(--space-3xs) 0 0 0;\n          padding: 0;\n        }\n        \n        ul > li {\n          list-style-position: outside;\n          list-style-type: disc;\n          padding-left: var(--space-3xs);\n        }\n        \n        h2 {\n          color: var(--g-8);\n          font-size: var(--step-0) !important;\n          font-weight: normal;\n          text-transform: initial;\n          margin: 0 0 var(--space--4xs) 0;\n        }\n        \n        a {\n          font-size: var(--step--3);\n          text-decoration: none;\n          margin-top: var(--space-4xs, 1rem);\n        }\n\n        a:link,\n        a:focus,\n        a:visited,\n        a:active {\n          color: var(--link-color);\n        }\n\n        a:hover {\n          text-decoration: underline;\n        }\n      \n        :host {\n          display: block;\n        }\n      </style>\n      <nav class="cor-toc cor-toc--sticky" aria-labelledby="sections-heading">\n        <h2 id="sections-heading"><slot name="toc-title">Contents</slot></h2>\n        <ul class="list-disc">\n          ${e.map((t=>`\n            <li>\n              <a href="#${t.id}">${t.title}</a>\n            </li>\n          `)).join('')}\n        </ul>\n      </nav>\n    `}}customElements.get('cor-toc')||customElements.define('cor-toc',S);class C extends HTMLElement{constructor(){super(),this.render=()=>{if(this.i=`Switcher-${[this.threshold,this.space,this.limit].join('')}`,this.dataset.i=this.i,!document.getElementById(this.i)){let t=document.createElement('style');t.id=this.i,t.innerHTML=`\n          [data-i="${this.i}"] {\n            gap: ${this.space};\n          }\n\n          [data-i="${this.i}"] > * {\n            flex-basis: calc((${this.threshold} - 100%) * 999);\n          }\n\n          [data-i="${this.i}"] > :nth-last-child(n+${parseInt(this.limit)+1}),\n          [data-i="${this.i}"] > :nth-last-child(n+${parseInt(this.limit)+1}) ~ * {\n            flex-basis: 100%;\n          }\n        `.replace(/\s\s+/g,' ').trim(),document.head.appendChild(t)}}}get threshold(){return this.getAttribute('threshold')||'var(--measure)'}set threshold(t){return this.setAttribute('threshold',t)}get space(){return this.getAttribute('space')||'var(--s1)'}set space(t){return this.setAttribute('space',t)}get limit(){return this.getAttribute('limit')||'5'}set limit(t){return this.getAttribute('limit',t)}static get observedAttributes(){return['threshold','space','limit']}connectedCallback(){this.render()}attributeChangedCallback(){this.render()}}'customElements'in window&&customElements.define('cor-switcher-l',C)}();
