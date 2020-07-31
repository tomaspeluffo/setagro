import React, {Fragment, useState} from 'react'
import '../slider.css'
import Imagen from './Imagen'

import i01 from '../imagenes/galeria/01.jpg'
import i02 from '../imagenes/galeria/02.jpg'
import i03 from '../imagenes/galeria/03.jpg'
import i04 from '../imagenes/galeria/04.jpg'
import i05 from '../imagenes/galeria/05.jpg'


const Galeria = () => {

    let slider = [<Imagen src={i01}></Imagen>,<Imagen src={i02}></Imagen>,<Imagen src={i03}></Imagen>,<Imagen src={i04}></Imagen>,<Imagen src={i05}></Imagen>]

    const [x, setX] = useState(0)

    const goLeft = () =>{
      (x=== 0) ? setX((-100*(slider.length))+100) : setX(x+100) 
    }
      

    const goRight = () =>{

      (x=== (-100*(slider.length))+100) ? setX(0) : setX(x-100) 
    }



    return (
        <Fragment>
        {slider.map((item, index) =>{
          return(
            <div key={index} className="slide" style={{transform: `translateX(${x}%)`}}>
              {item}
            </div>
          )
               
        })} 

        <button id="goLeft" className="buttonHover" onClick={goLeft}><img src="../imagenes/logos/left.svg" alt="" style={{width:30 + "%", height: 30 + "%"}}/></button>
        <button id="goRight" className="buttonHover" onClick={goRight}><img src="../imagenes/logos/right.svg" alt="" style={{width:30 + "%", height: 30 + "%"}}/></button>

        </Fragment> 
      );
}
 



export  default Galeria;
