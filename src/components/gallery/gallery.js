import lightGallery from "https://cdn.skypack.dev/lightgallery@2.1.2";
import lgZoom from "https://cdn.skypack.dev/lightgallery@2.1.2/plugins/zoom";
import lgThumbnail from "https://cdn.skypack.dev/lightgallery@2.1.2/plugins/thumbnail";
import lgAutoplay from "https://cdn.skypack.dev/lightgallery@2.1.2/plugins/autoplay";

class CorGallery extends HTMLElement {
  constructor() {
    super();

    const lgContainer = document.getElementById('gallery-container');
     
    lgContainer.addEventListener('lgAfterAppendSubHtml', (event) => {
      const { index } = event.detail;
      const description = document.querySelector('.lg-sub-html');
      const height = description.clientHeight;

      const img = document.querySelector('.lg-inner');
      debugger;
      img.style.bottom = height + 'px';
      console.log('test', index);
    });


    const lg = lightGallery(lgContainer, {
      speed: 500,
      container: lgContainer,
      // Do not allow users to close the gallery
      closable: false,
      // Add maximize icon to enlarge the gallery
      download: false,
      fullScreen: false,
      showMaximizeIcon: true,
      plugins: [
        lgZoom,
        lgThumbnail,
        lgAutoplay
      ],
      mobileSettings: {
        controls: false,
        showCloseIcon: false,
        download: false,
        rotate: false
      },
      licenseKey: 45,
    });
   

    lg.openGallery(0);

    
  }
}

document.addEventListener('DOMContentLoaded', (event) => {
  if (!customElements.get('cor-gallery')) {
    customElements.define('cor-gallery', CorGallery);
  }
});
