import React from 'react';
import '../css/ButtonDelete.css';
function ButtonDelete({ managerClick }) {
  return (
    <button className="button-delete" onClick={managerClick}>
      Delete
    </button>
  );
}

export default ButtonDelete;
