//import react 
import React from 'react';
import '../css/ButtonClear.css';
// function buttonClear with props
function ButtonClear(props) {
    // return button with children
    return (
        <button className="button-clear" onClick={props.managerClick}>
            {props.children}
        </button>
    );
}
// export component
export default ButtonClear;