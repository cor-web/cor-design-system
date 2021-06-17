/* Version: 0.1.47 - June 17, 2021 17:04:49 */
!function(){const e=([e])=>e,t=(e,t)=>'function'==typeof e?e(t):e,n=({style:e},t)=>e.willChange=t?t.map((({property:e})=>e)).join():'auto',i=(e,t)=>Object.entries(t).reduce(((e,[t,n])=>(e.setAttribute(t,n),e)),document.createElementNS('http://www.w3.org/2000/svg',e)),r={axes:['x','y'],count:0,add({element:e,blur:t}){const n='motion-blur-'+this.count++,r=i('svg',{style:'position: absolute; width: 0; height: 0'}),a=i('filter',this.axes.reduce(((e,n)=>{const i=2*t[n];return e[n]=`-${i}%`,e['x'==n?'width':'height']=100+2*i+'%',e}),{id:n,'color-interpolation-filters':'sRGB'})),o=i('feGaussianBlur',{in:'SourceGraphic'});return a.append(o),r.append(a),e.style.filter=`url("#${n}")`,document.body.prepend(r),o}},a=({blur:e,gaussian:t,easing:n},i)=>{const a=r.axes.map((t=>((e,{easing:t},n)=>{const i=e*n,r=e-i,a='linear'==t?e:t.startsWith('in-out')?2*(n<.5?i:r):t.startsWith('in')?i:r;return Math.max(0,a)})(e[t],n,i)));t.setAttribute('stdDeviation',a.join())},o=e=>{const t=e.slice(1),[n,i,r,a]=(e=>(e=>{const t=e.split(''),n=e.length<5?t.map((e=>e+e)):t.reduce(((e,n,i)=>(i%2&&e.push(t[i-1]+n),e)),[]);return n.length<4&&n.push('ff'),n})(e).map((e=>parseInt(e,16))))(t);return`rgba(${n}, ${i}, ${r}, ${a/255})`},s=2*Math.PI,l=(e,t)=>t/s*Math.asin(1/e),c={linear:e=>e,'in-cubic':e=>e**3,'in-quartic':e=>e**4,'in-quintic':e=>e**5,'in-exponential':e=>1024**(e-1),'in-circular':e=>1-Math.sqrt(1-e**2),'in-elastic':(e,t,n)=>{const i=Math.max(t,1),r=l(i,n);return-i*2**(10*(e-=1))*Math.sin((e-r)*s/n)},'out-cubic':e=>--e**3+1,'out-quartic':e=>1- --e**4,'out-quintic':e=>--e**5+1,'out-exponential':e=>1-2**(-10*e),'out-circular':e=>Math.sqrt(1- --e**2),'out-elastic':(e,t,n)=>{const i=Math.max(t,1),r=l(i,n);return i*2**(-10*e)*Math.sin((e-r)*s/n)+1},'in-out-cubic':e=>(e*=2)<1?.5*e**3:.5*((e-=2)*e**2+2),'in-out-quartic':e=>(e*=2)<1?.5*e**4:-.5*((e-=2)*e**3-2),'in-out-quintic':e=>(e*=2)<1?.5*e**5:.5*((e-=2)*e**4+2),'in-out-exponential':e=>(e*=2)<1?.5*1024**(e-1):.5*(2-2**(-10*(e-1))),'in-out-circular':e=>(e*=2)<1?-.5*(Math.sqrt(1-e**2)-1):.5*(Math.sqrt(1-(e-=2)*e)+1),'in-out-elastic':(e,t,n)=>{const i=Math.max(t,1),r=l(i,n);return(e*=2)<1?i*2**(10*(e-=1))*Math.sin((e-r)*s/n)*-.5:i*2**(-10*(e-=1))*Math.sin((e-r)*s/n)*.5+1}},d=e=>{const[t,n=1,i=.4]=e.trim().split(' ');return{easing:t,amplitude:n,period:i}},u=/-?\d*\.?\d+/g,m=e=>e.match(u).map(Number),h=(t,n)=>{const i=(e=>e.map((e=>{const t=String(e);return t.startsWith('#')?o(t):t})))(n),r=e(i).split(u);return{property:t,strings:r,numbers:i.map(m),round:e(r).startsWith('rgb')}},p=(e,t)=>e.reduce(((e,{property:n,numbers:i,strings:r,round:a})=>(e[n]=(([e,t],n,i,r)=>n.reduce(((n,a,o)=>{const s=o-1,l=((e,t,n)=>e+(t-e)*n)(e[s],t[s],r);return n+(i&&o<4?Math.round(l):l)+a})))(i,r,a,t),e)),{}),g=e=>e.forEach((({numbers:e})=>e.reverse())),f={all:new Set,add(e){this.all.add(e).size<2&&requestAnimationFrame(x)}},b={},y=(e,n,i)=>e>0?t(n,i)/e:0,v=(e,i)=>{const{elements:a=null,easing:o='out-elastic',duration:s=1e3,delay:l=0,speed:c=1,loop:u=!1,optimize:m=!1,direction:p='normal',blur:b=null,change:v=null,...x}=e,$={totalDuration:-1};(e=>Array.isArray(e)?e:!e||e.nodeType?[e]:Array.from('string'==typeof e?document.querySelectorAll(e):e))(a).forEach((async(e,i)=>{const a=((e,n)=>Object.entries(e).map((([e,i])=>h(e,t(i,n)))))(x,i),E={element:e,keyframes:a,loop:u,optimize:m,direction:p,change:v,easing:d(o),duration:y(c,s,i)},q=y(c,l,i),M=q+E.duration;'normal'!=p&&g(a),e&&(m&&n(e,a),b&&(E.blur=(e=>{const t=r.axes.reduce(((e,t)=>(e[t]=0,e)),{});return Object.assign(t,e)})(t(b,i)),E.gaussian=r.add(E))),M>$.totalDuration&&($.animation=E,$.totalDuration=M),q&&await w(q),f.add(E)}));const{animation:E}=$;E&&(E.end=i,E.options=e)},x=e=>{const{all:t}=f;t.forEach((i=>{((e,t)=>{e.startTime||(e.startTime=t),e.elapsed=t-e.startTime})(i,e);const r=(({elapsed:e,duration:t})=>t>0?Math.min(e/t,1):1)(i),{element:o,keyframes:s,loop:l,optimize:d,direction:u,change:m,easing:h,duration:f,gaussian:b,end:y,options:v}=i;if(u){let e=r;switch(r){case 0:'alternate'==u&&g(s);break;case 1:l?(e=>{e.startTime=0})(i):(t.delete(i),d&&o&&n(o),b&&(({style:e},{parentNode:{parentNode:t}})=>{e.filter='none',t.remove()})(o,b)),y&&y(v);break;default:e=(({easing:e,amplitude:t,period:n},i)=>c[e](i,t,n))(h,r)}return b&&a(i,e),m&&y&&m(e),void(o&&Object.assign(o.style,p(s,e)))}r<1||(t.delete(i),y(f))})),t.size&&requestAnimationFrame(x)};document.addEventListener('visibilitychange',(()=>{const e=performance.now();if(document.hidden){const{all:t}=f;return b.time=e,b.all=new Set(t),void t.clear()}const{all:t,time:n}=b;if(!t)return;const i=e-n;requestAnimationFrame((()=>t.forEach((e=>{e.startTime+=i,f.add(e)}))))}));const w=e=>new Promise((t=>f.add({duration:e,end:t})));var $={render:(e,t,n)=>`\n    <svg style="display:block" viewBox="0 0 100 8" fill="none" xmlns="http://www.w3.org/2000/svg">\n      \n      <rect width="100" height="8" fill="var(--chart-${n}-background, #dee2e6)"></rect>\n      \n      <g>\n        <rect ${e>0?'animate':''}  x="0"  width="${e}" height="8" fill="var(--chart-${n}-color-1, #1E88E5)"></rect>\n        <text text-anchor="middle"  dominant-baseline="central"  \n           style="fill: ${e/2>2?'white':'black'}; font-size: var(--bar-font-size, 25%); font-weight: 500; pointer-events: none;" x="${e/2>2?e/2:7}" y="4">${t}</text>\n      </g>\n      \n\n    </svg>\n    `};class E extends HTMLElement{constructor(){super();const e=this.getAttribute('value'),t=this.querySelector('[slot="item-value"]').textContent,n=this.getAttribute('theme');this.attachShadow({mode:'open'}).innerHTML=$.render(e,t,n)}connectedCallback(){const e=this.shadowRoot.querySelectorAll('[animate]');var t;t={elements:e,duration:1200,delay:e=>100*e,transform:['scalex(0)','scalex(1)']},new Promise((e=>v(t,e)))}}customElements.get('bar-chart')||customElements.define('bar-chart',E);const q=(e,t)=>{const n=e.map((e=>Number(e))).slice(0,t).reduce(((e,t)=>e+t),0);return t>0?n:0};var M={render:(e,t,n,i)=>`\n    <style>\n      \n      ul {\n        border: solid 1px var(--c-g-9);\n        display: flex;\n        flex-direction: var(--direction);\n        flex-wrap: wrap;\n        list-style: none;\n        font-size: .8rem;\n        margin-top: var(--space-s);\n        padding: .5rem;\n      }\n\n      li {\n        align-items: center;\n        display: flex;\n        flex-direction: row;\n        margin-right: .5rem;\n      }\n\n      li:last-child {\n        margin-right: 0;\n      }\n\n\n      li:before {\n        background: blue;\n        content:"";\n        display: inline-block;\n        height: 15px;\n        margin-right: .2rem;\n        width: 15px;\n      }\n\n      \n\n      ${e.map(((e,t)=>`\n          li:nth-child(${t+1}):before {\n            background-color: var(--chart-${i}-color-${t+1}, blue);\n          }\n        `)).join('')}\n\n      \n      </style>\n    <svg role="group" aria-labelledby="graph-title" aria-describedby="graph-desc" style="display:block" viewBox="0 0 100 8" fill="none" xmlns="http://www.w3.org/2000/svg">\n      <desc id="timeline-desc">An Interactive Timeline</desc>\n      <rect width="100" height="8" fill="var(--chart-${i}-background, #ECEFF1)"></rect>\n\n      ${e.map(((r,a)=>`\n      <g aria-label="bar graph">\n        <g>\n          <rect x="${q(e,a)}" ${e>0?'animate':''}  width="${r}" height="8" fill="var(--chart-${i}-color-${a+1}, blue)"></rect>\n          <title>${t[a]}</title>\n          <text text-anchor="middle"  dominant-baseline="central"  \n           style="fill: white; font-size: var(--bar-font-size, 25%); font-weight: 500; pointer-events: none;" x="${q(e,a)+r/2}" y="4">${n[a]}</text>\n        </g>\n      </g>\n      `)).join('')}\n        \n    </svg>\n    `};const A=document.createElement('template');class S extends HTMLElement{constructor(){super(),this.attachShadow({mode:'open'});const e=this.getAttribute('theme'),t=this.querySelectorAll('[value]'),n=[...t].map((e=>e.getAttribute('value'))),i=[...t].map((e=>e.querySelector('[slot="item-text"]').textContent)),r=[...t].map((e=>e.querySelector('[slot="item-value"]').textContent));A.innerHTML=M.render(n,i,r,e)}addLegend(){const e=[...this.querySelectorAll('[slot="item-text"')].map((e=>e.textContent)),t=document.createElement('div');t.innerHTML=`\n    <ul>\n        ${e.map((e=>`<li>${e}</li>`)).join('')}\n    </ul>`,this.shadowRoot.appendChild(t)}connectedCallback(){this.shadowRoot.appendChild(A.content.cloneNode(!0)),this.hasAttribute('legend')&&this.addLegend()}}customElements.get('multi-bar-chart')||customElements.define('multi-bar-chart',S);class k extends HTMLElement{constructor(){super();const e=this.querySelector('select').name,t=document.querySelectorAll(`[filter=${e}]`),n=document.querySelectorAll(`[filter=${e}] [filterableBy]`),i=[...t].map((e=>document.getElementById(`${e.getAttribute('filter')}-filter`))),r=t=>{const i=document.querySelectorAll(`[filter=${e}] [filterableBy*="${t}"]`);for(const e of n)e.hidden=!0;for(const e of i)e.hidden=!1};for(const e of i)r(e.value);[...i].map((e=>e.addEventListener('change',(t=>r(e.value)))))}}customElements.get('cor-filter')||customElements.define('cor-filter',k);class T extends HTMLElement{constructor(){super();const e=this.attachShadow({mode:'open'}),t=[...document.querySelectorAll('.cor-toc-section')].map((e=>({id:e.id,title:e.textContent})));e.innerHTML=`\n      <style>\n        ul {\n          margin: var(--space-3xs) 0 0 0;\n          padding: 0;\n        }\n        \n        ul > li {\n          list-style-position: outside;\n          list-style-type: disc;\n          padding-left: var(--space-3xs);\n        }\n        \n        h2 {\n          color: var(--g-8);\n          font-size: var(--step-0) !important;\n          font-weight: normal;\n          text-transform: initial;\n          margin: 0 0 var(--space--4xs) 0;\n        }\n        \n        a {\n          font-size: var(--step--3);\n          text-decoration: none;\n          margin-top: var(--space-4xs, 1rem);\n        }\n\n        a:link,\n        a:focus,\n        a:visited,\n        a:active {\n          color: var(--link-color);\n        }\n\n        a:hover {\n          text-decoration: underline;\n        }\n      \n        :host {\n          display: block;\n        }\n      </style>\n      <nav class="cor-toc cor-toc--sticky" aria-labelledby="sections-heading">\n        <h2 id="sections-heading"><slot name="toc-title">Contents</slot></h2>\n        <ul class="list-disc">\n          ${t.map((e=>`\n            <li>\n              <a href="#${e.id}">${e.title}</a>\n            </li>\n          `)).join('')}\n        </ul>\n      </nav>\n    `}}customElements.get('cor-toc')||customElements.define('cor-toc',T)}();
