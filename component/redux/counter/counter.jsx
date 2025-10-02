import { useDispatch, useSelector } from "react-redux"
import { decrement, increment, reset } from "./couterSlice";

const Counter = () =>{
    const count = useSelector((state)=> state.count.value);
    const dispatch = useDispatch();

    return(
        <div>
            <h3>Count : {count}</h3>
            <button onClick={()=> dispatch(increment())}>Increment</button>
            <button onClick={()=> dispatch(decrement())}>Decrement</button>
            <button onClick={()=> dispatch(reset())}>Reset</button>
        </div>
    )
}

export default Counter;