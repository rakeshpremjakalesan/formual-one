import reducers from './reducers'
import { createStore } from 'redux'

export const configureStore = () => {
  const store = createStore(reducers)
  return store
}
