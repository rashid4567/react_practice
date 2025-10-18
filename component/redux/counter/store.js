import { configureStore } from "@reduxjs/toolkit";
import countReducer from "./couterSlice"
const Store = configureStore({
    reducer : {
        count : countReducer,
    }
})

export default Store;