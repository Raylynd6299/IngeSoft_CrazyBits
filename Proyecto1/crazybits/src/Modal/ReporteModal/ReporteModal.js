import React from 'react';
import {Modal,Button,Row,Image,Col} from "react-bootstrap";
import {cambiarStatusReport} from "../../api/reports"
import {API_HOST} from "../../utils/constant"


export default function ReporteModal(props) {
    const {show,setShow,reporte,reload, setreload} = props;

    console.log(reporte)

    return (
        <Modal className="report-modal" show={show} onHide={()=> setShow(false)} centered size="lg">
            <Modal.Header>
                <Modal.Title>
                    Reporte #{reporte?.idReport} - Realizado el {reporte?.fecha}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h3>Direccion:</h3>
                <h5> {reporte?.calle} #{reporte?.numero}, Colonia: {reporte?.colonia},  Alcaldia: {reporte?.Delegacion}, C.P.:{reporte?.CP} <br/>
                Entre Calle: {reporte?.entreCalle1} y calle: {reporte?.entreCalle2}</h5>
                
                <h3>Descripcion:</h3>
                <h6>{reporte?.descripcion}</h6>
                <Row className="justify-content-md-center">
                    <Imageness fotos={reporte?.fotos}/>
                </Row>
            </Modal.Body>
            <Modal.Footer>
                <Botones status={reporte?.status} idReport={reporte?.idReport} setShow={setShow} reload={reload} setreload={setreload}/>
            </Modal.Footer>
        </Modal>
    )
}
function Imageness(props){
    const{fotos} = props
    if (fotos !== "") {
        return(
            <Col xs={6} md={4}>
                <Image rounded  fluid  className="mr-3" src={
                    fotos ? `${API_HOST}/ObtenerFoto?imagen=${fotos}`:"ImagenNotFound"
                } alt = "Bache"/>
            </Col>
        )
    }
    return(
        <>
        </>
    )
}
function Botones(props){
    const{status,idReport,setShow,reload, setreload}=props;
    const estados = ["Recibido","Pendiente de validacion","Rechazado","Validado","En progreso de reparacion","Terminado"];
    if(status === 1){
        return (<>
            <Button onClick={()=>{CambiarEstado(idReport,status+1,setShow,reload, setreload)}} variant="primary">Pasar a {estados[status+1]}</Button>
            <Button onClick={()=>{CambiarEstado(idReport,status+2,setShow,reload, setreload)}} variant="primary">Pasar a {estados[status+2]}</Button>
            </>
        )
    }else if(status === 2){
        return(
            <h4>Este reporte fue rechazado</h4>
        )
    }else if(status === 0 || status < 5){
        return(
            <Button onClick={()=>{CambiarEstado(idReport,status+1,setShow,reload, setreload)}} variant="primary">Pasar a {estados[status+1]}</Button>
        )
    }else if(status === 5){
        return(
            <h4>Este reporte esta Terminado</h4>
        )
    }
}
function CambiarEstado(idReport,estatus,setShow,reload, setreload){
    cambiarStatusReport(idReport,estatus).then((response) => {
        setShow(false)
        if(reload === false){
            setreload(true)
        }else{
            setreload(false)
        }
    }).catch(() => {
        
    })
}