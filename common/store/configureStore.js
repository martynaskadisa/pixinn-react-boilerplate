import { combineReducers, createStore, compose, applyMiddleware } from 'redux'
import { routerReducer } from 'react-router-redux'
import thunk from 'redux-thunk'

const configureStore = (initialState) => {
  const reducer = combineReducers({
    routing: routerReducer
  })

  // const store = createStore(reducer, initialState, compose(
  //   applyMiddleware(thunk),
  //   window.devToolsExtension ? window.devToolsExtension() : f => f
  // ))
  // const middleware = window && process.env.NODE_ENV === 'development'
  //   ? compose(
  //     applyMiddleware(thunk),
  //     window.devToolsExtension ? window.devToolsExtension() : f => f
  //   )
  //   : compose(
  //     applyMiddleware(thunk),
  //     f => f
  //   )
  // console.log(process.env.NODE_ENV)
  const store = createStore(reducer, initialState, applyMiddleware(thunk))

  return store
}

export default configureStore
