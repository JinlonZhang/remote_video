var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    __dirname + '/server/static/main.js'
  ],
  output: {
    path: path.join(__dirname, './server/static/build'),
    filename: '[name].[hash:8].bundle.js',
    publicPath: './server/static/build/'
  },
  plugins: [
    new HtmlWebpackPlugin({
    filename: `${__dirname}/server/static/index.html`,
    template: `${__dirname}/server/static/tmp/index.html`,
    inject: 'body',
    hash: true
  }),
  ],
};
