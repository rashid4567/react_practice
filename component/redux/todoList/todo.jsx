import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { ADDtodo, DeleteTodo } from "./todoSlice";

const Todo = () =>{
    const [input,setInput] = useState("");
    const todos = useSelector((state)=> state.todo);
    const dispatch = useDispatch();
        const handleInput = () =>{
            if(input.trim() !== ""){
                dispatch(ADDtodo(input))
                setInput("")
            }
        }
    return(
        <div>
            <h4>Todo list</h4>
            <input type="text" value={input} placeholder="Enter task" onChange={(e)=> setInput(e.target.value)}/>
            <button onClick={handleInput}>ADD</button>
            <ul>
                {todos.map((todo)=>(
                    <li key={todo.id}>
                        {todo.text}
                        <button onClick={()=> dispatch(DeleteTodo(todo.id))}>X</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Todo;