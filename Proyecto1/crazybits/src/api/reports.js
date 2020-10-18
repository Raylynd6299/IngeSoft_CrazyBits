import {API_HOST} from "../utils/constant";

export function obtenerReporte(reporte){
    const url = `${API_HOST}/ObtenerReporte?idReport=${idReport}`;

    const params ={
        headers: {
            "Content-Type": "application/json",
        }
    }
    return fetch(url, params).then(response=>{
        return response.json();
    }).then((result) => {
        return result;
    }).catch((err) => {
        return err
    })
}

export function  obtenerReporteUsuario()