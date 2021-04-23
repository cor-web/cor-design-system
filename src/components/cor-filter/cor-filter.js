class CorFilter extends HTMLElement {
  constructor() {
    super();

    const filterableLists = document.querySelectorAll("[filter]");
    const filterableListItems = document.querySelectorAll("[filter] > *");
    const idOfSelectors = [...filterableLists].map(list => list.getAttribute("filter"));
    const selectors = [...filterableLists].map(list => document.getElementById(`${list.getAttribute("filter")}-filter`));

    const filterList = (value) => {
      [...filterableListItems].map(item => {
        const listOfFilterabeTerms = item.getAttribute("filterableBy").split(',');
        [...listOfFilterabeTerms].map(attributeItem => { attributeItem === value ? item.hidden = false : item.hidden = true });
      });
    };

    selectors.map(selector => filterList(selector.value));

    [...selectors].map(selector => selector.addEventListener('change', (event) =>
      filterList(selector.value))
    );

  }
}

customElements.define("cor-filter", CorFilter);