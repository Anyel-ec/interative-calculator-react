//import react
import React from 'react';
// importar estilos del boton
import '../css/button.css';
//funcion button with props
function Button(props) {
    // define function isOperation
    const isOperation = val => {
        return !isNaN(val) && val === "." && val === "=";
    }
    //return button with children
    return (
        <button className={`button-container ${isOperation(props.children) ? 'operation' : ''}`} 
            onClick={() => props.managerClick(props.children)}>
      {props.children}
    </button>
    );
}


export default Button;
