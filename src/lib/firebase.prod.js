import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import {seedDatabase} from '../seed';



const firebaseConfig = {
    apiKey: "AIzaSyBPDnJGOfdaaoI_bFoWxpZHfFQYdJBSMFQ",
    authDomain: "netflix-ae485.firebaseapp.com",
    projectId: "netflix-ae485",
    storageBucket: "netflix-ae485.appspot.com",
    messagingSenderId: "14108760332",
    appId: "1:14108760332:web:d0bc508f9e10a3c6e05129",
    measurementId: "G-9S9ZN26VEN"
  };
const firebase = Firebase.initializeApp(firebaseConfig);

// seedDatabase(firebase);

export {firebase};