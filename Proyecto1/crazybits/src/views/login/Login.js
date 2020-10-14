import React from 'react';

class Login extends React.Component {
    render() {
        return (
            <div className="container mb-5 pb-5">
                <div className="py-5 text-center">
                    <br />
                    <br />
                    <br />
                    <img className="d-block mx-auto mb-4" src="../../img/brand/bootstrap-4.svg" alt="" width="72" height="72" />
                    <h2>Reporte de baches</h2>
                    <p className="lead">La Ciudad de México ha sufrido un deterioro en sus
                    vialidades a lo largo de los años, afectando a automovilistas, ciclistas e incluso peatones,
                    causando daños materielas y personales, en ocasiones de gravedad. Por eso se creo este sistema
                    que tiene la finalidad de atender los reportes realizados por la ciudadanía en la red vial primaria.
                    Inicia sesión y comienza a reportar los baches de la ciudad, de no contar con una cuenta favor de registrarse.
                    </p>
                </div>
                <form className="form-signin center">
                    <label for="inputEmail" className="sr-only">Correo electrónico</label>
                    <input type="email" id="inputEmail" className="form-control m-1 mt-2" placeholder="Correo electrónico" required autofocus />
                    <label for="inputPassword" className="sr-only">Contraseña</label>
                    <input type="password" id="inputPassword" className="form-control m-1 mt-2" placeholder="Contraseña" required />

                    <button className="btn btn-lg btn-primary btn-block m-1 mt-4" type="submit">Iniciar sesión</button>
                </form>
            </div>
        );
    }
}

export default Login;