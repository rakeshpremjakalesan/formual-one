import { combineReducers } from 'redux'
import driverReducer from './driverReducer'

const rootReducer = combineReducers({
  driverInfo: driverReducer,
})
export default rootReducer
