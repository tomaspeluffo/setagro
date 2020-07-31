import React from 'react'

const Social = () => {
    return ( 
        <div className="icons">
            <ul>
               <a href="https://www.facebook.com/setideas/" target="_blank" rel="noopener noreferrer"><li className="facebook"><img src="../imagenes/logos/facebook2.svg" alt="logo facebook"/></li></a>
               <a href="https://www.instagram.com/set.ideas/" target="_blank" rel="noopener noreferrer"><li className="instagram"><img src="../imagenes/logos/instagram.svg" alt="logo instagram"/></li></a>
               <a href="https://api.whatsapp.com/send?phone=5493513872440" target="_blank" rel="noopener noreferrer"><li className="whatsapp"><img src="../imagenes/logos/whatsapp.svg" alt="logo whatsapp"/></li></a>
            </ul>
        </div>
    );
}
 
export default Social;