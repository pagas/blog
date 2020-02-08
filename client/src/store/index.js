import { createStore} from "redux";
import reducer from "../reducers";
import { contacts } from "../commands/skypey-data-generator";
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(reducer, contacts, composeWithDevTools(
    // applyMiddleware(...middleware),
    // other store enhancers if any
));

export default store;