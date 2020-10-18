import {API_HOST} from "../utils/constant";

export function signUpApi(user){
    const url = '${API_HOST}/AltaUsuario'
    const userTem = {
        ...user,
        nombre: user.nombre,
        apellidoPaterno: ,
        apellidoMaterno: ,
        email: ,
        FeNa: ,
        Password: ,
        CURP: ,
        Tipo: ,
    }
}