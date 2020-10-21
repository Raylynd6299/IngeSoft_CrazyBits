import React,{useState} from 'react';
import {Modal,Button,Form,Row,Col} from "react-bootstrap";
import {toast} from "react-toastify"

export default function ConfigsModal(props) {
    const {show,setShow,reload, setreload,settipoRepos,Delegacion,tipoform} = props;
    const [formData, setFormData] = useState({campo:""})
    
    return (
        <Modal className="report-modal" show={show} onHide={()=> setShow(false)} centered size="lg">
            <Modal.Header>
                <Modal.Title>
                    Filtros de Busqueda de Reportes
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <CustomForm setShow={setShow} tipoform={tipoform} reload={reload} setreload={setreload} settipoRepos={settipoRepos} Delegacion={Delegacion} formData={formData} setFormData={setFormData} />
            </Modal.Body>
        </Modal>
    )
}

function CustomForm(props){
    const {setShow,tipoform,settipoRepos,Delegacion,formData,setFormData} = props;

    
    const onChange = e => {
        setFormData({...formData,[e.target.name]:e.target.value})
    }
    const onSubmit = e => {
        e.preventDefault();
        let respuesta = {}
        if (formData.campo !== ""){
            if(tipoform === 1){
                respuesta = {colonia:formData.campo,Delegacion:Delegacion}
                console.log(respuesta)
            }else if(tipoform === 2){
                respuesta = {estatus:parseInt(formData.campo),Delegacion:Delegacion}
            }else if(tipoform === 3){
                respuesta = {fecha:formData.campo,Delegacion:Delegacion}
            }
            settipoRepos({tipo:tipoform,params:respuesta})
            setFormData({campo:""})
            setShow(false)
        }else{
            toast.warning("El campo de texto debe estra lleno para aplicar el filtro")
            setShow(false)
        }
    }

    if (tipoform === 0){
        return(
            <Button onClick={()=>{settipoRepos({tipo:0,params:{}}); setShow(false)}} variant="primary">Aplicar Filtro</Button>
        )
    }else if (tipoform === 1){
        return(
            <Form onChange={onChange} onSubmit={onSubmit}>
                <Form.Group>
                    <Row>
                        <Col>
                            <Form.Label>Colonia</Form.Label>
                            <Form.Control type="text" placeholder="Colonia" name="campo" defaultValue={formData.campo}/>
                        </Col>
                    </Row>
                </Form.Group>
                <Button className="btn-block m-1 mt-4" variant="primary" type= "submit">Aplicar Filtro</Button>
            </Form>
        )
    }else if (tipoform === 2){
        return(
            <Form onChange={onChange} onSubmit={onSubmit}>
                <Form.Group>
                    <Row>
                        <Col>
                            <h3>Status</h3>
                            <ul>
                                <li>0 = Recibido</li>
                                <li>1 = Pendiente de validacion</li>
                                <li>2 = Rechazado</li>
                                <li>3 = alidado</li>
                                <li>4 = En progreso de reparacion</li>
                                <li>5 = Terminado</li>
                            </ul>
                            <Form.Control type="text" placeholder="Status" name="campo" defaultValue={formData.campo}/>
                        </Col>
                    </Row>
                </Form.Group>
                <Button className="btn-block m-1 mt-4" variant="primary" type= "submit">Aplicar Filtro</Button>
            </Form>
        )
    }else if (tipoform === 3){
        return(
            <Form onChange={onChange} onSubmit={onSubmit}>
                <Form.Group>
                    <Row>
                        <Col>
                            <Form.Label>Fecha</Form.Label>
                            <Form.Control type="text" placeholder="Fecha:YYYY-MM-DD" name="campo" defaultValue={formData.campo}/>
                        </Col>
                    </Row>
                </Form.Group>
                <Button className="btn-block m-1 mt-4" variant="primary" type= "submit">Aplicar Filtro</Button>
            </Form>
        )
    }

}
// function recharge(props){
//     const {reload,setreload} = props;
//     if ( reload === false ){
//         setreload(true)
//     }else{
//         setreload(false)
//     }
// }
