import fs from 'fs';
import moment from 'moment';

const cssPath = "dist/css/index.min.css";
const date = moment().format('MMMM Do YYYY, h:mm:ss a');

try {
  const data = `/* ${date} */
  ${fs.readFileSync(cssPath, 'utf8')}
  `;

  fs.writeFileSync(cssPath, data);

  console.log(data);
} catch (err) {
  console.error(err);
}