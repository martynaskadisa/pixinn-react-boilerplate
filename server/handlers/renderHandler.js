import React from 'react'
import { renderToString } from 'react-dom/server'
import { Provider } from 'react-redux'
import { match, RouterContext } from 'react-router'
import createHistory from 'react-router/lib/createMemoryHistory'
import { syncHistoryWithStore } from 'react-router-redux'

import configureStore from 'configureStore'
import routes from 'routes'
import { Html } from 'helpers'

function renderHandler (req, res) {
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

export default renderHandler
