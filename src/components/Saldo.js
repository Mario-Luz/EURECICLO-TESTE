import React from "react";
import "./Saldo.css"

const Saldo = ({ saldo, entrada }) => {
  console.log("props:", saldo);
  return (
    <div>
      <h1 className="titles">Sobra = {saldo}</h1>
      <h1 className="titles">Garrafas = {entrada}</h1>
    </div>
  );
};

export default Saldo;
