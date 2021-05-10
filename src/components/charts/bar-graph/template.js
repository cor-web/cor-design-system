export default {
  render(value, text, theme) {
    return `
    <svg style="display:block" viewBox="0 0 100 8" fill="none" xmlns="http://www.w3.org/2000/svg">
      
      <rect width="100" height="8" fill="var(--chart-${theme}-background, #ECEFF1)"></rect>
      
      <g>
        <rect ${value > 0 ? "animate" : ""}  x="0"  width="${value}" height="8" fill="var(--chart-${theme}-color-1, #1E88E5)"></rect>
        <text text-anchor="middle"  dominant-baseline="central"  
           style="fill: rgb(224, 228, 228); font-size: var(--bar-font-size, 25%); font-weight: 500; text-shadow: rgba(0, 0, 0, 0.35) 0px 2px 3px; font-family: &quot;IBM Plex Mono&quot;, monospace; pointer-events: none;" x="${value / 2}" y="4">${text}</text>
      </g>
      

    </svg>
    `
  }
}