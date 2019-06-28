import React, { useState } from 'react';
import Controls from './Controls/Controls';
import Display from './Display/Display';
import styles from './Calculator.module.scss'

const Calculator = () => {
  const [displayValue, setDisplayValue] = useState("0");
  const [formula, setFormula] = useState("");

  return (
    <div className={styles.container}>
      <Display displayValue={displayValue} formula={formula} />
      <Controls displayValue={displayValue} setDisplayValue={setDisplayValue} formula={formula} setFormula={setFormula} />
    </div>
  );
}

export default Calculator;