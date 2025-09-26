import React,{useState} from "react";
import "./App.css";

function App(){
   const users = ["Rashid", "Ayesha", "John", "Ali", "Sara"];
   const [search,setSearches] = useState("");

  const searchUser = users.filter((u)=>
    u.toLowerCase().includes(search.toLowerCase())
  )
   return(
    <div>
      <h5>Search user</h5>
      <input type="text" value={search} placeholder="Search user..." onChange={(e)=> setSearches(e.target.value)}/>
      <ul>
        {searchUser.map((u,i)=>(
            <li key={i}>{u}</li>
        ))}
      </ul>
    </div>
   )
}

export default App;