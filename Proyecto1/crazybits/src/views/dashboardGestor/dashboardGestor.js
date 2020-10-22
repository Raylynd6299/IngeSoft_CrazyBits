import React,{useState,useEffect} from "react";
import {Table,Button,Col,Row} from "react-bootstrap"
import {map} from "lodash"
import {getUserApi,ObtenerReportesGestor,ObtenerReportesGestorColonia,ObtenerReportesGestorEstatus,ObtenerReportesGestorFecha} from "../../api/user";
import {useHistory} from "react-router-dom"
import LogoCDMX from "../../img/CDMX.png"
import ReporteModal from "../../Modal/ReporteModal/ReporteModal"
import ConfigsModal from "../../Modal/ConfigsModal/ConfigsModal"

export default function DashboardGestor(props){
    let history = useHistory()
    const {UserUp,setReloading,userType} = props
    const [reportes, setReportes] = useState(null)
    const [userInfo, setuserInfo] = useState({})

    const [showModal, setShowModal] = useState(false)
    const [showModal2, setShowModal2] = useState(false)
    const [tipoRepos, settipoRepos] = useState({tipo:0,params:{}})
    const [reporteModal, setreporteModal] = useState({})
    const [reload, setreload] = useState(false)
    const [tipoform, settipoform] = useState(0)

    useEffect(() => {
        if(UserUp === ""){
            setReloading(true)
            history.push("/")
        }
        if (userType !== 1){
            setReloading(true)
            history.push("/")
        }
        getUserApi(UserUp).then((response) => {
            
            setuserInfo(response)
            settipoRepos({tipo:0,params:{}})
        })
        
        
    }, [UserUp,userType,reload])

    useEffect(() => {
        if(tipoRepos.tipo === 0){
            //  "Milpa Alta"  userInfo?.Usuario?.Delegacion 
            ObtenerReportesGestor(userInfo?.Usuario?.Delegacion).then((response) => {
                setReportes(response?.Reportes);
            }).catch(() => {
                setReportes([]);
            })
        }else if(tipoRepos.tipo === 1){
            //ObtenerReportesDelegacionColonia
            ObtenerReportesGestorColonia(tipoRepos?.params).then((response) => {
                setReportes(response?.Reportes);
            }).catch(() => {
                setReportes([]);
            })
        }else if(tipoRepos.tipo === 2){
            //ObtenerReportesDelegacionEstatus
            ObtenerReportesGestorEstatus(tipoRepos?.params).then((response) => {
                setReportes(response?.Reportes);
            }).catch(() => {
                setReportes([]);
            })
        }else if(tipoRepos.tipo === 3){
            //ObtenerReportesDelegacionFecha
            ObtenerReportesGestorFecha(tipoRepos?.params).then((response) => {
                setReportes(response?.Reportes);
            }).catch(() => {
                setReportes([]);
            })
        }
        
    }, [tipoRepos,reload])

    return(
        <main role="main" className="flex-shrink-0 my-5 py-5">
                <div className="container py-3 d-flex flex-column ">
                <img className="d-block mx-auto" src={LogoCDMX} alt="CDMX" width="25%"/>
                
                    <h1 className="my-1 py-1 h1">Reportes</h1>
                    
                    <h3 className="my-1 py-1 h4">Nombre: {userInfo?.Usuario?.nombre} {userInfo?.Usuario?.apellidoPaterno} {userInfo?.Usuario?.apellidoMaterno} </h3>
                    <h3 className="my-1 py-1 h4">Correo: {userInfo?.Usuario?.email}</h3>
                    <h3 className="my-1 py-1 h4">Alcaldia: {userInfo?.Usuario?.Delegacion}</h3>
                    <p className="text-justify my-1 py-1">Aqui puede visualizar los reportes creados por los Usuarios, que corespondan a su delegacion asignada, y gestionar su estado.</p>
                    
                    <Row>
                        <Col>
                            <h3>Filtros:</h3>
                        </Col>
                        <Col>
                            <Button onClick={()=>{settipoRepos({tipo:0,params:{}}); }}>Sin filtros</Button>
                        </Col>
                        <Col>
                            <Button onClick={()=>{setShowModal2(true); settipoform(1)}}>Por Colonia</Button>
                        </Col>
                        <Col>
                            <Button onClick={()=>{setShowModal2(true); settipoform(2)}}>Por Status</Button>
                        </Col>
                        <Col>
                            <Button onClick={()=>{setShowModal2(true); settipoform(3)}}>Por Fecha</Button>
                        </Col>
                        <Col>
                            <ConfigsModal tipoform={tipoform} show={showModal2} setShow={setShowModal2} reload={reload} setreload={setreload} settipoRepos={settipoRepos} Delegacion={userInfo?.Usuario?.Delegacion}/>
                        </Col>
                    </Row>
                    <div className="table-responsive">
                        <Table className="table table-striped">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Alcaldia</th>
                                    <th>Dirección principal</th>
                                    <th>Fecha</th>
                                    <th>Status</th>
                                    <th>Ver/Gestionar</th>
                                </tr>
                            </thead>
                            <tbody>
                            {map(reportes,(reporte,index) => (
                                <Reporte key={index} reporte={reporte} setShowModal={setShowModal} setreporteModal={setreporteModal}/>
                            ) )}                               
                            </tbody>
                        </Table>
                        <ReporteModal   show={showModal} setShow={setShowModal} reporte={reporteModal} reload={reload} setreload={setreload}/>
                    </div>
                </div>
            </main>
    )
}

function Reporte(props){
    const {reporte,setShowModal,setreporteModal} = props;
    const estados = ["Recibido","Pendiente de validacion","Rechazado","Validado","En progreso de reparacion","Terminado"];
    return(
        <tr>
            <td>{reporte?.idReport}</td>
            <td>{reporte?.Delegacion}</td>
            <td>{reporte?.calle} {reporte?.numero}, Col:{reporte?.colonia}, CP:{reporte?.CP}</td>
            <td>{reporte?.fecha}</td>
            <td>{estados[reporte?.status]}</td>
            <td><Button onClick={()=>{setShowModal(true); setreporteModal(reporte)}}>Ver/Gestionar</Button> </td>
        </tr>
    )
}
