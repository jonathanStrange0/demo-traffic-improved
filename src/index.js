import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {Provider} from 'react-redux'
import {PersistGate} from 'redux-persist/integration/react'
import {store, persistor, rrfProps} from './redux/store'
// import firebase, {config} from './firebase/firebase.utils'
import { ReactReduxFirebaseProvider } from 'react-redux-firebase'

  

ReactDOM.render(
            <Provider store={store}>
                <ReactReduxFirebaseProvider {...rrfProps} >
                    <BrowserRouter>
                        <PersistGate persistor={persistor}>
                        <App />
                        </PersistGate>
                    </BrowserRouter>
                </ReactReduxFirebaseProvider>
            </Provider>
            , 
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
