import { createStore } from "redux";

const ADD_tODO = "ADD-tODO";
export const addTodoAction = (payload) => {
    return { type: ADD_tODO, payload };
};
const REMOVE_TODO = "REMOVE_TO_DO";
export const removeTodoAction = (payload) => {
    return {
        type:REMOVE_TODO,
        payload,
    };
};
const initialState = {
    todos: [],
};
const toDoReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_tODO:
            return { ...state, todos: [...state.todos, action.payload] };
        case REMOVE_TODO:
            return {
                ...state,
                todos: [
                    ...state.todos.filter((todo, i) => i !== action.payload),
                ],
            };

        default:
            return state;
    }
};
export const store = createStore(toDoReducer);
