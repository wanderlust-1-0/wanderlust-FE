import firebase from "firebase/app";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyCca7zM4LtiL7PygucWbisKSzAFLpp8Be0",
  authDomain: "wanderlust-4a7a5.firebaseapp.com",
  databaseURL: "https://wanderlust-4a7a5.firebaseio.com",
  projectId: "wanderlust-4a7a5",
  storageBucket: "wanderlust-4a7a5.appspot.com",
  messagingSenderId: "420115187470",
  appId: "1:420115187470:web:ff29e0a7bf3e36b2d1395f",
  measurementId: "G-TFLQKXX3K7",
};

firebase.initializeApp(firebaseConfig);
// firebase.analytics();

export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export const signInWithGoogle = () => {
  auth.signInWithPopup(provider);
};

export default firebase;
