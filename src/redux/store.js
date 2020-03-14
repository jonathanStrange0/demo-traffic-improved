import {createStore, applyMiddleware, compose} from 'redux'
import {persistStore} from 'redux-persist'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import { reduxFirestore, createFirestoreInstance, getFirestore } from 'redux-firestore'
import { getFirebase } from 'react-redux-firebase'
import firebase, {config} from '../firebase/firebase.utils'


import rootReducer from './root-reducer'

const middlewares = [logger, thunk.withExtraArgument(getFirebase, getFirestore)]
// const middlewares = []
 
export const store = createStore(rootReducer, 
    compose(
        applyMiddleware(...middlewares),
        reduxFirestore(firebase, config),
        // reactReduxFirebase(config)
        )
    )

export const rrfProps = {
    firebase,
    config: config,
    dispatch: store.dispatch,
    createFirestoreInstance
    }

export const persistor = persistStore(store)

export default {store, persistor}
