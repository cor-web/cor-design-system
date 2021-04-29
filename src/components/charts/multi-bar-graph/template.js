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
    <style>

      :host {
        ${values.map((value, index) => `
          --color-${index}: #${colors[index]};
        `).join('')}
      }
      
      ul {
        list-style: none;
        font-size: .8rem;
        padding: 0;
      }

      li {
        flex-grow: 1;
      }


      li:before {
        background: red;
        content:"";
        display: inline-block;
        height: 10px;
        margin-right: .2rem;
        width: 10px;
      }

      

      ${values.map((value, index) => `
          li:nth-child(${index + 1}):before {
            background-color: var(--color-${index});
          }
        `).join('')}

      
      </style>
    <svg role="group" aria-labelledby="graph-title" aria-describedby="graph-desc" style="display:block" viewBox="0 0 100 4" fill="none" xmlns="http://www.w3.org/2000/svg">
      <desc id="timeline-desc">An Interactive Timeline</desc>
      <rect width="100" height="4" fill="#e3e3e3"></rect>

      ${values.map((value, index) => `
      <g aria-label="bar graph">
        <g>
          <rect x="${getPosition(values, index)}" ${values > 0 ? "animate" : ""}  width="${value}" height="4" fill="#${colors[index]}"></rect>
          <title>title</title>
        </g>

        <text fill="white" font-family="arial"
          font-size="2" x="${getPosition(values, index) + 1}" y="50%">${value}</text>
      </g>
      `).join('')}
        
    </svg>
    `
  }
}