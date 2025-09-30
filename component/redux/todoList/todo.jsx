import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo } from "./todoSlice";

const Todo = () =>{
    const [task,setTask] = useState('');
    const todos = useSelector((state)=> state.todo);
    const dispatch = useDispatch();

    const handleAdd = () =>{
        if(task.trim("") !== ""){
            dispatch(addTodo(task))
            setTask("")
        }
    }

    return(
        <div>
            <h4>todo list</h4>
            <input value={task} type="text" placeholder="Enter the task" onChange={(e)=> setTask(e.target.value)}/>
            <button onClick={handleAdd}>ADD</button>
            <ul>
               {todos.map((todo)=>(
                <li key={todo.id}>{todo.text}{"   "}
                <button onClick={()=> dispatch(deleteTodo(todo.id))}>X</button>
                </li>
               ))} 
            </ul>
        </div>
    )
}

export default Todo;