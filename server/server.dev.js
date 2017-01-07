import browserSync from 'browser-sync'

import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import webpackConfig from '../webpack.config'

const port = process.env.PORT || 3000

const compiler = webpack(webpackConfig)

browserSync({
  port,
  server: {
    baseDir: '../dist',
    middleware: [
      webpackDevMiddleware(compiler, {
        publicPath: webpackConfig.output.publicPath,
        stats: { colors: true },
        noInfo: true
      }),
      webpackHotMiddleware(compiler)
    ]
  }
})
