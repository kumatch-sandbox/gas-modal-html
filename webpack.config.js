const webpack = require('webpack')
const es3ifyPlugin = require('es3ify-webpack-plugin')
const gasPlugin = require('gas-webpack-plugin')

module.exports = {
  entry: {
    'app': './src/app.js'
  },
  output: {
    path: __dirname + '/build',
    filename: '[name].js'
  },
  plugins: [
    new gasPlugin(),
    new es3ifyPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader'
        },
        exclude: /node_modules/
      },
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader',
          options: {
            minimize: true,
            removeAttributeQuotes: false
          }
        }
      }
    ]
  }
}
