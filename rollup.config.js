import babel from '@rollup/plugin-babel';
import eslint from 'rollup-plugin-eslint';
import { terser } from 'rollup-plugin-terser';


// rollup.config.js
export default [
  {
    input: 'src/all.js',
    output: {
      file: 'dist/bundle.js',
      format: 'iife'
    },
    plugins: [
      babel({ babelHelpers: 'bundled' }),

    ]
  },
  {

    // ES6 output

    input: 'src/components/charts/charts.js',
    output: {
      file: 'dist/charts/bundle.mjs',
      format: 'iife'
    },
    plugins: [
      terser({
        ecma: 2018,
        mangle: { toplevel: true },
        compress: {
          module: true,
          toplevel: true,
          unsafe_arrows: true
        },
        output: { quote_style: 1 }
      })
    ]
  },
  {
    // ES5 output

    input: 'src/components/charts/charts.js',
    output: {
      file: 'dist/charts/bundle.js',
      format: 'iife'
    },
    plugins: [
      babel({ babelHelpers: 'bundled' }),
      terser({
        ecma: 2015,
        mangle: { toplevel: true },
        compress: {
          toplevel: true
        },
        output: { quote_style: 1 }
      })
    ]
  }
]