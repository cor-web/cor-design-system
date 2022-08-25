const postcssPresetEnv = require('postcss-preset-env');
const postcssImport = require('postcss-import');
const postcsseasings = require('postcss-easings');
const importUrl = require('postcss-import-url');
const cssnano = require('cssnano');

module.exports = (ctx) => ({
  plugins: [
    importUrl(),
    postcssImport({
      path: 'app/css',
    }),
    postcsseasings(),
    postcssPresetEnv({
      stage: 0,
      features: {
        'logical-properties-and-values': false,
        'prefers-color-scheme-query': false,
        'gap-properties': false,
      }
    }),
    cssnano({
      preset: 'default'
    }),
  ]
});

