import animate from "../../../js/libraries/animateplus.js";
import template from "./template.js";

class BarChart extends HTMLElement {
  constructor() {
    super();

    // One value
    if (this.getAttribute('value')) this.value = [this.getAttribute('value')];

    const theme = this.getAttribute('theme');

    let shadowRoot = this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = template.render(this.value, theme);
  }

  connectedCallback() {

    const elements = this.shadowRoot.querySelectorAll("[animate]");

    animate({
      elements,
      duration: 1200,
      delay: index => index * 100,
      transform: ["scalex(0)", "scalex(1)"]
    });

  }

}

if (!customElements.get('bar-chart')) {
  customElements.define('bar-chart', BarChart);
}
