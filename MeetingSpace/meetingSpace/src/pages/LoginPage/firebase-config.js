/*Inicialize the connection with db*/
import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyC1rOZ2EzP4u4ay8M7eQiQnIJhUGq7W7Ss",
    authDomain: "myspace-72d36.firebaseapp.com",
    databaseURL: "https://myspace-72d36-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "myspace-72d36",
    storageBucket: "myspace-72d36.appspot.com",
    messagingSenderId: "992704540839",
    appId: "1:992704540839:web:20c7cdba013ff6fa886b82"
  };

  const app = initializeApp(firebaseConfig); 

  export const db = getFirestore(app)