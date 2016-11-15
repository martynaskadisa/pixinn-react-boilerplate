import './config'
import path from 'path'
import Express from 'express'
import morgan from 'morgan'
import compression from 'compression'

import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import webpackConfig from '../webpack.config'

import React from 'react'
import { renderToString } from 'react-dom/server'
import { Provider } from 'react-redux'
import { match, RouterContext } from 'react-router'
import createHistory from 'react-router/lib/createMemoryHistory'
import { syncHistoryWithStore } from 'react-router-redux'

import configureStore from 'configureStore'
import routes from 'routes'
import { Html } from 'helpers'

const app = new Express()
const port = process.env.PORT || 3000

app.use(compression())

if (__DEV__) {
  // Use this middleware to set up hot module reloading via webpack.
  const compiler = webpack(webpackConfig)
  app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: webpackConfig.output.publicPath }))
  app.use(webpackHotMiddleware(compiler))

  app.use(morgan('dev'))
  // app.use('/static', Express.static('dist'))
  app.get('*', handleRender)
} else {
  app.use(morgan('combined'))
  app.use('/static', Express.static('dist'))
  app.get('*', handleRender)
}

function handleRender (req, res) {
  // Call ajax here and on complete continue
  const memoryHistory = createHistory(req.originalUrl)
  const store = configureStore(memoryHistory)
  const history = syncHistoryWithStore(memoryHistory, store)
  // Note that req.url here should be the full URL path from
  // the original request, including the query string.

  match({ history, routes, location: req.originalUrl }, (error, redirectLocation, renderProps) => {
    if (error) {
      return res.status(500).send(__DEV__ ? error.message : 'Oops, you broke it!')
    }

    if (redirectLocation) {
      return res.redirect(302, redirectLocation.pathname + redirectLocation.search)
    }

    if (renderProps) {
      const currentRoute = renderProps.routes[renderProps.routes.length - 1]
      res.status(currentRoute.status || 200)

      const component = (
        <Provider store={store}>
          <RouterContext {...renderProps} />
        </Provider>
      )
      const html = '<!doctype html\n' + renderToString(<Html store={store} component={component} />)

      return res.send(html)
    }

    return res.status(404).send('Not found')
  })
}

app.listen(port, (error) => {
  if (error) {
    console.error(error)
  } else {
    console.info(
      `==> 🌎  Listening on port ${port}. Open up http://localhost:${port}/ in your browser.\nenv: ${__DEV__ ? 'development' : 'production'}`
    )
  }
})
