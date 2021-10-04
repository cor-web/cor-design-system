/* Version: 0.1.93 - October 4, 2021 14:44:28 */
!function(n){const e=document.createElement('template');class o extends HTMLElement{static get properties(){return{image:{type:String}}}constructor(){super(),this.attachShadow({mode:'open'}),(n=>{const o=n.getAttribute('alt'),t=n.getAttribute('link'),r=n.getAttribute('image'),a=n.getAttribute('cta'),i=n.getAttribute('title'),c=n.getAttribute('description');e.innerHTML=`\n    <style>\n      :host {\n\n        /* START: To remove when Base CSS is available everywhere */\n        --fluid-min-width: 320;\n        --fluid-max-width: 1140;\n        --fluid-screen: 100vw;\n        --fluid-bp: calc( (var(--fluid-screen) - var(--fluid-min-width) / 16 * 1rem) / (var(--fluid-max-width) - var(--fluid-min-width)) );\n\n        --f-0-min: 21;\n        --f-0-max: 24;\n        --fc-s-min: (var(--f-0-min, 21));\n        --fc-s-max: (var(--f-0-max, 24));\n        --fc-2xs-min: (var(--fc-s-min) * 0.5);\n        --fc-2xs-max: (var(--fc-s-max) * 0.5);\n        --space-2xs: calc( ((var(--fc-2xs-min) / 16) * 1rem) + (var(--fc-2xs-max) - var(--fc-2xs-min)) * var(--fluid-bp) );\n\n        --oc-blue-8: #1971c2;\n        --oc-indigo-5: #5c7cfa;\n        --oc-gray-3: #dee2e6;\n        --oc-gray-9: #212529;\n\n        --link-color: var(--oc-blue-8);\n        --text-color: var(--oc-gray-9);\n        /* END: To remove when Base CSS is available everywhere */\n\n        background: white;\n        display: block;\n        margin-bottom: var(--space-2xs);\n      }\n      \n      :host([type="card"]) {\n        transition: border-color 0.5s ease;\n        border: solid 1px var(--oc-gray-3);\n      }\n\n      :host([type="card"]:hover) {\n        border-color: var(--oc-indigo-5);\n      }\n\n      :host([type="card"]:hover) h3 {\n        text-decoration: underline;\n      }\n\n      a {\n        display: block;\n        position: relative;\n        text-decoration: none;\n      }\n      \n      img {\n        display: block;\n        max-width: 100%;\n\n      }\n\n      a:before {\n        background-color: #0000;\n        content: "";\n        display: block;\n        position: absolute;\n        transition: background-color 0.5s ease;\n        height: 100%;\n        width: 100%;\n      }\n      \n      a:hover:before {\n        background-color: #0005;\n      }\n\n      :host([type="card"]) a:before {\n        content: none;\n      }\n\n      span {\n        box-sizing: border-box;\n        background-color: #00000094;\n        color: white;\n        display: block;\n        font-size: 16px;\n        font-weight: bold;\n        text-decoration: none;\n        padding: .5rem;\n        position: absolute;\n        bottom: 0;\n        width: 100%;\n      }\n\n      p, h3 {\n        margin: var(--space-2xs) var(--space-2xs);\n      }\n\n      h3 {\n        color: var(--link-color);\n        font-size: 16px;\n        margin: var(--space-2xs) var(--space-2xs);\n      }\n\n      p {\n        color: var(--text-color);\n        font-size: 14px;\n      }\n   \n    </style>\n    <a href="${t}">\n      ${r?`<img src="${r}" alt="${o}" />`:''}\n      ${i?`<h3>${i}</h3>`:''}\n      ${c?`<p>${c}</p>`:''}\n      ${a?`<span>${a}</span>`:''}\n    </a>\n      `})(this),this.shadowRoot.appendChild(e.content.cloneNode(!0))}}customElements.define('cor-banner',o),n.CorBanner=o,Object.defineProperty(n,'__esModule',{value:!0})}({});
