import React from 'react';
import Button from './Button/Button';
import styles from './Controls.module.scss';

const Controls = () => {
  const data = require('../../../buttons.json');
  const buttons = data.buttons;

  const renderNewLine = (newLine) => {
    if (newLine) {
      return (
        <br />
      );
    }
  }

  return (
    <div>
      {buttons.map((item, index) => {
        return (
          <span key={index}>
            {renderNewLine(item.newLine)}
            <Button
              symbol={item.symbol}
            />
          </span>
        );
      })}
    </div>
  );
}

export default Controls;