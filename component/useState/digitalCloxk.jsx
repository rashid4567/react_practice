import React,{useState,useEffect} from "react";
import "./App.css";


function Clock(){
    const [time,setTime] = useState(0);
    useEffect(()=>{
      const interval = setInterval(()=>{
        setTime(new Date())
      },1000)
      return ()=> clearInterval(interval)
    },[])

    return(
      <div>
        <h3>CURRENT TIME : {time.toLocaleString()}</h3>
      </div>
    )
}
export default Clock;