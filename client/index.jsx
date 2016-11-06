import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import routes from 'routes'
import configureStore from 'configureStore'

const preloadedState = window.__PRELOADED_STATE__
const store = configureStore(preloadedState)
const history = syncHistoryWithStore(browserHistory, store)
const rootElement = document.getElementById('app')

render(
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>,
  rootElement
)
