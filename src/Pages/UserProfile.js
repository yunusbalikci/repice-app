import { useEffect, useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { firebaseConfig } from '../Firebase';
import Header from '../Components/Header';
import {useCollectionData} from "react-firebase-hooks/firestore"
import { collection } from 'firebase/firestore';
import { db } from '../Firebase';
import firebase from 'firebase/compat/app';

const app = initializeApp(firebaseConfig);
const ref = collection(db,'userData')


const UserProfile = () => {

   const [data,isLoading] = useCollectionData(ref)
   if(isLoading){
      return <h1>Loading</h1>
   }
   return (
      <div>
         {data.map((userData) => (
            <div>
               <p>{userData.email}</p>
            </div>            
         ))}
      </div>
   )
}

export default UserProfile;
