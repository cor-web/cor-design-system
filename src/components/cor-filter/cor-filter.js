class CorFilter extends HTMLElement {
  constructor() {
    super();

    const filterableList = document.querySelector("[filter]");
    const filterableListItems = filterableList.children;
    const selector = document.getElementById(`${filterableList.getAttribute("filter")}-filter`);

    const filterList = (value) => {
      [...filterableListItems].map(item => {
        const listOfFilterabeTerms = item.getAttribute("filterableBy").split(',');
        [...listOfFilterabeTerms].map(attributeItem => { attributeItem === value ? item.hidden = false : item.hidden = true });
      });
    };

    filterList(selector.value);

    selector.addEventListener('change', (event) => {
      filterList(selector.value);
    });

  }
}

customElements.define("cor-filter", CorFilter);