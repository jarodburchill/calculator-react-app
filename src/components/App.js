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
      <br />
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
    </>
  );
}

export default App;
