const merge = require('webpack-merge')
const path = require('path')
const baseConfig = require('./webpack.base.config')
const webpack = require('webpack')
const portfinder = require('portfinder')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')

const devWebpackConfig = merge(baseConfig, {
  mode: 'development',
  devtool: 'cheap-source-map',
  devServer: {
    clientLogLevel: 'warning',
    historyApiFallback: true,
    hot: true,
    compress: true,
    host: 'localhost',
    port: 6000,
    open: true,
    overlay: { warnings: false, errors: true },
    quiet: true, // necessary for FriendlyErrorsPlugin
    watchOptions: {
      poll: false
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
})
// module.exports = devWebpackConfig
module.exports = new Promise((resolve, reject) => {
  portfinder.basePort = 6000
  portfinder.getPort((err, port) => {
    if (err) {
      reject(err)
    } else {
      // add port to devServer config
      devWebpackConfig.devServer.port = port

      // Add FriendlyErrorsPlugin
      devWebpackConfig.plugins.push(
        new FriendlyErrorsPlugin({
          compilationSuccessInfo: {
            messages: [
              `Your application is running here: http://localhost:${port}`
            ]
          },
          onErrors: undefined
        })
      )

      resolve(devWebpackConfig)
    }
  })
})
