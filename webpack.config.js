var path = require('path');
var webpack = require('webpack');
var precss       = require('precss');
var autoprefixer = require('autoprefixer');
var hotMiddlewareScript = 'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true';

module.exports = {
  context: __dirname,
  entry: {
    main: ['./src/js/Main', hotMiddlewareScript],
    admin: ['./src/js/Admin', hotMiddlewareScript],
  },
  output: {
    path: __dirname,
    publicPath: '/',
    filename: '[name].js'
  },
  devtool: 'sourcemap',
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /(node_modules|bower_components)/,
        include: path.join(__dirname, 'src'),
        loader: 'babel',
        query: {
          presets: ['es2015']
        }
      },
      { test: /\.scss$/, 
        loaders: ['style', 'css?sourceMap', 'postcss', 'resolve-url', 'sass?sourceMap']
      },
      { test: /\.json$/, 
        loader: 'json-loader'
      },
      {
        extensions: ['woff', 'woff2', 'svg', 'ttf', 'eot'],
        test: /\.(woff|woff2|svg|ttf|eot(\?.*)?)$/,
        loader: 'url?limit=1000'
      }
    ]
  },
  postcss: function () {
    return [precss, autoprefixer]
  }
};
