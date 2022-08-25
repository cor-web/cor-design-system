import { html } from 'lit-html';

export default {
  title: 'Design System/Images',
}

export const Figure = () => html`
  <figure>
    <img src="https://www.fillmurray.com/505/314" alt="Alternate text">
    <figcaption>Fig1. A picture of Bill Murray from <a href="https://www.fillmurray.com/">fillmurray.com</a></figcaption>
  </figure>
`;