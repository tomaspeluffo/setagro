import React, {Fragment} from 'react'

const Imagen = ({src}) => {

    let imgStyles={
        width: 100+"%",
        height : "auto",
    }

    return ( 
        <Fragment>
            <img src={src} alt="image-galeria" style={imgStyles}/>

        </Fragment>
     );
}
 
export default Imagen;