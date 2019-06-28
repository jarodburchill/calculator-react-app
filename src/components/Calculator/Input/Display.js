import React from 'react';
import styles from './Display.module.scss'

const Display = (props) => {
  return (
    <input
      type="number"
      value={props.displayValue}
      className={styles.input}
    />
  );
}

export default Display;