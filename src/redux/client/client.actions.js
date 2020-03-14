import {ClientActionTypes} from './client.types'
import {firestore, convertClientTrafficSnapShotToMap} from '../../firebase/firebase.utils'

export const setCurrentClient = client => ({
  type: ClientActionTypes.SET_CURRENT_CLIENT,
  payload: client
})

export const createClientTrafficAddress = (address) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    //make async call to firestore to add traffic address
    const firestore = getFirestore()
    firestore.collection('clients').add({
      ...address
    }).thne(
      dispatch({
        type:ClientActionTypes.CREATE_CLIENT_TRAFFIC_ADDRESS
      }).catch((error) => {
        // dispatch() if you want...
        console.error(error);
        
      })
    )
    
  }
}



export const fetchClientStart = () => ({
  type: ClientActionTypes.FETCH_CLIENT_START,
})

export const fetchClientTrafficStartAsync = (client) => {
  return dispatch => {
    const {currentUser} = client 
    const collectionRef = firestore.collection('clients').doc(currentUser.uid).collection('traffic')
    dispatch(fetchClientStart())
    collectionRef.get().then(snapshot => {
      console.log(snapshot);
      
      const trafficMap = convertClientTrafficSnapShotToMap(snapshot);
      dispatch(fetchClientTrafficSuccess(trafficMap))
    }).catch(error => dispatch(fetchClientTrafficFailure(error.message)))
    
  }
}

export const fetchClientTrafficSuccess = trafficMap => ({
  type: ClientActionTypes.FETCH_CLIENT_SUCCESS,
  payload: trafficMap
})

export const fetchClientTrafficFailure = errorMessage => ({
  type: ClientActionTypes.FETCH_CLIENT_FAILURE,
  payload: errorMessage
})