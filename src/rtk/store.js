import { configureStore } from "@reduxjs/toolkit";
import todolistReducer from "./slices/todolistSlice";
import authReducer from "./slices/authSlice";
import cartReducer from "./slices/cartSlice";
import productSlice from "./slices/productSlice";

export const store = configureStore({
    reducer : {
        todolist : todolistReducer,
        auth : authReducer,
        cart : cartReducer,
        product : productSlice
    }
})