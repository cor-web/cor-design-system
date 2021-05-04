import template from "./template.js";

const graphtemplate = document.createElement('template');


class MultiBarChart extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });

    const theme = this.getTheme(this.getAttribute('theme'));
    const children = this.querySelectorAll("[value]");
    this.values = [...children].map(child => child.getAttribute('value'))


    // this.shadowRoot.appendChild(graphtemplate.content.cloneNode(true));


    graphtemplate.innerHTML = template.render(this.values, theme);

  }

  getTheme(themeAttribute) {
    return themeAttribute.substring(
      themeAttribute.lastIndexOf("-") + 1,
      themeAttribute.lastIndexOf(".")
    );
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


    // if (this.hasAttritube('legend')) console.log('yeah');
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

if (!customElements.get('multi-bar-chart')) {
  customElements.define('multi-bar-chart', MultiBarChart);
}
