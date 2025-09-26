import React,{useState} from "react";

function ChildMessage({onSend}){
    const [value,setValue] = useState("");
    return(
        <div>
            <h3>Child component</h3>
            <input type="text" value={value} placeholder="Enter something..." onChange={(e)=> setValue(e.target.value)}/>
            <button onClick={()=> onSend(value)}>ADD</button>
        </div>
    )
}

export default ChildMessage;