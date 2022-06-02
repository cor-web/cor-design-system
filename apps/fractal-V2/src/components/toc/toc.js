class TableOfContent extends HTMLElement {
  constructor() {
    super();

    this.root = this.attachShadow({ mode: "open" });
    this.render();
  }

  connectedCallback() {
    var options = {
      root: document.querySelector(".cor-container"),
      rootMargin: "0px",
      threshold: 1.0,
    };

    /*
    const observer = new IntersectionObserver((entries, options) => {
      entries.forEach((entry) => {
        const id = entry.target.getAttribute("id");
        if (entry.intersectionRatio > 0) {
          console.log("ici");
          this.shadowRoot
            .querySelector(`nav li a[href="#${id}"]`)
            .parentElement.classList.add("active");
        } else {
          console.log("la");
          this.shadowRoot
            .querySelector(`nav li a[href="#${id}"]`)
            .parentElement.classList.remove("active");
        }
      });
    });

    // Track all sections that have an `id` applied
    document.querySelectorAll("h2[id],h3[id]").forEach((section) => {
      observer.observe(section);
    });
    */
  }

  getSections() {
    const sectionsElements = document.querySelectorAll(
      "main h2[id],main h3[id],.cor-rich-text h2"
    );

    this.sections = [...sectionsElements].map((section, i) => {
      section.classList.add("cor-anchor");

      if (!section.id) {
        section.id = i;
      }

      return { id: section.id, title: section.textContent };
    });

    return this.sections;
  }

  render() {
    this.sections = this.getSections();

    this.root.innerHTML = `
      <style>
      
      ul {
        display: grid;
        gap: var(--space-4xs);
        margin: var(--space-3xs) 0 0 1rem;
        padding: 0;
      }
      
      ul > li {
        list-style-position: outside;
        list-style-type: disc;
        line-height: initial;
      }
      
      h2 {
        color: var(--g-8);
        font-size: var(--step--3) !important;
        font-weight: bold;
        text-transform: initial;
        margin: 0 0 var(--space--4xs) 0;
      }
      
      a {
        font-size: var(--step--4);
        text-decoration: underline;
        margin-top: var(--space-4xs, 1rem);
        outline: 2px solid transparent;
        outline-offset: 5px;
        transition: outline-offset 0.2s linear;
      }
      
      a:hover {
        text-decoration: none;
      }

      a:link,
      a:focus,
      a:visited,
      a:active {
        color: var(--link-color);
      }

      a:active {
        color: #fff;
        background-color: #024;
      }

      a:focus {
        outline-color: currentColor;
        outline-offset: 2px;
      }
    
      :host {
        display: block;
      }
      </style>
      <nav class="cor-toc cor-toc--sticky" aria-labelledby="sections-heading">
        <h2 id="sections-heading"><slot name="toc-title">Contents</slot></h2>
        <ul>
          ${this.sections
        .map(
          (section) => `
            <li>
              <a href="#${section.id}">${section.title}</a>
            </li>
          `
        )
        .join("")}
        </ul>
      </nav>
    `;
  }
}

if (!customElements.get("cor-toc")) {
  customElements.define("cor-toc", TableOfContent);
}
