import React, { useState } from "react";
import "./Semaphore.css";

export function Semaphore() {
  const [traffic, setTraffic] = useState("");
  const [colors, setColors] = useState("");
  const [handleButton, setHandleButton] = useState(0);

  function handleSemaphore(event) {
    setHandleButton(handleButton + 1);
    if (handleButton === 2) {
      setHandleButton(0);
    }
    const instructions = {
      0: "Pare",
      1: "Atenção",
    };
    function handleRender(index) {
      setTraffic(instructions[index]);
      return semaphoreColors(instructions[index]);
    }
    return handleRender(event);
  }

  function semaphoreColors(color) {
    const instructions = {
      Pare: "#ff0000",
      Atenção: "#ffff00",
    };
    function handleColors(colors) {
      return instructions[colors] && setColors(instructions[colors]);
    }
    return handleColors(color);
  }

  return (
    <div className="container">
      <div className="body">
        <div className="traffic">
          <span> {!!traffic ? traffic : "Siga"} </span>
          <div
            style={{
              backgroundColor: traffic ? colors : "#008000",
              height: 20,
              width: 20,
              borderRadius: 10,
            }}
          />
        </div>
        <button onClick={() => handleSemaphore(handleButton)}>
          Me pressione
        </button>
      </div>
    </div>
  );
}
