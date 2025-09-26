import React, { useCallback } from "react";
import "./App.css"

const CallbackList = () =>{
    const items = ["Orange", "PineApple", 'Guvua', 'Mango']
    
    const handleClick = useCallback((item)=>{
        alert("You clicked : " + item)
    },[])
    return(
        <div>
            <h3>Fruits list</h3>
            <ul>
                {items.map((item)=>(
                    <li>
                        <button onClick={()=> handleClick(item)}>{item}</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default CallbackList;