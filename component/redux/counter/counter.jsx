import { useDispatch, useSelector } from "react-redux"
import { decrement, increment, reset } from "./couterSlice";

const Counter = () =>{
    const count = useSelector((state)=> state.Counter.value);
    const dispatch = useDispatch();
    return(
        <div>
            <h3>Counter : {count}</h3>
            <button onClick={()=> dispatch(increment())}>INCREMENT</button>
            <button onClick={()=> dispatch(decrement())}>DECREMENT</button>
            <button onClick={()=> dispatch(reset())}>RESET</button>
            
        </div>
    )
}

export default Counter;