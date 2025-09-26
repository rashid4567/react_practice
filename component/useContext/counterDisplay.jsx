import React, { useContext } from "react";
import { Countercontext } from "./counterContex";

const CounterDisplay = () =>{
    const {count} = useContext(Countercontext);
    return(
        <div>
            <h3>count : {count}</h3>
        </div>
    )
}

export default CounterDisplay;