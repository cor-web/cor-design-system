module.exports = function ({ title, subtitle, description, imageSrc, imageAlt, ctaText, ctaLink, grid, imagePosition, topbar, imageType }) {
  return `
    <cor-cover class="cor-cover--grid-${grid} ${imagePosition} ${topbar ? "cor-cover--topbar" : ""}">
        <hgroup class="cor-cover__header">
          <h1>${title}</h1>
          <h2>${subtitle}</h2>
        </hgroup>
      
        ${imageSrc ? `
        <div class="cor-cover__picture">
          <img alt="${imageAlt}" src="${imageSrc}">
        </div>
        ` : ``}
        
      
        <div class="cor-cover__description">
          <div class="txt-xl">
            ${description}
          </div>

          ${ctaText ? `
          <p>
            <a href="${ctaLink}" class="txt-xl icon icon-after cor-cover__cta" style="--icon:var(--icon-chevron-right)">${ctaText}</a>
          </p>
          ` : ``}

        </div>
      </cor-cover>
  `;
};
