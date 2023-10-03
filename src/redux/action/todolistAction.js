import { ADD_TODOLIST, DELETE_TODOLIST } from "../type/todolistType"

export const addTodolist = (payload) => {
    return {
        type : ADD_TODOLIST,
        payload : payload
    }
}

export const deleteTodolist = (index) => {
    return {
        type : DELETE_TODOLIST,
        index : index
    }
}