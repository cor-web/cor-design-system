export class CorSearchBox extends HTMLElement {
  constructor() {
    super();

    console.log('searcxh');
    const test = true;

    
    const searchButton = document.querySelector("#site-search-button button");
    searchButton.addEventListener("click", this.toggleSearchBox.bind(this));
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

  toggleSearchBox() {
    console.log("toggle", this, this.open);
    if(!this.open) {
      this.setAttribute("open", "");
    } else {
      this.removeAttribute("open");
    }
  }

  attributeChangedCallback(name, oldValue, newValue) {
    const search = document.getElementById("site-search");
    
    if(this.open){
      console.log("open");
      search.removeAttribute("hidden");
    } else {
      console.log("not open");
      search.setAttribute("hidden", "")
    }
  }
}