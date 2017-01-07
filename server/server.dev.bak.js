import path from 'path'
import browserSync from 'browser-sync'
import Express from 'express'
import morgan from 'morgan'

import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import webpackConfig from '../webpack.config'

const app = new Express()
const port = process.env.PORT || 3000

const compiler = webpack(webpackConfig)
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: webpackConfig.output.publicPath }))
app.use(webpackHotMiddleware(compiler))

app.use(morgan('dev'))

app.use(Express.static(path.join(__dirname, '../dist')))

app.get('*', (req, res) => {
  const bundlePath = webpackConfig.output.publicPath + webpackConfig.output.filename

  const html = `
    <!DOCTYPE html>
    <html>
      <head></head>
      <body>
        <div id="app"></div>
        <script src="${bundlePath}"></script>
      </body>
    </html>
  `
  res.send(html)
})

app.listen(port, err => {
  if (err) return console.error(err)

  console.info(`==> 🌎  Listening on port ${port}. Open up http://localhost:${port}/ in your browser.\nenv: ${__DEV__ ? 'development' : 'production'}`)
})

