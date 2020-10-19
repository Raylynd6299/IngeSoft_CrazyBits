<<<<<<< HEAD
import React,{useState,useEffect} from "react";
import {map} from "lodash"
import {getUserApi,ObtenerReportesUsuario} from "../../api/user";
import {API_HOST} from "../../utils/constant"

export default function Dashboard(props){
    const {setUserUp,UserUp,setReloading} = props
    const [reportes, setReportes] = useState(null)
    const [userInfo, setuserInfo] = useState(null)
    useEffect(() => {
        getUserApi(UserUp).then((response) => {
            setuserInfo(response)
        })
        ObtenerReportesUsuario(UserUp).then((response) => {
            setReportes(response);
        }).catch(() => {
            setReportes([]);
        })
    }, [UserUp])

    return(
        <main role="main" className="flex-shrink-0 m-auto bg-light">
                <div className="container pt-3 d-flex flex-column">
                    <h1 className="mt-5">Sticky footer with fixed navbar</h1>
                    <p className="lead">Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit.</p>
                    <h1 className="mt-5">Reportes</h1>
=======
import React, {useState,useEffect} from 'react';
import { Form, Button, Spinner, Table } from "react-bootstrap"


export default function Dashboard(props){
        return (
            <main role="main" className="flex-shrink-0 my-5 py-5">
                <div className="container py-3 d-flex flex-column ">
                <h1 className="h1">Reportes</h1>
                    <h2 className="h3">Nombre</h2>
                    <h3 className="h3">Correo</h3>
                    <p className="text-justify">Aqui puede visualizar los reportes creados por usted y visualizar su status.</p>
                    <h2 className=" h2 my-3">Historial de Reportes</h2>
>>>>>>> refs/remotes/origin/master
                    <div className="table-responsive">
                        <Table className="table table-striped">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Colonia</th>
                                    <th>Dirección principal</th>
                                    <th>Fecha</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1,001</td>
                                    <td>Lorem</td>
                                    <td>ipsum</td>
                                    <td>dolor</td>
                                    <td>sit</td>
                                </tr>
                                
                            </tbody>
                        </Table>
                    </div>
                </div>
            </main>
<<<<<<< HEAD
    )
}

function Reporte(props){
    const {reporte} = props;
    return(
        <tr>
            <td>{reporte}</td>
            <td>Lorem</td>
            <td>ipsum</td>
            <td>dolor</td>
            <td>sit</td>
        </tr>
    )
}
=======
        );
    }
>>>>>>> refs/remotes/origin/master
