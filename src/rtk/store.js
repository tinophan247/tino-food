import { configureStore } from "@reduxjs/toolkit";
import todolistReducer from "./slices/todolistSlice";

export const store = configureStore({
    reducer : {
        todolist : todolistReducer,
    }
})