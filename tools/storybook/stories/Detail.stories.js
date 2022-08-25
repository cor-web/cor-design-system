import { html } from 'lit-html';

export default {
  title: 'Design System/Components',
  parameters: {
    states: {
      values: [
        { name: 'red', value: '#f00' },
        { name: 'green', value: '#0f0' },
        { name: 'blue', value: '#00f' },
      ],
    },
  }
}

const Template = ({ summary, detail, state }) =>
  html`
    <details ?open=${open}>
      <summary>${summary}</summary>
      ${detail}
    </details>
`;

export const Detail = Template.bind({});
Detail.args = {
  summary: 'My summary',
  detail: 'My detail',
  open: false
};

/*
export const DetailWithoutResume = () => html`
  <details>
    <p>Il faut un ordinateur équipé d'un système d'exploitation.
      L'ordinateur doit disposer d'une mémoire et, idéalement, d'une sorte
      de stockage à long terme. Un dispositif d'entrée et un dispositif de
      sortie sont recommandés.</p>
  </details>
`;
*/