import { html } from 'lit-html';

export default {
  title: 'Design System/Layouts',
}

export const Default = () => html`
  <section>
    <header>
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </header>
    <article>
      <p>This paragraph is nested inside an article. It contains many different, sometimes useful, <a
          href="https://www.w3schools.com/tags/">HTML5 tags</a>. Of course there are classics like <em>emphasis</em>,
        <strong>strong</strong>, and <small>small</small> but there are many others as well. Hover the following text for
        abbreviation tag: <abbr title="abbreviation">abbr</abbr>. Similarly, you can use acronym tag like this: <acronym
          title="For The Win">ftw</acronym>. You can define <del>deleted text</del> which often gets replaced with
        <ins>inserted</ins> text.</p>
      <p>You can also use <kbd>keyboard text</kbd>, which sometimes is styled similarly to the <code>&lt;code&gt;</code>
        or <samp>samp</samp> tags. Even more specifically, there is a tag just for <var>variables</var>. Not to be
        mistaken with blockquotes
        below, the quote tag lets you denote something as <q>quoted text</q>. Lastly don't forget the sub (H<sub>2</sub>O)
        and sup (E = MC<sup>2</sup>) tags. </p>
    </article>
    <aside>This is an aside.</aside>
    <footer>This is footer for this section</footer>
  </section>
`;

export const Center = () => html`
  <div class="cor-center" style="--measure: 75ch">
    <div>
      <h3>My title</h3>
      <p>Aliquip deserunt irure nisi do aute sit mollit culpa eu ad ullamco officia ut velit. Excepteur mollit magna culpa
        velit labore reprehenderit ea incididunt eu laboris reprehenderit. Aliquip ex et excepteur cupidatat sint id do
        laborum amet irure sunt dolor deserunt. Laboris mollit ipsum sint qui officia sunt velit duis sunt sunt. Sint
        aliqua amet commodo sint aliqua. Eiusmod nisi ea duis proident tempor fugiat velit officia cupidatat incididunt
        voluptate eiusmod minim.</p>
      <p>Voluptate esse mollit consequat ut exercitation. Ex nisi mollit in laboris duis minim fugiat ea. Id deserunt
        culpa nisi culpa in culpa in ut dolore culpa nulla occaecat consequat.</p>
      <p>Tempor proident laboris reprehenderit reprehenderit dolor ad sint do sint exercitation. Ad adipisicing commodo
        incididunt nostrud ut adipisicing sint nulla anim sit. Consectetur esse deserunt excepteur dolor aliqua qui.
        Dolore pariatur velit pariatur quis ea incididunt cupidatat laborum. Sit mollit culpa qui duis cillum fugiat
        aliquip. Id nisi ad deserunt incididunt do occaecat do reprehenderit non ullamco enim magna.</p>
    </div>
  </div>
`;

export const SideNav = () => html`
  <div class="cor-with-sidenav">
    <nav>
      <ul>
        <li><a href="">Link 1</a></li>
        <li><a href="">Link 2</a></li>
        <li><a href="">Link 3</a></li>
        <li><a href="">Link 4</a></li>
        <li><a href="">Link 5</a></li>
      </ul>
    </nav>
    <div>
      <h3>My title</h3>
      <p>Aliquip deserunt irure nisi do aute sit mollit culpa eu ad ullamco officia ut velit. Excepteur mollit magna culpa
        velit labore reprehenderit ea incididunt eu laboris reprehenderit. Aliquip ex et excepteur cupidatat sint id do
        laborum amet irure sunt dolor deserunt. Laboris mollit ipsum sint qui officia sunt velit duis sunt sunt. Sint
        aliqua amet commodo sint aliqua. Eiusmod nisi ea duis proident tempor fugiat velit officia cupidatat incididunt
        voluptate eiusmod minim.</p>
      <p>Voluptate esse mollit consequat ut exercitation. Ex nisi mollit in laboris duis minim fugiat ea. Id deserunt
        culpa nisi culpa in culpa in ut dolore culpa nulla occaecat consequat.</p>
      <p>Tempor proident laboris reprehenderit reprehenderit dolor ad sint do sint exercitation. Ad adipisicing commodo
        incididunt nostrud ut adipisicing sint nulla anim sit. Consectetur esse deserunt excepteur dolor aliqua qui.
        Dolore pariatur velit pariatur quis ea incididunt cupidatat laborum. Sit mollit culpa qui duis cillum fugiat
        aliquip. Id nisi ad deserunt incididunt do occaecat do reprehenderit non ullamco enim magna.</p>
    </div>
  </div>
`;