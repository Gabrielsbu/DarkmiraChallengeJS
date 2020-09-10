import firebase from 'firebase/app';
import 'firebase/firebase-firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBVhRR1IEiAftTU8PjOMc5fqDRhIpjhgZg",
    authDomain: "darkmirachallenge.firebaseapp.com",
    databaseURL: "https://darkmirachallenge.firebaseio.com",
    projectId: "darkmirachallenge",
    storageBucket: "darkmirachallenge.appspot.com",
    messagingSenderId: "411337844934",
    appId: "1:411337844934:web:ccaf016a5a5e7eaf168fc7"
  };
  // Initialize Firebase
  const fb = firebase.initializeApp(firebaseConfig);

  export const db = fb.firestore();