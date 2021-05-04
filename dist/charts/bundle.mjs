!function(){const t=([t])=>t,e=(t,e)=>'function'==typeof t?t(e):t,n=({style:t},e)=>t.willChange=e?e.map((({property:t})=>t)).join():'auto',i=(t,e)=>Object.entries(e).reduce(((t,[e,n])=>(t.setAttribute(e,n),t)),document.createElementNS('http://www.w3.org/2000/svg',t)),r={axes:['x','y'],count:0,add({element:t,blur:e}){const n='motion-blur-'+this.count++,r=i('svg',{style:'position: absolute; width: 0; height: 0'}),a=i('filter',this.axes.reduce(((t,n)=>{const i=2*e[n];return t[n]=`-${i}%`,t['x'==n?'width':'height']=100+2*i+'%',t}),{id:n,'color-interpolation-filters':'sRGB'})),o=i('feGaussianBlur',{in:'SourceGraphic'});return a.append(o),r.append(a),t.style.filter=`url("#${n}")`,document.body.prepend(r),o}},a=({blur:t,gaussian:e,easing:n},i)=>{const a=r.axes.map((e=>((t,{easing:e},n)=>{const i=t*n,r=t-i,a='linear'==e?t:e.startsWith('in-out')?2*(n<.5?i:r):e.startsWith('in')?i:r;return Math.max(0,a)})(t[e],n,i)));e.setAttribute('stdDeviation',a.join())},o=t=>{const e=t.slice(1),[n,i,r,a]=(t=>(t=>{const e=t.split(''),n=t.length<5?e.map((t=>t+t)):e.reduce(((t,n,i)=>(i%2&&t.push(e[i-1]+n),t)),[]);return n.length<4&&n.push('ff'),n})(t).map((t=>parseInt(t,16))))(e);return`rgba(${n}, ${i}, ${r}, ${a/255})`},s=2*Math.PI,l=(t,e)=>e/s*Math.asin(1/t),c={linear:t=>t,'in-cubic':t=>t**3,'in-quartic':t=>t**4,'in-quintic':t=>t**5,'in-exponential':t=>1024**(t-1),'in-circular':t=>1-Math.sqrt(1-t**2),'in-elastic':(t,e,n)=>{const i=Math.max(e,1),r=l(i,n);return-i*2**(10*(t-=1))*Math.sin((t-r)*s/n)},'out-cubic':t=>--t**3+1,'out-quartic':t=>1- --t**4,'out-quintic':t=>--t**5+1,'out-exponential':t=>1-2**(-10*t),'out-circular':t=>Math.sqrt(1- --t**2),'out-elastic':(t,e,n)=>{const i=Math.max(e,1),r=l(i,n);return i*2**(-10*t)*Math.sin((t-r)*s/n)+1},'in-out-cubic':t=>(t*=2)<1?.5*t**3:.5*((t-=2)*t**2+2),'in-out-quartic':t=>(t*=2)<1?.5*t**4:-.5*((t-=2)*t**3-2),'in-out-quintic':t=>(t*=2)<1?.5*t**5:.5*((t-=2)*t**4+2),'in-out-exponential':t=>(t*=2)<1?.5*1024**(t-1):.5*(2-2**(-10*(t-1))),'in-out-circular':t=>(t*=2)<1?-.5*(Math.sqrt(1-t**2)-1):.5*(Math.sqrt(1-(t-=2)*t)+1),'in-out-elastic':(t,e,n)=>{const i=Math.max(e,1),r=l(i,n);return(t*=2)<1?i*2**(10*(t-=1))*Math.sin((t-r)*s/n)*-.5:i*2**(-10*(t-=1))*Math.sin((t-r)*s/n)*.5+1}},u=t=>{const[e,n=1,i=.4]=t.trim().split(' ');return{easing:e,amplitude:n,period:i}},d=/-?\d*\.?\d+/g,h=t=>t.match(d).map(Number),m=(e,n)=>{const i=(t=>t.map((t=>{const e=String(t);return e.startsWith('#')?o(e):e})))(n),r=t(i).split(d);return{property:e,strings:r,numbers:i.map(h),round:t(r).startsWith('rgb')}},p=(t,e)=>t.reduce(((t,{property:n,numbers:i,strings:r,round:a})=>(t[n]=(([t,e],n,i,r)=>n.reduce(((n,a,o)=>{const s=o-1,l=((t,e,n)=>t+(e-t)*n)(t[s],e[s],r);return n+(i&&o<4?Math.round(l):l)+a})))(i,r,a,e),t)),{}),g=t=>t.forEach((({numbers:t})=>t.reverse())),b={all:new Set,add(t){this.all.add(t).size<2&&requestAnimationFrame(x)}},f={},y=(t,n,i)=>t>0?e(n,i)/t:0,w=(t,i)=>{const{elements:a=null,easing:o='out-elastic',duration:s=1e3,delay:l=0,speed:c=1,loop:d=!1,optimize:h=!1,direction:p='normal',blur:f=null,change:w=null,...x}=t,$={totalDuration:-1};(t=>Array.isArray(t)?t:!t||t.nodeType?[t]:Array.from('string'==typeof t?document.querySelectorAll(t):t))(a).forEach((async(t,i)=>{const a=((t,n)=>Object.entries(t).map((([t,i])=>m(t,e(i,n)))))(x,i),M={element:t,keyframes:a,loop:d,optimize:h,direction:p,change:w,easing:u(o),duration:y(c,s,i)},A=y(c,l,i),q=A+M.duration;'normal'!=p&&g(a),t&&(h&&n(t,a),f&&(M.blur=(t=>{const e=r.axes.reduce(((t,e)=>(t[e]=0,t)),{});return Object.assign(e,t)})(e(f,i)),M.gaussian=r.add(M))),q>$.totalDuration&&($.animation=M,$.totalDuration=q),A&&await v(A),b.add(M)}));const{animation:M}=$;M&&(M.end=i,M.options=t)},x=t=>{const{all:e}=b;e.forEach((i=>{((t,e)=>{t.startTime||(t.startTime=e),t.elapsed=e-t.startTime})(i,t);const r=(({elapsed:t,duration:e})=>e>0?Math.min(t/e,1):1)(i),{element:o,keyframes:s,loop:l,optimize:u,direction:d,change:h,easing:m,duration:b,gaussian:f,end:y,options:w}=i;if(d){let t=r;switch(r){case 0:'alternate'==d&&g(s);break;case 1:l?(t=>{t.startTime=0})(i):(e.delete(i),u&&o&&n(o),f&&(({style:t},{parentNode:{parentNode:e}})=>{t.filter='none',e.remove()})(o,f)),y&&y(w);break;default:t=(({easing:t,amplitude:e,period:n},i)=>c[t](i,e,n))(m,r)}return f&&a(i,t),h&&y&&h(t),void(o&&Object.assign(o.style,p(s,t)))}r<1||(e.delete(i),y(b))})),e.size&&requestAnimationFrame(x)};document.addEventListener('visibilitychange',(()=>{const t=performance.now();if(document.hidden){const{all:e}=b;return f.time=t,f.all=new Set(e),void e.clear()}const{all:e,time:n}=f;if(!e)return;const i=t-n;requestAnimationFrame((()=>e.forEach((t=>{t.startTime+=i,b.add(t)}))))}));const v=t=>new Promise((e=>b.add({duration:t,end:e})));var $={render:(t,e)=>`\n\n    <style>\n      :host {\n        --color: #266dd3;\n      }\n    </style>\n\n    <svg style="display:block" viewBox="0 0 100 4" fill="none" xmlns="http://www.w3.org/2000/svg">\n      \n      <rect width="100" height="4" fill="#fff"></rect>\n      \n      \n      <g>\n        <rect ${t>0?'animate':''}  x="0"  width="${t}" height="4" fill="var(--color, var(--chart-theme-${e}-color-1, blue))"></rect>\n\n        <text fill="white" font-family="arial"\n          font-size="2" x="0" y="50%">${t}</text>\n      </g>\n      \n\n    </svg>\n    `};class M extends HTMLElement{constructor(){super(),this.getAttribute('value')&&(this.value=[this.getAttribute('value')]);const t=this.getTheme(this.getAttribute('theme'));this.attachShadow({mode:'open'}),this.shadowRoot.innerHTML=$.render(this.value,t)}getTheme(t){return t.substring(t.lastIndexOf('-')+1,t.lastIndexOf('.'))}connectedCallback(){const t=this.shadowRoot.querySelectorAll('[animate]');var e;e={elements:t,duration:1200,delay:t=>100*t,transform:['scalex(0)','scalex(1)']},new Promise((t=>w(e,t)))}}customElements.get('bar-chart')||customElements.define('bar-chart',M);const A=['266dd3','344055','888098','cfb3cd','dfc2f2'],q=(t,e)=>{var n=t.map((t=>Number(t))).slice(0,e).reduce(((t,e)=>t+e),0);return e>0?n:0};var T={render:(t,e)=>`\n    <style>\n\n      :host {\n        ${t.map(((t,e)=>`\n          --color-${e+1}: #${A[e+1]};\n        `)).join('')}\n      }\n      \n      ul {\n        list-style: none;\n        font-size: .8rem;\n        padding: 0;\n      }\n\n      li {\n        flex-grow: 1;\n      }\n\n\n      li:before {\n        background: red;\n        content:"";\n        display: inline-block;\n        height: 10px;\n        margin-right: .2rem;\n        width: 10px;\n      }\n\n      \n\n      ${t.map(((t,n)=>`\n          li:nth-child(${n+1}):before {\n            background-color: var(--color-${n+1}, var(--chart-theme-${e}-color-${n+1}, blue));\n          }\n        `)).join('')}\n\n      \n      </style>\n    <svg role="group" aria-labelledby="graph-title" aria-describedby="graph-desc" style="display:block" viewBox="0 0 100 4" fill="none" xmlns="http://www.w3.org/2000/svg">\n      <desc id="timeline-desc">An Interactive Timeline</desc>\n      <rect width="100" height="4" fill="#e3e3e3"></rect>\n\n      ${t.map(((n,i)=>`\n      <g aria-label="bar graph">\n        <g>\n          <rect x="${q(t,i)}" ${t>0?'animate':''}  width="${n}" height="4" fill="var(--color-${i+1}, var(--chart-theme-${e}-color-${i+1}, blue))"></rect>\n          <title>title</title>\n        </g>\n\n        <text fill="white" font-family="arial"\n          font-size="2" x="${q(t,i)+1}" y="50%">${n}</text>\n      </g>\n      `)).join('')}\n        \n    </svg>\n    `};const E=document.createElement('template');class k extends HTMLElement{constructor(){super(),this.attachShadow({mode:'open'});const t=this.getTheme(this.getAttribute('theme')),e=this.querySelectorAll('[value]');this.values=[...e].map((t=>t.getAttribute('value'))),E.innerHTML=T.render(this.values,t)}getTheme(t){return t.substring(t.lastIndexOf('-')+1,t.lastIndexOf('.'))}addLegend(){const t=[...this.querySelectorAll('[slot="item-text"')].map((t=>t.textContent)),e=document.createElement('div');e.innerHTML=`\n    <ul>\n        ${t.map((t=>`<li>${t}</li>`)).join('')}\n    </ul>`,console.log(e),this.shadowRoot.appendChild(e)}connectedCallback(){this.shadowRoot.appendChild(E.content.cloneNode(!0)),this.hasAttribute('legend')&&this.addLegend()}}customElements.define('multi-bar-chart',k)}();
