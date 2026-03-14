import React, { useState } from "react";
import "./App.css";

const COLORS = ["pink", "green", "blue", "yellow", "purple"];

function Color() {
  const [backgroundColor, setBackgroundColor] = useState(COLORS[0]);
  const [changeCount, setChangeCount] = useState(0);

  const onButtonClick = (color) => () => {
    setBackgroundColor(color);
    setChangeCount(changeCount + 1);
  };

  return (
    <div
      className="App"
      style={{
        backgroundColor,
      }}
    >
      {COLORS.map((color) => (
        <button
          type="button"
          key={color}
          onClick={onButtonClick(color)}
          className={backgroundColor === color ? "selected" : ""}
        >
          {color}
        </button>
      
      ))}
        <p>Background color changed {changeCount} times</p>
    </div>
  );
}

export default Color;
