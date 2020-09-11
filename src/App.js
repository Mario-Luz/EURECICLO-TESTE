import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import "./App.css";
import Saldo from "./components/Saldo";

const App = () => {
  const [entrada, setEntrada] = useState("");
  const [concatenar, setConcatenar] = useState("");
  const [saldo, setSaldo] = useState(0);

  let valoresUtilizados = [];
  let concatenarValores = "";
  let elemento = "";

  const litros = [0.4, 1, 3, 4.5, 1.5, 3.5];

  function funcionDeComparacao(elem1, elem2) {
    return elem2 - elem1;
  }
  const handleEsvaziar = (quantidade) => {
    litros.sort(funcionDeComparacao);
    litros.forEach((element) => {
      if (quantidade - element >= 0) {
        quantidade = quantidade - element;
        valoresUtilizados.push(element);
        setSaldo(quantidade);
        elemento = element;
        concatenarValores = concatenarValores + elemento + " , ";
      } else {
        setSaldo(quantidade);
      }
    });
    setConcatenar(concatenarValores);
  };
  const handleClickNovo = () => {
    setConcatenar("");
    setEntrada("");
    setSaldo(0);
  };
  const handleClickEntrada = (entrada) => {
    if (entrada <= 0) {
      return false;
    }
    handleEsvaziar(entrada);
  };
  const handleChangeInput = (event) => {
    const { value } = event.target;
    setEntrada(value);
  };
  return (
    <div className="App">
      <div className="wrapper">
      <div class="input-group input-group-lg">
      <div class="input-group-prepend">  
      <span class="input-group-text" id="inputGroup-sizing-lg">LITROS</span>
        </div>
        <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg"
          name="entrada"
          id="entrada"
          value={entrada}
          onChange={handleChangeInput}
          placeholder="DIGITE OS LITROS"
          type="number"
           />
        </div>
        
        <Button onClick={() => handleClickEntrada(entrada)}>Calcular</Button>
        <Button onClick={handleClickNovo}>Reiniciar</Button>
        <Saldo saldo={saldo} entrada={concatenar} />
      </div>
    </div>
  );
};
export default App;
