import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./couterSlice"
const Store = configureStore({
    reducer : {
        Counter : counterReducer
    }
})

export default Store;