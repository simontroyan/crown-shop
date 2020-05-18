import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCSGDyxD4lABhInGe98BNJaKXgsVYR1hJY",
  authDomain: "crown-db-adf09.firebaseapp.com",
  databaseURL: "https://crown-db-adf09.firebaseio.com",
  projectId: "crown-db-adf09",
  storageBucket: "crown-db-adf09.appspot.com",
  messagingSenderId: "468337116957",
  appId: "1:468337116957:web:25be6492e8dffdcb45c3f4",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
