import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Dashboard from "../views/dashboard/Dashboard";
import Home from "../views/home/Home";
import Login from "../views/login/Login";
import Registrar from "../views/registrar/Registrar";
import Reporte from "../views/reporte/Reporte";

class Navbar extends React.Component {
    render() {
        return <Router>
            <header>
                <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                    <Link className="navbar-brand" to="/">Sistema de baches</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse"
                        aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/Registrar">Registrar usuario <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item active">
                                <Link className="nav-link" to="/Reporte">Registrar reporte <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item active">
                                <Link className="nav-link" to="/Dashboard">Dashboard</Link>
                            </li>
                        </ul>
                        <ul class="navbar-nav">
                            <li class="nav-item active">
                                <Link class="nav-link" to="/Login">Iniciar Sesión<span class="sr-only">(current)</span></Link>
                            </li>
                            <li class="nav-item active">
                                <Link class="nav-link" to="/">Salir<span class="sr-only">(current)</span></Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
            <Route path='/' exact component={Home}/>
            <Route path='/Dashboard' exact component={Dashboard}/>
            <Route path='/Registrar' exact component={Registrar}/>
            <Route path='/Reporte' exact component={Reporte}/>
            <Route path='/Login' exact component={Login}/>
        </Router>;
    }
}
export default Navbar