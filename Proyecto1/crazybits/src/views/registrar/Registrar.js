import React from 'react';

class Registrar extends React.Component {
    render() {
        return (
            <div class="container">
                <div class="py-5 text-center">
                    <br />
                    <img class="d-block mx-auto mb-4" src="./assets/brand/bootstrap-solid.svg" alt="" width="72" height="72" />
                    <h2>Reporte de baches</h2>
                    <p class="lead">Para acceder a este sistema es necesario que se registre proporcionando los
                    datos solicitados a continuación.
				</p>
                </div>

                <div class="row">
                    <div class="col-md-12 order-md-1">
                        <h4 class="mb-3">Registrar cuenta</h4>
                        <form class="needs-validation" novalidate>
                            <div class="row">
                                <div class="col-md-4 mb-3">
                                    <label for="nombre">Nombre</label>
                                    <input type="text" class="form-control" id="nombre" required />
                                    <div class="invalid-feedback">
                                        Campo requerido.
								</div>
                                </div>
                                <div class="col-md-4 mb-3">
                                    <label for="apellidoPat">Apellido Paterno</label>
                                    <input type="text" class="form-control" id="aPaterno" required />
                                    <div class="invalid-feedback">
                                        Campo requerido.
								</div>
                                </div>
                                <div class="col-md-4 mb-3">
                                    <label for="apellidoMat">Apellido Materno</label>
                                    <input type="text" class="form-control" id="aMaterno" required />
                                    <div class="invalid-feedback">
                                        Campo requerido.
								</div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6 mb-3">
                                    <label for="fechaNacimiento">Fecha de nacimiento</label>
                                    <input type="text" class="form-control" name="input" placeholder="YYYY-MM-DD" required
                                        pattern="(?:19|20)\[0-9\]{2}-(?:(?:0\[1-9\]|1\[0-2\])-(?:0\[1-9\]|1\[0-9\]|2\[0-9\])|(?:(?!02)(?:0\[1-9\]|1\[0-2\])-(?:30))|(?:(?:0\[13578\]|1\[02\])-31))"
                                        title="Enter a date in this format YYYY-MM-DD" />
                                    <div class="invalid-feedback">
                                        Campo requerido.
								</div>
                                </div>

                                <div class="col-md-6 mb-3">
                                    <label for="curp">CURP<span class="text-muted"></span></label>
                                    <input type="text" class="form-control" id="curp" placeholder="Clave Unica de Registro Poblacional" required />
                                    <div class="invalid-feedback">
                                        Campo requerido.
								</div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6 mb-3">
                                    <label for="fechaNacimiento">Alcaldía</label>
                                    <select class="custom-select d-block w-100" id="alcaldia" required>
                                        <option value="">Elegir...</option>
                                        <option>Álvaro Obregón</option>
                                        <option>Azcapotzalco</option>
                                        <option>Benito Juárez</option>
                                        <option>Coyoacán</option>
                                        <option>Cuajimalpa de Morelos</option>
                                        <option>Cuauhtémoc</option>
                                        <option>Gustavo A. Madero</option>
                                        <option>Iztacalco</option>
                                        <option>Iztapalapa</option>
                                        <option>La Magdalena Contreras</option>
                                        <option>Miguel Hidalgo</option>
                                        <option>Milpa Alta</option>
                                        <option>Tlalpan</option>
                                        <option>Tláhuac</option>
                                        <option>Venustiano Carranza</option>
                                        <option>Xochimilco</option>
                                    </select>
                                    <div class="invalid-feedback">
                                        Campo requerido.
								</div>
                                </div>

                                <div class="col-md-6 mb-3">
                                    <label for="curp">Tipo de usuario<span class="text-muted"></span></label>
                                    <select class="custom-select d-block w-100" id="tipo" required>
                                        <option value="">Elegir...</option>
                                        <option>Ciudadano</option>
                                        <option>Gestor</option>
                                    </select>
                                    <div class="invalid-feedback">
                                        Campo requerido.
								</div>
                                </div>
                            </div>
                            <div class="mb-3">
                                <label for="email">Correo electrónico</label>
                                <input type="email" class="form-control" id="email" placeholder="usuario@ejemplo.com" required />
                                <div class="invalid-feedback">
                                    Campo requerido.
								</div>
                            </div>

                            <div class="row">
                                <div class="col-md-6 mb-3">
                                    <label for="password">Contraseña</label>
                                    <input type="password" class="form-control" id="password" required />
                                    <div class="invalid-feedback">
                                        Campo requerido.
								</div>
                                </div>
                                <div class="col-md-6 mb-3">
                                    <label for="password">Confirmar contraseña</label>
                                    <input type="password" class="form-control" id="verPassword" required />
                                    <div class="invalid-feedback">
                                        Campo requerido.
								</div>
                                </div>
                            </div>
                            <hr class="mb-4" />
                            <button class="btn btn-primary btn-lg btn-block" type="submit">Registrar</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Registrar;