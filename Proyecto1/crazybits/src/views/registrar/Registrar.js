import React,{useState,useEffect} from 'react';
import {Form, Button, Col, Row, Spinner} from "react-bootstrap"
import {isEmailValid} from "../../utils/validations"
import { signUpApi } from "../../api/signup"
import { values, size } from "lodash";
import { toast } from "react-toastify"
import {useHistory} from "react-router-dom";

//import logo from '../../img/brand/';
export default function Registrar(props){
    let history = useHistory();
    const {setUserUp,UserUp,setReloading} = props
    const [formData, setFormData] = useState(formUserVoidForm());
    const [signUpLoading, setSignUpLoading] = useState(false)

    useEffect(() => {
        if(UserUp !== ""){
            setReloading(true)
            history.push("/Reporte")
        }
    }, [UserUp])

    const onChange = e => {
        setFormData({...formData,[e.target.name]:e.target.value})
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
            if (!isEmailValid(formData.email)) {
                toast.warning("Email invalido")
            }else if(formData.Password !== formData.repeatPassword){
                toast.warning("Las contraseñas no son iguales")
            }else if(size(formData.Password) < 6){
                toast.warning("La contraseña tiene que tener al menos 6 caracteres")
            }else{
                setSignUpLoading(true)
                signUpApi(formData,{Tipo:0,Delegacion:""}).then(response => {
                    if(response.code) {
                        toast.warning(response.message)
                    }else{
                        toast.success("El registro ha sido correcto")
                        setUserUp(formData.email)
                        setFormData(formUserVoidForm())
                        history.push("/Dashboard")
                    }
                }).catch(()=>{
                    toast.error("Error del servidor, intentelo mas tarde")
                }).finally(()=>{
                    setSignUpLoading(false);
                })
            }
        }
    }

    return(
        <div className="container mb-5 pb-5 bg-light">
                <div className="py-5 text-center">
                    <br />
                    <img className="d-block mx-auto mb-4" src="../../img/brand/bootstrap.png" alt="" width="72" height="72" />
                    <h2>Reporte de baches</h2>
                    <p className="lead">Para acceder a este sistema es necesario que se registre proporcionando los
                    datos solicitados a continuación.
				</p>
                </div>

                <div className="row">
                    <div className="col-md-12 order-md-1">
                        <h4 className="mb-3">Registrar cuenta</h4>
                        
                        <Form  onSubmit = {onSubmit} onChange={onChange}>
                            <Form.Group>
                                <Row>
                                    <Col>
                                        <Form.Label>Nombre</Form.Label>
                                        <Form.Control type="text" placeholder="Nombre" name="nombre" defaultValue={formData.nombre}/>
                                    </Col>
                                    <Col>
                                        <Form.Label>Apellido paterno</Form.Label>
                                        <Form.Control type="text" placeholder="Apellido Paterno" name="apellidoPaterno" defaultValue={formData.apellidoPaterno}/>
                                    </Col>
                                    <Col>
                                        <Form.Label>Apellido materno</Form.Label>
                                        <Form.Control type="text" placeholder="Apellido Materno" name="apellidoMaterno" defaultValue={formData.apellidoMaterno}/>
                                    </Col>
                                </Row>
                            </Form.Group>
                            <Form.Group>
                                <Row>
                                    <Col>
                                        <Form.Label>Fecha de nacimiento</Form.Label>
                                        <Form.Control type="text" placeholder="Fecha YYYY-MM-DD" name="FeNa" defaultValue={formData.FeNa} />
                                    </Col>
                                    <Col>
                                        <Form.Label>CURP</Form.Label>
                                        <Form.Control type="text" placeholder="Clave Unica de Registro Poblacional" name="CURP" defaultValue={formData.CURP}/>
                                    </Col>
                                </Row>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Correo electronico</Form.Label>
                                <Form.Control type="email" placeholder = "Correo electronico" name="email" defaultValue={formData.email} />
                            </Form.Group>
                            <Form.Group>
                                <Row>
                                    <Col>
                                        <Form.Label>Contraseña</Form.Label>
                                        <Form.Control type="password" placeholder = "Contraseña" name ="Password" defaultValue={formData.Password} />
                                    </Col>
                                    <Col>
                                        <Form.Label>Confirmar contraseña</Form.Label>
                                        <Form.Control type="password" placeholder = "Confirmar contraseña" name="repeatPassword" defaultValue={formData.repeatPassword}/>
                                    </Col>
                                </Row>
                            </Form.Group>
                            <Button className="btn-block m-1 mt-4" variant="primary" type= "submit">
                                {!signUpLoading ? "Registrarse" : <Spinner animation="border"/>}
                            </Button>
                        </Form>
                    </div>
                </div>
            </div>
    );
}

function formUserVoidForm(){
    return {
        nombre:"",
        apellidoPaterno: "",
        apellidoMaterno: "", 
        email :"",
        FeNa:"",
        Password :"",
        repeatPassword:"",
        CURP :""
    }
}
