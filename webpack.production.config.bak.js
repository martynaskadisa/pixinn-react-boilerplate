'use strict'

var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var StatsPlugin = require('stats-webpack-plugin')
var webpackConfig = require('./webpack.config.js')
var WebpackIsomorphicToolsPlugin = require('webpack-isomorphic-tools/plugin')
var webpackIsomorphicToolsPlugin = new WebpackIsomorphicToolsPlugin(require('./webpack-isomorphic-tools'))

webpackConfig.devtool = 'source-map'
webpackConfig.entry = {
  app: path.join(__dirname, 'client/index.jsx'),
  vendor: ['react', 'react-dom', 'react-router', 'redux', 'react-router-redux']
}
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
  new webpack.optimize.CommonsChunkPlugin(/* chunkName= */'vendor', /* filename= */'vendor.bundle.js'),
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    '__CLIENT__': true,
    '__SERVER__': false,
    '__DEV__': false,
    '__DEVTOOLS__': false
  }),
  webpackIsomorphicToolsPlugin
]
webpackConfig.module.loaders[0].query.presets = undefined

module.exports = webpackConfig
