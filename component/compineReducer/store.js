import { combineReducers, configureStore } from "@reduxjs/toolkit";
import counterReducer from "../compineReducer/counterSlice";
import todoReducer from "../compineReducer/todoSlice"

const rootReducer = combineReducers({
    count : counterReducer,
    todo : todoReducer,
})

const Store = configureStore({
    reducer : rootReducer,
})
export default Store;