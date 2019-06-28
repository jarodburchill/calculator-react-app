import React, { useState } from 'react';
import Controls from './Controls/Controls';
import Input from './Input/Display';
import styles from './Calculator.module.scss'

const Calculator = () => {
  const [displayValue, setDisplayValue] = useState("0");

  return (
    <div className={styles.container}>
      <Input displayValue={displayValue} />
      <Controls displayValue={displayValue} setDisplayValue={setDisplayValue} />
    </div>
  );
}

export default Calculator;