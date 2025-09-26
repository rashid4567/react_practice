import React, { useRef } from "react";
import './App.css';

const App = () =>{
    const inputRef = useRef();
    const changes = () =>{
        if(inputRef.current.style.color === "red"){
            inputRef.current.style.color = "green"
        }else{
            inputRef.current.style.color = "red"
        }
    }
    return(
        <div>
            <h2 ref={inputRef}>Hello</h2>
            <button onClick={changes}>change</button>
        </div>
    )
}

export default App;