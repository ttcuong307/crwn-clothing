import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyA-8whr1BLJCkNuNsrgG6XQvjI0sTYLoXU",
  authDomain: "crwn-db-8e896.firebaseapp.com",
  projectId: "crwn-db-8e896",
  storageBucket: "crwn-db-8e896.appspot.com",
  messagingSenderId: "959775112727",
  appId: "1:959775112727:web:ffd5c55a3422e5a4222652",
  measurementId: "G-GDQGVPJ28H",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firebase.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if(!snapShot.exists){
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try{
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    }catch(error){
      console.log('error creating user', error.message);
    }
  }

  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({promt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);


export default firebase;