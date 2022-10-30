import Component from "./component.js";

export class CorHeader extends Component {
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


    this.toggleNavButton.addEventListener('click', this.toggleNav.bind(this));

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

  update(key, value) {
    this[key] = value;
    this.setAttribute(key, value);
  }

  // media query change
  WidthChange(mq) {

    if (mq.matches) {
      console.log(mq, 'match2');
      this.setAttribute('view', "mobile");

      this.menusButtons.forEach(menu => {
        menu.hidden = false;
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

      this.subnavContainer.hidden = true;

      // nav.setAttribute("data-open", "false");
      this.toggleNavButton.removeAttribute("hidden");
      this.toggleNavButton.setAttribute("aria-expanded", "false");
      console.log("Sherlock");

      this.searchButton.setAttribute("hidden", "");
      this.search.removeAttribute("hidden");

      this.defaultNav.removeAttribute("hidden");
      // this.panelsNav.setAttribute("hidden", "");


    } else {
      console.log(mq, 'no match2');
      this.setAttribute('view', "desktop");


      this.subnavContainer.hidden = false;

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
      this.toggleNavButton.setAttribute("hidden", "");
      this.toggleNavButton.setAttribute("aria-expanded", "true");
      this.searchButton.removeAttribute("hidden");

      this.search.setAttribute("hidden", "");

      this.siteNav.setAttribute("data-open", "true");
    }
  }

  toggleSubnav(e) {

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

    if (!isOpen) {
      // console.log('not open')
      button.setAttribute("open", "");
      popup.removeAttribute("hidden");
      popup.setAttribute("aria-expanded", "true");
      popup.querySelector("a").focus();

    } else {
      // console.log('open')

      button.removeAttribute("open");
      popup.setAttribute("aria-expanded", "false");
    }
  }

  toggleNav(element) {
    console.log('TTTEST', this, this.open)
    if (!this.open) {
      this.setAttribute("open", "");
    } else {
      this.removeAttribute("open");
    }
  }

  toggleMenu() {
    // console.log('toggle Menu');
    const toggleButton = this;
    const theNav = this.nextElementSibling;

    if (toggleButton.getAttribute("aria-expanded") == "true") {
      toggleButton.setAttribute("aria-expanded", "false");
      theNav.setAttribute("aria-hidden", "true");
    } else {
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



  attributeChangedCallback(name, oldValue, newValue) {
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

      this.toggleNavButton.setAttribute("aria-expanded", "true");
      this.toolsQuicklinks.setAttribute("data-open", "true");
      this.siteNav.setAttribute("data-open", "true");
      this.socialMedia.setAttribute("data-open", "true");
      this.search.setAttribute("data-open", "true");
      this.languages.setAttribute("data-open", "true");
    } else {
      console.log("not open");

      this.toggleNavButton.setAttribute("aria-expanded", "false");
      this.toolsQuicklinks.setAttribute("data-open", "false");
      this.siteNav.setAttribute("data-open", "false");
      this.socialMedia.setAttribute("data-open", "false");
      this.search.setAttribute("data-open", "false");
      // this.languages.setAttribute("data-open", "false");

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
  constructor() {
    super();
    const template = this.querySelector('#panelsNav-template');
    let templateContent = template.content;

    const shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.appendChild(templateContent.cloneNode(true));
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

  widthChange(mq) {
    if (mq.matches) {
      // console.log("CHANGED");

    } else {

    }
  }

  toggle(button) {
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

  onClick(button) {
    this.toggle(button);
  }

  dispatchUpdate(detail) {
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
    this.hidden = false;
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
      searchBar.hidden = false;
    } else {
      searchBar.setAttribute("aria-expanded", "false");
      searchBar.hidden = true;
    }

  }

}

export class CorHeaderSubnav extends Component {
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

  showNav(target) {
    this.panels.forEach(panel => {
      panel.setAttribute('aria-expanded', false);
      panel.hidden = true;
    });
    if (target) {
      document.getElementById(target).setAttribute('aria-expanded', true);
      document.getElementById(target).hidden = false;
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
        subnavDescription.hidden = true;
      }
      descriptionsContainer.appendChild(subnavDescription)
    });

    const links = this.querySelectorAll('[has-subnav]');
    links.forEach((link, index) => {

      if (index == 0) link.parentNode.classList.add('active');
      link.addEventListener('mouseover', (e) => {

        links.forEach(link => link.parentNode.classList.remove('active'));
        e.target.parentNode.classList.add('active');
        const target = e.target.getAttribute('aria-controls');
        const relatedDescription = this.querySelector(`#${target}`);

        subnavDescriptions.forEach(subnavDescription => {
          subnavDescription.hidden = true;
        });

        relatedDescription.hidden = false;
        // console.log(relatedDescription);
      });

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