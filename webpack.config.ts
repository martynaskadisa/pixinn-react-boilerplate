import path = require('path');
import webpack = require('webpack');
import { CheckerPlugin, TsConfigPathsPlugin } from 'awesome-typescript-loader';

const config = {
  entry: [
    'react-hot-loader/patch',
    'webpack-hot-middleware/client',
    'webpack/hot/only-dev-server',
    './src/client/index.tsx'
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/assets/'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loaders: ['react-hot-loader/webpack', 'awesome-typescript-loader'],
      }
    ]
  },
  plugins: [
    new TsConfigPathsPlugin(),
    new CheckerPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
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

