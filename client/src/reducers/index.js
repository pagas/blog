import {combineReducers} from 'redux';
import toDoApp from './toDoApp';
import contacts from './contacts';
import user from './user';
import activeUserId from './activeUserId';
import messages from './messages';

const reducer = combineReducers({
    toDoList: toDoApp,
    contacts,
    user,
    activeUserId,
    messages
});

export default reducer;