import { forwardRef } from "react";


const Input = forwardRef((props,ref)=>{
    return <input type="text" ref={ref} placeholder="Enter something..." {...props}/>
})

export default Input;