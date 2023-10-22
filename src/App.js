import './App.css';
import logo from '../src/img/luffy-gear-5-colored.png'
//import button
import Button from './components/button.js'
import Display from './components/Display';
import ButtonClear from './components/ButtonClear';
import ButtonDelete from './components/ButtonDelete';
//import evalute from mathjs
import { evaluate } from 'mathjs';

//import state
import { useState } from 'react';

function App() {
  // define state

  const [display, setDisplay] = useState("");
  // define function addInput
  const addInput = val => {
    if (isOperator(val) && isOperator(display[display.length - 1])) {
      // Si el nuevo valor es un operador y el último carácter en el display también es un operador, no lo agrega.
      return;
    }
    setDisplay(display + val);
  }
  
  // Función para verificar si un valor es un operador
  const isOperator = val => {
    return ['+', '-', '*', '/'].includes(val);
  }
  

  // define function result calculation
  const result = () => {
    if (display) {
      setDisplay(evaluate(display));
    } else {
      alert("Por favor ingrese valores para realizar los cálculos.");
    }
  };



  return (
    <div className="App">

      <div className="container-calculator">
        <Display display={display} />
        <div className="row">
          <Button managerClick={addInput}>1</Button>
          <Button managerClick={addInput}>2</Button>
          <Button managerClick={addInput}>3</Button>
          <Button managerClick={addInput}>+</Button>

        </div>
        <div className="row">
          <Button managerClick={addInput}>4</Button>
          <Button managerClick={addInput}>5</Button>
          <Button managerClick={addInput}>6</Button>
          <Button managerClick={addInput}>-</Button>

        </div>
        <div className="row">
          <Button managerClick={addInput}>7</Button>
          <Button managerClick={addInput}>8</Button>
          <Button managerClick={addInput}>9</Button>
          <Button managerClick={addInput}>/</Button>

        </div>
        <div className="row">
          <Button managerClick={addInput}>*</Button>
          <Button managerClick={addInput}>0</Button>
          <Button managerClick={addInput}>.</Button>
          <Button managerClick={result}>=</Button>
        </div>
        <div className="row">
          <ButtonClear managerClick={() => setDisplay('')}>
            Clear
          </ButtonClear>
          <ButtonDelete managerClick={() => {
            if (typeof display === "string" && display.length > 0) {
              setDisplay(display.slice(0, -1));
            }
          }}>
            Delete
          </ButtonDelete>

        </div>
      </div>
    </div>
  );
}

export default App;
