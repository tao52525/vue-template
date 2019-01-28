const merge = require('webpack-merge')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const path = require('path')
const baseConfig = require('./webpack.base.config')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')

module.exports = merge(baseConfig, {
  mode: 'production',
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'js/[name].[chunkhash:8].js',
    chunkFilename: 'js/[name].[chunkhash:8].js'
  },
  module: {
    rules: []
  },
  plugins: [
    new CleanWebpackPlugin(['dist/'], {
      root: path.resolve(__dirname, '../'),
      verbose: true,
      dry: false
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css'
    })
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendors: {
          name: 'chunk-vendors',
          test: /[\\/]node_modules[\\/]/,
          priority: 10,
          chunks: 'initial' // 只打包初始时依赖的第三方
        },
        commons: {
          name: 'chunk-commons',
          minChunks: 3, // 最小公用次数
          priority: 5,
          reuseExistingChunk: true
        }
      }
    },
    minimizer: [
      new TerserWebpackPlugin({
        parallel: true,
        test: /\.js(\?.*)?$/i,
        sourceMap: false,
        terserOptions: {
          mangle: true,
          safari10: true
        }
      }),
      // Compress extracted CSS. We are using this plugin so that possible
      // duplicated CSS from different components can be deduped.
      new OptimizeCSSAssetsPlugin()
    ]
  }
})
