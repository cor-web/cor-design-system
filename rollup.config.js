import babel from '@rollup/plugin-babel';
import { terser } from 'rollup-plugin-terser';
import versionInjector from 'rollup-plugin-version-injector';


// rollup.config.js
export default [
  {

    // ES6 output

    input: 'src/all.js',
    output: {
      file: 'dist/bundle.modern.js',
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
      }),
      versionInjector()
    ]
  },
  {
    // ES5 output

    input: 'src/all.js',
    output: {
      file: 'dist/bundle.legacy.js',
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
      }),
      versionInjector()
    ]
  },
  {

    // ES6 output

    input: 'src/components/charts/charts.js',
    output: {
      file: 'dist/charts/bundle.modern.js',
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
      }),
      versionInjector()
    ]
  },
  {
    // ES5 output

    input: 'src/components/charts/charts.js',
    output: {
      file: 'dist/charts/bundle.legacy.js',
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
      }),
      versionInjector()
    ]
  }
]