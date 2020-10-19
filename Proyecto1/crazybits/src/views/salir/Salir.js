import React, {useEffect} from 'react';
import {SalirUsuario} from "../../api/user"
import { toast  } from "react-toastify"
import {useHistory} from "react-router-dom"


export default function Salir(props){
    let history = useHistory()
    const {setUserUp,setReloading} = props
    useEffect(() => {
        SalirUsuario().then(response => {
            if(response.status === 404){
                toast.warning(response.message)
            }
        }).catch(()=>{
            toast.error("Error en el servidor intentelo mas tarde")
        }).finally(()=>{
            setUserUp("")
            setReloading(true)
            history.push("/")
        })
    }, [])
    return (<>
            </>
    )
}