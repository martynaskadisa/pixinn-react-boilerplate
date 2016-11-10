'use strict'

var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var StatsPlugin = require('stats-webpack-plugin')
var webpackConfig = require('./webpack.config.js')

webpackConfig.devtool = 'source-map'
webpackConfig.entry = [
  path.join(__dirname, 'client/index.jsx')
]
// webpackConfig.output.filename = '[name]-[hash].min.js'
webpackConfig.plugins = [
  new webpack.optimize.OccurenceOrderPlugin(),
  new ExtractTextPlugin('[name].min.css'), // [name]-[hash].min.js
  new webpack.optimize.UglifyJsPlugin({
    compressor: {
      warnings: false,
      screw_ie8: true
    }
  }),
  new StatsPlugin('webpack.stats.json', {
    source: false,
    modules: false
  }),
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    '__CLIENT__': true,
    '__SERVER__': false,
    '__DEV__': false,
    '__DEVTOOLS__': false
  })
]
webpackConfig.module.loaders[0].query.presets = undefined

module.exports = webpackConfig