import React,{useState,useEffect,useRef} from "react";
import "./App.css"

function Previouse(){
  const [count,setCount] = useState(0);
  const countRef = useRef(null);
  
  useEffect(()=>{
    countRef.current = count
  },[count])

  return(
    <div>
      <h2>current Count : {count} previouse count : {countRef.current}</h2>
      <button onClick={()=> setCount(count + 1)}>Increment</button>
    </div>
  )
}

export default Previouse;