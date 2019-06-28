import React, { useState, useEffect } from 'react';
import styles from './Button.module.scss';

const Button = (props) => {
  const [calculate, setCalculate] = useState(false);

  const getButtonStyle = () => {
    switch (props.symbol) {
      case "C":
        return styles.clearButton;
      case "÷":
      case "×":
      case "-":
      case "+":
      case "=":
        return styles.operatorButton;
      case "0":
        return styles.zeroButton;
      default:
        return styles.defaultButton;
    }
  }

  useEffect(() => {
    if (calculate) {
      props.setDisplayValue(eval(props.formula));
      props.setFormula(props.formula + props.symbol);
      setCalculate(false);
    }
  }, [props.formula]);

  const onButtonClick = e => {
    switch (props.symbol) {
      case "=":
        if (!props.formula.includes("=")) {
          setCalculate(true);
          props.setFormula(props.formula + props.displayValue);
        }
        break;
      case "C":
        props.setDisplayValue("0");
        props.setFormula("");
        break;
      case "÷":
      case "×":
      case "-":
      case "+":
        if (props.formula.includes("=")) {
          props.setFormula(props.displayValue + props.operator);
          props.setDisplayValue("0");
        }
        else {
          props.setFormula(props.formula + props.displayValue + props.operator);
          props.setDisplayValue("0");
        }
        break;
      case ".":
        if (props.formula.includes("=")) {
          props.setFormula("");
          props.setDisplayValue("0" + props.symbol);
        }
        else if (!props.displayValue.includes(".")) {
          props.setDisplayValue(props.displayValue + props.symbol);
        }
        break;
      default:
        if (props.formula.includes("=")) {
          props.setFormula("");
          props.setDisplayValue(props.symbol);
        }
        else if (props.displayValue === "0") {
          props.setDisplayValue(props.symbol);
        }
        else {
          props.setDisplayValue(props.displayValue + props.symbol);
        }
        break;
    }
  }

  return (
    <button onClick={onButtonClick} className={getButtonStyle()}>
      {props.symbol}
    </button>
  );
}

export default Button;