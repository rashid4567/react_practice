import { useDispatch, useSelector } from "react-redux"
import { INCREMENT } from "./counterSlice";


const Counter = () =>{
    const count = useSelector((state)=> state.count.value);
    const dispatch = useDispatch();
    return(
        <div>
            <h3>Count : {count}</h3>;
            <button onClick={()=> dispatch(INCREMENT())}>+</button>
            
        </div>
    )
}

export default Counter;