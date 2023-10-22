// import react
import React from 'react';
import '../css/display.css';
// define component pantalla
const Display = ({display}) => {
    // return div with children
    return (
        <div className="display">
            {display}
        </div>
    );
}
// export component
export default Display;