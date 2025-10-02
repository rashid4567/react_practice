import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./couterSlice";
const Store = configureStore({
    reducer : {
        count : counterReducer,
    }
})

export default Store;