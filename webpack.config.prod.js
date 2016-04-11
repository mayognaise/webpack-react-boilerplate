var path = require('path');
var webpack = require('webpack');
var config = require('./webpack.config');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

config.output.path = path.join(__dirname, 'dist')

config.plugins.push(
  new webpack.optimize.UglifyJsPlugin({ minimize: true }),
  new ExtractTextPlugin('[name].css')
);

config.module.loaders.forEach(function(item) {

  if (item.test.toString().indexOf('scss') !== -1) {

    delete item.loaders;
    item.loader = ExtractTextPlugin.extract(
      'style-loader',
      'css-loader?sourceMap!postcss-loader!resolve-url!sass-loader?sourceMap',
      {
        publicPath: '/'
      }
    )
  }

});

module.exports = config;