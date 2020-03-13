import {ClientActionTypes} from './client.types'

const INITIAL_STATE = {
  currentUser: null,
  isFetching: false,
  errorMessage: undefined

}



const clientReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ClientActionTypes.FETCH_CLIENT_START:
      return {
        ...state,
        isFetching: true
      }
    case ClientActionTypes.FETCH_CLIENT_SUCCESS:
      return {
        ...state,
        isFetching: false,
        currentUser:action.payload
      }
    case ClientActionTypes .FETCH_CLIENT_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload
      }
    case ClientActionTypes.SET_CURRENT_CLIENT:
      return {
        ...state,
        isFetching: false,
        currentUser:action.payload
      }

    default:
      return state;

  }
}

export default clientReducer
