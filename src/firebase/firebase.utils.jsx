import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyA-8whr1BLJCkNuNsrgG6XQvjI0sTYLoXU",
  authDomain: "crwn-db-8e896.firebaseapp.com",
  projectId: "crwn-db-8e896",
  storageBucket: "crwn-db-8e896.appspot.com",
  messagingSenderId: "959775112727",
  appId: "1:959775112727:web:ffd5c55a3422e5a4222652",
  measurementId: "G-GDQGVPJ28H",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () =>auth.signInWithPopup(provider);


export default firebase;