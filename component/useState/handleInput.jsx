import React,{useState} from "react";

function App(){
  const [input,setInput] = useState({
    name:"",
    password : ""
  });
  const [error, setError] = useState(null)
      const handleInput = (e) =>{
          e.preventDefault();
          if(input.name === "" || input.password === ""){
            setError("Please enter all fields")
          }else if(input.name.length < 3){
            setError("The name length is want more than 3")
          }else if(input.password.length < 8){
            setError("The password is required is more than 8")
          }else{
            setError('');
            alert(`login succesfully ${input.name}`)
          }
      }
  return(
    <div style={{alignItems:"center"}}>
      <h1>User login...</h1>
      <form onSubmit={handleInput}>
        <label>Name :-</label>
        <input type="text" value={input.name} placeholder="Enter the name" onChange={(e)=> setInput((prev)=>({...prev,name : e.target.value}))}/>
        <label>Password :-</label>
        <input type="password" value={input.password} placeholder="Enter the password" onChange={(e)=> setInput((prev)=>({...prev,password:e.target.value}))}/>
        {error && <p style={{color:"red"}}>{error}</p>}
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default App;