import React from 'react'
import {BrowserRouter as Router,Route} from "react-router-dom";
import Dashboard from "../views/dashboard/Dashboard";
import Home from "../views/home/Home";
import Login from "../views/login/Login";
import Registrar from "../views/registrar/Registrar";
import Reporte from "../views/reporte/Reporte";

export default function Routing(props) {
    const {UserUp,setUserUp,setReloading} =props
    return(
        <Router>
            <Route path='/' exact component={() => <Home UserUp={UserUp} setUserUp={setUserUp} setReloading={setReloading}/>}/>
            <Route path='/Dashboard' exact component={() => <Dashboard UserUp={UserUp} setUserUp={setUserUp} setReloading={setReloading}/>}/>
            <Route path='/Registrar' exact component={() => <Registrar UserUp={UserUp} setUserUp={setUserUp} setReloading={setReloading}/>}/>
            <Route path='/Reporte' exact component={() => <Reporte UserUp={UserUp} setUserUp={setUserUp} setReloading={setReloading}/>}/>
            <Route path='/Login' exact component={() => <Login UserUp={UserUp} setUserUp={setUserUp} setReloading={setReloading}/>}/>
        </Router>
    )

}