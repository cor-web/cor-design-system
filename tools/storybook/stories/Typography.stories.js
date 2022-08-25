import { html } from 'lit-html';

export default {
  title: 'Design System/Typography',
}

export const Links = () => html`
  <a href="test.be">Link</a>
`;

export const Headings = () => html`
  <h1>Heading 1</h1>
  <h2>Heading 2</h2>
  <h3>Heading 3</h3>
  <h4>Heading 4</h4>
  <h5>Heading 5</h5>
  <h6>Heading 6</h6>
  
  <span class="cor-h1">Heading 1</span>
  <span class="cor-h2">Heading 2</span>
  <span class="cor-h3">Heading 3</span>
  <span class="cor-h4">Heading 4</span>
  <span class="cor-h5">Heading 5</span>
  <span class="cor-h6">Heading 6</span>
`;

export const Lists = () => html`
  <ul>
    <li>Unordered List item one
      <ul>
        <li>Nested list item
          <ul>
            <li>Level 3, item one</li>
            <li>Level 3, item two</li>
            <li>Level 3, item three</li>
            <li>Level 3, item four</li>
          </ul>
        </li>
        <li>List item two</li>
        <li>List item three</li>
        <li>List item four</li>
      </ul>
    </li>
    <li>List item two</li>
    <li>List item three</li>
    <li>List item four</li>
  </ul>
  
  <ol>
    <li>List item one
      <ol>
        <li>List item one
          <ol>
            <li>List item one</li>
            <li>List item two</li>
            <li>List item three</li>
            <li>List item four</li>
          </ol>
        </li>
        <li>List item two</li>
        <li>List item three</li>
        <li>List item four</li>
      </ol>
    </li>
    <li>List item two</li>
    <li>List item three</li>
    <li>List item four</li>
  </ol>
  
  <dl>
    <dt>Definition List Title</dt>
    <dd>Definition list division.</dd>
    <dt>Kitchen Sink</dt>
    <dd>Used in expressions to describe work in which all conceivable (and some inconceivable) sources have been mined. In
      this case, a bunch of markup.</dd>
    <dt>aside</dt>
    <dd>Defines content aside from the page content</dd>
    <dt>blockquote</dt>
    <dd>Defines a section that is quoted from another source</dd>
  </dl>
`;

export const Paragraphs = () => html`
  <p>Incididunt reprehenderit dolor occaecat labore eu aliqua aliqua sunt veniam nostrud pariatur consequat. Sunt dolor
    dolor Lorem eu dolore quis magna sit nostrud sunt adipisicing. Mollit officia eiusmod sunt fugiat quis aliquip Lorem.
    Fugiat deserunt incididunt fugiat culpa nostrud labore in et et deserunt dolor pariatur reprehenderit sunt. Cupidatat
    minim ex occaecat magna cupidatat incididunt fugiat consequat sunt magna. Nisi magna pariatur officia est labore
    tempor incididunt culpa tempor.</p>
  
  <p>Ex labore elit nulla et adipisicing aliquip sint laboris culpa. Sit culpa in adipisicing mollit Lorem deserunt
    laboris ad magna exercitation cupidatat occaecat. Sunt laboris cupidatat consectetur ipsum adipisicing.</p>
  
  <p>Ullamco nulla voluptate excepteur occaecat in elit commodo sunt voluptate. Magna consectetur voluptate dolor
    adipisicing dolore aliqua aliquip. Aute reprehenderit et incididunt laboris duis enim esse consequat nisi pariatur
    elit eu. Ullamco duis aliquip do minim tempor nulla et sint consequat consequat id nulla laboris. Non dolor sint
    deserunt enim laboris laborum eu elit magna voluptate. Exercitation dolore ullamco consectetur incididunt dolore
    excepteur sint voluptate ut aute.</p>
`;

export const Blockquote = () => html`
  <blockquote>
    <p>This is a mult-line blockquote with a cite reference. People think focus means saying yes to the thing you’ve got
      to focus on. But that’s not what it means at all. It means saying no to the hundred other good ideas that there are.
      You have to pick
      carefully. I’m actually as proud of the things we haven’tdone as the things I have done. Innovation is saying no to
      1,000 things.
      <cite>Steve Jobs – Apple Worldwide Developers’ Conference, 1997</cite>
    </p>
  </blockquote>
`;

export const Address = () => html`
  <address>1 Infinite Loop<br>
    Cupertino, CA 95014<br>
    United States</address>
`;