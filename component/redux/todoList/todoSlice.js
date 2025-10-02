import { createSlice } from "@reduxjs/toolkit";

const TodoSlice = createSlice({
    name : "todo",
    initialState : [],
    reducers : {
        ADDtodo : (state,action) =>{
            state.push({id : Date.now(), text : action.payload})
        },
        DeleteTodo : (state,action)=>{
            return state.filter((t) => t.id !== action.payload)
        } 
    }
})

export const {ADDtodo, DeleteTodo} = TodoSlice.actions;
export default TodoSlice.reducer;