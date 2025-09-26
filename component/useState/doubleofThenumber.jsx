import React,{useEffect, useState} from "react";
import "./App.css";

function Doubles(){
  let [number,setNumber] = useState(0);
  let [double,setDouble] = useState(0);

  useEffect(()=>{
    setDouble(number * 2)
  },[number])

  return(
    <div>
      <h1>Double calculator</h1>
      <input value={number} type="number" placeholder="Enter the number..." onChange={(e)=>setNumber(e.target.value)}/>

      <h2>The double of the value is {double}</h2>
    </div>
  )
}
export default Doubles;