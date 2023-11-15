import React from "react";
import '../Css/BotonLimpiar.css';

function BotonLimpiar(props){
    return (
        <div className='boton-limpiar'
        onClick={ props.manejarClear}
        >
            {props.children}
        </div>
    );
}

export default BotonLimpiar;