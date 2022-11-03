import Component from "./component.js";

export class CorHeader extends Component {
  menusButtons!: NodeListOf<Element>;
  toggleNavButton!: HTMLElement | null;
  siteNav!: HTMLElement | null;
  toolsQuicklinks!: HTMLElement | null;
  socialMedia!: HTMLElement | null;
  search!: HTMLElement | null;
  languages: any;
  searchButton!: HTMLElement | null;
  subnavLinks!: NodeListOf<Element>;
  subnavButtons!: NodeListOf<Element>;
  panelsNav: any;
  defaultNav: any;
  subnavItems!: NodeListOf<Element>;
  subnavContainer: any;
  subnavContainerItems!: NodeListOf<Element>;
  popUps!: NodeListOf<Element>;
  constructor() {
    super();

    this.addEventListener('state-update', this.store);
  };

  connectedCallback() {
    const open = false;




    this.menusButtons = document.querySelectorAll('[clicky-menu] button');

    this.toggleNavButton = document.getElementById("nav-toggle");
    this.siteNav = document.getElementById("site-nav");
    this.toolsQuicklinks = document.getElementById("tools-quicklinks");
    this.socialMedia = document.getElementById("tools-socialMedia");
    this.search = document.getElementById("site-search");
    this.languages = document.querySelector("cor-languages-selector");
    this.searchButton = document.getElementById("site-search-button");
    this.subnavLinks = document.querySelectorAll('cor-header-navbar > nav > ul > li > a');
    this.subnavButtons = document.querySelectorAll('#panelsNav button');
    this.panelsNav = document.querySelector('.enhanced #panelsNav');
    this.defaultNav = document.querySelector('.enhanced #defaultNav');
    this.subnavItems = document.querySelectorAll('.cor-header-navbar__subnav ');
    this.subnavContainer = document.querySelector('cor-header-subnav');
    this.subnavContainerItems = document.querySelectorAll('cor-header-subnav > ul > li');
    this.popUps = document.querySelectorAll('cor-header-subnav > ul > li');;


    if (this.toggleNavButton) {
      this.toggleNavButton.addEventListener('click', this.toggleNav.bind(this));
    }

    if (matchMedia) {
      const mq = window.matchMedia("(max-width: 1070px)");
      mq.addEventListener('change', this.WidthChange.bind(this));
      this.WidthChange(mq);
    }

  }

  store({ detail }) {
    switch (detail.type) {
      case "change-subnav":
        console.log(detail.type, detail.target);
        this.update('visible-subnav', detail.target)
        break;
      case "hide-subnav":
        console.log(detail.type, detail.target);
        this.update('visible-subnav', "")
        break;
      case "change-view":
        console.log("STORE");
        this.update("view", detail.text)
        break;
    }
  }

  update(key: string, value: string) {
    this.setAttribute(key, value);
  }

  // media query change
  WidthChange(mq: MediaQueryList) {

    if (mq.matches) {
      console.log(mq, 'match2');
      this.setAttribute('view', "mobile");

      this.menusButtons.forEach(menu => {
        menu.setAttribute("hidden", "false");
        menu.setAttribute("aria-expanded", "false");
        // menu.nextElementSibling.setAttribute("aria-hidden", "true");
        menu.addEventListener('click', this.toggleMenu);
      });

      this.subnavItems.forEach(subnavItem => {
        subnavItem.setAttribute("aria-expanded", "false");
        subnavItem.setAttribute("hidden", "");
      });

      this.subnavContainerItems.forEach(subnavItem => {
        subnavItem.setAttribute("aria-expanded", "false");
        subnavItem.setAttribute("hidden", "");
      });

      this.subnavContainer.setAttribute('hidden', "true");

      // nav.setAttribute("data-open", "false");
      if (this.toggleNavButton) {
        this.toggleNavButton.removeAttribute("hidden");
        this.toggleNavButton.setAttribute("aria-expanded", "false");
      }

      if (this.searchButton) {
        this.searchButton.setAttribute("hidden", "");
      }

      if (this.search) {
        this.search.removeAttribute("hidden");
      }

      this.defaultNav.removeAttribute("hidden");


    } else {
      console.log(mq, 'no match2');
      this.setAttribute('view', "desktop");


      this.subnavContainer.setAttribute('hidden', "false");

      // this.panelsNav.removeAttribute("hidden");
      this.defaultNav.setAttribute("hidden", "");

      this.subnavContainerItems.forEach(subnavItem => {
        subnavItem.setAttribute("aria-expanded", "false");
        subnavItem.setAttribute("hidden", "");
      });

      this.subnavItems.forEach(subnavItem => {
        subnavItem.setAttribute("aria-expanded", "false");
        subnavItem.setAttribute("hidden", "");
      });

      this.subnavButtons.forEach(subnavButton => {
        subnavButton.addEventListener('click', this.toggleSubnav.bind(this));
      });

      /*
      this.subnavLinks.forEach( subnavLink => {
        subnavLink.addEventListener('click', this.toggleSubnav.bind(this));
      });
      */

      // nav.setAttribute("data-open", "true");
      if (this.toggleNavButton) {
        this.toggleNavButton.setAttribute("hidden", "");
        this.toggleNavButton.setAttribute("aria-expanded", "true");
      }

      if (this.searchButton) {
        this.searchButton.removeAttribute("hidden");
      }

      if (this.search) {
        this.search.setAttribute("hidden", "");
      }

      if (this.siteNav) {
        this.siteNav.setAttribute("data-open", "true");
      }
    }
  }

  toggleSubnav(e: {
    target: {
      hasAttribute(arg0: string): unknown;
      setAttribute(arg0: string, arg1: string): unknown;
      removeAttribute(arg0: string): unknown; getAttribute: (arg0: string) => string;
    };
  }) {

    const button = e.target;

    const isOpen = button.hasAttribute("open");
    const popup = document.getElementById(e.target.getAttribute('aria-controls'));

    this.popUps.forEach(popup => {
      popup.setAttribute("hidden", "");
      popup.setAttribute("aria-expanded", "false");
    });

    this.subnavButtons.forEach(button => {
      button.removeAttribute("open");
    });

    if (popup && !isOpen) {
      // console.log('not open')
      button.setAttribute("open", "");
      popup.removeAttribute("hidden");
      popup.setAttribute("aria-expanded", "true");

      const link = popup.querySelector("a");

      if (link) {
        link.focus();
      }

    } else if (popup) {
      // console.log('open')

      button.removeAttribute("open");
      popup.setAttribute("aria-expanded", "false");
    }
  }

  toggleNav(this: HTMLElement) {

    if (!this.hasAttribute('open')) {
      this.setAttribute("open", "");
    } else {
      this.removeAttribute("open");
    }
  }

  toggleMenu() {
    // console.log('toggle Menu');
    const toggleButton = this;
    const theNav = this.nextElementSibling;

    if (toggleButton.getAttribute("aria-expanded") == "true" && theNav) {
      toggleButton.setAttribute("aria-expanded", "false");
      theNav.setAttribute("aria-hidden", "true");
    } else if (theNav) {
      toggleButton.setAttribute("aria-expanded", "true");
      theNav.setAttribute("aria-hidden", "false");
      theNav.removeAttribute("hidden");
    }
  }

  widthChange() {

  }

  static get observedAttributes() {
    return ['open', 'view'];
  }

  get open() {
    return this.hasAttribute("open");
  }

  set open(val) {
    if (val) {
      this.setAttribute('open', '');
    } else {
      this.removeAttribute('open');
    }

    this.toggleNav();
  }



  attributeChangedCallback(name: any, oldValue: any, newValue: any) {
    console.log("CHANGE", this, name, oldValue, newValue, this.view);
    // Mobile view: Nav closed 
    if (!this.open && this.view === "mobile") {
      console.log("VIEW: Mobile + Nav closed");
    } else if (this.open && this.view === "mobile") {
      console.log("VIEW: Mobile + Nav open");
      this.languages.setAttribute("data-open", "true");
      console.log(this.languages);
    } else if (!this.open && this.view === "desktop") {
      console.log("VIEW: Desktop + Nav closed");
      this.removeAttribute("open");
    } else if (this.open && this.view === "desktop") {
      console.log("VIEW: Desktop + Nav open");
      this.removeAttribute("open");
    }
    // Mobile view: Nav open

    // Desktop view: Nav closed 

    // Desktop view: Nav open

    // 
    if (this.open || this.view === "desktop") {

      console.log("open");
      if (this.toggleNavButton) {
        this.toggleNavButton.setAttribute("aria-expanded", "true");
      }

      if (this.toolsQuicklinks) {
        this.toolsQuicklinks.setAttribute("data-open", "true");
      }

      if (this.siteNav) {
        this.siteNav.setAttribute("data-open", "true");
      }

      if (this.socialMedia) {
        this.socialMedia.setAttribute("data-open", "true");
      }

      if (this.search) {
        this.search.setAttribute("data-open", "true");
      }

      if (this.languages) {
        this.languages.setAttribute("data-open", "true");
      }

    } else {
      console.log("not open");

      if (this.toggleNavButton) {
        this.toggleNavButton.setAttribute("aria-expanded", "false");
      }

      if (this.toolsQuicklinks) {
        this.toolsQuicklinks.setAttribute("data-open", "false");
      }

      if (this.siteNav) {
        this.siteNav.setAttribute("data-open", "false");
      }

      if (this.socialMedia) {
        this.socialMedia.setAttribute("data-open", "false");
      }

      if (this.search) {
        this.search.setAttribute("data-open", "false");
      }
    }
  }

  set view(text) {
    const type = "change-view";
    this.dispatchUpdate({ type, text });
  }

  get view() {
    return this.getAttribute("view");
  }

}

export class CorHeaderNavbar extends Component {

}

export class CorPanelsNav extends HTMLElement {
  buttons!: NodeListOf<HTMLButtonElement>;
  constructor() {
    super();
    const template = document.getElementById('panelsNav-template');

    if (template.content) {
      const shadowRoot = this.attachShadow({ mode: 'open' });
      shadowRoot.appendChild(template.content.cloneNode(true));
    }

  }

  connectedCallback() {
    this.buttons = this.shadowRoot.querySelectorAll("button");
    this.buttons.forEach(button => {
      button.addEventListener('click', (e) => {
        this.onClick(e.target)
      });
    })




    if (matchMedia) {
      const mq = window.matchMedia("(max-width: 1023px)");
      mq.addEventListener('change', this.widthChange);
    }
  }

  widthChange(mq: { matches: any; }) {
    if (mq.matches) {
      // console.log("CHANGED");

    } else {

    }
  }

  toggle(button: { getAttribute: (arg0: string) => string; setAttribute: (arg0: string, arg1: string) => void; }) {
    // console.log("toggle", button);


    let type = "";
    let target = button.getAttribute('aria-controls');


    // console.log(button.getAttribute("aria-expanded"));
    if (button.getAttribute("aria-expanded") == "true") {
      button.setAttribute("aria-expanded", "false");
      /*
      theNav.setAttribute("aria-hidden", "true");
      */
      type = "hide-subnav";
    } else {
      this.buttons.forEach(button => {
        button.setAttribute("aria-expanded", "false");
      });
      button.setAttribute("aria-expanded", "true");
      type = "change-subnav";
      /*
      theNav.setAttribute("aria-hidden", "false");
      theNav.removeAttribute("hidden");
      */

    }


    this.dispatchUpdate({ type, target });

  }

  onClick(button: EventTarget | null) {
    this.toggle(button);
  }

  dispatchUpdate(detail: { type: string; target: any; }) {
    // console.log("dispatchUpdate", detail)
    const event = new CustomEvent('state-update', {
      detail,
      bubbles: true,
      composed: true
    });

    this.dispatchEvent(event);
  }
}

export class CorSearchButton extends Component {
  connectedCallback() {
    //console.log("button");
    this.setAttribute('hidden', "false");
    const button = document.createElement("button");
    const link = this.querySelector('a');
    const linkContent = link.innerHTML;
    button.innerHTML = linkContent;
    this.replaceChild(button, link);

    this.addEventListener('click', this.onClick);

  }

  onClick() {
    this.toggleSearchBar();
  }

  toggleSearchBar() {

    const searchBar = document.querySelector('cor-search-box');


    if (searchBar.getAttribute("aria-expanded") !== "true") {
      searchBar.setAttribute("aria-expanded", "true");
      searchBar.setAttribute('hidden', "false");
    } else {
      searchBar.setAttribute("aria-expanded", "false");
      searchBar.setAttribute('hidden', "true");
    }

  }

}

export class CorHeaderSubnav extends Component {
  panels!: NodeListOf<Element>;
  connectedCallback() {

    this.panels = this.querySelectorAll(".cor-header-subnav-panel");
    const { root } = this;
    const source = "visible-subnav";

    const update = () => this.showNav(root[source]);

    new MutationObserver(update).observe(root, {
      attributes: true,
      attributeFilter: [source]
    });

  }

  showNav(target: string) {
    this.panels.forEach(panel => {
      panel.setAttribute('aria-expanded', "false");
      panel.setAttribute('hidden', "true");
    });
    if (target) {
      const targetElement = document.getElementById(target);
      if (targetElement) {
        targetElement.setAttribute('aria-expanded', "true");
        targetElement.setAttribute('hidden', "false");
      }
    }
  }
}

export class CorSubnavDescription extends Component {
  connectedCallback() {

  }
}



export class CorSubnavItem extends Component {
  connectedCallback() {

    if (!this.querySelector('#corSubnavDescriptionsContainer')) {
      const corSubnavDescriptionsContainer = document.createElement('ul');
      corSubnavDescriptionsContainer.id = "corSubnavDescriptionsContainer";
      this.appendChild(corSubnavDescriptionsContainer);
    }

    const descriptionsContainer = this.querySelector('#corSubnavDescriptionsContainer');

    const subnavDescriptions = this.querySelectorAll('cor-subnav-description');
    subnavDescriptions.forEach((subnavDescription, index) => {
      if (index !== 0) {
        subnavDescription.setAttribute('hidden', "true");
      }

      if (descriptionsContainer) {
        descriptionsContainer.appendChild(subnavDescription);
      }
    });

    function onMouseOver(event: MouseEvent) {
      links.forEach(link => {
        if (link.parentElement) {
          link.parentElement.classList.remove('active');
        }
      });

      if (event.target.parentElement) {
        event.target.parentElement.classList.add('active');
      }

      const target = event.target.getAttribute('aria-controls');
      const relatedDescription = this.querySelector(`#${target}`);

      subnavDescriptions.forEach(subnavDescription => {
        subnavDescription.setAttribute('hidden', "true");
      });

      if (relatedDescription) {
        relatedDescription.setAttribute('hidden', "false");
      }
    }

    const links = this.querySelectorAll('[has-subnav]');
    links.forEach((link, index) => {

      if (index == 0 && link.parentElement) {
        link.parentElement.classList.add('active');
      }

      link.addEventListener('mouseover', onMouseOver);

    });


  }

}


export class CorLanguagesSelector extends Component {
  connectedCallback() {
    const { root } = this;
    const source = "view";

    const update = () => {
      console.log(root[source]);
      if (root[source] === "mobile") {
        this.dataset.open = "true";
      } else {
        console.log("Desktop:lang select");
      }
    };

    new MutationObserver(update).observe(root, {
      attributes: true,
      attributeFilter: [source]
    });
  }
}