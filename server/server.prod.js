import path from 'path'
import Express from 'express'
import compression from 'compression'

import webpackConfig from '../webpack.production.config'
import renderHandler from '../bin/renderHandler'

const app = new Express()
const port = process.env.PORT || 3000
const host = process.env.HOST || '0.0.0.0'

const { publicPath } = webpackConfig[0].output

app.use(compression())
app.use(publicPath, Express.static(path.join(__dirname, '../dist')))

app.get('*', renderHandler)
// TODO: allow requiring images in components // Somewhat done
// TODO: allow requiring css in components
// TODO: Add critical css
// Create a gulp task which creates production bundle, starts prod server, then use criticalcss plugin to get css and output somewhere
// https://github.com/filamentgroup/criticalcss
// TODO: server-side async fetching
// TODO: append trailing slash
// TODO: non-www to www url rewrite
// TODO: sitemap
// TODO: robots.txt
// TODO: Add socket.io
// TODO: Show available fonts before fonts download

app.listen(port, host, (error) => {
  if (error) {
    console.error(error)
  } else {
    console.info(
      `==> 🌎  Listening on port ${port}. Open up http://${host}:${port}/ in your browser.\nenv: ${__DEV__ ? 'development' : 'production'}`
    )
  }
})
