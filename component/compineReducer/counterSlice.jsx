import { createSlice } from "@reduxjs/toolkit";

const counterSlcie = createSlice({
    name : 'count',
    initialState : {value : 0},
    reducers : {
        INCREMENT : (state)=>{
            state.value += 1
        },
  
    }
})


export const {INCREMENT} = counterSlcie.actions;
export default counterSlcie.reducer;