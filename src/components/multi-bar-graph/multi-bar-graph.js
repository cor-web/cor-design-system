import animate from "../../js/libraries/animateplus.js";
import template from "./template.js";

class MultiBarChart extends HTMLElement {
  constructor() {
    super();

    let shadowRoot = this.attachShadow({ mode: 'open' });

    const children = this.querySelectorAll("[value]");
    this.values = [...children].map(child => child.getAttribute('value'))

    const graphtemplate = document.createElement('template');
    graphtemplate.innerHTML = template.render(this.values);
    this.shadowRoot.appendChild(graphtemplate.content.cloneNode(true));

  }

  connectedCallback() {

    /*
    animate({
      elements,
      duration: 1200,
      delay: index => index * 100,
      transform: ["scalex(0)", "scalex(1)"],
      fill: ["#80f", "#fc0"]
    });
    */
  }

}

customElements.define("multi-bar-chart", MultiBarChart);
