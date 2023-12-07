import React, { useState } from "react";
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate, Link } from "react-router-dom";
import firebase from 'firebase/compat/app';
import { auth } from "../Firebase";
import { db } from "../Firebase";


export default function LoginModal({ isOpen, onClose }) {

  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Giriş başarılı
        const user = userCredential.user;
        navigate("/userprofile");
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  }

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center font-open transition duration-300">
      <div className="absolute inset-0 bg-black opacity-50" onClick={onClose}></div>
      <div className="bg-white rounded-md w-96 h-auto border p-10 rounded shadow-lg z-50 transition duration-300">
        <img src="https://cdn.icon-icons.com/icons2/2518/PNG/512/x_icon_150997.png" onClick={onClose} className="cursor-pointer h-6 w-6 ml-72" alt="Close"></img>

        <h1 className="text-center font-bold text-3xl mb-5">YEMEK</h1>
        <div className="container flex flex-col">
          <h2 className="mb-2">Kullanıcı Adı</h2>
          <input className="text-black bg-gray-300 w-full border items-start rounded-md px-2 mr-10 h-8" onChange={(e) => setEmail(e.target.value)} placeholder="Kullanıcı Adı"></input>
          <h2 className="mb-2 mt-5">Şifre</h2>
          <input className="text-black bg-gray-300 w-full border items-start rounded-md px-2 mr-10 h-8" type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Şifre"></input>
          <a href="#" className="text-blue-600 hover:underline mt-1">Şifremi Unuttum</a>
          <button onClick={onLogin} className="px-10 py-2 mt-3 text-xl font-semibold text-center text-white transition duration-300 rounded-lg hover:from-orange-300 hover:to-orange-600 ease bg-gradient-to-br from-orange-500 to-orange-400 transition duration-300 md:w-auto">
            Giriş Yap
          </button>
          <p className="mt-2">Hala kayıt olmadıysan,<Link className="hover:underline text-blue-500" to="/register">kayıt ol</Link></p>
        </div>
      </div>
    </div>
  );
}
