import { ADD_TODO } from '../actions';

export default function toDoApp(state = [], action) {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                action.toDoItem
            ];
        default:
            return state;
    }
}