export default {
  render(value, text, theme) {
    return `
    <svg style="display:block" viewBox="0 0 100 4" fill="none" xmlns="http://www.w3.org/2000/svg">
      
      <rect width="100" height="4" fill="var(--chart-${theme}-background, #ECEFF1)"></rect>
      
      <g>
        <rect ${value > 0 ? "animate" : ""}  x="0"  width="${value}" height="4" fill="var(--chart-${theme}-color-1, #1E88E5)"></rect>
        <text fill="var(--chart-${theme}-text, white)" font-family="arial" font-size="2" x="1" y="75%">${text}</text>
      </g>
      

    </svg>
    `
  }
}