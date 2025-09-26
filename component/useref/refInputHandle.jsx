import React, { useRef } from "react";
import "./App.css"

function App() {
  const inputRef = useRef(null);

  const handleClick = () => {
    console.log("Input value:", inputRef.current.value); 
    alert(`You typed: ${inputRef.current.value}`);
  };

  return (
    <div className="first">
      <input  type="text" ref={inputRef} placeholder="Type something..." />
      <button onClick={handleClick}>Show Value</button>
    </div>
  );
}

export default App;
