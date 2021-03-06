const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const config = require('./config')

function resolve(dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  entry: {
    index: path.resolve(__dirname, '../src/index.js')
  },
  output: {
    path: path.resolve(__dirname, config.outputDir),
    filename: '[name].js'
  },
  resolve: {
    alias: config.alias,
    extensions: ['*', '.js', '.json', '.vue']
  },
  module: {
    rules: [{
        test: /\.js/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      /* config.module.rule('images') */
      {
        test: /\.(png|jpe?g|gif|webp)(\?.*)?$/,
        use: [
          /* config.module.rule('images').use('url-loader') */
          {
            loader: 'url-loader',
            options: {
              limit: 4096,
              fallback: {
                loader: 'file-loader',
                options: {
                  name: 'img/[name].[hash:8].[ext]'
                }
              }
            }
          }
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.css$/,
        use: [
          process.env.NODE_ENV !== 'production' ?
          'vue-style-loader' :
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader'
        ]
      },
      {
        test: /\.less$/,
        use: [
          process.env.NODE_ENV !== 'production' ?
          'vue-style-loader' :
          MiniCssExtractPlugin.loader,
          'css-loader', 'less-loader', 'postcss-loader'
        ]
      },
      /* config.module.rule('eslint') */
      {
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: [resolve('src'), resolve('test')],
        options: {
          formatter: require('eslint-friendly-formatter'),
          emitWarning: true
        }
      }
    ]
  },
  plugins: [new VueLoaderPlugin()]
}