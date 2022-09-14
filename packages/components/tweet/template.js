module.exports = function ({ quote, tweetUrl, tweetAccount, imgSrc, imgAlt }) {
  return `
  <cor-tweet class="cor-tweet">
    <img class="cor-image" src="${imgSrc}" alt="${imgAlt}" />
    <div class="cor-tweet__quote-container">
      <blockquote>${quote}</blockquote>
      <a href="${tweetUrl}">${tweetAccount}</a>
    </div>
  </cor-tweet>
  `;
};