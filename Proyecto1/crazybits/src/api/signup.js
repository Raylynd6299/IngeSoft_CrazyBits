import {API_HOST} from "../utils/constant";

export function signUpApi(user,userInfoExtra){
    const url = `${API_HOST}/AltaUsuario`;
    const userTemp = {
        ...user,
        email:user.email.toLowerCase(),
        ...userInfoExtra
    }
    delete userTemp.repeatPassword;
    const params = {
        method:"POST",
        headers: {
            "Content-Type": "application/json"
        },
        body:JSON.stringify(userTemp)
    }
    return fetch(url,params).then(response => {
        if(response.status >= 200 && response.status < 300){
            return response.json();
        }
        return {code: 404,message: "Email no disponible"}
    }).then(result =>{
        return result;
    }).catch(err => {
        return err;
    })
}