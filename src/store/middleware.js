import thunk from 'redux-thunk'

export function createMiddlewares() {
  let middlewares = []

  middlewares.push(thunk)
  
  return middlewares
}
