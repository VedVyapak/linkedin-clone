import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBYPKVtz_13YpqLOV295px94tZE0SBxWfU",
    authDomain: "linkedin-clone-b866c.firebaseapp.com",
    projectId: "linkedin-clone-b866c",
    storageBucket: "linkedin-clone-b866c.appspot.com",
    messagingSenderId: "287000817419",
    appId: "1:287000817419:web:d2f25850be7c4ecdbcbc0e",
    measurementId: "G-ZH4K2LVJFX"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};