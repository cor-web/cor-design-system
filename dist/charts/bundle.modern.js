/* Version: 0.1.77 - August 13, 2021 15:00:43 */
!function(){const e=([e])=>e,t=(e,t)=>'function'==typeof e?e(t):e,n=({style:e},t)=>e.willChange=t?t.map((({property:e})=>e)).join():'auto',r=(e,t)=>Object.entries(t).reduce(((e,[t,n])=>(e.setAttribute(t,n),e)),document.createElementNS('http://www.w3.org/2000/svg',e)),i={axes:['x','y'],count:0,add({element:e,blur:t}){const n='motion-blur-'+this.count++,i=r('svg',{style:'position: absolute; width: 0; height: 0'}),a=r('filter',this.axes.reduce(((e,n)=>{const r=2*t[n];return e[n]=`-${r}%`,e['x'==n?'width':'height']=100+2*r+'%',e}),{id:n,'color-interpolation-filters':'sRGB'})),o=r('feGaussianBlur',{in:'SourceGraphic'});return a.append(o),i.append(a),e.style.filter=`url("#${n}")`,document.body.prepend(i),o}},a=({blur:e,gaussian:t,easing:n},r)=>{const a=i.axes.map((t=>((e,{easing:t},n)=>{const r=e*n,i=e-r,a='linear'==t?e:t.startsWith('in-out')?2*(n<.5?r:i):t.startsWith('in')?r:i;return Math.max(0,a)})(e[t],n,r)));t.setAttribute('stdDeviation',a.join())},o=e=>{const t=e.slice(1),[n,r,i,a]=(e=>(e=>{const t=e.split(''),n=e.length<5?t.map((e=>e+e)):t.reduce(((e,n,r)=>(r%2&&e.push(t[r-1]+n),e)),[]);return n.length<4&&n.push('ff'),n})(e).map((e=>parseInt(e,16))))(t);return`rgba(${n}, ${r}, ${i}, ${a/255})`},l=2*Math.PI,s=(e,t)=>t/l*Math.asin(1/e),c={linear:e=>e,'in-cubic':e=>e**3,'in-quartic':e=>e**4,'in-quintic':e=>e**5,'in-exponential':e=>1024**(e-1),'in-circular':e=>1-Math.sqrt(1-e**2),'in-elastic':(e,t,n)=>{const r=Math.max(t,1),i=s(r,n);return-r*2**(10*(e-=1))*Math.sin((e-i)*l/n)},'out-cubic':e=>--e**3+1,'out-quartic':e=>1- --e**4,'out-quintic':e=>--e**5+1,'out-exponential':e=>1-2**(-10*e),'out-circular':e=>Math.sqrt(1- --e**2),'out-elastic':(e,t,n)=>{const r=Math.max(t,1),i=s(r,n);return r*2**(-10*e)*Math.sin((e-i)*l/n)+1},'in-out-cubic':e=>(e*=2)<1?.5*e**3:.5*((e-=2)*e**2+2),'in-out-quartic':e=>(e*=2)<1?.5*e**4:-.5*((e-=2)*e**3-2),'in-out-quintic':e=>(e*=2)<1?.5*e**5:.5*((e-=2)*e**4+2),'in-out-exponential':e=>(e*=2)<1?.5*1024**(e-1):.5*(2-2**(-10*(e-1))),'in-out-circular':e=>(e*=2)<1?-.5*(Math.sqrt(1-e**2)-1):.5*(Math.sqrt(1-(e-=2)*e)+1),'in-out-elastic':(e,t,n)=>{const r=Math.max(t,1),i=s(r,n);return(e*=2)<1?r*2**(10*(e-=1))*Math.sin((e-i)*l/n)*-.5:r*2**(-10*(e-=1))*Math.sin((e-i)*l/n)*.5+1}},u=e=>{const[t,n=1,r=.4]=e.trim().split(' ');return{easing:t,amplitude:n,period:r}},d=/-?\d*\.?\d+/g,m=e=>e.match(d).map(Number),h=(t,n)=>{const r=(e=>e.map((e=>{const t=String(e);return t.startsWith('#')?o(t):t})))(n),i=e(r).split(d);return{property:t,strings:i,numbers:r.map(m),round:e(i).startsWith('rgb')}},p=(e,t)=>e.reduce(((e,{property:n,numbers:r,strings:i,round:a})=>(e[n]=(([e,t],n,r,i)=>n.reduce(((n,a,o)=>{const l=o-1,s=((e,t,n)=>e+(t-e)*n)(e[l],t[l],i);return n+(r&&o<4?Math.round(s):s)+a})))(r,i,a,t),e)),{}),g=e=>e.forEach((({numbers:e})=>e.reverse())),f={all:new Set,add(e){this.all.add(e).size<2&&requestAnimationFrame(v)}},b={},y=(e,n,r)=>e>0?t(n,r)/e:0,x=(e,r)=>{const{elements:a=null,easing:o='out-elastic',duration:l=1e3,delay:s=0,speed:c=1,loop:d=!1,optimize:m=!1,direction:p='normal',blur:b=null,change:x=null,...v}=e,$={totalDuration:-1};(e=>Array.isArray(e)?e:!e||e.nodeType?[e]:Array.from('string'==typeof e?document.querySelectorAll(e):e))(a).forEach((async(e,r)=>{const a=((e,n)=>Object.entries(e).map((([e,r])=>h(e,t(r,n)))))(v,r),q={element:e,keyframes:a,loop:d,optimize:m,direction:p,change:x,easing:u(o),duration:y(c,l,r)},E=y(c,s,r),A=E+q.duration;'normal'!=p&&g(a),e&&(m&&n(e,a),b&&(q.blur=(e=>{const t=i.axes.reduce(((e,t)=>(e[t]=0,e)),{});return Object.assign(t,e)})(t(b,r)),q.gaussian=i.add(q))),A>$.totalDuration&&($.animation=q,$.totalDuration=A),E&&await w(E),f.add(q)}));const{animation:q}=$;q&&(q.end=r,q.options=e)},v=e=>{const{all:t}=f;t.forEach((r=>{((e,t)=>{e.startTime||(e.startTime=t),e.elapsed=t-e.startTime})(r,e);const i=(({elapsed:e,duration:t})=>t>0?Math.min(e/t,1):1)(r),{element:o,keyframes:l,loop:s,optimize:u,direction:d,change:m,easing:h,duration:f,gaussian:b,end:y,options:x}=r;if(d){let e=i;switch(i){case 0:'alternate'==d&&g(l);break;case 1:s?(e=>{e.startTime=0})(r):(t.delete(r),u&&o&&n(o),b&&(({style:e},{parentNode:{parentNode:t}})=>{e.filter='none',t.remove()})(o,b)),y&&y(x);break;default:e=(({easing:e,amplitude:t,period:n},r)=>c[e](r,t,n))(h,i)}return b&&a(r,e),m&&y&&m(e),void(o&&Object.assign(o.style,p(l,e)))}i<1||(t.delete(r),y(f))})),t.size&&requestAnimationFrame(v)};document.addEventListener('visibilitychange',(()=>{const e=performance.now();if(document.hidden){const{all:t}=f;return b.time=e,b.all=new Set(t),void t.clear()}const{all:t,time:n}=b;if(!t)return;const r=e-n;requestAnimationFrame((()=>t.forEach((e=>{e.startTime+=r,f.add(e)}))))}));const w=e=>new Promise((t=>f.add({duration:e,end:t})));var $={render:(e,t,n)=>`\n    <svg style="display:block" viewBox="0 0 100 8" fill="none" xmlns="http://www.w3.org/2000/svg">\n      \n      <rect width="100" height="8" fill="var(--chart-${n}-background, #dee2e6)"></rect>\n      \n      <g>\n        <rect ${e>0?'animate':''}  x="0"  width="${e}" height="8" fill="var(--chart-${n}-color-1, #1E88E5)"></rect>\n        <text text-anchor="middle"  dominant-baseline="central"  \n           style="fill: ${e/2>2?`var(--chart-${n}-color-1-text, white)`:'black'}; font-family: consolas; font-size: var(--bar-font-size, 20%); font-weight: 500; pointer-events: none;" x="${e/2>2?e/2:7}" y="4">${t}</text>\n      </g>\n      \n      <title>${e}%</title>\n    </svg>\n    `};class q extends HTMLElement{constructor(){super();const e=this.getAttribute('value'),t=this.querySelector('[slot="item-value"]').textContent,n=this.getAttribute('theme');this.attachShadow({mode:'open'}).innerHTML=$.render(e,t,n)}connectedCallback(){const e=this.shadowRoot.querySelectorAll('[animate]');var t;t={elements:e,duration:1200,delay:e=>100*e,transform:['scalex(0)','scalex(1)']},new Promise((e=>x(t,e)))}}customElements.get('bar-chart')||customElements.define('bar-chart',q);const E=(e,t)=>{const n=e.map((e=>Number(e))).slice(0,t).reduce(((e,t)=>e+t),0);return t>0?n:0};var A={render:(e,t,n,r)=>`\n    <style>\n      \n      ul {\n        border: solid 1px var(--c-g-9);\n        display: flex;\n        flex-direction: var(--direction);\n        flex-wrap: wrap;\n        list-style: none;\n        font-size: .8rem;\n        margin-top: var(--space-s);\n        padding: .5rem;\n      }\n\n      li {\n        align-items: center;\n        display: flex;\n        flex-direction: row;\n        margin-right: .5rem;\n      }\n\n      li:last-child {\n        margin-right: 0;\n      }\n\n\n      li:before {\n        background: blue;\n        content:"";\n        display: inline-block;\n        height: 15px;\n        margin-right: .2rem;\n        width: 15px;\n      }\n\n      \n\n      ${e.map(((e,t)=>`\n          li:nth-child(${t+1}):before {\n            background-color: var(--chart-${r}-color-${t+1}, blue);\n          }\n        `)).join('')}\n\n      \n      </style>\n    <svg role="group" aria-labelledby="graph-title" aria-describedby="graph-desc" style="display:block" viewBox="0 0 100 8" fill="none" xmlns="http://www.w3.org/2000/svg">\n      <desc id="timeline-desc">An Interactive Timeline</desc>\n      <rect width="100" height="8" fill="var(--chart-${r}-background, #ECEFF1)"></rect>\n\n      ${e.map(((i,a)=>`\n      <g aria-label="bar graph" ${'0'===i?'visibility="hidden"':''} >\n        <g>\n          <rect x="${E(e,a)}" ${e>0?'animate':''}  width="${i}" height="8" fill="var(--chart-${r}-color-${a+1}, blue)"></rect>\n          \n          ${Number(i)>5?`\n            <text text-anchor="middle"  dominant-baseline="central"  \n            style="fill: var(--chart-${r}-color-${a+1}-text, white); font-size: var(--bar-font-size, 20%);font-family: consolas; font-weight: 500; pointer-events: none;" x="${E(e,a)+i/2}" y="4">${n[a]}</text>\n          `:''} \n          \n        </g>\n        <title>${t[a]}: ${n[a]}</title>\n      </g>\n      `)).join('')}\n        \n    </svg>\n    `};const M=document.createElement('template');class S extends HTMLElement{constructor(){super(),this.attachShadow({mode:'open'});const e=this.getAttribute('theme'),t=this.querySelectorAll('[value]'),n=[...t].map((e=>e.getAttribute('value'))),r=[...t].map((e=>e.querySelector('[slot="item-text"]').textContent)),i=[...t].map((e=>e.querySelector('[slot="item-value"]').textContent));M.innerHTML=A.render(n,r,i,e)}addLegend(){const e=[...this.querySelectorAll('[slot="item-text"')].map((e=>e.textContent)),t=document.createElement('div');t.innerHTML=`\n    <ul>\n        ${e.map((e=>`<li>${e}</li>`)).join('')}\n    </ul>`,this.shadowRoot.appendChild(t)}connectedCallback(){this.shadowRoot.appendChild(M.content.cloneNode(!0)),this.hasAttribute('legend')&&this.addLegend()}}customElements.get('multi-bar-chart')||customElements.define('multi-bar-chart',S);class k extends HTMLElement{constructor(){super();const e=this.querySelector('select').name,t=document.querySelectorAll(`[filter=${e}]`),n=document.querySelectorAll(`[filter=${e}] [filterableBy]`),r=[...t].map((e=>document.getElementById(`${e.getAttribute('filter')}-filter`))),i=t=>{const r=document.querySelectorAll(`[filter=${e}] [filterableBy*="${t}"]`);for(const e of n)e.hidden=!0;for(const e of r)e.hidden=!1};for(const e of r)i(e.value);[...r].map((e=>e.addEventListener('change',(t=>i(e.value)))))}}customElements.get('cor-filter')||customElements.define('cor-filter',k)}();
