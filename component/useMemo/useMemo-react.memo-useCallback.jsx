import React, { useCallback, useMemo, useState } from "react";
import "./App.css"
const Child = React.memo(({onClick})=>{
    console.log("Child component connected")
    return<button onClick={onClick}>Increment from Child</button>
})

const Find = () =>{
    const [count,setCount] = useState(0);
    const [input,setInput] = useState("");
    const handleIncrement = useCallback(()=>{
        setCount((prev)=> prev + 1)
    },[])
    const Square = useMemo(()=>{
        console.log("calculating square...")
        return count * count;
    },[count])
    return(
        <div>
            <h4>Count : {count}</h4>
            <h4>Square : {Square}</h4>
            <button onClick={handleIncrement}>Increment</button>
            <Child onClick={handleIncrement}/>
            <input type="text" value={input} placeholder="Enter something..." onChange={(e)=> setInput(e.target.value)}/>
            <h3>you enterd : {input}</h3>
        </div>
    )
}

export default Find;