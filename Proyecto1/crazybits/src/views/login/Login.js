import React, {useState,useEffect} from 'react';
import { Form, Button, Spinner } from "react-bootstrap"
import { toast  } from "react-toastify"
import { values, size } from "lodash";
import {isEmailValid} from "../../utils/validations"
import { signInApi } from "../../api/auth"
import {useHistory} from "react-router-dom"
import LogoCDMX from "../../img/CDMX.png"


export default function Login(props){
    let history = useHistory()
    const {setUserUp,UserUp,setReloading,userType, setUserType} = props
    const [formData, setFormData] = useState(initialFormVale())
    const [signInLoading, setSignInLoading] = useState(false)

    useEffect(() => {
        if(UserUp !== ""){
            setReloading(true)
            if (userType === 0){
                history.push("/Reporte")
            }else if(userType === 1){
                history.push("/DashboardGestor")
            }
        }
    }, [UserUp,userType])

    const onSubmit = e =>{
        e.preventDefault();
        let validCount = 0
        values(formData).some(value => {
             value && validCount++
             return null
        })
        if (validCount !== size(formData)) {
            toast.warning("Completa todos los campos del formulario")
        }else{
            if (!isEmailValid(formData.email)) {
                toast.warning("Email invalido")
            }else if(size(formData.password) < 6){
                toast.warning("La contraseña tiene que tener al menos 6 caracteres")
            }else{
                setSignInLoading(true)  
                signInApi(formData).then(response => {
                    if(response.status === 404){
                        toast.warning(response.message)
                    }else{
                        //Si llego aqui es que estuvo bien la consulta y ya solo redirigir al dashbord
                        toast.success("Ingreso con exito")
                        setUserUp(response.Usuario.email)
                        setUserType(response.Usuario.Tipo)
                    }
                }).catch(()=>{
                    toast.error("Error en el servidor intentelo mas tarde")
                }).finally(()=>{
                    setSignInLoading(false)
                })
            }
        }
    }
    
    const onChange = e =>{
        setFormData({
            ...formData,
            [e.target.name]:e.target.value
        });
    };
    return (
        <div className="container mb-5 pb-5 bg-light">
            
            <div className="my-5 py-5 text-center">
                <img className="d-block mx-auto" src={LogoCDMX} alt="CDMX" width="25%"/>
                <h1 className="my-1 py-1 h1">Reporte de baches</h1>
                <p className="lead text-center">La Ciudad de México  ha sufrido un deterioro en sus
                vialidades a lo largo de los años, afectando a automovilistas, ciclistas e incluso peatones,
                causando daños materielas y personales, en ocasiones de gravedad. Por eso se creo este sistema
                que tiene la finalidad de atender los reportes realizados por la ciudadanía en la red vial primaria.
                Inicia sesión y comienza a reportar los baches de la ciudad, de no contar con una cuenta favor de registrarse.
                </p>
            </div>
            
            <Form className="form-signin center" onChange={onChange} onSubmit={onSubmit}>
            <Form.Group>
                    <Form.Control type="email"  name="email" placeholder="Correo electrónico" defaultValue={formData.email}/>
                </Form.Group>
                <Form.Group>
                    <Form.Control type="password" name="password" placeholder="Contraseña" defaultValue={formData.password}/>
                </Form.Group>
                <Button className="btn-block m-1 mt-4" variant="primary" type="submit">
                    {!signInLoading ? "Iniciar sesión": <Spinner animation ="border"/>}
                </Button>
            </Form>
        </div>
    );
}

function initialFormVale(){
    return {
        email:"",
        password:""
    }
}

