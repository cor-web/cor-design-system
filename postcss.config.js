const postcssImport = require('postcss-import')

module.exports = (ctx) => ({
  map: ctx.options.map,
  plugins: [
    postcssImport({
      path: './src',
    })
  ]
})