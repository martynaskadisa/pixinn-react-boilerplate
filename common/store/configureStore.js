import { combineReducers, createStore, compose, applyMiddleware } from 'redux'
import { routerReducer } from 'react-router-redux'
import thunk from 'redux-thunk'

const configureStore = (initialState) => {
  const reducer = combineReducers({
    routing: routerReducer
  })

  let middleware

  if (__DEVTOOLS__ && __CLIENT__ && __DEV__) {
    middleware = compose(
      applyMiddleware(thunk),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  } else {
    middleware = applyMiddleware(thunk)
  }

  const store = createStore(reducer, initialState, middleware)

  return store
}

export default configureStore
