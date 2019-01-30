const path = require('./path')

module.exports = {
  port: '8090',
  outputDir: 'dist',
  alias: {
    'vue$': 'vue/dist/vue.esm.js',
    '@': path.resolve(__dirname, '../src'),
    '~public': path.resolve(__dirname, '../public'),
    '~assets': path.resolve(__dirname, '../assets'),
    '~components': path.resolve(__dirname, '../components'),
    '~views': path.resolve(__dirname, '../views'),
  },
}
