'use strict'

var path = require('path')
var webpack = require('webpack')
var nodeExternals = require('webpack-node-externals')

module.exports = {
  entry: [
    './server/handlers/renderHandler.js'
  ],
  output: {
    path: path.join(__dirname, 'bin'),
    filename: 'renderHandler.js',
    publicPath: '/',
    libraryTarget: 'commonjs2'
  },
  target: 'node',
  externals: [nodeExternals()],
  plugins: [
  ],
  module: {
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
      loaders: [
        // 'style-loader',
        'css-loader',
        'postcss-loader'
      ]
    }, {
      test: /\.scss$/,
      loaders: [
        // 'style-loader',
        'css-loader',
        'postcss-loader',
        'sass-loader'
      ]
    }, {
      test: /\.json?$/,
      loader: 'json'
    }, {
      test: /\.(jpe?g|png|gif|svg)$/,
      loader: 'url-loader',
      options: {
        limit: 25000
      }
    }, {
      test: /\.(jpe?g|png|gif|svg)$/,
      loader: 'file-loader',
      options: {
        name: '[path][name].[hash].[ext]'
      }
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
