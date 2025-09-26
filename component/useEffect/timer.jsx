import React,{useState,useEffect} from "react";
import "./App.css";

function Timer(){
  const [timmer,setTimmer] = useState(0);
  const [isRunning,setIsRunning] = useState(false);
  useEffect(()=>{
    let interval;
   if(isRunning){
    interval = setInterval(()=>{
      setTimmer((prev)=> prev + 1)
    },1000)
   }
   return()=> clearInterval(interval)
  },[isRunning])
  return(
    <div>
      <button onClick={()=> setIsRunning(true)}>START</button> {"  "}
      <button onClick={()=> setIsRunning(false)}>PAUSE</button> {"  "}
      <button onClick = {()=> setTimmer(0)}>CLEAR</button>
      <h2>Timer : {timmer}</h2>
    </div>
  )
}

export default Timer;