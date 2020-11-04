import {API_HOST} from "../utils/constant";

export function getUserApi(email){
    const url = `${API_HOST}/ObtenerInfoUsuario?email=${email}`;
    //Josue me di cuenta que es mejor hacer el login por Post aunque no vaya con http, por seguridad, lo cambiamos para la proxima entrega
    
    const params = {
        headers:{
            "Content-Type":"application/json",
        }
    }

    return fetch(url,params).then(response =>{
        if (response.status >= 200 && response.status < 300){
            return response.json()
        }
        return { message:"Usuario o Contraseña incorrectos"}
    }).then(result => {
        return result
    }).catch(err => {
        return err;
    })
}

export function uploadImageApi(file){
    const url = `${API_HOST}/SubirFotos`;
    const formData = new FormData();
    console.log(file.name)
    console.log(file)
    formData.append(file.name,file)
    const params = {
       method:"POST",
       headers:{
       },
       body:formData
   }

   return fetch(url,params).then(response => {
       return response;
   }).then(result => {
       return result;
   }).catch(err => {
       return err;
   });
   
}

export function ObtenerReportesUsuario(email){
    const url = `${API_HOST}/ObtenerReportesUsuario?emailUser=${email}`;

    const params = {
        headers:{
            "Content-Type":"application/json",
        }
    }

    return fetch(url,params).then(response =>{
        if (response.status >= 200 && response.status < 300){
            return response.json()
        }
        return { message:"Usuario o Contraseña incorrectos"}
    }).then(result => {
        return result
    }).catch(err => {
        return err;
    })

}
export function ObtenerReportesGestor(delegacion){
    
    const url = `${API_HOST}/ObtenerReportesDelegacion?Delegacion=${delegacion}`;

    const params = {
        headers:{
            "Content-Type":"application/json",
        }
    }

    return fetch(url,params).then(response =>{
        if (response.status >= 200 && response.status < 300){
            return response.json()
        }
        return { message:"Usuario o Contraseña incorrectos"}
    }).then(result => {
        return result
    }).catch(err => {
        return err;
    })

}

export function ObtenerReportesGestorColonia(paramsfiltro){
    const url = `${API_HOST}/ObtenerReportesDelegacionColonia?Delegacion=${paramsfiltro?.Delegacion}&colonia=${paramsfiltro?.colonia}`;
    //const url = `${API_HOST}/ObtenerReportesDelegacionColonia?Delegacion=Milpa Alta&colonia=${paramsfiltro?.colonia}`;

    const params = {
        headers:{
            "Content-Type":"application/json",
        }
    }

    return fetch(url,params).then(response =>{
        if (response.status >= 200 && response.status < 300){
            return response.json()
        }
        return { message:"error"}
    }).then(result => {
        return result
    }).catch(err => {
        return err;
    })
}

export function ObtenerReportesGestorEstatus(paramsfiltro){
    const url = `${API_HOST}/ObtenerReportesDelegacionEstatus?Delegacion=${paramsfiltro?.Delegacion}&estatus=${paramsfiltro?.estatus}`;

    const params = {
        headers:{
            "Content-Type":"application/json",
        }
    }

    return fetch(url,params).then(response =>{
        if (response.status >= 200 && response.status < 300){
            return response.json()
        }
        return { message:"error"}
    }).then(result => {
        return result
    }).catch(err => {
        return err;
    })
}

export function ObtenerReportesGestorFecha(paramsfiltro){
   
    const url = `${API_HOST}/ObtenerReportesDelegacionFecha?Delegacion=${paramsfiltro?.Delegacion}&fecha=${paramsfiltro?.fecha}`;

    const params = {
        headers:{
            "Content-Type":"application/json",
        }
    }

    return fetch(url,params).then(response =>{
        if (response.status >= 200 && response.status < 300){
            return response.json()
        }
        return { message:"error"}
    }).then(result => {
        return result
    }).catch(err => {
        return err;
    })
}

export function SalirUsuario(email){
    const url = `${API_HOST}/AdiosUsuario`;

    const params = {
        headers:{
            "Content-Type":"application/json",
        }
    }

    return fetch(url,params).then(response =>{
        if (response.status >= 200 && response.status < 300){
            return response.json()
        }
        return { message:"Usuario o Contraseña incorrectos"}
    }).then(result => {
        return result
    }).catch(err => {
        return err;
    })

}

