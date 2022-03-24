class CorTwitterContainer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const button = document.querySelector("cor-twitter-container button");

    const onClick = () => {
      console.log(this, "test");
      this.loadScript();
      this.removeEventListener("click", onClick);
    };

    this.addEventListener("click", onClick);
  }

  _onMouseenter() {
    this.classList.add("shadow");
  }

  _onMouseleave() {
    this.classList.remove("shadow");
  }

  loadScript() {
    $wt.render("twitterContainer", twitterOptions);
    this.setAttribute("loaded", "");
    this.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "nearest",
    });
    this.removeEventListener("click", this._onClick);
  }
}

if (!customElements.get("cor-twitter-container")) {
  customElements.define("cor-twitter-container", CorTwitterContainer);
}
