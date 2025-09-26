import React, {  useReducer, useState } from "react";
import "./App.css"
const initialState = {result : 0};
const  Reducer = (state,action) =>{
    switch(action.type){
        case "ADD" :
            return {result : state.result + action.payload}
            case 'SUB' :
                return {result : state.result - action.payload}
                case 'MUL':
                return {result : state.result * action.payload}
                case 'DIV':
                    return {result : state.result / action.payload}
                    case 'CLEAR':
                        return {result : 0}
                        default :
                        return state;
    }
}

const App = () =>{
    const [state,dispatch] = useReducer(Reducer,initialState);
    const [input,setInput] = useState("");
    const value = Number(input)
    return(
        <div>
            <h2>Calculator</h2>
            <h3>{state.result}</h3>
            
            <input type="number" value={input} placeholder="Enter the number" onChange={(e)=> setInput(e.target.value)}/>
            <button onClick={()=> dispatch({type: "ADD" , payload : value})}>+</button>
            <button onClick={()=> dispatch({type: "SUB" , payload : value})}>-</button>
            <button onClick={()=> dispatch({type: "MUL" , payload : value})}>X</button>
            <button onClick={()=> dispatch({type: "DIV" , payload : value})}>/</button>
            <button onClick={()=> dispatch({type: "CLEAR"})}>CLEAR</button>
        </div>
    )
}

export default App;