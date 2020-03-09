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

export const createUserProfileDocument = async (userAuth, additionalData) =>{
  // if there is no userAuth object, return from the function
  if (!userAuth) return
  
  // get the userRef if there is one for this user
  const userRef = firestore.doc(`clients/${userAuth.uid}`)

  // get snap shot of the user at this moment in time
  const snapShot = await userRef.get()
  
  // if there is no snapshot to get, let's create one
  // this means this is the first time the user has logged in, and 
  // we must add them to the database
  if (!snapShot.exists) {
    // Create a user if it doesn't exist
    
    // get the user's name, and email address
    const { displayName, email } = userAuth

    // et the timestamp for when the account was cretated
    const createdAt = new Date()

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message);
    }

    
  }

  return userRef
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;