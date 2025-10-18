import {createSlice} from "@reduxjs/toolkit"

const CounterSlice = createSlice({
    name : "count",
    initialState : {value : 0},
    reducers : {
        INCREMENT : (state) =>{
            state.value += 1
        },
        DECREMENT : (state) =>{
            state.value -=1
        },
        RESET : (state) =>{
            state.value = 0
        }
    }
})

export const {INCREMENT,DECREMENT,RESET} =CounterSlice.actions;
export default CounterSlice.reducer;