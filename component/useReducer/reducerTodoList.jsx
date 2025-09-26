import React, { useReducer, useState } from "react";
import './App.css'
const initialState = [];

const Reducer = (state, action) =>{
    switch(action.type){
        case "add" :
            return [...state,{id: Date.now(), text : action.payload}]
            case "remove" : 
            return state.filter((todo)=> todo.id !== action.payload)
            default :
            return state
    }
}

const App = () =>{
    const [state, dispatch] = useReducer(Reducer,initialState);
    const [input,setInput] = useState("");
    const addTodo = () =>{
        if(input.trim() === ""){
            alert('Please fill thte task')
            return;
        }
        dispatch({type:"add", payload : input})
        setInput("")
    } 

    const deleteTodo = (id) =>{
        const alerts = window.confirm("Are you sure u want to delete")
       if(alerts){
         dispatch({type:'remove', payload : id})
       }
    }
    return(
        <div>
            <h3>Todo list</h3>
            <input type="text" placeholder="Enter the task" value={input} onChange={(e)=> setInput(e.target.value)}/>
            <button onClick={addTodo}>ADD</button>

            <ul>
                {state.map((todo)=>(
                    <li key={todo.id}>{todo.text}{"  "}
                    <button onClick={()=> deleteTodo(todo.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default App;