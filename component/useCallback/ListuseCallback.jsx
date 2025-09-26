import React from "react";

const List = React.memo(({items,AddItems})=>{
    console.log("Child connected")
    return(
        <div>
            <button onClick={AddItems}>Add</button>
            <ul>
                {items.map((item,idx)=>(
                    <li key={idx}>{item}</li>
                ))}
            </ul>
        </div>
    )
})


export default List;