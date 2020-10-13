import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Dashboard from './views/Dashboard';

function App() {
  return (
    [
      <div className="cover-container d-flex h-100 mx-auto flex-column">
        <Navbar/>
        <Dashboard/>
        <Footer/>
      </div>  
    ]
  );
}

export default App;
