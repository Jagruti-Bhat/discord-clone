// For Firebase JS SDK v7.20.0 and later, measurementId is optional
//import firebase from 'firebase';
import firebase from 'firebase/compat/app'; 
import 'firebase/compat/auth'; 
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyCLeKqGQg2hKjuDEKF6HvrZPgMzSdS-q-k",
    authDomain: "discord-clone-f3335.firebaseapp.com",
    projectId: "discord-clone-f3335",
    storageBucket: "discord-clone-f3335.appspot.com",
    messagingSenderId: "922579282153",
    appId: "1:922579282153:web:7cf528e7d14867f9d72878",
    measurementId: "G-6MRCTZS7LT"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;
