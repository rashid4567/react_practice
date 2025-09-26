import React,{useState,useEffect,useRef} from "react";
import './App.css'

function Render(){
  const [count,setCount] = useState(0);
  const RenderTimes = useRef(null);

  useEffect(()=>{
    RenderTimes.current += 1
  })

  return(
    <div>
      <h2> count : {count}</h2>
      <p>Render times is : {RenderTimes.current}</p>
      <button onClick={()=> setCount(count + 1)}>Increment</button>
    </div>
  )
}


export default Render;