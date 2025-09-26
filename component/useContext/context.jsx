import React, { createContext, useContext } from "react";

export const ThemeContext = createContext();

const Child = () =>{
    const {color,setColor} = useContext(ThemeContext);

    return(
        <div>
             <h3 style={{color : color === 'light' ? 'orange' : 'green', backgroundColor : color === 'light' ? 'red' : "blue"}}>current theme {color}</h3>
        <button onClick={()=> setColor(color === 'light' ? "dark" : 'light')}>from Child</button>
        </div>
    )
}

export default Child;