class CorFilter extends HTMLElement {
  constructor() {
    super();

    const filterableLists = document.querySelectorAll("[filter]");
    const filterableListItems = document.querySelectorAll("[filter] > *");
    const selectors = [...filterableLists].map(list => document.getElementById(`${list.getAttribute("filter")}-filter`));

    const filterList = (value) => {
      const filteredItems = document.querySelectorAll(`[filterableBy*="${value}"]`);
      for (const filterableListItem of filterableListItems) filterableListItem.hidden = true;
      for (const filteredItem of filteredItems) filteredItem.hidden = false;
    }

    for (const selector of selectors) filterList(selector.value);

    [...selectors].map(selector => selector.addEventListener('change', (event) =>
      filterList(selector.value))
    );

  }
}

customElements.define("cor-filter", CorFilter);