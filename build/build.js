const webpack = require('webpack')
const config = require('./webpack.prod.config')
const path = require('path')
const ora = require('ora')
const rm = require('rimraf')

const spinner = ora(
  'building for prod environment...'
)
spinner.start()

rm(path.resolve(__dirname, '../dist'), err => {
  if (err) throw err

  webpack(config, (err, stats) => {
    spinner.stop()
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
})
