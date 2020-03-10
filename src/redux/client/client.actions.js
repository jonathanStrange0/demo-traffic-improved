import {ClientActionTypes} from './client.types'

export const setCurrentClient = client => ({
  type: ClientActionTypes.SET_CURRENT_CLIENT,
  payload: client
})
