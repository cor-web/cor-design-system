const l=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function t(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerpolicy&&(n.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?n.credentials="include":s.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(s){if(s.ep)return;s.ep=!0;const n=t(s);fetch(s.href,n)}};l();class c extends HTMLElement{constructor(){if(super(),this.addEventListener("state-update",this.store),console.log("test soi"),this.menusButtons=document.querySelectorAll("[clicky-menu] button"),this.toggleNavButton=document.getElementById("nav-toggle"),this.siteNav=document.getElementById("site-nav"),this.toolsQuicklinks=document.getElementById("tools-quicklinks"),this.socialMedia=document.getElementById("tools-socialMedia"),this.search=document.getElementById("site-search"),this.languages=document.getElementById("site-languages"),this.searchButton=document.getElementById("site-search-button"),this.subnavLinks=document.querySelectorAll("cor-header-navbar > nav > ul > li > a"),this.subnavButtons=document.querySelectorAll("#panelsNav button"),this.panelsNav=document.querySelector(".enhanced #panelsNav"),this.defaultNav=document.querySelector(".enhanced #defaultNav"),this.subnavItems=document.querySelectorAll(".cor-header-navbar__subnav "),this.subnavContainer=document.querySelector("cor-header-subnav"),this.subnavContainerItems=document.querySelectorAll("cor-header-subnav > ul > li"),this.popUps=document.querySelectorAll("cor-header-subnav > ul > li"),matchMedia){const e=window.matchMedia("(max-width: 1023px)");e.addEventListener("change",this.WidthChange.bind(this)),this.WidthChange(e)}}store({detail:e}){switch(e.type){case"change-subnav":console.log(e.type,e.target),this.update("visible-subnav",e.target);break;case"hide-subnav":console.log(e.type,e.target),this.update("visible-subnav","");break}}update(e,t){this[e]=t,this.setAttribute(e,t)}WidthChange(e){document.getElementById("nav-toggle"),document.getElementById("nav-panel"),e.matches?(console.log(e,"match"),this.menusButtons.forEach(t=>{console.log(t),t.hidden=!1,t.setAttribute("aria-expanded","false"),t.addEventListener("click",this.toggleMenu)}),this.subnavItems.forEach(t=>{t.setAttribute("aria-expanded","false"),t.setAttribute("hidden","")}),this.subnavContainerItems.forEach(t=>{t.setAttribute("aria-expanded","false"),t.setAttribute("hidden","")}),this.subnavContainer.hidden=!0,this.toggleNavButton.removeAttribute("hidden"),this.toggleNavButton.setAttribute("aria-expanded","false"),this.toggleNavButton.addEventListener("click",this.toggleNav.bind(this)),this.searchButton.setAttribute("hidden",""),this.search.removeAttribute("hidden"),this.defaultNav.removeAttribute("hidden")):(console.log(e,"no match"),this.subnavContainer.hidden=!1,this.defaultNav.setAttribute("hidden",""),this.subnavContainerItems.forEach(t=>{t.setAttribute("aria-expanded","false"),t.setAttribute("hidden","")}),this.subnavItems.forEach(t=>{t.setAttribute("aria-expanded","false"),t.setAttribute("hidden","")}),this.subnavButtons.forEach(t=>{t.addEventListener("click",this.toggleSubnav.bind(this))}),this.toggleNavButton.setAttribute("hidden",""),this.toggleNavButton.setAttribute("aria-expanded","true"),this.searchButton.removeAttribute("hidden"),this.search.setAttribute("hidden",""),this.siteNav.setAttribute("data-open","true"))}toggleSubnav(e){const t=e.target,o=t.hasAttribute("open"),s=document.getElementById(e.target.getAttribute("aria-controls"));this.popUps.forEach(n=>{n.setAttribute("hidden",""),n.setAttribute("aria-expanded","false")}),this.subnavButtons.forEach(n=>{n.removeAttribute("open")}),o?(console.log("open"),t.removeAttribute("open"),s.setAttribute("aria-expanded","false")):(console.log("not open"),t.setAttribute("open",""),s.removeAttribute("hidden"),s.setAttribute("aria-expanded","true"),s.querySelector("a").focus())}toggleNav(e){console.log("test",this.open),this.open?this.removeAttribute("open"):this.setAttribute("open","")}toggleMenu(){console.log("toggle Menu");const e=this,t=this.nextElementSibling;e.getAttribute("aria-expanded")=="true"?(e.setAttribute("aria-expanded","false"),t.setAttribute("aria-hidden","true")):(e.setAttribute("aria-expanded","true"),t.setAttribute("aria-hidden","false"),t.removeAttribute("hidden"))}widthChange(){}static get observedAttributes(){return["open"]}get open(){return this.hasAttribute("open")}set open(e){e?this.setAttribute("open",""):this.removeAttribute("open"),this.toggleNav()}attributeChangedCallback(e,t,o){this.open?(console.log("open"),this.toggleNavButton.setAttribute("aria-expanded","true"),this.toolsQuicklinks.setAttribute("data-open","true"),this.siteNav.setAttribute("data-open","true"),this.socialMedia.setAttribute("data-open","true"),this.search.setAttribute("data-open","true"),this.languages.setAttribute("data-open","true")):(console.log("not open"),this.toggleNavButton.setAttribute("aria-expanded","false"),this.toolsQuicklinks.setAttribute("data-open","false"),this.siteNav.setAttribute("data-open","false"),this.socialMedia.setAttribute("data-open","false"),this.search.setAttribute("data-open","false"),this.languages.setAttribute("data-open","false"))}}class h extends HTMLElement{constructor(){super()}}class b extends HTMLElement{constructor(){super();let t=this.querySelector("#panelsNav-template").content;this.attachShadow({mode:"open"}).appendChild(t.cloneNode(!0))}connectedCallback(){this.buttons=this.shadowRoot.querySelectorAll("button"),this.buttons.forEach(e=>{e.addEventListener("click",t=>{this.onClick(t.target)})}),matchMedia&&window.matchMedia("(max-width: 1023px)").addEventListener("change",this.widthChange)}widthChange(e){e.matches&&(console.log("CHANGED"),this.deta,this.innerHTML=defaultNavContent)}toggle(e){console.log("toggle",e);let t="",o=e.getAttribute("aria-controls");console.log(e.getAttribute("aria-expanded")),e.getAttribute("aria-expanded")=="true"?(e.setAttribute("aria-expanded","false"),t="hide-subnav"):(this.buttons.forEach(s=>{s.setAttribute("aria-expanded","false")}),e.setAttribute("aria-expanded","true"),t="change-subnav"),this.dispatchUpdate({type:t,target:o})}onClick(e){this.toggle(e)}dispatchUpdate(e){console.log("dispatchUpdate",e);const t=new CustomEvent("state-update",{detail:e,bubbles:!0,composed:!0});this.dispatchEvent(t)}}class p extends HTMLElement{constructor(){super(),console.log("button"),this.hidden=!1;const e=document.createElement("button"),t=this.querySelector("a"),o=t.innerHTML;e.innerHTML=o,this.replaceChild(e,t),this.addEventListener("click",this.onClick)}onClick(){this.toggleSearchBar()}toggleSearchBar(){const e=document.querySelector("cor-search-box");e.getAttribute("aria-expanded")!=="true"?(e.setAttribute("aria-expanded","true"),e.hidden=!1):(e.setAttribute("aria-expanded","false"),e.hidden=!0)}}class g extends HTMLElement{constructor(){super(),this.panels=this.querySelectorAll(".cor-header-subnav-panel");const e=document.querySelector("cor-header"),t="visible-subnav",o=()=>this.showNav(e[t]);new MutationObserver(o).observe(e,{attributes:!0,attributeFilter:[t]})}showNav(e){this.panels.forEach(t=>{t.setAttribute("aria-expanded",!1),t.hidden=!0}),e&&(document.getElementById(e).setAttribute("aria-expanded",!0),document.getElementById(e).hidden=!1)}}class m extends HTMLElement{constructor(){super()}}class v extends HTMLElement{constructor(){if(super(),!this.querySelector("#corSubnavDescriptionsContainer")){const s=document.createElement("ul");s.id="corSubnavDescriptionsContainer",this.appendChild(s)}const e=this.querySelector("#corSubnavDescriptionsContainer"),t=this.querySelectorAll("cor-subnav-description");t.forEach((s,n)=>{n!==0&&(s.hidden=!0),e.appendChild(s)});const o=this.querySelectorAll("[has-subnav]");o.forEach((s,n)=>{n==0&&s.parentNode.classList.add("active"),s.addEventListener("mouseover",i=>{o.forEach(r=>r.parentNode.classList.remove("active")),i.target.parentNode.classList.add("active");const u=i.target.getAttribute("aria-controls"),d=this.querySelector(`#${u}`);t.forEach(r=>{r.hidden=!0}),d.hidden=!1,console.log(d)}),console.log(s)})}}console.log("2");window.customElements.define("cor-header",c);window.customElements.define("cor-search-button",p);window.customElements.define("cor-header-navbar",h);window.customElements.define("cor-header-subnav",g);window.customElements.define("cor-panels-nav",b);window.customElements.define("cor-subnav-description",m);window.customElements.define("cor-subnav-item",v);