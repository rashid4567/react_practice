import React,{useState,useEffect} from "react";
import "./App.css"

function Square(){
  const [number,setNumber] = useState(0);
  const [square, setSquare] = useState(0);

  useEffect(()=>{
    setSquare(number * number);
    console.log(`the square of the value you entered ${number * number}`)
  },[number])

  return(
    <div>
      <h1>square calculator</h1>
      <input type="number" value={number} placeholder="Enter the number..." onChange={(e)=> setNumber(e.target.value)}/>
      <h2>{square}</h2>
    </div>
  )
}

export default Square;