import {combineReducers} from 'redux';
import toDoApp from './toDoApp';

const reducer = combineReducers({
        toDoList: toDoApp
});

export default reducer;