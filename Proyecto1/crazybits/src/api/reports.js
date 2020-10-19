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

export function generarReporte(reporte,extra){
    var hoy = new Date();
    var yyyy = hoy.getFullYear();
    var mm = hoy.getMonth() +1;
    var dd = hoy.getDate();
    if(dd<10) {
        dd='0'+dd;
    } 
     
    if(mm<10) {
        mm='0'+mm;
    }

    const url = `${API_HOST}/AltaReporte`
    const reportTemp = {
        ...reporte,
        ...extra,
        status:0,
        fecha:yyyy+"-"+mm+"-"+dd,
        numero:parseInt(reporte.numero)
    }
    const params = {
        method:"POST",
        headers: {
            "Content-Type": "application/json"
        },
        body:JSON.stringify(reportTemp)
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

