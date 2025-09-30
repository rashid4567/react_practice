import { configureStore } from "@reduxjs/toolkit";
import  userReducer  from "./userSlice";

const Store = configureStore({
    reducer : {
        users : userReducer,
    }
})


export default Store;