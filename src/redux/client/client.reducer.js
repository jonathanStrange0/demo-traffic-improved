import {ClientActionTypes} from './client.types'

const INITIAL_STATE = {
  currentClient: null

}



const clientReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ClientActionTypes.SET_CURRENT_CLIENT:
      return {
        ...state,
        currentUser:action.payload
      }
    default:
      return state;

  }
}

export default clientReducer
