import { createStore , applyMiddleware} from "redux";
import reducer from "../reducers";
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const middleware = [
    thunk,
];

const store = createStore(reducer, composeWithDevTools(
    applyMiddleware(...middleware)
    // applyMiddleware(...middleware),
    // other store enhancers if any
));

export default store;