import {combineReducers} from 'redux';
import toDoApp from './toDoApp';
import contacts from './contacts';
import user from './user';

const reducer = combineReducers({
    toDoList: toDoApp,
    contacts,
    user
});

export default reducer;