import { ADD_TODO } from '../actions';
import * as data  from "../commands/skypey-data-generator";

export default function contacts(state = data.contacts, action) {
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