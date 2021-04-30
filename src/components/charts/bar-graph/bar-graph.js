import animate from "../../../js/libraries/animateplus.js";
import template from "./template.js";

class BarChart extends HTMLElement {
  constructor() {
    super();

    // One value
    if (this.getAttribute('value')) this.values = [this.getAttribute('value')];

    // Multi values
    if (this.getAttribute('values')) this.values = [this.getAttribute('value')];

    let shadowRoot = this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = template.render(this.values);
  }

  connectedCallback() {

    const elements = this.shadowRoot.querySelectorAll("[animate]");

    animate({
      elements,
      duration: 1200,
      delay: index => index * 100,
      transform: ["scalex(0)", "scalex(1)"],
      fill: ["#80f", "#fc0"]
    });

  }

}

if (!customElements.get('bar-chart')) {
  customElements.define('bar-chart', BarChart);
}
