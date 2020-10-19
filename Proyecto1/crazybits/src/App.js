import React from 'react';
import { ToastContainer } from "react-toastify";

//import $ from 'jquery';
//import Popper from 'popper.js';


import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';

import Navbar from './components/Navbar';
import Footer from './components/Footer';


function App() {
  return (
    <>
      <div id="ctn" className="cover-container d-flex h-100 mx-auto flex-column" >
        <Navbar/>
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
