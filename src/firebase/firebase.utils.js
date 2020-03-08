import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyA7qkzuGf9c-7f6On00f2127vLbkElLDvg",
    authDomain: "ns8-traffic-api.firebaseapp.com",
    databaseURL: "https://ns8-traffic-api.firebaseio.com",
    projectId: "ns8-traffic-api",
    storageBucket: "ns8-traffic-api.appspot.com",
    messagingSenderId: "433046920023",
    appId: "1:433046920023:web:cbfa03e437c7ce77267c12"
  } 

firebase.initializeApp(config)

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;