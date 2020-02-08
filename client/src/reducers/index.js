import {combineReducers} from 'redux';
import toDoApp from './toDoApp';
import contacts from './contacts';

const reducer = combineReducers({
        toDoList: toDoApp,
        contacts
});

export default reducer;