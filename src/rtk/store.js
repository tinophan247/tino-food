import { configureStore } from "@reduxjs/toolkit";
import todolistReducer from "./slices/todolistSlice";
import authReducer from "./slices/authSlice";
import cartReducer from "./slices/cartSlice";

export const store = configureStore({
    reducer : {
        todolist : todolistReducer,
        auth : authReducer,
        cart : cartReducer
    }
})