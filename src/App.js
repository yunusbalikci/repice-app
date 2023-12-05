import './App.css';
import Header from './Components/Header';
import Section from './Components/Section';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Home from './Pages/Home';
import Register from './Pages/Register';
import { Motion } from 'react-motion';


function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/register' element={<Register />}></Route>



    </Routes>
  );
}

export default App;
