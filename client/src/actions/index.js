import { SET_ACTIVE_USER_ID, ADD_TODO} from "../constants/action-types";

export function addToDo(title) {
    return {
        type: ADD_TODO,
        toDoItem: {
            _id: (new Date().getTime()),
            title
        }
    };
}

export const setActiveUserId = id => ({
    type: SET_ACTIVE_USER_ID,
    payload: id
});