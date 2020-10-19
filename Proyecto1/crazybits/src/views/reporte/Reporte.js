import React, { useState,useEffect } from 'react';
import { Form, Button, Col, Row, Spinner } from "react-bootstrap";
//import { generarReporte } from "../../api/reports";
import { values, size } from "lodash";
import { toast } from "react-toastify";
import {useHistory} from "react-router-dom";
import { generarReporte } from "../../api/reports"


export default function Reporte(props) {
     
    let history = useHistory();
    //const {setUserUp,UserUp,setReloading} = props
    const {UserUp,setReloading} = props
    const [formData, setFormData] = useState(formReportVoidForm());
    const [signUpLoading, setSignUpLoading] = useState(false)
    const [guardar, setguardar] = useState(null)
    useEffect(() => {
        if(UserUp === ""){
            setReloading(true)
            history.push("/")
        }
        setFormData(formReportVoidForm())
        if (guardar !== null){
            setguardar(null)
            history.push("/Dashboard")
        }
    }, [guardar])
    const onChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }
    const onSubmit = e => {
        e.preventDefault();
        
        let validCount = 0
        values(formData).some(value =>{
            value && validCount++;
            return null;
        });

        if (validCount !== size(formData)) {
            toast.warning("Completa todos los campos del formulario")
        } else{
            setSignUpLoading(true)
            
            generarReporte(formData,{emailUser:UserUp,fotos:""}).then(response => {
                console.log(response)
                if(response.status !== 201) {
                    toast.warning(response.message)
                }else{
                    toast.success("El registro ha sido correcto")
                    setguardar("listo")
                }
            }).catch(()=>{
                toast.error("Error del servidor, intentelo mas tarde")
            }).finally(()=>{
                setSignUpLoading(false);
            })
        }
    }
    return (
        <div className="container mb-5 pb-5">
            <div className="py-5 text-center">
                <br />
                <h2>Reporte de baches</h2>
                <p className="lead">Llene todos los campos solicitados.</p>
            </div>

            <div className="row">
                <div className="col-md-12 order-md-1">
                    <h4 className="mb-3">Reportar bache</h4>
                    <Form onChange={onChange} onSubmit={onSubmit}>
                        <Form.Group>
                            <Row>
                                <Col>
                                    <Form.Label>Calle</Form.Label>
                                    <Form.Control type="text" placeholder="Calle" name="calle" defaultValue={formData.calle} />
                                </Col>
                                <Col>
                                    <Form.Label>Número</Form.Label>
                                    <Form.Control type="text" placeholder="424" name="numero" defaultValue={formData.numero} />
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
                                    <Form.Label>Alcaldía</Form.Label>
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
                                    <Form.Control type="text" placeholder="00000" name="CP" defaultValue={formData.CP} />
                                </Col>
                            </Row>
                        </Form.Group>
                        <Form.Group>
                            <Row>
                                <Col>
                                    <Form.Group>
                                        <Form.Label>Descripción</Form.Label>
                                        <Form.Control as="textarea"  rows="6" placeholder="Descripcion" name="descripcion" defaultValue={formData.descripcion}/>
                                    </Form.Group>
                                </Col>
                            </Row>
                        </Form.Group>
                        <Button className="btn-block m-1 mt-4" variant="primary" type= "submit">
                            {!signUpLoading ? "Reportar" : <Spinner animation="border"/>}
                        </Button>
                    </Form>
                </div>
            </div>
        </div>
    );
}

function formReportVoidForm() {
    //status: 0,fecha: "",fotos: "",emailUser: ""
    return {
        descripcion: "",
        calle: "",
        numero: 0,
        entreCalle1: "",
        entreCalle2: "",
        Delegacion: "",
        colonia: "",
        CP: "",
    }
}