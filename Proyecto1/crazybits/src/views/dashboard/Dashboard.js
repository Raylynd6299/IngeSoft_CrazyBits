import React,{useState,useEffect} from "react";
import {Table} from "react-bootstrap"
import {map} from "lodash"
import {getUserApi,ObtenerReportesUsuario} from "../../api/user";
import {useHistory} from "react-router-dom"
import LogoCDMX from "../../img/CDMX.png"

export default function Dashboard(props){
    let history = useHistory()
    const {UserUp,setReloading,userType} = props
    const [reportes, setReportes] = useState(null)
    const [userInfo, setuserInfo] = useState({})
    useEffect(() => {
        if(UserUp === ""){
            setReloading(true)
            history.push("/")
        }
        if (userType !== 0){
            setReloading(true)
            history.push("/")
        }
        getUserApi(UserUp).then((response) => {
            
            setuserInfo(response)
        })

        ObtenerReportesUsuario(UserUp).then((response) => {
            setReportes(response?.Reportes);
        }).catch(() => {
            setReportes([]);
        })
    }, [UserUp,userType])

    return(
        <main role="main" className="flex-shrink-0 my-5 py-5">
                <div className="container py-3 d-flex flex-column ">
                <img className="d-block mx-auto" src={LogoCDMX} alt="CDMX" width="25%"/>
                <h1 className="my-1 py-1 h1">Reportes</h1>
                    <h2 className="my-1 py-1 h4">Nombre: {userInfo?.Usuario?.nombre} {userInfo?.Usuario?.apellidoPaterno} {userInfo?.Usuario?.apellidoMaterno} </h2>
                    <h3 className="my-1 py-1 h4">Correo: {userInfo?.Usuario?.email}</h3>
                    <p className="lead text-justify my-1 py-1">Aqui puede visualizar los reportes creados por usted y visualizar su status.</p>
                    <h2 className=" h2 my-3">Historial de Reportes</h2>
            
                    <div className="table-responsive">
                        <Table className="table table-striped">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Alcaldia</th>
                                    <th>Dirección principal</th>
                                    <th>Fecha</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                            {map(reportes,(reporte,index) => (
                                <Reporte key={index} reporte={reporte}/>
                            ) )}                               
                            </tbody>
                        </Table>
                    </div>
                </div>
            </main>
    )
}

function Reporte(props){
    const {reporte} = props;
    const estados = ["Recibido","Pendiente de validacion","Rechazado","Validado","En progreso de reparacion","Terminado"];
    return(
        <tr>
            <td>{reporte?.idReport}</td>
            <td>{reporte?.Delegacion}</td>
            <td>{reporte?.calle} {reporte?.numero},Col:{reporte?.colonia}, CP:{reporte?.CP}</td>
            <td>{reporte?.fecha}</td>
            <td>{estados[reporte?.status]}</td>
        </tr>
    )
}
