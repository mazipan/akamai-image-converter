import babel from 'rollup-plugin-babel'
import uglify from 'rollup-plugin-uglify'

export default {
  input: 'akamai-image-converter.js',
  output: {
    name: 'ImageConverter',
    file: 'dist/akamai-image-converter.min.js',
    format: 'umd'
  },
  plugins: [
    babel({
      exclude: 'node_modules/**'
    }),
    uglify()
  ]
}
