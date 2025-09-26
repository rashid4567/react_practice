import React, { useMemo, useState } from "react";
import "./App.css"
const Square = () =>{
    const [input,setInput] = useState("")
    const Square = useMemo(()=>{
        return input * input
    },[input])
    return(
        <div>
            <h3>SQUARE CALCULATOR</h3>
            <input type="number" placeholder="Enter the number" value={input} onChange={(e)=> setInput(parseInt(e.target.value))}/>
            <h4>YOU ENTERED : {input}</h4>
            <h4>THE SQUARE IS : {Square}</h4>
        </div>
    )
}

export default Square;