import React from "react";

const Child = ({onSend}) =>{
    const data = "Hello from the child";
    return(
        <button onClick={()=> onSend(data)}>Message from (child)</button>
    )
}

export default Child;