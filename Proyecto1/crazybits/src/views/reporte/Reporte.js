import React, { useState } from 'react';
import { Form, Button, Col, Row, Spinner } from "react-bootstrap";
import { generarReporte } from "../../api/reports";
import { values, size } from "lodash";
import { toast } from "react-toastify";

export default function Reporte() {
    const [formData, setFormData] = useState(formReportVoidForm());
    const [signUpLoading, setSignUpLoading] = useState(false)

    const onChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    return (
        <div className="container mb-5 pb-5">
            <div className="py-5 text-center">
                <br />
                <img className="d-block mx-auto mb-4" src="./assets/brand/bootstrap-solid.svg" alt="" width="72" height="72" />
                <h2>Reporte de baches</h2>
                <p className="lead">Llene todos los campos solicitados.</p>
            </div>

            <div className="row">
                <div className="col-md-12 order-md-1">
                    <h4 className="mb-3">Reportar bache</h4>
                    <Form onChange={onChange}>
                        <Form.Group>
                            <Row>
                                <Col>
                                    <Form.Label>Calle</Form.Label>
                                    <Form.Control type="text" placeholder="Calle" name="calle" defaultValue={formData.calle} />
                                </Col>
                                <Col>
                                    <Form.Label>Número</Form.Label>
                                    <Form.Control type="number" placeholder="424" name="numero" defaultValue={formData.numero} />
                                </Col>
                                <Col>
                                    <Form.Label>Colonia</Form.Label>
                                    <Form.Control type="text" placeholder="Colonia" name="colonia" defaultValue={formData.colonia} />
                                </Col>
                            </Row>
                        </Form.Group>
                        <Form.Group>
                            <Row>
                                <Col>
                                    <Form.Label>Entre Calle 1</Form.Label>
                                    <Form.Control type="text" placeholder="Av. Principal" name="entreCalle1" defaultValue={formData.entreCalle1} />
                                </Col>
                                <Col>
                                    <Form.Label>Entre Calle 2</Form.Label>
                                    <Form.Control type="text" placeholder="Calle Secundaria" name="entreCalle2" defaultValue={formData.entreCalle2} />
                                </Col>
                            </Row>
                        </Form.Group>
                        <Form.Group >
                            <Row>
                                <Col>
                                    <Form.label>Alcaldía</Form.label>
                                    <Form.Control as="select" size="sm" name="Delegacion">
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
                                    </Form.Control>
                                </Col>
                                <Col>
                                    <Form.Label>C.P.</Form.Label>
                                    <Form.Control type="number" placeholder="00000" name="CP" defaultValue={formData.CP} />
                                </Col>
                            </Row>
                        </Form.Group>
                        <Form.Group>
                            <Row>
                                <Col>
                                    <Form.Group>
                                        <Form.Label>Descripción</Form.Label>
                                        <Form.Group as="textarea" rows="4"></Form.Group>
                                    </Form.Group>
                                </Col>
                                <Col>
                                    
                                </Col>
                            </Row>
                        </Form.Group>
                    </Form>

                    <form className="needs-validation" novalidate>

                        <div className="row">
                            <div className="col-md-6 col-sm-12 mb-3">
                                <label for="alcaldia">Alcaldía</label>
                                <select className="custom-select d-block w-100" id="alcaldiaBache" required>
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
                                <div className="invalid-feedback">
                                    Campo requerido.
                            </div>
                            </div>
                            <div className="col-md-6 col-sm-12 mb-3">
                                <label for="zip">C.P.</label>
                                <input type="text" className="form-control" id="cp" placeholder="06760" required />
                                <div className="invalid-feedback">
                                    Campo requerido.
                            </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 col-sm-12 mb-3">
                                <label for="curp">Descripción</label>
                                <textarea className="form-control" id="descripcion" rows="3" required></textarea>
                                <div className="invalid-feedback">
                                    Campo requerido.
                            </div>
                            </div>
                            <div className="col-md-6 col-sm-12 mb-3">
                                <label for="exampleFormControlFile1">Fotografia</label>
                                <p>Tome una fotografía donde se vea bien el bache.</p>
                                <input type="file" className="form-control-file" id="exampleFormControlFile1" />
                            </div>
                        </div>
                        <hr className="mb-4" />
                        <button className="btn btn-primary btn-lg btn-block" type="submit">Reportar</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

function formReportVoidForm() {
    return {
        status: 0,
        fecha: "",
        descripcion: "",
        fotos: "",
        calle: "",
        numero: 0,
        entreCalle1: "",
        entreCalle2: "",
        Delegacion: "",
        colonia: "",
        CP: "",
        emailUser: "prueba@prueba.com",
    }
}