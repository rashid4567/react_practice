import { useRef } from "react"
import "./App.css"
const App = () =>{
    const inputRef = useRef(null);
    const submit = () =>{
        inputRef.current.focus();
        alert(`You are entered ${inputRef.current.value}`)
    }
    return(
        <div>
            <input type="text" ref={inputRef} placeholder="Enter something..."/>
            <button onClick={submit}>submit</button>
        </div>
    )
}

export default App;