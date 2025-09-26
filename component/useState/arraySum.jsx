import React,{useState,useEffect} from "react";
import "./App.css";

function Sum(){
  const [item,setItems ] = useState([0])
  const [sum,setSum] = useState(0)

  useEffect(()=>{
    setSum(item.reduce((a,b)=> a + b, 0))
  },[item])



  return(
    <div>
      <h1>Array Sum</h1>
      <p>number : {item.join(",")}</p>
      <p>Sum: {sum}</p>
      <button onClick={()=> setItems([...item, Math.floor(Math.random() * 10)])}>Add random numbers</button>
     
    </div>
  )
}

export default Sum;