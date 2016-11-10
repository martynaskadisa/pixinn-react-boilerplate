import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { routerMiddleware } from 'react-router-redux'

import reducer from './reducer'

const configureStore = (history, client, data) => {
  const reduxRouterMiddleware = routerMiddleware(history)

  const middleware = [thunk, reduxRouterMiddleware]

  let finalConfigureStore

  if (__DEVTOOLS__ && __CLIENT__ && __DEV__) {
    finalConfigureStore = compose(
      applyMiddleware(...middleware),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )(createStore)
  } else {
    finalConfigureStore = applyMiddleware(...middleware)(createStore)
  }

  const store = finalConfigureStore(reducer, data)

  return store
}

export default configureStore
