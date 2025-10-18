import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { ADDTODO, REMOVETODO } from "./todoSlice";

const Todo = () =>{
    const [input,setInput] = useState("")
    const todos = useSelector((state)=> state.todo);
    const dispatch = useDispatch();
    const handleAdd = () =>{
        if(input.trim() !== ""){
            dispatch(ADDTODO(input))
            setInput("")
        }
    }
    return(
        <div>
            <h4>Todo list</h4>
            <input type="text" onChange={(e)=> setInput(e.target.value)}/>
            <button onClick={handleAdd}>ADD</button>

            <ul>
                {todos.map((todo)=>(
                    <li key={todo.id}>
                        {todo.text}
                        <button onClick={()=> dispatch(REMOVETODO(todo.id))}>X</button>
                    </li>
                ))}
            </ul>

        </div>
    )
}


export default Todo