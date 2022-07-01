import Component from "./component.js";
//import { ClickyMenus } from './clickyMenu';
import "./cor-search-box.js";

export class CorHeader extends HTMLElement {
  constructor() {
    super();
    const open = false;

    console.log("test soi");

    /*
    document.addEventListener('DOMContentLoaded', function(){
      const menus = document.querySelectorAll( '[clicky-menu]' );
  
      menus.forEach( menu => {
  
        let clickyMenu = new ClickyMenus(menu);
        clickyMenu.init();
  
      });
    });
    */

    this.menusButtons = document.querySelectorAll( '[clicky-menu] button' );

    this.toggleNavButton = document.getElementById("nav-toggle");
    this.siteNav = document.getElementById("site-nav");
    this.toolsQuicklinks = document.getElementById("tools-quicklinks");
    this.socialMedia = document.getElementById("tools-socialMedia");
    this.search = document.getElementById("site-search");
    this.languages = document.getElementById("site-languages");
    this.searchButton = document.getElementById("site-search-button");
    this.subnavLinks =  document.querySelectorAll( 'cor-header-navbar > nav > ul > li > a');
    this.subnavButtons =  document.querySelectorAll( '#panelsNav button');
    this.panelsNav =  document.querySelector( '.enhanced #panelsNav');
    this.defaultNav =  document.querySelector( '.enhanced #defaultNav');
    this.subnavItems =  document.querySelectorAll( '.cor-header-navbar__subnav ');
    this.subnavContainer =  document.querySelector( 'cor-header-subnav-container');
    this.subnavContainerItems =  document.querySelectorAll( 'cor-header-subnav-container > ul > li');
    this.popUps = document.querySelectorAll( 'cor-header-subnav-container > ul > li');;
    
    


    if (matchMedia) {
      const mq = window.matchMedia("(max-width: 1023px)");
      mq.addEventListener('change', this.WidthChange.bind(this));
      this.WidthChange(mq);
    }

  }

  // media query change
  WidthChange(mq) {
    const nav_trigger = document.getElementById("nav-toggle"),
    nav = document.getElementById("nav-panel");
    if (mq.matches) {
      console.log(mq,'match');
      this.menusButtons.forEach( menu => {
        console.log(menu);
        menu.hidden = false;
        menu.setAttribute("aria-expanded", "false");
        // menu.nextElementSibling.setAttribute("aria-hidden", "true");
        menu.addEventListener('click', this.toggleMenu);
      });
      
      this.subnavItems.forEach( subnavItem => {
        subnavItem.setAttribute("aria-expanded", "false");
        subnavItem.setAttribute("hidden", "");
      });

      this.subnavContainerItems.forEach( subnavItem => {
        subnavItem.setAttribute("aria-expanded", "false");
        subnavItem.setAttribute("hidden", "");
      });

      this.subnavContainer.hidden = true;

        // nav.setAttribute("data-open", "false");
        this.toggleNavButton.removeAttribute("hidden");
        this.toggleNavButton.setAttribute("aria-expanded", "false");
        this.toggleNavButton.addEventListener('click', this.toggleNav.bind(this));
        this.searchButton.setAttribute("hidden", "");
        this.search.removeAttribute("hidden");

        this.defaultNav.removeAttribute("hidden");
        this.panelsNav.setAttribute("hidden", "");
        
        
    } else {
        console.log(mq,'no match');

        this.subnavContainer.hidden = false;

        this.panelsNav.removeAttribute("hidden");
        this.defaultNav.setAttribute("hidden", "");

        this.subnavContainerItems.forEach( subnavItem => {
          subnavItem.setAttribute("aria-expanded", "false");
          subnavItem.setAttribute("hidden", "");
        });

        this.subnavItems.forEach( subnavItem => {
          subnavItem.setAttribute("aria-expanded", "false");
          subnavItem.setAttribute("hidden", "");
        });

        this.subnavButtons.forEach( subnavButton => {
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
   
    this.popUps.forEach( popup => {
      popup.setAttribute("hidden", "");
      popup.setAttribute("aria-expanded", "false");
    });

    this.subnavButtons.forEach( button => {
      button.removeAttribute("open");
    });

    if(!isOpen) {
      console.log('not open')
      button.setAttribute("open", "");
      popup.removeAttribute("hidden");
      popup.setAttribute("aria-expanded", "true");
      popup.querySelector("a").focus();
      
    } else {
      console.log('open')

      button.removeAttribute("open");
      popup.setAttribute("aria-expanded", "false");    
    }
  }
  
  toggleNav(element) {
    console.log('test', this.open)
    if(!this.open) {
      this.setAttribute("open", "");
    } else {
      this.removeAttribute("open");
    }
  }

  toggleMenu() {
    console.log('toggle Menu');
    const toggleButton = this;
    const theNav = this.nextElementSibling;

    if(toggleButton.getAttribute("aria-expanded") == "true") {
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
    return ['open'];
  }

  get open() {
    return this.hasAttribute("open");
  }

  set open(val) {
    if(val) {
      this.setAttribute('open', '');
    } else {
      this.removeAttribute('open');
    }

    this.toggleNav();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if(this.open){
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
      this.languages.setAttribute("data-open", "false");
    }
  }

}