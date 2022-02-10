/* Version: 0.1.117 - February 10, 2022 16:09:59 */
!function(){'inert'in HTMLElement.prototype||(Object.defineProperty(HTMLElement.prototype,'inert',{enumerable:!0,get:function(){return this.hasAttribute('inert')},set:function(e){e?this.setAttribute('inert',''):this.removeAttribute('inert')}}),window.addEventListener('load',(()=>{function e(e){for(;e&&e!==document.documentElement;){if(e.hasAttribute('inert'))return e;e=e.parentElement}return null}function t(e){var t=e.path;return t&&t[0]||e.target}function n(e){e.path[e.path.length-1]!==window&&(r(t(e)),e.preventDefault(),e.stopPropagation())}function r(t){var n=e(t);if(n){if(document.hasFocus()&&0!==d){var r=(s||document).activeElement;if(function(e){var t=null;try{t=new KeyboardEvent('keydown',{keyCode:9,which:9,key:'Tab',code:'Tab',keyIdentifier:'U+0009',shiftKey:!!e,bubbles:!0})}catch(n){try{(t=document.createEvent('KeyboardEvent')).initKeyboardEvent('keydown',!0,!0,window,'Tab',0,e?'Shift':'',!1,'en')}catch(e){}}if(t){try{Object.defineProperty(t,'keyCode',{value:9})}catch(e){}document.dispatchEvent(t)}}(0>d),r!=(s||document).activeElement)return;var o,i=document.createTreeWalker(document.body,NodeFilter.SHOW_ELEMENT,{acceptNode:e=>!e||!e.focus||0>e.tabIndex?NodeFilter.FILTER_SKIP:n.contains(e)?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT});for(i.currentNode=n,i=(-1===Math.sign(d)?i.previousNode:i.nextNode).bind(i);o=i();)if(o.focus(),(s||document).activeElement!==r)return}t.blur()}}var o,i;o='/*[inert]*/*[inert]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;pointer-events:none}',(i=document.createElement('style')).type='text/css',i.styleSheet?i.styleSheet.cssText=o:i.appendChild(document.createTextNode(o)),document.body.appendChild(i);var c=e=>null;window.ShadowRoot&&(c=e=>{for(;e&&e!==document.documentElement;){if(e instanceof window.ShadowRoot)return e;e=e.parentNode}return null});var d=0;document.addEventListener('keydown',(e=>{d=9===e.keyCode?e.shiftKey?-1:1:0})),document.addEventListener('mousedown',(e=>{d=0}));var s=null;document.body.addEventListener('focus',(e=>{var o=t(e);if((e=o==e.target?null:c(o))!=s){if(s){if(!(s instanceof window.ShadowRoot))throw Error('not shadow root: '+s);s.removeEventListener('focusin',n,!0)}e&&e.addEventListener('focusin',n,!0),s=e}r(o)}),!0),document.addEventListener('click',(n=>{e(t(n))&&(n.preventDefault(),n.stopPropagation())}),!0)})));var e=document.querySelector('.cor-carousel__scrollable'),t=document.querySelector('.cor-carousel__buttons'),n=document.querySelector('.cor-carousel__list'),r=n.children,o=document.querySelector('.cor-carousel__prev'),i=document.querySelector('.cor-carousel__next');t.hidden=!1,o.disabled=!0;var c,d=n.offsetWidth/2;function s(){o.disabled=e.scrollLeft<1,i.disabled=e.scrollLeft===n.scrollWidth-n.offsetWidth}if(o.addEventListener('click',(t=>{e.scrollLeft+=-d})),i.addEventListener('click',(t=>{e.scrollLeft+=d})),e.addEventListener('scroll',(()=>{window.clearTimeout(c),c=setTimeout(s,200)})),'IntersectionObserver'in window){var a=new IntersectionObserver(((e,t)=>{Array.prototype.forEach.call(e,(e=>{e.intersectionRatio>.5?e.target.removeAttribute('inert'):e.target.setAttribute('inert','inert')}))}),{root:e,threshold:.5});Array.prototype.forEach.call(r,(e=>{a.observe(e)}))}const l=document.querySelectorAll('.cor-jobs__wordcloud li,[observe]'),u=new IntersectionObserver((function(e){e.forEach((e=>{e.isIntersecting&&e.target.classList.add('visible'),e.isIntersecting||e.target.classList.remove('visible')}))}));l.forEach((e=>u.observe(e)))}();
