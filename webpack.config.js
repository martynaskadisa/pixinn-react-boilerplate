var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  devtool: 'inline-source-map',
  entry: [
    'webpack-hot-middleware/client',
    './client/index.jsx'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new ExtractTextPlugin('[name]-[hash].css'),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      '__CLIENT__': true,
      '__SERVER__': false,
      '__DEV__': true,
      '__DEVTOOLS__': true
    })
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        exclude: /node_modules/,
        include: __dirname,
        query: {
          presets: [ 'react-hmre' ]
        }
      }, {
        test: /\.json?$/,
        loader: 'json'
      // }, {
      //   test: /\.css$/,
      //   loaders: [
      //     'isomorphic-style-loader',
      //     `css-loader?${JSON.stringify({
      //       sourceMap: true,
      //       // CSS Modules https://github.com/css-modules/css-modules
      //       modules: true,
      //       localIdentName: true,
      //       // CSS Nano http://cssnano.co/options/
      //       minimize: true
      //     })}`,
      //     'postcss-loader?pack=default'
      //   ]
        // loader: 'style!css?modules&localIdentName=[name]---[local]---[hash:base64:5]'
      }, {
        test: /\.(jpe?g|png|gif|svg)$/,
        loader: 'url-loader'
      // }, {
      //   test: /\.css$/,
      //   loader: 'style!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'

      }, {
        test: /\.scss$/,
        // loaders: [
        //   // 'isomorphic-style-loader',
        //   'style-loader',
        //   'css-loader',
        //   'sass-loader'
        // ]
        // loader: 'style!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
        // loaders: [
        //   'isomorphic-style-loader',
        //   'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
        //   'postcss-loader',
        //   'sass-loader'
        // ]
        loader: ExtractTextPlugin.extract('style', 'css!postcss!sass')
        // loader: 'style!css!postcss!sass'
      }
    ]
  },
  postcss: function () {
    return [
      require('precss'),
      require('autoprefixer')
    ]
  },
  resolve: {
    root: __dirname,
    modulesDirectories: [
      'node_modules'
    ],
    alias: {
      applicationStyles: 'common/styles/app.scss',
      components: 'common/components/index.jsx',
      containers: 'common/containers/index.jsx',
      actions: 'common/actions/index.js',
      reducers: 'common/reducers/index.js',
      configureStore: 'common/store/configureStore',
      api: 'common/api/index.js',
      routes: 'common/routes.jsx'
    },
    extensions: ['', '.js', '.jsx']
  },
  sassLoader: {
    includePaths: [
    ]
  }
}