import { createSlice } from "@reduxjs/toolkit";

const initialState = ["Quét nhà"];

const todolistSlice = createSlice({
    name : 'todolist',
    initialState : {
        todolist : initialState
    },
    reducers: {
        addTodolist : (state,action) => {
            let updateState = [...state.todolist];
            updateState.push(action.payload);
            state.todolist = updateState;
        },
        deleteTodolist : (state,action) => {
            const updateState = [...state.todolist];
            updateState.splice(action.payload,1);
            state.todolist = updateState;
        }
      },
});

export const todolistAction = todolistSlice.actions
export default todolistSlice.reducer