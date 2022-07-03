import { v4 as uuidv4 } from 'uuid';

const todoReducer = (state, action) => {
    switch (action.type) {
        case "DO_TODO":
            return state.map(todo => {
                if (todo.id === action.id) {
                    return { ...todo, complete: true };
                } else {
                    return todo;
                }
            });
        case "UNDO_TODO":
            return state.map(todo => {
                if (todo.id === action.id) {
                    return { ...todo, complete: false };
                } else {
                    return todo;
                }
            });
        case "ADD_TODO":
            let task = { id: uuidv4(), task: action.task, complete: false };
            return [...state, task];
        default:
            throw new Error();
    }
};

export default todoReducer;