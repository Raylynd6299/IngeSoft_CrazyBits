import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Dashboard from "../views/dashboard/Dashboard";
import DashboardGestor from "../views/dashboardGestor/dashboardGestor";
import Home from "../views/home/Home";
import Login from "../views/login/Login";
import Registrar from "../views/registrar/Registrar";
import Reporte from "../views/reporte/Reporte";
import Salir from "../views/salir/Salir"



export default function Navbar(props){
    const {UserUp,setUserUp,setReloading,userType, setUserType} = props;
    return (
        <Router>
            <header>
                <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark py-1" id="nav">
                    <Link className="navbar-brand font-weight-lighter" to="/">Sistema de Gestion de Baches | CDMX baches</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse"
                        aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav mr-auto">
                            {UserUp !== "" && userType === 0 &&
                            <li className="nav-item active">
                                <Link className="nav-link" to="/Reporte">Registrar reporte <span className="sr-only">(current)</span></Link>
                            </li>
                            }
                            {UserUp !== "" && userType === 0 &&
                            <li className="nav-item active">
                                <Link className="nav-link" to="/Dashboard">Tablero</Link>
                            </li>
                            }
                            {UserUp !== "" && userType === 1 &&
                            <li className="nav-item active">
                                <Link className="nav-link" to="/DashboardGestor">Tablero Gestor</Link>
                            </li>
                            }
                        </ul>
                        <ul class="navbar-nav">
                            {UserUp === "" &&  
                            <li className="nav-item active">
                                <Link className="nav-link" to="/Registrar">Registrar usuario <span className="sr-only">(current)</span></Link>
                            </li>
                            }
                            {UserUp === "" && 
                            <li class="nav-item active">
                                <Link class="nav-link" to="/Login">Iniciar Sesión<span class="sr-only">(current)</span></Link>
                            </li>
                            }
                            {UserUp !== "" &&
                            <li class="nav-item active">
                                <Link class="nav-link" to="/out">Salir<span class="sr-only">(current)</span></Link>
                            </li>
                            }
                            
                        </ul>
                    </div>
                    
                </nav>
                
            </header>
            <Route path='/' exact component={() => <Home UserUp={UserUp} setUserUp={setUserUp} setReloading={setReloading}/>}/>
            <Route path='/Dashboard' exact component={() => <Dashboard UserUp={UserUp} setUserUp={setUserUp} setReloading={setReloading} userType={userType}/>}/>
            <Route path='/DashboardGestor' exact component={() => <DashboardGestor UserUp={UserUp} setUserUp={setUserUp} setReloading={setReloading} userType={userType}/>}/>
            <Route path='/Registrar' exact component={() => <Registrar UserUp={UserUp} setUserUp={setUserUp} setReloading={setReloading} userType={userType}/>}/>
            <Route path='/Reporte' exact component={() => <Reporte UserUp={UserUp} setUserUp={setUserUp} setReloading={setReloading} userType={userType} setUserType={setUserType}/>}/>
            <Route path='/Login' exact component={() => <Login UserUp={UserUp} setUserUp={setUserUp} setReloading={setReloading} userType={userType} setUserType={setUserType}/>}/>
            <Route path='/out' exact component={() => <Salir UserUp={UserUp} setUserUp={setUserUp} setReloading={setReloading} userType={userType} setUserType={setUserType}/>}/>
        </Router>
    );
}