import { createStore, combineReducers, compose, applyMiddleware } from 'redux'

import { createMiddlewares } from './middleware'
import rootReducers from 'reducers'

export default function configureServiceStore() {
  const middlewares = createMiddlewares()
  
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

  const store = createStore(
    rootReducers,
    composeEnhancers(applyMiddleware(...middlewares)),
  )

  return store
}
