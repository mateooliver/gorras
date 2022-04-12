// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAL2u3K0TKRgZeUQ7OoSDhyRtoYtSsEXyg",
  authDomain: "gorrasnft.firebaseapp.com",
  projectId: "gorrasnft",
  storageBucket: "gorrasnft.appspot.com",
  messagingSenderId: "172520635981",
  appId: "1:172520635981:web:918124a8f77eed130b6604"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const dataBase=getFirestore(app);
