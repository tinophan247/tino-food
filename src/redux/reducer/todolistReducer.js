import { ADD_TODOLIST, DELETE_TODOLIST } from "../type/todolistType";

const initialState = [];

const todolistReducer = (state = initialState, action) => {
    switch ( action.type) {
        case ADD_TODOLIST : {
            return [...state,action.payload]
        }
        case DELETE_TODOLIST : {
            const updateState = [...state];
            updateState.splice(action.index,1);
            state = updateState;
            return state;
        }
        default : 
            return state;
    }
}

export default todolistReducer;