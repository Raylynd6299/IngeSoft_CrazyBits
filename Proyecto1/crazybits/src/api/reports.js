import {API_HOST} from "../utils/constant";

export function obtenerReporte(reporte){
    const url = `${API_HOST}/ObtenerReporte?idReport`;

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

export function generarReporte(){
    const url = `${API_HOST}/AltaReporte`
    const params = {
        metod:"POST",
        headers:{
            "Content-Type": "application/json",
        },
        body:JSON.stringify()
    }

    return fetch(url, params).then(response => {
        if(response.status >= 200 && response.status < 300){
            return response.json();
        }
        return{code:404, message: "Algo no funcionó"}
    }).then(result =>{
        return result;
    }).catch(err => {
        return err;
    })
}


export function  obtenerReporteUsuario(){}
