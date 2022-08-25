import { html } from 'lit-html';

const colorsTokens = require('@cor-web/tokens/tokens.json');

export default {
  title: 'Design System/Colors',
}

export const Primary = () => {

  /*
  const myColors = colorsTokens.global.colors.gray;

  const getColors = () => html`
    ${Object.entries(myColors).map( bom => {
      return html`<li style="--color: ${bom[1].value}; background-color:${bom[1].value}">${bom[1].value}</li>`
    })}
  `;
  */

  const myColors = colorsTokens.colors;

  console.table(myColors);

  const getColors = () => html`
    ${Object.entries(myColors).map( bom => {
      return html`
        <li>
          <h2>${bom[0]}</h2>
          <ul>
            ${Object.entries(bom[1]).map( co => {
              return html`<li style="--color: ${co[1].value}; background-color:${co[1].value}">${co[1].value}</li>`
            })}
          </ul>
        </li>`
    })}
  `;

  return html`
    <ul>
      ${getColors()}
    </ul>`
}
