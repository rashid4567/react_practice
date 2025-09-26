import React,{useState,useEffect} from "react";

function App(){
  const [count,setCount] = useState(0);

  useEffect(()=>{
    console.log('ComponentDidMount - runs once mounted')

    fetch("url")
    .then((res)=> res.json())
    .then((data)=> console.log("fetched data :",data))


    return() => console.log("Compponent will mount")
  },[])
  
  useEffect(()=>{
    console.log("component did update")
  },[count])

  return(
    <div>
      <h1>Count : {count}</h1>
      <button onClick={()=> setCount(count + 1)}>Increment</button>
      <button onClick={()=> setCount(Math.max(count+1,0))}>Decrement</button>
      <button onClick={()=> setCount(0)}>RESET</button>
    </div>
  )
}

export default App;