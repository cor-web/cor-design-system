class TableOfContent extends HTMLElement {
  constructor() {
    super();

    const root = this.attachShadow({mode: "open"});
    const sectionsElements = document.querySelectorAll('.cor-toc-section');
    const sections = [...sectionsElements].map( section => ({ id: section.id,title:section.textContent}));
    
    root.innerHTML = `
      <style>
        ul {
          margin: var(--space-3xs) 0 0 0;
          padding: 0;
        }
        
        ul > li {
          list-style-position: inside;
          list-style-type: disc;
          padding-left: var(--space-3xs);
        }
        
        h2 {
          color: var(--g-8);
          font-size: var(--step-0) !important;
          font-weight: normal;
          text-transform: initial;
          margin: 0 0 var(--space--4xs) 0;
        }
        
        a {
          font-size: var(--step--3);
          text-decoration: none;
          margin-top: var(--space-4xs, 1rem);
        }
      
        :host {
          display: block;
        }
      </style>
      <nav class="cor-toc cor-toc--sticky" aria-labelledby="sections-heading">
        <h2 id="sections-heading"><slot name="toc-title">Contents</slot></h2>
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