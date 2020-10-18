import {API_HOST} from "../utils/constant";

export function signInApi(user){
    const data = {
        ...user,
        email:user.email.toLowerCase()
    }

    const url = `${API_HOST}/ObtenerUsuario?email=${data.email}&Password=${data.password}`;
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