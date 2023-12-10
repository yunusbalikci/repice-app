import { useEffect, useState } from 'react';
import { initializeApp } from 'firebase/app';
import { auth, firebaseConfig } from '../Firebase';
import { useCollectionData } from "react-firebase-hooks/firestore";
import { collection } from 'firebase/firestore';
import { db } from '../Firebase';
import { addProduct } from '../Firebase';
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import LoginHeader from '../Components/LoginHeader';
import Header from '../Components/Header';

const app = initializeApp(firebaseConfig);
const userDataRef = collection(db, 'userData');

const UserProfile = () => {
   const navigate = useNavigate();
 
    const handleLogout = () => {               
        signOut(auth).then(() => {
        // Sign-out successful.
            navigate("/");
            console.log("Signed out successfully")
        }).catch((error) => {
        // An error happened.
        });
    }
    const [isLoginModalOpen, setLoginModalOpen] = useState(false);


    const handleLoginClick = () => {
        setLoginModalOpen(true);
      };
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      setUser(authUser);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  console.log(user?.email);

  const [data, isLoading] = useCollectionData(userDataRef);

  if (isLoading) {
    return <h1>Loading</h1>;
  }

  return (
    <div>
      <LoginHeader></LoginHeader>

      <button onClick={() => addProduct()}>Add</button>

      {data.map((userData) => (
        <div key={userData.id}>
          <p className='mt-28'>{userData.email}</p>
          <p className='mt-28'>{user?.email}</p>
        </div>
      ))}
    </div>
  );
};

export default UserProfile;
