const colors = ["266dd3", "344055", "888098", "cfb3cd", "dfc2f2"];

const getPosition = (values, index) => {

  const valuesInNumbers = values.map(value => Number(value));
  const previousValues = valuesInNumbers.slice(0, index);

  var previousValuesTotal = previousValues.reduce(function (sum, current) {
    return sum + current;
  }, 0);

  const position = (index > 0) ? previousValuesTotal : 0;
  return position;

};

export default {
  render(values) {
    return `
    <svg style="display:block" viewBox="0 0 100 4" fill="none" xmlns="http://www.w3.org/2000/svg">
      
      <rect width="100" height="4" fill="#e3e3e3"></rect>

      ${values.map((value, index) => `
      <g>
        <rect ${values > 0 ? "animate" : ""} x="${getPosition(values, index)}"  width="${value}" height="4" fill="#${colors[index]}"></rect>

        <text fill="white" font-family="arial"
          font-size="2" x="${getPosition(values, index) + 1}" y="50%">${value}</text>
      </g>
      <g>
        <slot name="my-test">xx</slot>
      </g>
      `).join('')}

    </svg>

    `
  }
}