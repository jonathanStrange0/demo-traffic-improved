import {createSelector} from 'reselect'
import {firestore, auth, convertClientTrafficSnapShotToMap} from '../../firebase/firebase.utils'


const selectClient = state => state.client

export const selectCurrentClient = createSelector(
  [selectClient],
  (client) => client.currentUser
)

export const selectIsClientLoaded = createSelector(
  [selectClient],
  (client) => !!client.currentUser
)

// export const selectClientTrafficAddresses = createSelector(
//   [selectClient],
//   (client) => {
//     if (client){
//     const collectionRef = firestore.collection('clients').doc(client.uid).collection('traffic')
//       collectionRef.onSnapshot( async snapshot => {
//           (convertClientTrafficSnapShotToMap(snapshot));
//       })
//       }
//   }
// )
