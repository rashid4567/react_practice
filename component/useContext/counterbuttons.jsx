import React, { useContext } from "react";
import { Countercontext } from "./counterContex";

const CounterButton = () =>{
  const {increment,decrement,reset} = useContext(Countercontext);
  return(
    <div>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default CounterButton;