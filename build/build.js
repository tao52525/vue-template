const webpack = require('webpack')
const config = require('./webpack.prod.config')

webpack(config, (err, stats) => {
  if (err || stats.hasErrors()) {
    console.error(err)
    return
  }
  console.log(stats.toString({
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false
    }) + '\n\n'
  )
})
