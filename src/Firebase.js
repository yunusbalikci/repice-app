/*import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
*/
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCYnug_p3-xIHCREs8K4SRT9d7q63gh5_0",
  authDomain: "repice-app-d0c0f.firebaseapp.com",
  projectId: "repice-app-d0c0f",
  storageBucket: "repice-app-d0c0f.appspot.com",
  messagingSenderId: "620327358871",
  appId: "1:620327358871:web:f2c645aab1dce64db574d2",
  measurementId: "G-XJBV2PWHHF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
