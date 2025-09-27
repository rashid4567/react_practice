import { useDispatch, useSelector } from "react-redux"
import { decrement, increment, reset } from "../component/redux/counter/store/store";
import "./App.css"
const Counter = () =>{
    const count = useSelector((state)=> state.counter.count);
    const dispatch = useDispatch();
    return(
        <div>
            <h4>Redux Counter</h4>
            <h4>counter :{count}</h4>
            <button onClick={()=> dispatch(increment())}>Increment</button>
            <button onClick={()=> dispatch(decrement())}>Increment</button>
            <button onClick={()=> dispatch(reset())}>Increment</button>
            
        </div>

    )
}

export default Counter;