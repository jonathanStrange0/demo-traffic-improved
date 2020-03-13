import {createSelector} from 'reselect'

const selectClient = state => state.client

export const selectCurrentClient = createSelector(
  [selectClient],
  (client) => client.currentUser
)

export const selectIsClientLoaded = createSelector(
  [selectClient],
  (client) => !!client.isFetching
)

// export const selectClientId = createSelector(
//   [ selectClient ],
//   (client) => client.currentUser.uid
// )