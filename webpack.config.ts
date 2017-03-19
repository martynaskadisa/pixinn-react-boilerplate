import path = require('path');
import webpack = require('webpack');
import { CheckerPlugin, TsConfigPathsPlugin } from 'awesome-typescript-loader';

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
  devtool: 'eval-source-map',
  
} as webpack.Configuration;

module.exports = config;

