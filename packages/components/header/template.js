module.exports = function ({ type, siteUrl, corLogoImage, quicklinks, socialMedias }) {
  return /* html */ `
    <cor-header  ${type}>
      <div class="cor-logo-container">
        <a class="cor-logo" href="${siteUrl}" aria-label="CoR Homepage" >
          <img src="${corLogoImage.src}" alt="${corLogoImage.alt}" />
        </a>
      </div>

      <cor-header-toolbar>
        <cor-quicklinks-nav>
          <nav id="tools-quicklinks" class="cor-nav-toplinks">
            <ul>
              ${quicklinks.map(quicklink => `
                <li>
                  <a href="${quicklink.link}">${quicklink.label}</a>
                </li>
              `).join('')}
            </ul>
          </nav>
        </cor-quicklinks-nav>

        <cor-socialmedia-nav>
          <nav aria-labelledby="cor-social-label" class="cor-nav-social-media"  id="tools-socialMedia">
            <h2 id="cor-social-label" hidden="">Social Media</h2>
            <ul >
              ${socialMedias.map(socialMedia => `
                <li>
                  <a href="${socialMedia.link}">${socialMedia.svg}</a>
                </li>
              `).join('')}
            </ul>
          </nav>
        </cor-socialmedia-nav>
      </cor-header-toolbar>
    </cor-header>
  `;
};
