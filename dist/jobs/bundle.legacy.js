/* Version: 0.1.157 - May 31, 2022 15:09:54 */
!function(){'use strict';'inert'in HTMLElement.prototype||(Object.defineProperty(HTMLElement.prototype,'inert',{enumerable:!0,get:function(){return this.hasAttribute('inert')},set:function(e){e?this.setAttribute('inert',''):this.removeAttribute('inert')}}),window.addEventListener('load',(function(){function e(e){for(;e&&e!==document.documentElement;){if(e.hasAttribute('inert'))return e;e=e.parentElement}return null}function t(e){var t=e.path;return t&&t[0]||e.target}function n(e){e.path[e.path.length-1]!==window&&(o(t(e)),e.preventDefault(),e.stopPropagation())}function o(t){var n=e(t);if(n){if(document.hasFocus()&&0!==u){var o=(d||document).activeElement;if(function(e){var t=null;try{t=new KeyboardEvent('keydown',{keyCode:9,which:9,key:'Tab',code:'Tab',keyIdentifier:'U+0009',shiftKey:!!e,bubbles:!0})}catch(n){try{(t=document.createEvent('KeyboardEvent')).initKeyboardEvent('keydown',!0,!0,window,'Tab',0,e?'Shift':'',!1,'en')}catch(e){}}if(t){try{Object.defineProperty(t,'keyCode',{value:9})}catch(e){}document.dispatchEvent(t)}}(0>u),o!=(d||document).activeElement)return;var r,i=document.createTreeWalker(document.body,NodeFilter.SHOW_ELEMENT,{acceptNode:function(e){return!e||!e.focus||0>e.tabIndex?NodeFilter.FILTER_SKIP:n.contains(e)?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT}});for(i.currentNode=n,i=(-1===Math.sign(u)?i.previousNode:i.nextNode).bind(i);r=i();)if(r.focus(),(d||document).activeElement!==o)return}t.blur()}}var r,i;r='/*[inert]*/*[inert]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;pointer-events:none}',(i=document.createElement('style')).type='text/css',i.styleSheet?i.styleSheet.cssText=r:i.appendChild(document.createTextNode(r)),document.body.appendChild(i);var c=function(e){return null};window.ShadowRoot&&(c=function(e){for(;e&&e!==document.documentElement;){if(e instanceof window.ShadowRoot)return e;e=e.parentNode}return null});var u=0;document.addEventListener('keydown',(function(e){u=9===e.keyCode?e.shiftKey?-1:1:0})),document.addEventListener('mousedown',(function(e){u=0}));var d=null;document.body.addEventListener('focus',(function(e){var r=t(e);if((e=r==e.target?null:c(r))!=d){if(d){if(!(d instanceof window.ShadowRoot))throw Error('not shadow root: '+d);d.removeEventListener('focusin',n,!0)}e&&e.addEventListener('focusin',n,!0),d=e}o(r)}),!0),document.addEventListener('click',(function(n){e(t(n))&&(n.preventDefault(),n.stopPropagation())}),!0)})));var e=document.querySelector('.cor-carousel__scrollable'),t=document.querySelector('.cor-carousel__buttons'),n=document.querySelector('.cor-carousel__list'),o=n.children,r=document.querySelector('.cor-carousel__prev'),i=document.querySelector('.cor-carousel__next');t.hidden=!1,r.disabled=!0;var c,u=n.offsetWidth/2;function d(){r.disabled=e.scrollLeft<1,i.disabled=e.scrollLeft===n.scrollWidth-n.offsetWidth}if(r.addEventListener('click',(function(t){e.scrollLeft+=-u})),i.addEventListener('click',(function(t){e.scrollLeft+=u})),e.addEventListener('scroll',(function(){window.clearTimeout(c),c=setTimeout(d,200)})),'IntersectionObserver'in window){var s=new IntersectionObserver((function(e,t){Array.prototype.forEach.call(e,(function(e){e.intersectionRatio>.5?e.target.removeAttribute('inert'):e.target.setAttribute('inert','inert')}))}),{root:e,threshold:.5});Array.prototype.forEach.call(o,(function(e){s.observe(e)}))}var a=document.querySelectorAll('.cor-jobs__wordcloud li,[observe]'),l=new IntersectionObserver((function(e){e.forEach((function(e){e.isIntersecting&&e.target.classList.add('visible'),e.isIntersecting||e.target.classList.remove('visible')}))}));a.forEach((function(e){return l.observe(e)}))}();
