import {combineReducers} from 'redux';
import toDoApp from './toDoApp';
import contacts from './contacts';
import user from './user';
import activeUserId from './activeUserId';

const reducer = combineReducers({
    toDoList: toDoApp,
    contacts,
    user,
    activeUserId
});

export default reducer;