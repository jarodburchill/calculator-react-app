import React from 'react';
import Button from "./Button/Button";

const App = () => {
  const data = require('../buttons.json');
  const buttons = data.buttons;

  const renderNewLine = (newLine) => {
    if (newLine) {
      return (
        <br />
      );
    }
  }

  return (
    <>
      <input />
      <br />
      {buttons.map((item, index) => {
        return (
          <span key={index}>
            <Button
              symbol={item.symbol}
            />
            {renderNewLine(item.newLine)}
          </span>
        );
      })}
    </>
  );
}

export default App;
