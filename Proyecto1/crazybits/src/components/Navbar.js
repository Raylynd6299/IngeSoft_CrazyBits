import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Navbar extends React.Component {
    render() {
        return <Router>
            <header>
                <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                    <a className="navbar-brand" href="#">Sistema de baches</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse"
                        aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link className="nav-link" href="#">Inicio <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item active">
                                <Link className="nav-link" href="#">Registrar usuario <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item active">
                                <Link className="nav-link" href="#">Registrar reporte <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</Link>
                            </li>
                        </ul>
                        <ul class="navbar-nav">
                            <li class="nav-item active">
                                <Link class="nav-link" href="#">Salir <span class="sr-only">(current)</span></Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        </Router>;
    }
}
export default Navbar