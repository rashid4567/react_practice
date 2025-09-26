import React,{useState} from "react";
import "./App.css";

function Todo(){
  const [task,setTask] = useState("");
  const [show,setShow] = useState([]);

  const handleSubmit = (e) =>{
    e.preventDefault();
  if(task.trim() !== ""){
      setShow([...show,task])
    setTask("")
  }
  }
  const handleDelete = (t) =>{
   const confirmation = window.confirm("Are you sure you want to delete ? ")
   if(confirmation){
     setShow(show.filter((i)=> i !== t))
   }
  }
  return(
    <div>
      <h5>Todo App</h5>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter something..." onChange={(e)=> setTask(e.target.value)}/>
        <button type="submit">Add</button>
      </form>
        <ul>
          {show.map((item,index)=>(
            <li key={index}>{item} {"  "} 
            <button onClick={()=> handleDelete(item)}>Delete</button>
            </li>
          ))}
        </ul>
    </div>
  )
}

export default Todo;