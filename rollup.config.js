import cleaner from 'rollup-plugin-cleaner'
import commonjs from '@rollup/plugin-commonjs'
import generateDeclarations from 'rollup-plugin-generate-declarations'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import postcss from 'rollup-plugin-postcss'
import resolve from '@rollup/plugin-node-resolve'
import esbuild from 'rollup-plugin-esbuild-transform'
import path from 'path'

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
    peerDepsExternal(),
    generateDeclarations(),
    resolve(),
    commonjs(),
    esbuild([
      {
        loader: 'json',
      },
      {
        loader: 'tsx',
        banner: "import React from 'react'",
      },
      {
        loader: 'ts',
        include: /\.tsx?$/,
        tsconfig: path.join(__dirname, 'tsconfig.json'),
      },
      {
        output: true,
        minify: true,
        target: 'es2015',
      },
    ]),
    postcss({
      modules: true,
    }),
  ],
}
