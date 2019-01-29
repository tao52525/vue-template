const merge = require('webpack-merge')
const path = require('path')
const baseConfig = require('./webpack.base.config')
const webpack = require('webpack')
const portfinder = require('portfinder')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const webpack = require('webpack')

const devWebpackConfig = merge(baseConfig, {
  mode: 'development',
  devtool: 'cheap-source-map',
  devServer: {
    clientLogLevel: 'warning',
    historyApiFallback: true,
    hot: true,
    compress: true,
    host: 'localhost',
    port: 8090,
    open: true,
    overlay: { warnings: false, errors: true },
    quiet: true, // necessary for FriendlyErrorsPlugin
    watchOptions: {
      poll: false
    }
  },
  plugins: [
    /* config.plugin('define') */
    new webpack.DefinePlugin(
      {
        'process.env': {
          NODE_ENV: '"development"'
        }
      }
    ),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, '../public/index.html'),
      favicon: path.resolve(__dirname, '../public/favicon.ico'),
      inject: true
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
})
// module.exports = devWebpackConfig
module.exports = new Promise((resolve, reject) => {
  portfinder.basePort = 8090
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
