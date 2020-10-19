import React,{useState} from 'react';
import { ToastContainer } from "react-toastify";

//import $ from 'jquery';
//import Popper from 'popper.js';


import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';

import Navbar from './components/Navbar';
import Footer from './components/Footer';


function App() {
  const [UserUp, setUserUp] = useState("") //UserUp Maneja el estado del uauario si esta vacia el usuario no esta dentro del sistema
  // setUserUp Maneja el control del estado y cambia el valor
  return (
    <>
<<<<<<< HEAD
      <div id="ctn" className="cover-container d-flex h-100 mx-auto flex-column" >
        <Navbar/>
=======
      <div id="ctn" className="cover-container d-flex h-100 mx-auto flex-column bg-light">
        <Navbar UserUp={UserUp} setUserUp={setUserUp}/>
>>>>>>> e9335d37f9e43a8787d555c4f26c6cecfeb07013
        <ToastContainer
          containerId="ctn"
          position = "top-right" 
          autoClose = {5000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnVisibilityChange
          draggable
          pauseOnHover
        />
        <Footer/>
      </div> 
      
      
       
    </>
  );
}

export default App;
