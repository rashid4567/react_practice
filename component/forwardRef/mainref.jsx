import { useRef } from "react";
import Input from "./input";

const MainInput = () =>{
    const inputRef = useRef(null);

    const handleInput = () =>{
        inputRef.current.focus()
    }
    const showcase = () =>{
        console.log(inputRef.current.value);
        alert(`Your are entered ${inputRef.current.value}`)
    }
    return(
        <div>
            <h3>forward ref eg</h3>
            <Input ref={inputRef}/>
            <button onClick={handleInput}>focuse in the input</button>
            <button onClick={showcase}>click me</button>
        </div>
    )
}

export default MainInput;