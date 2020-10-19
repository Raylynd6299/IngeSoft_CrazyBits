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
                    <div className="table-responsive">
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Dirección</th>
                                    <th>Fecha</th>
                                    <th>Status</th>
                                    <th>Opcional</th>
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
                        </table>
                    </div>
                </div>
            </main>
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