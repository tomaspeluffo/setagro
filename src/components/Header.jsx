import React, {useState} from 'react'


const Header = () => {

    const[apretado, guardarApretado] = useState(false);

    const mostrarLinks = () =>{
        guardarApretado(!apretado)
    }
    const classActive = "nav-links active"
    const classDeactive = "nav-links desactive"

    const linea1 = "line1 linea1"
    const linea2 = "line2 linea2"
    const linea3 = "line3 linea3"

    return(
       <div className="noMove" id="header"> 
           <nav>
               <div className="logo">
                    <h2>Set<span>ModulosAgro</span></h2>
               </div>

               <ul className={apretado? classActive : classDeactive }>
                   <li><a href="#modulos">Conoce los modulos</a></li>
                   <li><a href="#caracteristicas">Caracteristicas</a></li>
                   <li><a href="#galeria">Galeria</a></li>
                   <li><a href="#contacto">Contacto</a></li>
                   
               </ul>
                <div className="burger" onClick={mostrarLinks}>
                    <div className={apretado? linea1 : "line1" }></div>
                    <div className={apretado? linea2 : "line2" }></div>
                    <div className={apretado? linea3 : "line3" }></div>
                </div>
           </nav>
       </div>
    )
}
 
export default Header;