import React from 'react';
import styles from './Display.module.scss'

const Display = (props) => {
  return (
    <>
      <input
        value={props.formula}
        className={styles.formula}
      />
      <input
        value={props.displayValue}
        className={styles.display}
      />
    </>
  );
}

export default Display;