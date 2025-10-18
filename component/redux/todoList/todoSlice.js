import { createSlice } from "@reduxjs/toolkit";


const TodoSlice = createSlice({
    name : "todo",
    initialState : [],
    reducers : {
        ADDTODO : (state,action) =>{
            state.push({id : Date.now,text : action.payload})
        },
        REMOVETODO : (state,action) =>{
            return state.filter((t)=> t.id !== action.payload)
        }
    }
})

export const {ADDTODO,REMOVETODO} = TodoSlice.actions;
export default TodoSlice.reducer;