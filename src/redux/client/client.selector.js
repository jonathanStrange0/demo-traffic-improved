import {createSelector} from 'reselect'

const selectClient = state => state.client

export const selectCurrentClient = createSelector(
  [selectClient],
  (client) => client.currentUser
)
