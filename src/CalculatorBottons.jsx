import { evaluate } from "mathjs";
import React, { useState } from "react";

export function CalculatorBotton(props) {
  return (
    <button
      className="button-1"
      onClick={() => props.showInputBotton(props.children)}
    >
      {props.children}
    </button>
  );
}

export function CalculatorOperator(props) {
  return (
    <button
      className="operator-button"
      onClick={() => props.showInputOperator(props.children)}
    >
      {props.children}
    </button>
  );
}

export function ButtonDelete(props) {
  return (
    <button className="button-2-delete" onClick={props.deleteInput}>
      C
    </button>
  );
}

export function CalculatorPantalla({ num }) {
  return (
    <div className="calculator-text">
      <span>{num}</span>
    </div>
  );
}


