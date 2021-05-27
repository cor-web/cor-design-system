class TableOfContent extends HTMLElement {
  constructor() {
    super();

    const root = this.attachShadow({mode: "open"});
    const sectionsElements = document.querySelectorAll('.cor-toc-section');
    const sections = [...sectionsElements].map( section => ({ id: section.id,title:section.textContent}));
    
    root.innerHTML = `
      <style>
        :host {
          display: block;
        }
      </style>
      <nav class="cor-toc cor-toc--sticky" aria-labelledby="sections-heading">
        <h2 id="sections-heading">Contents</h2>
        <ul class="list-disc">
          ${sections.map( section => `
            <li>
              <a href="#${section.id}">${section.title}</a>
            </li>
          `).join('')}
        </ul>
      </nav>
    `;
  }
};

if (!customElements.get('cor-toc')) {
  customElements.define('cor-toc', TableOfContent);
}