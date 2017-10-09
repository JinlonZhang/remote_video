var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    __dirname + '/static/main.js'
  ],
  output: {
    path: path.join(__dirname, './static/build'),
    filename: 'bundle.js',
    // filename: '[name].[hash:8].bundle.js',
    publicPath: './build/'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: `${__dirname}/index.html`,
      template: `${__dirname}/tmp/index.html`,
      inject: 'body',
      // hash: true
      hash: false
    }),
    new webpack.optimize.UglifyJsPlugin({
      output: {
        comments: false,  // remove all comments
      },
      compress: {
        warnings: false
      }
    })
  ],
};
