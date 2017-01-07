'use strict'

var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var StatsPlugin = require('stats-webpack-plugin')

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: [
    './client/index.jsx'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new ExtractTextPlugin('app.min.css'), // [name]-[hash].min.js
    new StatsPlugin('webpack.stats.json', {
      source: false,
      modules: false
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false,
        screw_ie8: true
      },
      comments: false
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      '__CLIENT__': true,
      '__SERVER__': false,
      '__DEV__': false,
      '__DEVTOOLS__': false // Toggle Redux DevTools here
    })
  ],
  module: {
    /* If you want to be hardcore: */
    // preLoaders: [{
    //   test: /\.js?x$/,
    //   exclude: /node_modules/,
    //   loader: 'eslint-loader'
    // }],
    loaders: [{
      test: /\.js?x?$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      include: __dirname,
      query: {
        presets: ['es2015', 'react']
      }
    }, {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract('style', 'css!postcss')
    }, {
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract('style', 'css!postcss!sass')
    }, {
      test: /\.json?$/,
      loader: 'json'
    }, {
      test: /\.(jpe?g|png|gif|svg)$/,
      loader: 'url-loader'
    }]
  },
  postcss: function () {
    return [
      require('autoprefixer')
    ]
  },
  resolve: {
    root: __dirname,
    modulesDirectories: [
      'node_modules'
    ],
    alias: { /* Use .babelrc to set up aliases */ },
    extensions: ['', '.js', '.jsx']
  },
  sassLoader: {
    includePaths: [
    ]
  }
}
