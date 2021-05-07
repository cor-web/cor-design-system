const colors = ["266dd3", "344055", "888098", "cfb3cd", "dfc2f2"];

const getPosition = (values, index) => {

  const valuesInNumbers = values.map(value => Number(value));
  const previousValues = valuesInNumbers.slice(0, index);

  const previousValuesTotal = previousValues.reduce(function (sum, current) {
    return sum + current;
  }, 0);

  const position = (index > 0) ? previousValuesTotal : 0;
  return position;
};

export default {
  render(values, itemTexts, itemValues, theme) {
    return `
    <style>
      
      ul {
        display: flex;
        flex-direction: var(--direction);
        list-style: none;
        font-size: .8rem;
        margin-top: var(--space-s);
        padding: 0;
      }

      li {
        flex-grow: 1;
      }


      li:before {
        background: blue;
        content:"";
        display: inline-block;
        height: 10px;
        margin-right: .2rem;
        width: 10px;
      }

      

      ${values.map((value, index) => `
          li:nth-child(${index + 1}):before {
            background-color: var(--chart-${theme}-color-${index + 1}, blue);
          }
        `).join('')}

      
      </style>
    <svg role="group" aria-labelledby="graph-title" aria-describedby="graph-desc" style="display:block" viewBox="0 0 100 8" fill="none" xmlns="http://www.w3.org/2000/svg">
      <desc id="timeline-desc">An Interactive Timeline</desc>
      <rect width="100" height="8" fill="var(--chart-${theme}-background, #ECEFF1)"></rect>

      ${values.map((value, index) => `
      <g aria-label="bar graph">
        <g>
          <rect x="${getPosition(values, index)}" ${values > 0 ? "animate" : ""}  width="${value}" height="8" fill="var(--chart-${theme}-color-${index + 1}, blue)"></rect>
          <title>${itemTexts[index]}</title>
          <text text-anchor="middle"  dominant-baseline="central"  
           style="fill: rgb(224, 228, 228); font-size: 2px; font-weight: 500; text-shadow: rgba(0, 0, 0, 0.35) 0px 2px 3px; font-family: &quot;IBM Plex Mono&quot;, monospace; pointer-events: none;" x="${getPosition(values, index) + (value / 2)}" y="4">${itemValues[index]}</text>
        </g>
      </g>
      `).join('')}
        
    </svg>
    `
  }
}