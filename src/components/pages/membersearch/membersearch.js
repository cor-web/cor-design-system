const members = document.querySelectorAll('cor-member');
let searchFilter = {};

function findMatches(searchFilter, members) {
  return [...members].filter(member => {
    // debugger;

    //searchFilter.map(filter => member.getAttribute(filter[key]) === filter[value]);

    let isvalid = true;

    for (let key in searchFilter) {



      if (isvalid === true && searchFilter.hasOwnProperty(key)) {
        // console.log(`${key} : ${searchFilter[key]}`);

        // console.log(member.getAttribute(key), "=", searchFilter[key], member.getAttribute(key) === searchFilter[key]);

        isvalid = member.getAttribute(key) === searchFilter[key] ? true : false;

      }

    }

    console.log(isvalid);

    return isvalid;

  });
}


function displayMatches() {
  console.log(this.value.length);

  if (this.value === '') {
    delete searchFilter[this.id];
  } else {
    searchFilter[this.id] = this.value;
  }

  if (Object.keys(searchFilter).length > 0) {
    [...members].map(member => member.parentNode.hidden = true);
    let matchArray = findMatches(searchFilter, members);
    [...matchArray].map(member => member.parentNode.hidden = false);
  } else {
    [...members].map(member => member.parentNode.hidden = false);
  }


}

const countrySelect = document.querySelector('#country');
const regionSelect = document.querySelector('#region');
const polgroupSelect = document.querySelector('#polgroup');

countrySelect.addEventListener('change', displayMatches);
regionSelect.addEventListener('change', displayMatches);
polgroupSelect.addEventListener('change', displayMatches);