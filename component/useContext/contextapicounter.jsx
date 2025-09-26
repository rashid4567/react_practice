import React, { createContext, useContext, useState } from "react";
import "./App.css";

const CounterContex = createContext();
const CounterProvider = ({children}) =>{
    const [counter, setCounter] = useState(0);
    const Increment = () =>{
        setCounter((prev)=> prev + 1)
    }
    const Decrement = () =>{
        setCounter((prev)=> Math.max(prev-1,0))
    }
    const Reset = () =>{
        setCounter(0)
    }
    return(
        <CounterContex.Provider value={{counter, Increment, Decrement,Reset}}>
            {children}
        </CounterContex.Provider>
    )
} 

const Counter = () =>{
    const {counter} = useContext(CounterContex);
    return(
        <div style={{padding : "20px" , height : '200px' , background : counter % 2 === 0 ? 'blue' : "green"}}>
            <h2 >count : {counter}</h2>
        </div>
    )
}

const CounterButton = () =>{
    const {Increment ,Decrement, Reset} = useContext(CounterContex);
    return(
        <div>
            <button onClick={Increment}>Increment</button>
            <button onClick={Decrement}>Decrement</button>
            <button onClick={Reset}>Reset</button>
        </div>
    )
}

const App = () =>{
    return(
        <CounterProvider>
            <Counter/>
            <CounterButton/>
        </CounterProvider>
    )
}

export default App;