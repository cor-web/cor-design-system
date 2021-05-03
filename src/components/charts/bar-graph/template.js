export default {
  render(value, theme) {
    return `

    <style>
      :host {
        --color: #266dd3;
      }
    </style>

    <svg style="display:block" viewBox="0 0 100 4" fill="none" xmlns="http://www.w3.org/2000/svg">
      
      <rect width="100" height="4" fill="#fff"></rect>
      
      
      <g>
        <rect ${value > 0 ? "animate" : ""}  x="0"  width="${value}" height="4" fill="var(--c-1, var(--c-t-${theme}-1, var(--color, blue)))"></rect>

        <text fill="white" font-family="arial"
          font-size="2" x="0" y="50%">${value}</text>
      </g>
      

    </svg>
    `
  }
}