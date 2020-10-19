import React,{useState} from 'react';
import { ToastContainer } from "react-toastify";
import  { AuthContext } from "./utils/context"

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
<<<<<<< HEAD
      <AuthContext.Provider value={UserUp}>
      <div id="ctn" className="cover-container d-flex h-100 mx-auto flex-column">
=======
    <>
      <div id="ctn" className="cover-container d-flex h-100 mx-auto flex-column">
>>>>>>> 1d423143270153c0c19920b304bdd207d7beaf4e
        <Navbar UserUp={UserUp} setUserUp={setUserUp}/>
        <ToastContainer
          containerId="ctn"
          position = "top-right" 
          autoClose = {5000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnVisibilityChange
          draggableDashboard
          pauseOnHover
        />
        <Footer/>
      </div> 
      </AuthContext.Provider>
  );
}

export default App;
