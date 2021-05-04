import template from "./template.js";

const graphtemplate = document.createElement('template');


class MultiBarChart extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });

    const theme = this.getAttribute('theme');
    const children = this.querySelectorAll("[value]");
    this.values = [...children].map(child => child.getAttribute('value'))

    graphtemplate.innerHTML = template.render(this.values, theme);

  }

  addLegend() {
    const legends = [...this.querySelectorAll('[slot="item-text"')].map(item => item.textContent);
    const legendTemplate = document.createElement('div');

    legendTemplate.innerHTML = `
    <ul>
        ${legends.map(legend => `<li>${legend}</li>`).join('')}
    </ul>`;
    this.shadowRoot.appendChild(legendTemplate);
  }

  connectedCallback() {

    this.shadowRoot.appendChild(graphtemplate.content.cloneNode(true));
    if (this.hasAttribute('legend')) this.addLegend();
  }

}

if (!customElements.get('multi-bar-chart')) {
  customElements.define('multi-bar-chart', MultiBarChart);
}
