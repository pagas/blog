import { ADD_TODO } from '../actions';
import * as data  from "../commands/skypey-data-generator";

export default function user(state = data.generateUser(), action) {
    return state;
}