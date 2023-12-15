import './App.css';
import Header from './Components/Header';
import Section from './Components/Section';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Home from './Pages/Home';
import Register from './Pages/Register';
import app from 'firebase/compat/app';
import UserProfile from './Pages/UserProfile';
import Favorites from './Pages/Favorites';
import Categories from './Pages/Categories';

function App() {
  return (

    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/register' element={<Register />}></Route>
      <Route path='/userprofile' element={<UserProfile />}></Route>
      <Route path='favorites' element={<Favorites />}></Route>
      <Route path='/categories' element = {<Categories/>}></Route>



    </Routes>
  );
}

export default App;
