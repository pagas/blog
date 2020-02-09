import { SET_ACTIVE_USER_ID, SET_TYPING_VALUE, ADD_TODO, SEND_MESSAGE} from "../constants/action-types";

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

export const setTypingValue = value => ({
    type: SET_TYPING_VALUE,
    payload: value
})

export const sendMessage = (message, userId) => ({
    type: SEND_MESSAGE,
    payload: {
        message,
        userId
    }
});