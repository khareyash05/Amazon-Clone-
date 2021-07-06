// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCNdH5J58D4mS1JRgwUdfadGM1rtKQCkIs",
  authDomain: "clone-cf3d8.firebaseapp.com",
  databaseURL : "https://clone-cf3d8-default-rtdb.firebaseio.com/",
  projectId: "clone-cf3d8",
  storageBucket: "clone-cf3d8.appspot.com",
  messagingSenderId: "1037878863145",
  appId: "1:1037878863145:web:8e53f5cf12995d51f08338",
  measurementId: "G-NZBFHNYHMR"
});

// const db = firebaseApp.firestore();
const auth = firebase.auth();
export { auth };
