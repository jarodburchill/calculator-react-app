import React, { useEffect } from 'react';
import styles from './Button.module.scss';

const Button = (props) => {
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
    if (props.formula !== "") {
      props.setDisplayValue(eval(props.formula));
    }
  }, [props.formula]);

  const onButtonClick = e => {
    switch (props.symbol) {
      case "=":
        props.setFormula(props.displayValue);
        break;
      case "C":
        props.setDisplayValue("0");
        break;
      case "÷":
      case "×":
      case "-":
      case "+":
        props.setDisplayValue(props.displayValue + props.symbol);
        break;
      case ".":
        if (!props.displayValue.includes(".")) {
          props.setDisplayValue(props.displayValue + props.symbol);
        }
        break;
      default:
        if (props.displayValue === "0") {
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