// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from 'firebase/auth'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDbcsyi02b8P4QDxK-4NB_46DbX8Zfujm8",
  authDomain: "car-servising-center.firebaseapp.com",
  projectId: "car-servising-center",
  storageBucket: "car-servising-center.appspot.com",
  messagingSenderId: "72105539912",
  appId: "1:72105539912:web:dfe34499480be9ada85b7d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
