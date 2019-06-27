import React from 'react';
import Controls from './Controls/Controls';
import Input from './Input/Input';
import styles from './Calculator.module.scss'

const Calculator = () => {
  return (
    <div className={styles.container}>
      <Input />
      <Controls />
    </div>
  );
}

export default Calculator;