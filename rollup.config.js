// rollup.config.js
import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import nodePolyfills from 'rollup-plugin-node-polyfills';

export default {
  input: 'src/parser.js',
  output: {
    file: 'dist/bundle.js',
    format: 'cjs',
  },
  plugins: [
    resolve({
      preferBuiltins: true,
      // fixes problem when naviagtor undefined
      exportConditions: ['node'],
    }),
    commonjs(),
    babel({
      // exclude: [
      //   'node_modules/lodash/lodash.js',
      //   // "/src/data/__tests__"
      // ],
      babelHelpers: 'bundled',
    }),
    nodePolyfills(),
  ],
};
