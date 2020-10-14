import React from 'react';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap'

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Dashboard from './views/dashboard/Dashboard';
import Home from './views/home/Home'

function App() {
  return (
    [
      <div className="cover-container d-flex h-100 mx-auto flex-column bg-light">
        <Navbar/>
        <Footer/>
      </div>  
    ]
  );
}

export default App;
