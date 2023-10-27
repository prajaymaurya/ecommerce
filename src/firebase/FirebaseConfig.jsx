// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUjd7zAXP3zNNSU94bkCAHyLCYxyR3y0c",
  authDomain: "myfirstapp-d2f3d.firebaseapp.com",
  projectId: "myfirstapp-d2f3d",
  storageBucket: "myfirstapp-d2f3d.appspot.com",
  messagingSenderId: "573897166106",
  appId: "1:573897166106:web:63a89cd7db0f59a891f0a3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app);
export { fireDB, auth };
