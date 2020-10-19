import React from 'react';
import './bg.css';


export default function Home(){
    return (
        <main role="main" class="mt-5 pt-5 bg">
            <div className="container my-5 py-5 mx-auto h-100">
            <div class="row my-5 py-5 h-100 align-items-center justify-content-center text-center texts">
                    <div class="col-lg-10 align-self-end">
                        <h1 class="text-uppercase text-white font-weight-bold">Sistema de gestion de reportes de baches</h1>
                        <hr class="divider my-4"/>
                    </div>
                    <div class="col-lg-8 align-self-baseline">
                        <h3 class="text-white font-weight-light mb-5">Para ayudar al gobierno de la ciudad de México a recibir 
                        reportes de los baches que hay en la ciudad, ponemos a su disposición este servicio web 
                        para las personas que requieran reportar los baches.</h3>
                    </div>
                </div>
            </div>
        </main>
    )
}
