import cleaner from 'rollup-plugin-cleaner'
import commonjs from '@rollup/plugin-commonjs'
import generateDeclarations from 'rollup-plugin-generate-declarations'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import postcss from 'rollup-plugin-postcss'
import resolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'

import pkg from './package.json'

export default {
  input: 'src/index.ts',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: pkg.module,
      format: 'esm',
      sourcemap: true,
    },
  ],
  plugins: [
    cleaner({
      targets: ['./lib'],
    }),
    generateDeclarations(),
    peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript({
      exclude: ['**/*.stories.tsx', '**/*.test.tsx'],
    }),
    postcss({
      extensions: ['.css'],
    }),
  ],
}
