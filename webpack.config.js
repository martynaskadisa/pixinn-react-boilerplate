const webpack = require('webpack');
const path = require('path');
const { CheckerPlugin, TsConfigPathsPlugin } = require('awesome-typescript-loader')

const config = {
  entry: path.resolve(__dirname, 'src/client/index.tsx'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/assets/'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader',
      }
    ]
  },
  plugins: [
    new TsConfigPathsPlugin(),
    new CheckerPlugin()
  ],
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.json', '.jsx', '.ts', '.tsx'],
    alias: {
      'common': path.resolve(__dirname, 'src/common')
    }
  },
  devtool: 'eval-source-map'
}

module.exports = config;