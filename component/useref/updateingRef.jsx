import React, { useRef } from "react";

function Counter() {
  const countRef = useRef(0);

  const increment = () => {
    countRef.current += 1; 
    console.log("Ref count:", countRef.current); 
  };

  return (
    <div>
      <button onClick={increment}>Increment Ref</button>
      <p>Open console to see the ref value.</p>
    </div>
  );
}

export default Counter;
