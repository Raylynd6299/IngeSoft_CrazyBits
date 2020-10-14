import React from 'react';
import $ from 'jquery';
import Popper from 'popper.js';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';

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
