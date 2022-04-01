class CorGallery extends HTMLElement {
  constructor() {
    super();

    const lgContainer = document.getElementById('gallery-container');
     
    lgContainer.addEventListener('lgAfterAppendSubHtml', () => {
      const imgContainer = document.querySelector('.lg-inner');
      const componentContainer = document.querySelector('.lg-components');
      console.log(imgContainer.style.bottom,componentContainer);
      imgContainer.style.bottom = componentContainer.clientHeight + 'px';
      console.log(imgContainer.style.bottom, imgContainer);
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
