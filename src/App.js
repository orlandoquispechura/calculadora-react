import "./App.css";
import Boton from "./componentes/Boton.js";
import BotonLimpiar from "./componentes/BotonLimpiar";
import Pantalla from "./componentes/Pantalla";
import { useState } from "react";
import { evaluate } from "mathjs";

function App() {
  const [input, setInput] = useState("");

  const agregarInput = (valor) => {
    setInput(input + valor);
  };
  const calcular = () => {    
    if (input) {
      setInput(evaluate(input));
    } else {
      alert("Por favor ingrese números para calcular!");
    }
  };

  return (
    <div className="App">
      <h1 className="titulo-calculadora">App Calculadora</h1>
      <div className="contenedor-calculadora">
        <Pantalla input={input} />
        <div className="fila">
          <Boton manejarClick={agregarInput}>1</Boton>
          <Boton manejarClick={agregarInput}>2</Boton>
          <Boton manejarClick={agregarInput}>3</Boton>
          <Boton manejarClick={agregarInput}>+</Boton>
        </div>
        <div className="fila">
          <Boton manejarClick={agregarInput}>4</Boton>
          <Boton manejarClick={agregarInput}>5</Boton>
          <Boton manejarClick={agregarInput}>6</Boton>
          <Boton manejarClick={agregarInput}>-</Boton>
        </div>
        <div className="fila">
          <Boton manejarClick={agregarInput}>7</Boton>
          <Boton manejarClick={agregarInput}>8</Boton>
          <Boton manejarClick={agregarInput}>9</Boton>
          <Boton manejarClick={agregarInput}>/</Boton>
        </div>
        <div className="fila">
          <Boton manejarClick={calcular}>=</Boton>
          <Boton manejarClick={agregarInput}>0</Boton>
          <Boton manejarClick={agregarInput}>.</Boton>
          <Boton manejarClick={agregarInput}>x</Boton>
        </div>
        <div className="fila">
          <BotonLimpiar manejarClear={() => setInput("")}>Borrar</BotonLimpiar>
        </div>
      </div>
    </div>
  );
}

export default App;
