const postcssImport = require('postcss-import');
const prefixer = require('postcss-prefix-selector');

module.exports = (ctx) => ({
  map: ctx.options.map,
  plugins: [
    postcssImport({
      path: './src',
    }),
    prefixer({
      prefix: '.mainContent'
    })
  ]
});

