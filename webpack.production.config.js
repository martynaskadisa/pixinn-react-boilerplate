'use strict'

var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var StatsPlugin = require('stats-webpack-plugin')
var CompressionPlugin = require('compression-webpack-plugin')

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
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
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
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV), // // Needed in order to use minified version of React
      '__CLIENT__': true,
      '__SERVER__': false,
      '__DEV__': false,
      '__DEVTOOLS__': false // Toggle Redux DevTools here
    }),
    new CompressionPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0.8
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
      loader: 'file-loader'
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
