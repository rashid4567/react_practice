import React, { createContext, useState } from "react";

export const Countercontext = createContext();
const CounterProvider = (({children})=>{
    const [count,setCount] = useState(0);
    const increment = () =>{
        setCount((prev) => prev + 1)
    }
    const decrement = () =>{
        setCount((prev)=> Math.max(prev -1 , 0))
    }
    const reset = () =>{
        setCount(0)
    }

    return(
        <Countercontext.Provider value={{count,increment,decrement,reset}}>
            {children}
        </Countercontext.Provider>
    )
})

export default CounterProvider;