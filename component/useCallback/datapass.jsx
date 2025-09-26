import React from "react";

function Child({ sendData }) {
  const handleClick = () => {
    sendData("Hello Parent! This is from Child.");
  };

  return (
    <div>
      <h2>Child Component</h2>
      <button onClick={handleClick}>Send Data to Parent</button>
    </div>
  );
}

export default Child;
