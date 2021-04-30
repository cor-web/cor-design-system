class CorFilter extends HTMLElement {
  constructor() {
    super();
    const filter = this.querySelector('select').name;
    const filterableLists = document.querySelectorAll(`[filter=${filter}]`);
    const filterableListItems = document.querySelectorAll(`[filter=${filter}] [filterableBy]`);
    const selectors = [...filterableLists].map(list => document.getElementById(`${list.getAttribute("filter")}-filter`));

    const filterList = (value) => {
      const filteredItems = document.querySelectorAll(`[filter=${filter}] [filterableBy*="${value}"]`);
      debugger;
      for (const filterableListItem of filterableListItems) filterableListItem.hidden = true;
      for (const filteredItem of filteredItems) filteredItem.hidden = false;
    }

    for (const selector of selectors) filterList(selector.value);

    [...selectors].map(selector => selector.addEventListener('change', (event) =>
      filterList(selector.value))
    );

  }
}

if (!customElements.get('cor-filter')) {
  customElements.define('cor-filter', CorFilter);
}
