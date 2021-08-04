const template = `
<div style=" background: white" >
  <div style="background: #0E5A8F;padding: .5rem 0">
    <span class="TitleHeader" style="color: #FEE333;background: #0E5A8F">${ heading }</span>
    <div style="border-radius: 100%; width: 150px; height: 150px; overflow: hidden; margin:.5rem auto; border: solid 3px white" >
      <img src="${ src }" class="block" alt="" width="250" style="max-width:100%"/>
    </div>
  </div>
  <div style="background: #fff;padding: .5rem;">
    <a href="">${ title }</a>
    <time style="display: block;margin-top: .5rem">${ date }</time>
  </div>
</div>
`;

class CorBanner extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = template;
  }
}

if (!customElements.get('cor-banner')) {
  customElements.define('cor-banner', CorBanner);
}