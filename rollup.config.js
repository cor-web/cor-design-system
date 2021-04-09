import babel from '@rollup/plugin-babel';

// rollup.config.js
export default {
  input: 'src/all.js',
  output: {
    file: 'dist/bundle.js',
    format: 'iife'
  },
  plugins: [babel({ babelHelpers: 'bundled' })]
};