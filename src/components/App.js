import React from 'react';
import Calculator from './Calculator/Calculator';
import styles from './App.module.scss';

const App = () => {
  return (
    <div className={styles.container}>
      <Calculator />
    </div>
  );
}

export default App;
