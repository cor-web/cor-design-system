
class CorGallery extends HTMLElement {
  constructor() {
    super();

    lightGallery(document.getElementById('lightgallery'), {
        plugins: [lgZoom, lgThumbnail],
        speed: 500
    });
  }
}

document.addEventListener("DOMContentLoaded", (event) => {
  if (!customElements.get('cor-gallery')) {
    customElements.define('cor-gallery', CorGallery);
  }
});