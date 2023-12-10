
import { getFirestore, addDoc,collection } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { initializeApp } from "firebase/app";
import 'firebase/compat/firestore';

export const firebaseConfig = {
  apiKey: "AIzaSyCYnug_p3-xIHCREs8K4SRT9d7q63gh5_0",
  authDomain: "repice-app-d0c0f.firebaseapp.com",
  projectId: "repice-app-d0c0f",
  storageBucket: "repice-app-d0c0f.appspot.com",
  messagingSenderId: "620327358871",
  appId: "1:620327358871:web:f2c645aab1dce64db574d2",
  measurementId: "G-XJBV2PWHHF"
};
const isLocalhost = window.location.hostname === 'localhost';

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const db = getFirestore(app);
const productsRef = collection(db, 'products');

export {db}

export const addProduct = () => {
  const email =auth.currentUser?.email
  if(!email) return
  addDoc(productsRef,{
    name: 'test',
    price: 100,
    email: email,
  })
}