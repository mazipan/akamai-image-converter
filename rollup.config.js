import babel from 'rollup-plugin-babel'
import uglify from 'rollup-plugin-uglify'
const license = require('rollup-plugin-license')

export default {
  input: 'akamai-image-converter.js',
  output: {
    name: 'ImageConverter',
    file: 'dist/akamai-image-converter.min.js',
    format: 'umd'
  },
  plugins: [
    babel({
      exclude: 'node_modules/**',
      plugins: ['external-helpers'],
      externalHelpers: true,
      runtimeHelpers: true
    }),
    uglify(),
    license({
      banner: `akamai-image-converter v<%= pkg.version %>`,
    })
  ]
}
