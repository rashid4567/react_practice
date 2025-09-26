import React, { useCallback, useState } from "react";
import "./App.css";
import Child from "./child";

const App = () =>{
    const [count,setCount] = useState(0)
    const handleClick = useCallback(()=>{
        alert("Count : " + count)
    },[count])
   
    return(
        <div>
            <h3>Count : {count}</h3>
            <button onClick={()=> setCount(count + 1)}>Increase</button>
            <button onClick={()=> setCount(Math.max(count-1,0))}>Decrease</button>
            <Child onClick={handleClick}/>
        </div>
    )
}
export default App;