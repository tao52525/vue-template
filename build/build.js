const webpack = require('webpack')
const config = require('./webpack.prod.config')

webpack(config, (err, stats) => {
  if (err) throw err
  process.stdout.write(
    stats.toString({
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false
    }) + '\n\n'
  )

  if (stats.hasErrors()) {
    console.log(chalk.red(' Build failed with errors.\n'))
    process.exit(1)
  }
})
