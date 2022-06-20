import '../css/styles.css';

import { draw } from "./square.js";

const template = param => `
  <p>Salut ${param}</p>
`;

const app = document.getElementById('app');
app.innerHTML = template("Fieu");



const myCanvas = document.getElementById('tutoriel');
const ctx = myCanvas.getContext('2d');
draw(ctx, 'red');
