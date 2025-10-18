import {useSelector, useDispatch} from "react-redux"
import { DECREMENT, INCREMENT, RESET } from "./couterSlice";

const Counter = () =>{
    const counter = useSelector((state)=> state.count.value);
    const dispatch = useDispatch();

    return(
        <div>
            <h3>count : {counter}</h3>
            <button onClick={()=> dispatch(INCREMENT())}>INCREMENT</button>
            <button onClick={()=> dispatch(DECREMENT())}>DECREMENT</button>
            <button onClick={()=> dispatch(RESET())}>RESET</button>
        </div>
    )
}

export default Counter;