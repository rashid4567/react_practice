import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { addTodo, deleteTodo } from "./todoSlice";

const TodoList = () =>{
    const [text,setList] = useState("");
    const todos = useSelector((state)=> state.todo);
    const dispatch = useDispatch();
    const handleInput = () =>{
        if(text.trim() !== ""){
            dispatch(addTodo(text))
            setList("")
        }
    }
    return(
        <div>
           <h4>TODO LIST</h4>
           <input value={text} type="text" placeholder="Enter some thing...." onChange={(e)=> setList(e.target.value)}/> 
           <button onClick={handleInput}>ADD</button>

           <ul>
            {todos.map((todo)=>(                <li key={todo.id}>{todo.text}{" "}
                    <button onClick={()=> dispatch(deleteTodo(todo.id))}>x</button>
                </li>
            ))}
           </ul>
        </div>
    )
}

export default TodoList