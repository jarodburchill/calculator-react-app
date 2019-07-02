import React from 'react';
import styles from './Display.module.scss'

const Display = (props) => {
  return (
    <div className={styles.container}>
      <input
        value={props.formula}
        readOnly={true}
        className={styles.formula}
      />
      <input
        value={props.displayValue}
        readOnly={true}
        className={styles.display}
      />
    </div>
  );
}

export default Display;