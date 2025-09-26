import React, { useRef, useState } from "react";
import "./App.css";

const App = () =>{
    const [time,setTime] = useState(0);
    const timeRef = useRef(null);
    const start = () =>{
        if(timeRef.current)return;
        timeRef.current = setInterval(()=>{
            setTime((prev)=> prev + 1)
        },1000)
    }
    const pause = () =>{
        clearInterval(timeRef.current);
        timeRef.current = null
    }
    const reset = () =>{
        clearInterval(timeRef.current);
        timeRef.current = null
        setTime(0)
    }
    return(
        <div>
            <h2>time : {time}</h2>
            <button onClick={start}>Start</button>
            <button onClick={pause}>pause</button>
            <button onClick={reset}>reset</button>
        </div>
    )
}

export default App;