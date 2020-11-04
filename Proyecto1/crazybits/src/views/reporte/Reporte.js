import React, { useState,useEffect,useCallback } from 'react';
import { Form, Button, Col, Row, Spinner } from "react-bootstrap";
//import { generarReporte } from "../../api/reports";
import { values, size } from "lodash";
import { toast } from "react-toastify";
import {useHistory} from "react-router-dom";
import { generarReporte } from "../../api/reports"
import { uploadImageApi } from "../../api/user"
import LogoCDMX from "../../img/CDMX.png"
import { useDropzone} from "react-dropzone"
import Camara from "../../img/camara.png"

import "./Reporte.scss"

//

export default function Reporte(props) {
     
    let history = useHistory();
    //const {setUserUp,UserUp,setReloading} = props
    const {UserUp,setReloading,userType} = props
    const [formData, setFormData] = useState(formReportVoidForm());
    const [signUpLoading, setSignUpLoading] = useState(false)
    const [guardar, setguardar] = useState(null)

    //const [bannerUrl, setBannerUrl] = useState(user?.banner ? `${API_HOST}/obtenerBanner?id=${user.id}`:null)
    //const [bannerFile, setBannerFile] = useState(null)
    const [imageFile, setImageFile] = useState(null)
    
    useEffect(() => {
        if(UserUp === ""){
            setReloading(true)
            history.push("/")
        }
        if (userType !== 0){
            history.push("/")
        }
        setFormData(formReportVoidForm())
        if (guardar !== null){
            setguardar(null)
            history.push("/Dashboard")
        }
    }, [guardar,userType,UserUp])

    const onDropImage = useCallback(acceptedFile => {
        const file = acceptedFile[0];
        // setBannerUrl(URL.createObjectURL(file))
        setImageFile(file)
    })
    const {getRootProps: getRootImageProps,getInputProps:getInputImageProps} = useDropzone({
        accept: "image/png, image/jpeg, image/jpg",
        noKeyboard:true,
        multiple:false,
        onDrop: onDropImage
    });

    const SubiImagenn = async () =>{
        if (imageFile) {
            await uploadImageApi(imageFile).catch(()=>{
                toast.error("Error al subir el nuevo banner");
            })
        }
    }

    const onChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }
    const onSubmit = async (e) => {
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
                    SubiImagenn()
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
            <img className="d-block mx-auto" src={LogoCDMX} alt="CDMX" width="25%"/>
                <br />
                <h1 className="my-1 py-1 h1">Reporte de baches</h1>
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
                                        <Form.Control as="textarea"  rows="7" placeholder="Descripcion" name="descripcion" defaultValue={formData.descripcion}/>
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Label>Fotografias del Bache</Form.Label>
                                    <div className="banner" {...getRootImageProps()}>
                                        <input type="file" {...getInputImageProps()} />
                                        <img className="d-block mx-auto" src={Camara} alt="CDMX" width="25%"/>
                                    </div>
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