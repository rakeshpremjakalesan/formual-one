import { DRIVER_INFO } from '../actions'

const INITIAL_STATE = {
  season: '',
  code: '',
  driver: '',
  nationality: '',
  car: '',
  points: '',
  wins: '',
}

const driverReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case DRIVER_INFO:
      return action.data
    default:
      return state
  }
}

export default driverReducer
