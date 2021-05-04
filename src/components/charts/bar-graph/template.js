export default {
  render(value, theme) {
    return `

    <svg style="display:block" viewBox="0 0 100 4" fill="none" xmlns="http://www.w3.org/2000/svg">
      
      <rect width="100" height="4" fill="#fff"></rect>
      
      <g>
        <rect ${value > 0 ? "animate" : ""}  x="0"  width="${value}" height="4" fill="var(--chart-${theme}-color-1, blue)"></rect>

        <text fill="white" font-family="arial"
          font-size="2" x="0" y="50%">${value}</text>
      </g>
      

    </svg>
    `
  }
}