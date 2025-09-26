import React, { useEffect, useState } from "react";
import "./App.css";

const App = () =>{
    const [data, setData] = useState(null);
    useEffect(()=>{
        const FetchData = async () =>{
            try{
                const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
            const result = await response.json();
            setData(result)
            }catch(err){
                console.error("error in fetching data",err)
            }
        }
        FetchData()
    },[])

    return(
        <div>
            <h3>Async function</h3>
            {data ? JSON.stringify(data,null,2) : "Loading..."}
        </div>
    )
}
export default App;