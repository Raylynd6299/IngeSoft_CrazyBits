import React from 'react';

class Reporte extends React.Component {
    render() {
        return (
            <div class="container">
                <div class="py-5 text-center">
                    <br />
                    <img class="d-block mx-auto mb-4" src="./assets/brand/bootstrap-solid.svg" alt="" width="72" height="72" />
                    <h2>Reporte de baches</h2>
                    <p class="lead">Llene todos los campos solicitados.</p>
                </div>

                <div class="row">
                    <div class="col-md-12 order-md-1">
                        <h4 class="mb-3">Reportar bache</h4>
                        <form class="needs-validation" novalidate>
                            <div class="row">
                                <div class="col-md-5 mb-3">
                                    <label for="calle">Calle</label>
                                    <input type="text" class="form-control" id="calleBache" placeholder="Av. Insugentes Sur"
                                        required />
                                    <div class="invalid-feedback">
                                        Campo requerido.
                            </div>
                                </div>
                                <div class="col-md-2 mb-3">
                                    <label for="numero">Número</label>
                                    <input type="text" class="form-control" id="numBache" placeholder="424" required />
                                    <div class="invalid-feedback">
                                        Campo requerido.
                            </div>
                                </div>
                                <div class="col-md-5 mb-3">
                                    <label for="colonia">Colonia</label>
                                    <input type="text" class="form-control" id="coloniaBache" placeholder="Roma Sur" required />
                                    <div class="invalid-feedback">
                                        Campo requerido.
                            </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6 mb-3">
                                    <label for="fechaNacimiento">Entre calle 1</label>
                                    <input type="text" class="form-control" id="calle1" placeholder="Aguascalientes" required />
                                    <div class="invalid-feedback">
                                        Campo requerido.
                            </div>
                                </div>

                                <div class="col-md-6 mb-3">
                                    <label for="curp">Entre calle 2</label>
                                    <input type="text" class="form-control" id="calle2" placeholder="Tlaxcala" required />
                                    <div class="invalid-feedback">
                                        Campo requerido.
                            </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-md-6 mb-3">
                                    <label for="alcaldia">Alcaldía</label>
                                    <select class="custom-select d-block w-100" id="alcaldiaBache" required>
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
                                <div class="col-md-3 mb-3">
                                    <label for="zip">C.P.</label>
                                    <input type="text" class="form-control" id="cp" placeholder="06760" required />
                                    <div class="invalid-feedback">
                                        Campo requerido.
                            </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6 mb-3">
                                    <label for="curp">Descripción</label>
                                    <textarea class="form-control" id="descripcion" rows="3" required></textarea>
                                    <div class="invalid-feedback">
                                        Campo requerido.
                            </div>
                                </div>
                                <div class="col-md-6 mb-3">
                                    <label for="exampleFormControlFile1">Fotografia</label>
                                    <p>Tome una fotografía donde se vea bien el bache.</p>
                                    <input type="file" class="form-control-file" id="exampleFormControlFile1" />
                                </div>
                            </div>
                            <hr class="mb-4" />
                            <button class="btn btn-primary btn-lg btn-block" type="submit">Reportar</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
export default Reporte;