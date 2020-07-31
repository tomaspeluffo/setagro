import React, {useState, Fragment} from 'react';
import Error from './Error';

import emailjs from 'emailjs-com';


const Contacto = () => {

   
    const [ form, actualizarForm] = useState({
        nombre : "",
        email: "",
        telefono: "",
        consulta: ""
    })

    const [ error, actualizarError] = useState(false);  

    const [ mensaje, guardarMensaje] = useState("Enviar")

    const {nombre, telefono, email, consulta} = form


    // Funcion que actualiza los campos

    const actualizarState = (e) =>{
        guardarMensaje("Enviar")
        actualizarForm({
            ...form,
            [e.target.name]: e.target.value 
        })
    }

    // Validamos el Form
    const submitForm= (e) =>{
        e.preventDefault();

        // Validamos

        if(nombre.trim() === "" || email.trim() === "" || telefono.trim()=== "" || consulta.trim()===""){
            actualizarError(true)
            return
        }else{
            actualizarError(false)
            emailjs.sendForm("gmail", "setagro", e.target, "user_Uv0LXERmoqiW0HadtOWSL")
            .then((result) => {
                console.log(result.text);
                guardarMensaje("Enviado")
                actualizarForm({
                    nombre : "",
                    email: "",
                    telefono: "",
                    consulta: ""
                })
            }, (error) => {
                console.log(error.text);
                guardarMensaje("Enviar")

            });
        }
        
        

    }   


    return ( 
        <Fragment>
            <form
                onSubmit={submitForm}
                className="contactForm"
            >
                <div className="wrapper">
                    <div className="contact-form">

                        {error ? <Error /> : null}
                        <div className="input-fields">
                            <input
                                type="text"
                                placeholder="Nombre"
                                className="input"
                                name= "nombre"
                                value= {nombre}
                                onChange={actualizarState}
                                />
                            <input
                                type="text"
                                placeholder="E-mail"
                                className="input"
                                name= "email"
                                value= {email}
                                onChange={actualizarState}
                                />
                            <input 
                                type="number"
                                placeholder="Telefono"
                                className="input"
                                name= "telefono"
                                value= {telefono}
                                onChange={actualizarState}
                                />
                        </div>
                        <div className="mensaje">
                            <textarea
                                placeholder="Mensaje"
                                name= "consulta"
                                value= {consulta}
                                onChange={actualizarState}
                                
                            ></textarea>
                        <div className="btnContainer"> 
                            <button
                                type="submit"
                                className="btn"
                            >{mensaje}</button>
                        </div>

                        </div>


                    </div>

                </div>

            </form>

        </Fragment>
            
     );
}
 
export default Contacto;