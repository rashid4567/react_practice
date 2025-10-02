import { createSlice } from "@reduxjs/toolkit";

const TodoSlice = createSlice({
    name : "todo",
    initialState : [],
    reducers : {
        addTodo : (state,action) =>{
            state.push({
                id : Date.now(),
                text : action.payload
            })
        },
        deleteTodo : (state,action) =>{
            return state.filter((t)=> t.id !== action.payload);
        }
    }
})


export const {addTodo, deleteTodo} = TodoSlice.actions;
export default TodoSlice.reducer;