import { configureStore } from "@reduxjs/toolkit";
import TodoReducer from "./todoSlice"
const Store = configureStore({
    reducer : {
        todo : TodoReducer,
    }
})

export default Store;