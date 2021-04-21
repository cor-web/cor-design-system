import animate from "../../js/libraries/animateplus.js";
import template from "./template.js";

class MultiBarChartItem extends HTMLElement {
  constructor() {
    super();
  }

}

customElements.define("multi-bar-chartitem", MultiBarChartItem);

class MultiBarChart extends HTMLElement {
  constructor() {
    super();

    // Multi value
    if (this.getAttribute('value')) this.values = this.getAttribute('value').split(',');

    let shadowRoot = this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = template.render(this.values);
  }

  connectedCallback() {

    const elements = this.shadowRoot.querySelectorAll("[animate]");

    console.log(elements);

    animate({
      elements,
      duration: 1200,
      delay: index => index * 100,
      transform: ["scalex(0)", "scalex(1)"],
      fill: ["#80f", "#fc0"]
    });

  }

}

customElements.define("multi-bar-chart", MultiBarChart);
